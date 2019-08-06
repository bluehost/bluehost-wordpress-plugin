<?php
/**
 * EIG_WP_Module_Admin_App_Assets class
 */
class EIG_WP_Module_Admin_App_Assets {
	/**
	 * @var string
	 */
	protected $page_hook = 'bluehost';
	/**
	 * @var string
	 */
	protected $current_admin_hook;
	/**
	 * @var stdClass
	 */
	protected static $instance;
	/**
	 * @var array
	 */
	protected $app_dependencies = array(
		'wp-a11y',
		'wp-api-fetch',
		'wp-data',
		'wp-dom',
		'wp-dom-ready',
		'wp-keycodes',
		'wp-element',
		'wp-components',
		'react-router-dom',
		'axios'
	);
	/**
	 * @return EIG_WP_Module_Admin_App_Assets|stdClass
	 */
	public static function return_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof EIG_WP_Module_Admin_App_Assets ) ) {
			self::$instance = new EIG_WP_Module_Admin_App_Assets();
			self::$instance->primary_init();
		}
		return self::$instance;
	}
	/**
	 *
	 */
	protected function primary_init() {
		// TODO: restore admin css patch for nav
		// <style>li#toplevel_page_bluehost a:after,
		// li#toplevel_page_bluehost a:after {
    	// border: 0px transparent !important;
		// }</style>
		add_action( 'admin_enqueue_scripts', array( $this, 'register_assets' ) );
	}
	/**
	 * @param $hook
	 */
	public function register_assets( $hook ) {
		$url = trailingslashit( MM_BASE_URL ) . 'assets/';
		$this->current_admin_hook = $hook;
		if ( false !== stripos( $this->current_admin_hook, $this->page_hook ) ) {
			$this->page_css( $url );
			$this->page_js( $url );
		}
	}
	/**
	 * Register Page CSS Here
	 */
	protected function page_css( $assets_url ) {
		wp_register_style(
			'eig-wp-admin-ui-styles',
			$assets_url . 'admin.css',
			array( 'wp-components', 'animatecss', 'bluehost-font', 'bluehost-brand', 'purecss-grids' ),
			time()
		);
		wp_enqueue_style( 'eig-wp-admin-ui-styles' );
	}
	/**
	 * Register Page JS Here
	 */
	protected function page_js( $dist_url ) {
		wp_register_script(
			'eig-wp-admin-ui-manifest',
			$dist_url . 'admin-manifest.js',
			$this->app_dependencies,
			time(),
			true
		);
		wp_register_script(
			'eig-wp-admin-ui-app',
			$dist_url . 'admin.js',
			array( 'eig-wp-admin-ui-manifest' ),
			time(),
			true
		);
		wp_enqueue_script( 'eig-wp-admin-ui-app' );
		if ( defined( 'WP_LOCAL_DEV' ) && WP_LOCAL_DEV ) {
			wp_enqueue_script(
				'livereload',
				'http://localhost:35729/livereload.js',
				array( 'eig-wp-admin-ui-app' ),
				time(),
				true
			);
		}
	}
}
