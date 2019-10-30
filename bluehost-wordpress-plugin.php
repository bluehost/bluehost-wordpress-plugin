<?php
/**
 * Plugin Name: Bluehost
 * Description: This plugin integrates your WordPress site with the Bluehost control panel, including performance, security, and update features.
 * Version: 2.0
 * Requires at least: 4.7
 * Requires PHP: 5.6
 * Author: Bluehost
 * Author URI: https://www.bluehost.com/
 * Text Domain: bluehost-wordpress-plugin
 * Domain Path: /languages
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package Bluehost
 */

// Do not access file directly!
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Define constants
define( 'BLUEHOST_PLUGIN_VERSION', '2.0' );
define( 'BLUEHOST_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'BLUEHOST_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Plugin compatibility check
global $pagenow;
if ( 'plugins.php' === $pagenow ) {
	require dirname( __FILE__ ) . '/inc/plugin-compatibility-check.php';
	$plugin_check = new Bluehost_Plugin_Compatibility_Check( __FILE__ );
	// Required PHP extensions
	$plugin_check->req_php_extensions = array( 'iconv' );
	$plugin_check->check_plugin_requirements();
}

// Check PHP version before initializing to prevent errors if plugin is incompatible.
if ( version_compare( PHP_VERSION, '5.6', '>=' ) ) {
	require dirname( __FILE__ ) . '/bootstrap.php';
}
