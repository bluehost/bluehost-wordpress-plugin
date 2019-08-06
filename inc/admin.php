<?php

class Endurance_WP_Module_Admin_App_Init {
	/**
	 * @var stdClass Fully instantiated instance of this class.
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
			|| ! ( self::$instance instanceof Endurance_WP_Module_Admin_App_Init )
		) {
			self::$instance = new Endurance_WP_Module_Admin_App_Init();
			self::$instance->primary_init();
		}
		return self::$instance;
	}
	/**
	 * Primary initialization method for class -- run upon new instance or instance access.
	 */
	protected function primary_init() {
		add_action( 'init', array( $this, 'wp_loaded_init' ) );
	}
	public function wp_loaded_init() {
		if ( ! is_user_logged_in() ) {
			__return_false();
		}
		$this->load_files();
		$this->load_class_instances();
	}
	/**
	 * Simple Module Loader
	 */
	protected function load_files() {
		$base = trailingslashit( dirname( __FILE__ ) ) . 'admin/' . static::$filename_root;
		foreach( static::$page_slug_stubs as $page ) {
			require_once $base . $page;
		}
	}
	/**
	 *
	 */
	protected function load_class_instances() {
		EIG_WP_Module_Admin_App_Mods::return_instance();
		EIG_WP_Module_Admin_App_Assets::return_instance();
		EIG_WP_Module_Admin_App_Page::return_instance();
	}
}

/**
 * 🚀
 */
Endurance_WP_Module_Admin_App_Init::return_instance();
