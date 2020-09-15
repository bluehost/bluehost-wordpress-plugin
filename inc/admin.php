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
	 *
	 */
	protected function load_class_instances() {
		\Bluehost_Admin_App_Mods::return_instance();
		\Bluehost_Admin_App_Assets::return_instance();
		\Bluehost_Admin_App_Page::return_instance();
	}
}

/**
 * 🚀
 */
\Bluehost\WP\Admin_App\Init::return_instance();
