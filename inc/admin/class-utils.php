<?php

use Bluehost\SiteMeta;

/**
 * Class Bluehost_Admin_App_Utils
 */
class Bluehost_Admin_App_Utils {

	/**
	 * Class instance.
	 *
	 * @var stdClass
	 */
	protected static $instance;

	/**
	 * Get class instance.
	 *
	 * @return Bluehost_Admin_App_Utils|stdClass
	 */
	public static function return_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Bluehost_Admin_App_Utils ) ) {
			self::$instance = new Bluehost_Admin_App_Utils();
		}

		return self::$instance;
	}

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

	/**
	 * Check if the active theme is FSE.
	 *
	 * @return bool
	 */
	public static function is_fse() {
		return is_readable( get_stylesheet_directory() . '/templates/index.html' );
	}

	/**
	 * Get the correct site editor url between FSE and classic Customizer.
	 *
	 * @return string
	 */
	public static function get_customize_site_url() {
		$is_fse      = self::is_fse();
		$destination = get_admin_url() . ( $is_fse ? 'site-editor.php' : 'customize.php' );

		return esc_url( $destination );
	}
}
