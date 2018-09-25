<?php
/**
 * This file adds support for the business reviews module
 */

class EIG_Business_Reviews {

	public $slug = 'eigbr';

	public $name = 'eig-business-reviews';

	public $sites_endpoint = 'https://my.bluehost.com/siteapi/sites/';

	public $domain;

	/**
	 * Singleton
	 *
	 * @return EIG_Business_Reviews
	 */
	static function init() {
		static $instance = false;
		if ( ! $instance ) {
			$instance = new EIG_Business_Reviews();
		}
		return $instance;
	}

	/**
	 * EIG_Business_Reviews constructor.
	 */
	public function __construct() {

		$this->domain = parse_url( get_option( 'siteurl' ), PHP_URL_HOST );

		// Set up the widget
		add_action( 'widgets_init', array( $this, 'widget_init' ) );

		// Register and load our JS
		add_action( 'wp_loaded', array( $this, 'register_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'localize_scripts' ) );

		// Register our ajax actions
		add_action( "wp_ajax_{$this->slug}_feedback", array( $this, 'ajax_send_email' ) );
		add_action( "wp_ajax_nopriv_{$this->slug}_feedback", array( $this, 'ajax_send_email' ) );
		add_action( "wp_ajax_{$this->slug}_get_links", array( $this, 'ajax_get_links' ) );
		add_action( "wp_ajax_nopriv_{$this->slug}_get_links", array( $this, 'ajax_get_links' ) );

	}

	/**
	 * Register required javascript files
	 */
	public function register_scripts() {

		wp_register_script( $this->slug, MM_BASE_URL . '/assets/js/business-reviews.js', array( 'jquery' ), MM_VERSION, true );

	}

	/**
	 * Enqueue required javascript files
	 */
	public function enqueue_scripts() {

		wp_enqueue_script( $this->slug );

	}

	/**
	 * Add localized script to handle ajax nonce
	 */
	public function localize_scripts() {

		$nonce    = wp_create_nonce( "{$this->slug}_action" );
		$localize = array(
			'ajaxUrl'     => admin_url( 'admin-ajax.php' ),
			'actionSlug'  => $this->slug,
			'_ajax_nonce' => $nonce,
		);

		wp_localize_script( $this->slug, $this->slug, $localize );

	}

	/**
	 * Initialize and register the Business Reviews widget
	 */
	public function widget_init() {

		register_widget( 'EIG_Business_Reviews_Widget' );

	}

	/**
	 * Handle our AJAX response from the front-end
	 */
	public function ajax_get_links() {

		$data = array_map( 'esc_attr', $_POST );

		if ( ! check_ajax_referer( "{$this->slug}_action", '_ajax_nonce', false ) ) {
			wp_send_json_error( check_ajax_referer( "{$this->slug}_action", '_ajax_nonce', false ) );
		};

		wp_send_json( $this->get_links() );

	}

	/**
	 * Handle AJAX POST on the contact form
	 */
	public function ajax_send_email() {

		$data = array_map( 'esc_attr', $_POST );

		if ( ! check_ajax_referer( "{$this->slug}_action", '_ajax_nonce', false ) ) {
			wp_send_json_error( check_ajax_referer( "{$this->slug}_action", '_ajax_nonce', false ) );
		};


		// This is where we process the data and actually send the email
		if ( is_email( $_POST['email'] ) ) {
			$email = sanitize_email( $_POST['email'] );
		} else {
			wp_send_json_error( 'Invalid Email' );
		}

		$name      = sanitize_text_field( $_POST['name'] );
		$message   = sanitize_textarea_field( $_POST['message'] );
		$headers[] = 'From: ' . $name . '<' . $email . '>';

		wp_mail( $this->get_email(), 'Website Feedback', $message, $headers );

		wp_send_json( 'Thanks for your feedback!' );

	}

	/**
	 * Hits the Business Reviews API to get list of sites user has configured
	 *
	 * @return mixed Array of URLs configured for Business Reviews or empty string if none
	 */
	public function get_links() {

		$links = '';

		// If the current user is an editor or greater, don't use any cached value
		if ( ! current_user_can( 'edit_posts' ) ) {
			$review_sites = get_transient( 'eig_business_reviews' );
		} else {
			$review_sites = false;
		}

		if ( false === $review_sites ) {
			$response = wp_remote_get( $this->sites_endpoint . '/' . $this->domain . '/' . mm_site_bin2hex() . '/business-reviews' );
			if ( $response->status && 'disabled' !== $response->status ) {
				$review_sites = json_decode( $response )->review_sites;
				// Cache results for 1 hour
				set_transient( 'eig_business_reviews', $review_sites, 3600 );
			}
		}

		if ( $review_sites ) {
			foreach ( $review_sites as $site ) {
				$links[] = $this->get_site_data( $site->url );
			}
		}

		return $links;

	}

	/**
	 * Hits the Business Reviews API to get the email address specified by the user for receiving feedback
	 *
	 * @return string Email address the user has specified for receiving negative feedback
	 *
	 * @todo Make it actually hit the Business Reviews API and return the user's email address
	 */
	public function get_email() {

		return get_option( 'admin_email' );

	}

	/**
	 * Parse supplied URL to determine additional data about the URL for use in review buttons
	 * @param string $url URL of the review site
	 *
	 * @return array|mixed Name, logo and URL of the review site for use in review button
	 */
	public function get_site_data( $url ) {

		$supported_sites = array(
			'#https?://(www)?\.facebook\.com.*#i' => array(
				'name' => 'Facebook',
				'logo' => MM_BASE_URL . '/images/facebook.png',
			),
			'#https?://(www)?\.google\.com.*#i'   => array(
				'name' => 'Google',
				'logo' => MM_BASE_URL . '/images/google.png',
			),
			'#https?://(www)?\.yelp\.com.*#i'     => array(
				'name' => 'Yelp',
				'logo' => MM_BASE_URL . '/images/yelp.png',
			),
		);

		foreach ( $supported_sites as $regex => $data ) {
			if ( preg_match( $regex, $url ) ) {
				$data['url'] = $url;
				return $data;
			}
		}

		// We didn't match a supported site, so try to parse the domain
		$data = array(
			'name' => str_replace( 'www.', '', parse_url( $url, PHP_URL_HOST ) ),
			'logo' => '',
			'url'  => $url,
		);

		return $data;

	}

}


/**
 * Class EIG_Business_Reviews_Widget
 */
class EIG_Business_Reviews_Widget extends WP_Widget {

	/**
	 * @var EIG_Business_Reviews
	 */
	public $module;

	/**
	 * EIG_Business_Reviews_Widget constructor.
	 */
	public function __construct() {
		$widget_options = array(
			'classname'   => 'eig_business_reviews',
			'description' => __( 'Add buttons to your website to allow visitors to share feedback or reviews on Facebook, Yelp, Google or anywhere your visitors can post reviews.', 'eig' ),
		);

		parent::__construct(
			'eig_business_reviews',
			'Write a Review',
			$widget_options
		);

		$this->module = EIG_Business_Reviews::init();

	}

	/**
	 * Output the widget content
	 * @param array $args
	 * @param array $instance
	 *
	 * @todo Separate out the CSS/JS and only enqueue when widget is active
	 */
	public function widget( $args, $instance ) {
		add_action( 'wp_footer', array( $this, 'modal_html' ) );
		extract( $args );
		echo $before_widget;
		echo $before_title . 'Write a Review' . $after_title; ?>
<style>
.eig_business_reviews > div > a { position: relative; display: block; width: 90%; text-align: center; margin: 0 auto; padding: 10px 0; }
.eig_business_reviews > div > a svg { max-width: 50%; margin-bottom: 10px; fill: currentColor }
.eig_modal { display: none; border-radius: 5px; }
.eig_modal_bg { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #333333; opacity: .6; z-index: 10000; }
.eig_modal_content { position: fixed; text-align: center; top: 25%; margin: 0 25%; width: 50%; min-width: 400px; max-width: 600px; height: auto; background: #fff; border: 1px solid #ccc; z-index: 10100; color: #000; }
.eig_br_list, .eig_br_contact { padding: 25px; }
.eig_br_close { position: absolute; top: 8px; right: 8px; width: 15px; height: 15px; z-index: 10200; cursor: pointer; }
.eig_modal_content h2 { margin-top: 0; }
.eig_modal_content p { margin-bottom: 10px; }
.eig_modal_content ul { text-align: left; list-style-type: none; margin: 0; padding: 0; }
.eig_modal_content ul li { display: inline-block; float: left; width: 50%; margin-bottom: 10px; }
.eig_modal_content ul li a { display: block; width: 92%; border: 1px solid #ccc; line-height: 40px; padding-top: 15px; padding-bottom: 15px; border-radius: 5px; margin:0 auto 10px; text-align: center; text-decoration: none; overflow: hidden; color: #000; background: #ffffff; /* Old browsers */
	background: -moz-linear-gradient(top, #ffffff 0%, #efefef 60%); /* FF3.6-15 */
	background: -webkit-linear-gradient(top, #ffffff 0%,#efefef 60%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to bottom, #ffffff 0%,#efefef 60%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#efefef',GradientType=0 ); /* IE6-9 */ }
.eig_modal_content ul li a img { max-width: 90%; max-height: 40px; margin: 0 auto; vertical-align: middle; }
.eig_modal_content ul.odd li:first-child { width: 100%; }
.eig_modal_content ul.odd li:first-child a { width: 96%; }
.eig_br_toggle_sentence { margin-top: 25px; font-size: .8em; clear:both; }
.eig_br_contact { text-align: left; }
.eig_br_contact input { margin-bottom: 15px; }
@media only screen and (max-width: 600px) {
	.eig_modal_content { position: absolute; top: 46px; width: 100%; min-width: 100%; margin: 0; }
}
</style>
<div style="width:50%;float:left;">
	<a href="#" onclick="eigbr.doFeedback();"><?php echo file_get_contents( MM_BASE_DIR . '/images/thumbs-down.svg' ); ?><br />Help us improve</a>
</div>
<div style="width:50%;float:left;">
	<a href="#" onclick="eigbr.doReview();"><?php echo file_get_contents( MM_BASE_DIR . '/images/thumbs-up.svg' ); ?><br />Share a review</a>
</div>
<!--
* Thumb icons from:
* Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
-->
<div style="clear:both;"></div>
<?php
		echo $after_widget;
	}

	/**
	 * Handle the output of the initial modal window content
	 *
	 * This gets hooked into wp_footer and output at the bottom of the page to avoid any CSS issues that might be
	 * caused by sidebar placement (floats, etc).
	 */
	public function modal_html() {
		?>
		<div class="eig_modal eig_modal_bg" onclick="eigbr.hideModal();"></div>
		<div class="eig_modal eig_modal_content" role="dialog">
			<div class="eig_br_close" onclick="eigbr.hideModal();"><?php echo file_get_contents( MM_BASE_DIR . '/images/times.svg' ); ?></div>
			<div class="eig_br_list" style="display:none;"></div>
			<div class="eig_br_contact" style="display:none;">
				<h2>Thank you for helping us improve</h2>
				<p>Please tell us more so we can address your concerns.</p>
				<form action="/" method="POST" id="eig_br_contact_form">
					<label for="eig_br_contact_name">Your name<sup>*</sup></label><br />
					<input id="eig_br_contact_name" type="text" name="eig_br_name" value="" placeholder="Joe Smith" /><br />
					<label for="eig_br_contact_email">Email<sup>*</sup></label><br />
					<input id="eig_br_contact_email" type="email" name="eig_br_email" value="" placeholder="joesmith@example.com" /><br />
					<label for="eig_br_contact_message">Message</label><br />
					<textarea id="eig_br_contact_message" id="eig_br_message" name="eig_br_message" value="" placeholder="Please write your feedback here. We look forward to addressing your concerns."></textarea><br />
					<p class="eig_br_toggle_sentence">If you do not want us to address your concerns, <a href="#" onclick="eigbr.doReview()">please continue to reviews</a>.</p>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
		<?php
	}

}

/**
 * Initialize Business Reviews
 */
EIG_Business_Reviews::init();
