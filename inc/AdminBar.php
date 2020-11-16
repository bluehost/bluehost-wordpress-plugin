<?php

namespace Bluehost;

/**
 * Class AdminBar
 *
 * @package Bluehost
 */
class AdminBar {

	/**
	 * Initialize WP admin bar customizations.
	 */
	public static function init() {
		add_action( 'wp_before_admin_bar_render', array( __CLASS__, 'on_before_admin_bar_render' ) );
	}

	/**
	 * Customize the WP admin bar.
	 */
	public static function on_before_admin_bar_render() {
		/**
		 * Reference to the global WordPress admin bar instance.
		 *
		 * @var \WP_Admin_Bar
		 */
		global $wp_admin_bar;
		$wp_admin_bar->add_menu(
			array(
				'id'    => 'bluehost-support',
				'title' => __( 'Need help?', 'bluehost-wordpress-plugin' ),
				'href'  => admin_url( 'admin.php?page=bluehost#/help' ),
			)
		);
	}

}
