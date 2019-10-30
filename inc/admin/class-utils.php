<?php

use Bluehost\SiteMeta;

/**
 * Class Bluehost_Admin_App_Utils
 */
class Bluehost_Admin_App_Utils {
	/**
	 * Subpage Titles (get lowercase for slugs)
	 *
	 * @var array
	 */
	public static $subpages = array(
		'Home',
		'Themes',
		'Plugins',
		'Services',
		'Staging',
		'Settings',
	);

	/**
	 * @return array
	 */
	public static function get_app_menu() {
		$pages = self::$subpages;
		if ( ! self::is_php_7() ) {
			unset( $pages['Staging'] );
		}

		return $pages;
	}

	/**
	 * @return bool
	 */
	public static function is_php_7() {
		return version_compare( phpversion(), '7.0.0' ) >= 0;
	}

	/**
	 * @return string
	 */
	public static function get_bluehost_site_id() {
		return SiteMeta::get_id();
	}
}
