<?php
class EIG_WP_Module_Admin_App_Mods {
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
	 * @return EIG_WP_Module_Admin_App_Mods|stdClass
	 */
	public static function return_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof EIG_WP_Module_Admin_App_Mods ) ) {
			self::$instance = new EIG_WP_Module_Admin_App_Mods();
			self::$instance->primary_init();
		}
		return self::$instance;
	}
	/**
	 *
	 */
	protected function primary_init() {
		//
	}
}
