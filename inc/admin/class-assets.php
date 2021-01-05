<?php

/**
 * Bluehost_Admin_App_Assets class
 */
class Bluehost_Admin_App_Assets {

	/**
	 * Page name.
	 *
	 * @var string
	 */
	protected $page_hook = 'bluehost';

	/**
	 * Current hook.
	 *
	 * @var string
	 */
	protected $current_admin_hook;

	/**
	 * Class instance.
	 *
	 * @var stdClass
	 */
	protected static $instance;

	/**
	 * Assets URL.
	 *
	 * @var string $url
	 */
	protected $url;

	/**
	 * Get class instance.
	 *
	 * @return Bluehost_Admin_App_Assets|stdClass
	 */
	public static function return_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Bluehost_Admin_App_Assets ) ) {
			self::$instance = new Bluehost_Admin_App_Assets();
			self::$instance->primary_init();
		}

		return self::$instance;
	}

	/**
	 * Initialize class.
	 */
	protected function primary_init() {
		// TODO: restore admin css patch for nav
		// <style>li#toplevel_page_bluehost a:after,
		// li#toplevel_page_bluehost a:after {
		// border: 0px transparent !important;
		// }</style>
		$this->url = trailingslashit( BLUEHOST_PLUGIN_URL ) . 'assets/';
		add_action( 'admin_enqueue_scripts', array( $this, 'register_global_assets' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'register_assets' ) );
	}

	/**
	 * Register global assets.
	 */
	public function register_global_assets() {
		$min  = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';
		$rand = time();

		wp_register_style(
			'bluehost-font',
			'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600',
			array(),
			empty( $min ) ? $rand : BLUEHOST_PLUGIN_VERSION
		);

		wp_register_script(
			'react-router-dom',
			$this->url . 'react-router-dom' . $min . '.js',
			array( 'wp-element' ),
			empty( $min ) ? $rand : '5.0.0',
			true
		);

		wp_register_style(
			'animatecss',
			$this->url . 'animate' . $min . '.css',
			array(),
			empty( $min ) ? $rand : '3.7.1'
		);

		wp_register_style(
			'bluehost-brand',
			$this->url . 'bluehost.css',
			array(),
			empty( $min ) ? $rand : '0.1.0'
		);

		wp_register_style(
			'purecss',
			$this->url . 'pure/pure' . $min . '.css',
			array(),
			empty( $min ) ? $rand : '1.0'
		);

		wp_register_style(
			'purecss-base',
			$this->url . 'pure/base' . $min . '.css',
			array(),
			empty( $min ) ? $rand : '1.0'
		);

		wp_register_style(
			'purecss-grids-base',
			$this->url . 'pure/grids' . $min . '.css',
			array(),
			empty( $min ) ? $rand : '1.0'
		);

		wp_register_style(
			'purecss-grids',
			$this->url . 'pure/grids-responsive' . $min . '.css',
			array( 'purecss-base', 'purecss-grids-base' ),
			empty( $min ) ? $rand : '1.0'
		);

		wp_register_style(
			'bluehost-admin-global',
			$this->url . 'admin-global.css',
			array(),
			empty( $min ) ? $rand : '1.0'
		);
		wp_enqueue_style( 'bluehost-admin-global' );

	}

	/**
	 * Register assets.
	 *
	 * @param string $hook Hook name.
	 */
	public function register_assets( $hook ) {
		$this->current_admin_hook = $hook;
		if ( false !== stripos( $this->current_admin_hook, $this->page_hook ) ) {
			$this->page_css( $this->url );
			$this->page_js( $this->url );
		}
	}

	/**
	 * Register Page CSS
	 *
	 * @param string $assets_url Base assets URL.
	 */
	protected function page_css( $assets_url ) {
		wp_register_style(
			'bwa-styles',
			$assets_url . 'admin.css',
			array( 'wp-components', 'animatecss', 'bluehost-font', 'bluehost-brand', 'purecss-grids' ),
			time()
		);
		wp_enqueue_style( 'bwa-styles' );
	}

	/**
	 * Register Page JS
	 *
	 * @param string $dist_url Base distribution URL.
	 */
	protected function page_js( $dist_url ) {
		$js_deps = require BLUEHOST_PLUGIN_DIR . '/assets/admin-manifest.asset.php';
		wp_register_script(
			'bwa-manifest',
			$dist_url . 'admin-manifest.js',
			array_merge( $js_deps['dependencies'], array( 'react-router-dom' ) ),
			$js_deps['version'],
			true
		);
		wp_localize_script(
			'bwa-manifest',
			'bluehostPluginPublicPath',
			$dist_url
		);
		wp_localize_script(
			'bwa-manifest',
			'bluehostPluginVersion',
			BLUEHOST_PLUGIN_VERSION
		);
		wp_register_script(
			'bwa-vendors',
			$dist_url . 'vendors~admin.js',
			array( 'bwa-manifest' ),
			$js_deps['version'],
			true
		);
		wp_register_script(
			'bwa-app',
			$dist_url . 'admin.js',
			array( 'bwa-vendors' ),
			$js_deps['version'],
			true
		);
		wp_enqueue_script( 'bwa-app' );

		$data = array(
			'app'          => array(
				'adminUrl'             => \admin_url(),
				'activePage'           => '',
				'isTopLevel'           => 0,
				'pages'                => Bluehost_Admin_App_Page::get_top_level_pages(),
				'noticesPathsDenyList' => Bluehost_Admin_App_Page::$noticesPathsDenyList, // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
				'accountId'            => mojo_site_bin2hex(),
				'nonce'                => wp_create_nonce( mojo_site_bin2hex() ),
			),
			'env'          => array(
				'isPHP7'     => version_compare( phpversion(), '7.0.0' ) >= 0,
				'phpVersion' => phpversion(),
				'isStaging'  => \Bluehost\Staging::getInstance()->isStaging(),
			),
			'wordpress'    => array(
				'hasReusableBlocks'              => \wp_count_posts( 'wp_block' )->publish >= 1,
				'isJetpackActive'                => class_exists( 'Jetpack' ) ? 1 : 0,
				'isWooActive'                    => class_exists( 'woocommerce' ) ? 1 : 0,
				'jetpackActiveModules'           => get_option( 'jetpack_active_modules', 0 ),
				'bluehostPluginDaysSinceInstall' => bh_get_days_since_plugin_install_date(),
			),
			'movedToStore' => false,
		);

		// Grab the latest settings using an interal REST API request
		$request  = new WP_REST_Request( 'GET', '/bluehost/v1/settings' );
		$response = rest_do_request( $request );
		$server   = rest_get_server();

		$data['settings'] = $server->response_to_data( $response, false );

		wp_localize_script( 'bwa-app', 'bluehost', apply_filters( 'bluehost_admin_page_data', $data ) );
		wp_localize_script( 'bwa-app', 'bluehostWpAdminUrl', \admin_url() );

	}
}
