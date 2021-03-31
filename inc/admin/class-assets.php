<?php

use Bluehost\BuildAssets;

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
		add_action( 'admin_enqueue_scripts', array( $this, 'register_assets' ), 20 );
	}

	/**
	 * Register assets.
	 *
	 * @param string $hook Hook name.
	 */
	public function register_assets( $hook ) {

		if ( false !== stripos( $hook, $this->page_hook ) ) {
			$this->prepareData();
			BuildAssets::enqueue('app');
		}

	}

	

	/**
	 * Register Page JS
	 *
	 * @param string $dist_url Base distribution URL.
	 */
	protected function prepareData() {
		
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
				'jetpackActiveModules'           => \get_option( 'jetpack_active_modules', 0 ),
				'bluehostPluginDaysSinceInstall' => bh_get_days_since_plugin_install_date(),
			),
			'movedToStore' => false,
		);

		// Grab the latest settings using an interal REST API request
		$request  = new WP_REST_Request( 'GET', '/bluehost/v1/settings' );
		$response = rest_do_request( $request );
		$server   = rest_get_server();

		$data['settings'] = $server->response_to_data( $response, false );
		
		BuildAssets::inlineWebpackPublicPath('bwp-manifest-app');
		\wp_localize_script( 'bwp-manifest-app', 'bluehost', apply_filters( 'bluehost_admin_page_data', $data ) );
		\wp_add_inline_script( 'bwp-manifest-app', 'window.bluehostWpAdminUrl="'. \admin_url() .'";', 'before');
	}
}
