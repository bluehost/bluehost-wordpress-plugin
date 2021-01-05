<?php

use Bluehost\SiteMeta;

/**
 * Class Bluehost_Admin_App_Utils
 */
class Bluehost_Admin_App_Utils {

	/**
	 * Check if PHP is version 7.
	 *
	 * @return bool
	 */
	public static function is_php_7() {
		return version_compare( phpversion(), '7.0.0' ) >= 0;
	}

	/**
	 * Get the Bluehost site ID.
	 *
	 * @return string
	 */
	public static function get_bluehost_site_id() {
		return SiteMeta::get_id();
	}
}
