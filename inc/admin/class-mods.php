<?php

/**
 * Class Bluehost_Admin_App_Mods class
 */
class Bluehost_Admin_App_Mods {

	/**
	 * Class instance.
	 *
	 * @var stdClass
	 */
	protected static $instance;

	/**
	 * Get class instance.
	 *
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
	 * Primary init method
	 */
	protected function primary_init() {
		if ( isset( $_GET['page'] ) && 'bluehost' === filter_input( INPUT_GET, 'page', FILTER_UNSAFE_RAW ) ) {
			\add_filter( 'admin_footer_text', array( $this, 'add_brand_to_admin_footer' ) );
			// \add_filter( 'update_footer', array( $this, 'add_plugin_version_to_update_footer'), 50 );
		}
	}

	/**
	 * Filter WordPress Admin Footer Text "Thank you for creating with..."
	 *
	 * @param string $footer_text The incoming footer text.
	 * @return string The filtered footer text.
	 */
	public function add_brand_to_admin_footer( $footer_text ) {
		$footer_text = \sprintf( \__( 'Thank you for creating with <a href="https://wordpress.org/">WordPress</a> and <a href="https://bluehost.com/">Bluehost</a>.', 'bluehost-wordpress-plugin' ) );
		return $footer_text;
	}

	/**
	 * Add the plugin version to the footer too
	 *
	 * @param string $version_text The incoming version text.
	 * @return string The filtered version text.
	 */
	public function add_plugin_version_to_update_footer( $version_text ) {

		$newfold_text = '<div id="newfold-unified-versions"><span id="newfold-brand-version"><span class="newfold-brand-logo" style="position: relative; top: 2.5px;"><img src="https://cdn.hiive.space/bluehost/mark.svg" width="14" height="14" /></span> '
		. \__( 'Bluehost', 'bluehost-wordpress-plugin' )
		. ' ' . BLUEHOST_PLUGIN_VERSION
		. '</span>'
		. '<span id="wordpress-version"><span class="dashicons dashicons-wordpress" style="font-size:14px;width:14px;height:14px;position: relative; top: 2.5px;"></span> ' . str_replace( \__( 'Version', 'bluehost-wordpress-plugin' ), \__( 'WordPress', 'bluehost-wordpress-plugin' ), $version_text ) . '</span></div>';
		return $newfold_text;
	}
}
