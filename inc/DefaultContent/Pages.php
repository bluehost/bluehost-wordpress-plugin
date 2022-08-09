<?php
/**
 * Default Content type set by &dcpage=
 * Ideal landing page is:
 * /wp-admin/post-new.php?post_type=page&dcpage=about&page_title=About+Us
 * /wp-admin/post-new.php?post_type=page&dcpage=home&page_title=Home
 * /wp-admin/post-new.php?post_type=page&dcpage=contact&page_title=Contact+Us
 *
 * @package Bluehost/DefaultContent
 */

namespace Newfold\Plugin\DefaultContent;

/**
 * Undocumented class
 */
class Pages {

	/**
	 * Class instance.
	 *
	 * @var stdClass
	 */
	protected static $instance;

	/**
	 * Valid string values for a context
	 *
	 * @var array
	 */
	public static $contexts = array( 'about', 'contact', 'home' );

	/**
	 * Get class instance.
	 *
	 * @return \Newfold\Plugin\DefaultContent\Pages|stdClass
	 */
	public static function return_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof \Newfold\Plugin\DefaultContent\Pages ) ) {
			self::$instance = new \Newfold\Plugin\DefaultContent\Pages();
			self::$instance->primary_init();
		}

		return self::$instance;
	}

	/**
	 * Initialize class.
	 */
	protected function primary_init() {
		add_action( 'wp_loaded', array( Pages::class, 'intercept_query_parameter' ) );
		add_action( 'rest_api_init', array( Pages::class, 'rest_api_init' ) );
		add_filter( 'dc_content_filter', array( Pages::class, 'dc_content_filter_callback' ), 10, 2 );
		add_action( 'transition_post_status', array( Pages::class, 'dc_page_publish_callback' ), 10, 3 );
	}

	/**
	 * Rest API init
	 */
	public static function rest_api_init() {
		$api = new PagesRestController();
		$api->register_routes();
	}

	/**
	 * Manage dcpage param
	 *
	 * @return void
	 */
	public static function intercept_query_parameter() {
		// bail if no `dcpage` url parameter found, and not on add new page url
		if ( ! isset( $_GET['dcpage'] ) ) {
			return;
		}

		// get context for default content
		$context = filter_input( INPUT_GET, 'dcpage', FILTER_SANITIZE_STRING );
		// bail if improper context
		if ( ! is_string( $context ) ||
			! in_array( $context, self::$contexts )
		) {
			return;
		}

		// get src param
		if ( isset( $_GET['dcsrc'] ) ) {
			$src = filter_input( INPUT_GET, 'dcsrc', FILTER_SANITIZE_STRING );
		} else {
			// default to bluerock - links from bluerock do not have the dcsrc param
			$src = 'bluerock';
		}

		// check if existing page for this context already exists
		$dc_post_id = self::does_dcpage_exist( $context );
		if ( false === $dc_post_id ) {
			// create a new draft page and set default block content
			$dc_post_id = self::make_dc_page( $context, $src );
		}

		// redirect link to page editor for this page
		$dc_post_edit_url = \get_admin_url(
			null,
			'post.php?action=edit&post=' . $dc_post_id
		);

		$dc_post_edit_url .= '&tour=' . $context;

		if ( \wp_safe_redirect( $dc_post_edit_url ) ) {
			exit;
		}

	}

	/**
	 * Determine if dcpage already exists for this context
	 *
	 * @param string $context - context of new page
	 *
	 * @return - page id if so or false if none found
	 */
	public static function does_dcpage_exist( $context ) {
		// check for existing page by context
		$dc_args  = array(
			'posts_per_page' => 1,
			'post_type'      => 'page',
			'post_status'    => array( 'pending', 'draft', 'future', 'publish', 'private' ),
			'meta_key'       => 'nf_dc_page',
			'meta_value'     => $context,
			'meta_compare'   => '=',
		);
		$dc_query = new \WP_Query( $dc_args );
		while ( $dc_query->have_posts() ) :
			$dc_query->the_post();
			// return page id
			return \get_the_id();
		endwhile;

		// none found, return false
		return false;
	}

	/**
	 * Get Default Content and send to new page
	 *
	 * @param string $context - context of new page
	 * @param string $src - source
	 * @return - id of new post
	 */
	public static function make_dc_page( $context, $src ) {
		// get default content via proxy api
		$request = new \WP_REST_Request( 'GET', '/newfold/v1/defaultcontent/pages' );
		$request->set_query_params(
			array(
				'page'  => $context,
				'brand' => 'bluehost',
				'lang'  => 'en-US',
			)
		);
		$response = \rest_do_request( $request );
		$server   = \rest_get_server();
		$data     = $server->response_to_data( $response, false );

		$dc_post_content = $data['content'];
		$dc_post_title   = $data['title'];

		$dc_post_content = apply_filters( 'dc_content_filter', $dc_post_content, $context );

		$new_post = array(
			'post_type'    => 'page',
			'post_title'   => $dc_post_title,
			'post_content' => $dc_post_content,
			'meta_input'   => array(
				'nf_dc_src'  => $src,
				'nf_dc_page' => $context,
			),
		);

		// create new post - id is returned
		return \wp_insert_post( $new_post );
	}

	/**
	 * Filter for default content, sets the proper contact form id.
	 *
	 * @param string $content - content from post
	 * @param string $context - context for creating default content.
	 * @return - filtered content
	 */
	public static function dc_content_filter_callback( $content, $context ) {
		if ( 'contact' === $context ) {

			// first check if form is supported
			$cf_contact_id = self::is_cf_ready();

			// replace contact formid in content.
			if ( $cf_contact_id ) {
				$content = str_replace(
					'<!-- wp:wpforms/form-selector {"formId":"0"} /-->',
					'<!-- wp:wpforms/form-selector {"formId":"' . $cf_contact_id . '"} /-->',
					$content
				);
			}
		}

		return $content;
	}

	/**
	 * Action hook for when pages are published
	 *
	 * @param string  $new_status New post status.
	 * @param string  $old_status Old post status.
	 * @param WP_Post $post       Post object.
	 */
	public static function dc_page_publish_callback( $new_status, $old_status, $post ) {
		if ( ( 'publish' === $new_status && 'publish' !== $old_status ) // first published
			&& 'page' === $post->post_type // page post type
			&& 'home' === get_post_meta( $post->ID, 'nf_dc_page', true ) // home meta present
		) {
			// update options to make front a static page
			update_option( 'show_on_front', 'page' );
			// set this as the front page by id
			update_option( 'page_on_front', $post->ID );
		}
	}

	/**
	 * Check if contact form plugin is active and form exists, if not enable and create simple contact form.
	 *
	 * @return - formid
	 */
	public static function is_cf_ready() {
		$wpforms_path       = 'wpforms-lite/wpforms.php';
		$wpforms_latest_zip = 'https://downloads.wordpress.org/plugin/wpforms-lite.latest-stable.zip';
		$cf_post_id         = false;

		// install plugin if missing
		if ( ! self::is_plugin_installed( $wpforms_path ) ) {
			self::install_plugin( $wpforms_latest_zip );
		}

		// activate plugin if not active
		if ( ! \is_plugin_active( $wpforms_path ) ) {
			\activate_plugin( $wpforms_path );
			// delete activation_redirect transient to avoid redirect hijack from plugin
			\delete_transient( 'wpforms_activation_redirect' );
			// continue
		}

		// create a new contact form post with default content
		$cf_post_id = self::make_dc_form();

		return $cf_post_id;
	}

	/**
	 * Determine if plugin is installed
	 *
	 * @param string $slug - slug/path for the plugin to check
	 * @return boolean - for if plugin is installed
	 */
	public static function is_plugin_installed( $slug ) {
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}
		$all_plugins = \get_plugins();
		if ( ! empty( $all_plugins[ $slug ] ) ) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Install plugin with provided zip
	 *
	 * @param string $plugin_zip - url to zip file to install
	 * @return boolean - if install is successful
	 */
	public static function install_plugin( $plugin_zip ) {
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/misc.php';
		require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
		// New Skin that doesn't give feedback and redirects on completion
		require_once 'class-plugin-quiet-upgrader-skin.php';

		\wp_cache_flush();
		$quiet_skin = new \Plugin_Quiet_Upgrader_Skin();
		$upgrader   = new \Plugin_Upgrader( $quiet_skin );
		$installed  = $upgrader->install( $plugin_zip );

		return $installed;
	}

	/**
	 * Determine if form already exists, defaulting to use wpforms post_type
	 *
	 * @param string $context - what kind of forms are we looking for? defaults to `wpforms`
	 * @return - wpform id or false if none found
	 */
	public static function does_dc_form_exist( $context = 'wpforms' ) {
		// check for existing post by context as post_type
		$cf_args  = array(
			'posts_per_page' => 1,
			'post_type'      => $context,
			'post_status'    => array( 'pending', 'draft', 'future', 'publish', 'private' ),
			'meta_key'       => 'nf_dc_page',
			'meta_value'     => $context,
			'meta_compare'   => '=',
		);
		$cf_query = new \WP_Query( $cf_args );
		while ( $cf_query->have_posts() ) :
			$cf_query->the_post();
			// return post id
			return \get_the_id();
		endwhile;

		// none found, return false
		return false;
	}

	/**
	 * Make Default Contact Form
	 *
	 * @param string $context - context of new form - plugin, defaults to `wpforms`
	 * @return - id of new form post
	 */
	public static function make_dc_form( $context = 'wpforms' ) {
		// get default content via proxy api
		$request = new \WP_REST_Request( 'GET', '/newfold/v1/defaultcontent/pages' );
		$request->set_query_params(
			array(
				'page'  => $context,
				'brand' => 'bluehost',
				'lang'  => 'en-US',
			)
		);
		$response = \rest_do_request( $request );
		$server   = \rest_get_server();
		$data     = $server->response_to_data( $response, false );

		$cf_post_content = $data['content'];
		$cf_post_title   = $data['title'];

		$new_cf_post = array(
			'post_type'    => $context,
			'post_title'   => $cf_post_title,
			'post_content' => $cf_post_content,
			'post_status'  => 'publish',
			'meta_input'   => array(
				'nf_dc_page' => $context,
			),
		);

		// create new post - id is returned
		return \wp_insert_post( $new_cf_post );
	}

}
