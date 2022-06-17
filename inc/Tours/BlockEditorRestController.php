<?php

namespace Newfold\Plugin\Tours;

use \__;
use \Newfold\Plugin\DefaultContent\Pages;

/**
 * REST API Endpoint
 */
class BlockEditorRestController extends \Newfold\Plugin\RestApi\BaseHiiveController {

	/**
	 * Register Editor Tours REST API Routes
	 */
	public function register_routes() {
		\register_rest_route(
			$this->namespace,
			'/' . $this->rest_base . '/tours/blockeditor',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_steps' ),
					'permission_callback' => array( $this, 'has_permission' ),
					'args'                => array(
						'type' => array(
							'description'       => 'Type of Editor Tour',
							'type'              => 'string',
							'enum'              => Pages::$contexts,
							'default'           => 'about',
							'sanitize_callback' => 'sanitize_text_field',
						),
					),
				),
			)
		);
	}

	/**
	 * Undocumented function
	 *
	 * @param [type] $request - the request
	 * @return [type] response
	 */
	public function get_steps( $request ) {
		$steps = array();
		$type  = isset( $request['type'] ) ? $request['type'] : '';

		switch ( $type ) {
			case 'about':
				$steps = $this->steps_about_page();
				break;
			case 'contact':
				$steps = $this->steps_contact_page();
				break;
			case 'home':
				$steps = $this->steps_home_page();
				break;
		}

		return \rest_ensure_response( $steps );
	}

	/**
	 * Undocumented function
	 *
	 * @return boolean
	 */
	public function has_permission() {
		return \current_user_can( 'edit_posts' );
	}

	/**
	 * Shepherd.js Steps for About Page Tour
	 *
	 * @return array
	 */
	private function steps_about_page() {
		$about_image = '<img src="https://cdn.hiive.space/bluehost/about-page.svg" alt="' . \__( 'People around monitor working and pointing.', 'bluehost-wordpress-plugin' ) . '" height="340" width="auto" style="display:block;margin:0 auto;" />';

		return array(
			array(
				'id'      => 'intro',
				'classes' => 'wrap-large',
				'buttons' => array(
					Shared::secondary_button( 'Exit', 'cancel' ),
					Shared::primary_button( 'Get Started' ),
				),
				'title'   => __( 'Create an About Page with Bluehost', 'bluehost-wordpress-plugin' ),
				'text'    => Shared::large_step( $about_image . __( 'Your about page is where people get to know you.<br /><br />It\'s a great place to share how you got started and reasons you do what you do.', 'bluehost-wordpress-plugin' ) ),
			),
			array(
				'id'             => 'audience',
				'attachTo'       => array(
					'element' => '.block-editor-block-list__layout.is-root-container',
					'on'      => 'auto',
				),
				'buttons'        => array(
					Shared::secondary_button(),
					Shared::primary_button(),
				),
				'title'          => __( 'What should visitors know?', 'bluehost-wordpress-plugin' ),
				'text'           => Shared::step( 'We have some fill-in-the-blanks here to get you started. Original stories will often rank better with search engines, so change as much as you want!' ),
				'scrollTo'       => true,
				'canClickTarget' => false,
			),
			array(
				'id'        => 'inserter',
				'attachTo'  => array(
					'element' => '.edit-post-header-toolbar__inserter-toggle',
					'on'      => 'bottom',
				),
				'advanceOn' => array(
					'selector' => '.edit-post-header-toolbar__inserter-toggle',
					'event'    => 'click',
				),
				'buttons'   => array(
					Shared::secondary_button(),
				),
				'title'     => __( 'Find the building blocks you\'ll need', 'bluehost-wordpress-plugin' ),
				'text'      => Shared::step( __( 'The Block Inserter contains your toolkit with text & media blocks, plus common layouts called Block Patterns: <strong>Click the button now to open the Block Inserter</strong>.', 'bluehost-wordpress-plugin' ) ),
			),
			array(
				'id'             => 'inserter-opened',
				'attachTo'       => array(
					'element' => '.interface-interface-skeleton__secondary-sidebar',
					'on'      => 'auto',
				),
				'buttons'        => array(
					Shared::secondary_button(),
					Shared::primary_button(),
				),
				'scrollTo'       => false,
				'popperOptions'  => array(
					'modifiers' => array(
						array(
							'name'    => 'focusAfterRender',
							'enabled' => false,
						),
					),
				),
				'canClickTarget' => false,
				'title'          => __( 'Tell with words, show with media', 'bluehost-wordpress-plugin' ),
				'text'           => Shared::step( __( 'Weave photos, YouTube embeds, logos, and social icons in with Paragraphs and Headings for a compelling story.', 'bluehost-wordpress-plugin' ) ),
			),
			array(
				'id'       => 'fork',
				'attachTo' => array(
					'element' => '.editor-post-publish-button__button',
					'on'      => 'auto',
				),
				'buttons'  => array(
					Shared::primary_button( 'Get Started', 'complete' ),
				),
				'title'    => __( 'Let\'s go!', 'bluehost-wordpress-plugin' ),
				'text'     => Shared::step( __( 'It\'s time to tackle those placeholders and tell the web who you are! When you\'re ready, you can click here to publish your page.', 'bluehost-wordpress-plugin' ) ),
			),
		);
	}

	/**
	 * Shepherd.js Steps for Contact Page Tour
	 *
	 * @return array
	 */
	private function steps_contact_page() {
		$contact_image = '<img src="https://cdn.hiive.space/bluehost/contact-page.svg" alt="' . \__( 'Person throwing paper airplanes.', 'bluehost-wordpress-plugin' ) . '" height="340" width="auto" style="display:block;margin:0.5rem auto;" />';
		return array(
			array(
				'id'      => 'intro',
				'classes' => 'wrap-large',
				'buttons' => array(
					Shared::secondary_button( 'Exit', 'cancel' ),
					Shared::primary_button( 'Get Started' ),
				),
				'title'   => __( 'Create a Contact Page with Bluehost', 'bluehost-wordpress-plugin' ),
				'text'    => Shared::large_step( $contact_image . __( 'Forms power conversations and commerce across the web -- put yours to work for you today!', 'bluehost-wordpress-plugin' ) ),
			),
			array(
				'id'             => 'starter',
				'attachTo'       => array(
					'element' => '[data-type="wpforms/form-selector"]',
					'on'      => 'auto',
				),
				'buttons'        => array(
					Shared::secondary_button(),
					Shared::primary_button(),
				),
				'title'          => __( 'We\'ve got the basics covered', 'bluehost-wordpress-plugin' ),
				'text'           => Shared::step( 'We\'ve setup a simple form for you. Keep in mind short, simple forms are often best -- only add essential fields.' ),
				'scrollTo'       => true,
				'canClickTarget' => false,
			),
			array(
				'id'             => 'show-wpforms-link',
				'attachTo'       => array(
					'element' => 'a.toplevel_page_wpforms-overview',
					'on'      => 'auto',
				),
				'buttons'        => array(
					Shared::secondary_button(),
					Shared::primary_button(),
				),
				'title'          => __( 'Read responses, change form fields', 'bluehost-wordpress-plugin' ),
				'text'           => Shared::step( 'All your forms, including the contact form on this page, can be found right here in your WordPress Admin.' ),
				'scrollTo'       => true,
				'canClickTarget' => false,
			),
			array(
				'id'             => 'show-wpforms-menu',
				'attachTo'       => array(
					'element' => '.toplevel_page_wpforms-overview .wp-submenu',
					'on'      => 'auto',
				),
				'buttons'        => array(
					Shared::secondary_button(),
					Shared::primary_button(),
				),
				'title'          => __( 'All the form tools you need', 'bluehost-wordpress-plugin' ),
				'text'           => Shared::step( 'You can customize email branding, prevent spam, fine-tune form behavior, check logs, and even change the email address form submissions are sent to.' ),
				'scrollTo'       => true,
				'canClickTarget' => false,
			),
			array(
				'id'             => 'final-polish',
				'attachTo'       => array(
					'element' => '.wpforms-gutenberg-panel-notice',
					'on'      => 'auto',
				),
				'buttons'        => array(
					Shared::secondary_button(),
					Shared::primary_button( 'Got it', 'complete' ),
				),
				'title'          => __( 'Don\'t forget to test', 'bluehost-wordpress-plugin' ),
				'text'           => Shared::step( 'Check out this comprehensive guide on how to test your form!' ),
				'scrollTo'       => true,
				'canClickTarget' => false,
			),
		);
	}

	/**
	 * Shepherd.js Steps for Home Page Tour
	 *
	 * @return array
	 */
	private function steps_home_page() {
		ob_start(); ?>
		<?php \esc_html_e( 'Use this outline to fill in the content for your homepage', 'bluehost-wordpress-plugin' ); ?>:
		<ul>
			<li><strong><?php \esc_html_e( 'Hero image', 'bluehost-wordpress-plugin' ); ?></strong> <?php \esc_html_e( '(the first thing your site visitors will see, so make it good.)', 'bluehost-wordpress-plugin' ); ?></li>
			<li><strong><?php \esc_html_e( 'Headline', 'bluehost-wordpress-plugin' ); ?></strong> <?php \esc_html_e( '(the most important thing you want visitors to know.)', 'bluehost-wordpress-plugin' ); ?></li>
			<li><strong><?php \esc_html_e( 'Subheadline', 'bluehost-wordpress-plugin' ); ?></strong> <?php \esc_html_e( '(consider adding one or two sentences to give your headline more context.)', 'bluehost-wordpress-plugin' ); ?></li>
			<li><strong><?php \esc_html_e( 'Call to action button', 'bluehost-wordpress-plugin' ); ?></strong> <?php \esc_html_e( '(encourage your visitors to buy something, subscribe to something or learn more.)', 'bluehost-wordpress-plugin' ); ?></li>
		</ul>
		<?php
		$header_contents = ob_get_clean();

		ob_start()
		?>
		<?php \esc_html_e( 'Since you\'re more focused on selling to visitors, think about including', 'bluehost-wordpress-plugin' ); ?>:
		<ul>
			<li><?php \esc_html_e( '“Reasons to believe” that help potential customers understand the value of your products.', 'bluehost-wordpress-plugin' ); ?></li>
			<li><?php \esc_html_e( 'Info on sales, promotions, and incentives', 'bluehost-wordpress-plugin' ); ?></li>
			<li><?php \esc_html_e( 'Product listings and images', 'bluehost-wordpress-plugin' ); ?></li>
			<li><?php \esc_html_e( 'Testimonials or customer reviews', 'bluehost-wordpress-plugin' ); ?></li>
		</ul>
		<?php
		$mostly_selling = ob_get_clean();

		ob_start()
		?>
		<?php \esc_html_e( 'Since you\'re more focused on sharing information with visitors, think about including', 'bluehost-wordpress-plugin' ); ?>:
		<ul>
			<li><?php \esc_html_e( 'Key information that supports your header', 'bluehost-wordpress-plugin' ); ?></li>
			<li><?php \esc_html_e( 'Most recent posts or news', 'bluehost-wordpress-plugin' ); ?></li>
			<li><?php \esc_html_e( 'Most popular or select, curated blog posts', 'bluehost-wordpress-plugin' ); ?></li>
			<li><?php \esc_html_e( 'Top portfolio pieces, awards, certifications or other supporting materials', 'bluehost-wordpress-plugin' ); ?></li>
		</ul>
		<?php
		$mostly_sharing = ob_get_clean();

		$home_image = '<img src="https://cdn.hiive.space/bluehost/home-page.svg" alt="' . \__( 'Person on lounge chair working on laptop.', 'bluehost-wordpress-plugin' ) . '" height="340" width="auto" />';

		return array(
			array(
				'id'      => 'intro',
				'classes' => 'wrap-large',
				'buttons' => array(
					Shared::secondary_button( 'Exit', 'cancel' ),
					Shared::primary_button( 'Get Started' ),
				),
				'title'   => __( 'Create a Home Page with Bluehost', 'bluehost-wordpress-plugin' ),
				'text'    => Shared::large_step(
					$home_image .
					Shared::two_col(
						__( 'Your website’s home page is your online storefront, billboard, and welcome mat. It’s where you make many first impressions, so it’s important to get it right.', 'bluehost-wordpress-plugin' ),
						__( 'It should be engaging, helpful, and interesting. It could be as simple as the name of your company, or it might be tied to a promotion or sale that you’re running.', 'bluehost-wordpress-plugin' )
					)
				),
			),
			array(
				'id'      => 'header',
				// 'classes' => 'wrap-large',
				'buttons' => array(
					Shared::secondary_button(),
					Shared::primary_button(),
				),
				'title'   => __( 'Our formula for successful Home Page headers', 'bluehost-wordpress-plugin' ),
				'text'    => Shared::step( $header_contents ),
			),
			array(
				'id'      => 'prompt',
				'buttons' => array(
					Shared::secondary_button( 'Mostly selling', '' ),
					Shared::secondary_button( 'Mostly sharing', '' ),
				),
				'title'   => __( 'For this next section, help us understand your primary goal', 'bluehost-wordpress-plugin' ),
				'text'    => Shared::step( 'Is your main goal to sell a product or service? Or are you primarily sharing stories or information?' ),
			),
			array(
				'id'      => 'mostly-selling',
				'buttons' => array(
					Shared::secondary_button(),
					Shared::primary_button( 'Next', '' ),
				),
				'title'   => __( "Great, let's put your website to work for you", 'bluehost-wordpress-plugin' ),
				'text'    => Shared::step( $mostly_selling ),
			),
			array(
				'id'      => 'mostly-sharing',
				'buttons' => array(
					Shared::secondary_button( 'Back', '' ),
					Shared::primary_button(),
				),
				'title'   => __( "Great, let's tell your story", 'bluehost-wordpress-plugin' ),
				'text'    => Shared::step( $mostly_sharing ),
			),
			array(
				'id'       => 'finish-cta',
				'attachTo' => array(
					'element' => '.wp-block.wp-block-buttons .wp-block-button',
					'on'      => 'right',
				),
				'scrollTo' => true,
				'buttons'  => array(
					Shared::secondary_button( 'Back', '' ),
					Shared::primary_button( 'Get Started', 'complete' ),
				),
				'title'    => __( "Guide users to your primary goal with a 'Call-to-Action' button", 'bluehost-wordpress-plugin' ),
				'text'     => Shared::step( __( 'This can be a button or link that directs people to their next steps. Depending on your site, this might be anything from contacting you, to setting up an appointment, looking at products, making a purchase, or subscribing to your blog or newsletter.', 'bluehost-wordpress-plugin' ) ),
			),
		);
	}

}
