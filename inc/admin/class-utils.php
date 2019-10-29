<?php

class Bluehost_Admin_App_Utils {
	/**
	 * Subpage Titles (get lowercased for slugs)
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

	public static function get_app_menu() {
		$pages = self::$subpages;
		if ( ! self::is_php_7() ) {
			unset( $pages['Staging'] );
		}

		return $pages;
	}

	public static function is_php_7() {
		return version_compare( phpversion(), '7.0.0' ) >= 0;
	}

	public static function get_bluehost_site_id() {
		return Bluehost_Site_ID::get();
	}
}
