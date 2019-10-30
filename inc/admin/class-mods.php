<?php

/**
 * Class Bluehost_Admin_App_Mods
 */
class Bluehost_Admin_App_Mods {

	/**
	 * @var string
	 */
	protected static $page_hook = 'hosting-control';

	/**
	 * @var string
	 */
	protected $current_admin_hook;

	/**
	 * @var stdClass
	 */
	protected static $instance;

	/**
	 * @return Bluehost_Admin_App_Mods|stdClass
	 */
	public static function return_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Bluehost_Admin_App_Mods ) ) {
			self::$instance = new Bluehost_Admin_App_Mods();
			self::$instance->primary_init();
		}

		return self::$instance;
	}

	/**
	 *
	 */
	protected function primary_init() {
	}
}
