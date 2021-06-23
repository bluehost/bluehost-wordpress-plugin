<?php

namespace Bluehost\WP\Admin_App;

/**
 * Class Init
 *
 * @package Bluehost\WP\Admin_App
 */
class Init {
	/**
	 * @var /stdClass Fully instantiated instance of this class.
	 */
	protected static $instance;
	/**
	 * @var string
	 */
	protected static $filename_root = 'class-';
	/**
	 * @var array
	 */
	protected static $page_slug_stubs = array(
		'mods.php',
		'page.php',
		'assets.php',
	);

	/**
	 * Return Class Instance
	 */
	public static function return_instance() {
		if (
			! isset( self::$instance )
			|| ! ( self::$instance instanceof \Bluehost\WP\Admin_App\Init )
		) {
			self::$instance = new \Bluehost\WP\Admin_App\Init();
			self::$instance->primary_init();
		}

		return self::$instance;
	}

	/**
	 * Primary initialization method for class -- run upon new instance or instance access.
	 */
	protected function primary_init() {
		\add_action( 'init', array( $this, 'wp_loaded_init' ) );
		\add_action( 'wp_dashboard_setup', array( $this, 'register_admin_widget' ) );
		\add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_dashboard_assets' ), 30 );
		\add_action( 'load-admin.php', array( $this, 'maybe_redirect_to_staging' ) );
	}

	public function wp_loaded_init() {
		if ( ! \is_user_logged_in() ) {
			return;
		}
		$this->load_files();
		$this->load_class_instances();
	}

	/**
	 * If a user lands on the admin.php page and a page parameter isn't set, it just shows a blank page.
	 * Most likely, the user was being redirected to staging and something went wrong. This is a quick (and hopefully
	 * temporary) fix until the root cause of the issue is determined.
	 */
	public function maybe_redirect_to_staging() {
		if ( ! isset( $_GET['page'] ) ) {
			wp_safe_redirect( admin_url( '/admin.php?page=bluehost#/tools/staging' ) );
		}
	}

	/**
	 * Simple Module Loader
	 */
	protected function load_files() {
		$base = \trailingslashit( dirname( __FILE__ ) ) . 'admin/' . static::$filename_root;
		foreach ( static::$page_slug_stubs as $page ) {
			require_once $base . $page;
		}
	}

	/**
	 * Register Bluehost Widget for the WordPress Admin Dashboard
	 *
	 * @return void
	 */
	public function register_admin_widget() {
		\wp_add_dashboard_widget(
			'bluehost-widget-container',
			'Bluehost',
			function() {
				echo '<div id="bluehost-widget"></div>';
			},
			null,
			null,
			'normal',
			'high'
		);
	}

	public function enqueue_dashboard_assets( $hook ) {
		if ( 'index.php' === $hook ) {
			\Bluehost\BuildAssets::inlineWebpackPublicPath( 'bwp-manifest-dashboard' );
			\Bluehost\BuildAssets::enqueue( 'dashboard' );
			$cp_url = 'Bluehost_India' === get_option( 'mm_brand' ) ? 'https://my.bluehost.in' : 'https://my.bluehost.com';
			\wp_add_inline_script( 'bwp-manifest-dashboard', 'const bluehostPanelUrl="' . $cp_url . '"', 'before' );
		}
	}

	/**
	 *
	 */
	protected function load_class_instances() {
		\Bluehost_Admin_App_Mods::return_instance();
		\Bluehost_Admin_App_Assets::return_instance();
		\Bluehost_Admin_App_Page::return_instance();
		\Newfold\Plugin\DefaultContent\Pages::return_instance();
		\Newfold\Plugin\Tours\BlockEditor::return_instance();
	}
}

/**
 * 🚀
 */
\Bluehost\WP\Admin_App\Init::return_instance();
