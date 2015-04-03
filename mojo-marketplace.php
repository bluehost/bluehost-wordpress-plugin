<?php
/*
Plugin Name: MOJO Marketplace
Description: This plugin adds shortcodes, widgets, and themes to your WordPress site.
Version: 0.7.1
Author: Mike Hansen
Author URI: http://mikehansen.me?utm_campaign=plugin&utm_source=mojo_wp_plugin
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
GitHub Plugin URI: mojoness/mojo-marketplace-wp-plugin
GitHub Branch: production
*/

//Do not access file directly
if ( ! defined( 'WPINC' ) ) { die; }

define( 'MM_BASE_DIR', plugin_dir_path( __FILE__ ) );
define( 'MM_BASE_URL', plugin_dir_url( __FILE__ ) );

if ( file_exists( MM_BASE_DIR . 'inc/brand.php' ) ) {
	require_once( MM_BASE_DIR . 'inc/brand.php' );
}
require_once( MM_BASE_DIR . 'inc/base.php' );
require_once( MM_BASE_DIR . 'inc/menu.php' );
require_once( MM_BASE_DIR . 'inc/themes-widget.php' );
require_once( MM_BASE_DIR . 'inc/shortcode-generator.php' );
require_once( MM_BASE_DIR . 'inc/mojo-themes.php' );
require_once( MM_BASE_DIR . 'inc/styles.php' );
require_once( MM_BASE_DIR . 'inc/plugin-search.php' );
require_once( MM_BASE_DIR . 'inc/jetpack.php' );
require_once( MM_BASE_DIR . 'inc/user-experience-tracking.php' );
require_once( MM_BASE_DIR . 'inc/notifications.php' );
require_once( MM_BASE_DIR . 'inc/spam-prevention.php' );
require_once( MM_BASE_DIR . 'inc/updates.php' );
require_once( MM_BASE_DIR . 'inc/coming-soon.php' );
require_once( MM_BASE_DIR . 'inc/tests.php' );
require_once( MM_BASE_DIR . 'inc/editor-prompt.php' );

// Load base classes for github updater only in the admin and only with cap
function mm_load_updater() {
	if ( is_admin() ) {
		/*
		Check class_exist because this could be loaded in a different plugin
		*/
		if ( ! class_exists( 'GitHub_Updater' ) ) {
			require_once( MM_BASE_DIR . 'updater/class-github-updater.php' );
		}
		if ( ! class_exists( 'GitHub_Updater_GitHub_API' ) ) {
			require_once( MM_BASE_DIR . 'updater/class-github-api.php' );
		}
		if ( ! class_exists( 'GitHub_Plugin_Updater' ) ) {
			require_once( MM_BASE_DIR . 'updater/class-plugin-updater.php' );
		}
		new GitHub_Plugin_Updater;
	}
}
add_action( 'admin_init', 'mm_load_updater' );
