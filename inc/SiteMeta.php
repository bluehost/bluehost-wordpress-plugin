<?php
/**
 * Class for fetching site information as used by Bluehost.
 *
 * @package BluehostWordPressPlugin
 */

namespace Bluehost;

/**
 * Class SiteMeta
 */
class SiteMeta {

	/**
	 * Get the domain for the WordPress installation.
	 *
	 * @return string
	 */
	public static function get_domain() {
		return wp_parse_url( get_home_url(), PHP_URL_HOST );
	}

	/**
	 * Get the relative filesystem path to the root of the WordPress installation.
	 *
	 * @return string
	 */
	public static function get_path() {
		return strstr( ABSPATH, '/public_html/' );
	}

	/**
	 * Get the (Bluehost) site ID given the full path to the site root.
	 *
	 * @return string Site ID is the path encoded as UTF-8 and converted to hexadecimal.
	 */
	public static function get_id() {
		static $id = null;
		if ( is_null( $id ) ) {
			$path = self::get_path();
			if ( function_exists( 'iconv' ) ) {
				$id = bin2hex( iconv( mb_detect_encoding( $path, mb_detect_order(), true ), 'UTF-8', $path ) );
			} else {
				$id = bin2hex( $path );
			}
		}

		return $id;
	}

}
