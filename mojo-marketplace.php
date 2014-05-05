<?php
/*
Plugin Name: MOJO Marketplace
Description: This plugin adds shortcodes, widgets, and themes to your WordPress site.
Version: 0.5.4
Author: Mike Hansen
Author URI: http://mikehansen.me?utm_campaign=plugin&utm_source=mojo_wp_plugin
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
GitHub Plugin URI: mojoness/mojo-marketplace-wp-plugin
GitHub Branch: production
*/

//Do not access file directly
if ( ! defined( 'WPINC' ) ) { die; }

require_once( plugin_dir_path( __FILE__ ) . 'inc/base.php' );
require_once( plugin_dir_path( __FILE__ ) . 'inc/menu.php' );
require_once( plugin_dir_path( __FILE__ ) . 'inc/themes-widget.php' );
require_once( plugin_dir_path( __FILE__ ) . 'inc/shortcode-generator.php' );
require_once( plugin_dir_path( __FILE__ ) . 'inc/mojo-themes.php' );
require_once( plugin_dir_path( __FILE__ ) . 'inc/styles.php' );
require_once( plugin_dir_path( __FILE__ ) . 'inc/jetpack.php' );
require_once( plugin_dir_path( __FILE__ ) . 'inc/user-experience-tracking.php' );


// Load base classes for github updater only in the admin and only with cap
function mm_load_updater() {
	if ( is_admin() ) {
		/*
		Check class_exist because this could be loaded in a different plugin
		*/
		if( ! class_exists( 'GitHub_Updater' ) ) { 
			require_once( plugin_dir_path( __FILE__ ) . 'updater/class-github-updater.php' );
		}
		if( ! class_exists( 'GitHub_Updater_GitHub_API' ) ) {
			require_once( plugin_dir_path( __FILE__ ) . 'updater/class-github-api.php' );
		}
		if( ! class_exists( 'GitHub_Plugin_Updater' ) ) {
			require_once( plugin_dir_path( __FILE__ ) . 'updater/class-plugin-updater.php' );
		}
		new GitHub_Plugin_Updater;
	}
}
add_action( 'admin_init', 'mm_load_updater' );