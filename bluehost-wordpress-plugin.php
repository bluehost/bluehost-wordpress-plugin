<?php
/**
 * Plugin Name: Bluehost
 * Description: This plugin integrates your WordPress site with the Bluehost control panel, including performance, security, and update features.
 * Version: 2.1
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

// @TODO Handle more gracefully with messaging
// Do not allow multiple copies of the Bluehost Plugin to be active
if ( defined( 'BLUEHOST_PLUGIN_VERSION' ) ) {
	exit;
}

// Define constants
define( 'BLUEHOST_PLUGIN_VERSION', '2.1' );
define( 'BLUEHOST_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'BLUEHOST_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

// Run Compatibility Scan
require BLUEHOST_PLUGIN_DIR . '/compat/status.php';

if ( 'standard' !== Bluehost_Plugin_Compatibility_Status::get() ) {
	require BLUEHOST_PLUGIN_DIR . '/compat/scan.php';
	$scan = new Bluehost_Plugin_Compatibility_Scan();
	Bluehost_Plugin_Compatibility_Status::set( $scan );

	// Safe Mode
	if ( 'standard' !== $scan->result ) {
		require BLUEHOST_PLUGIN_DIR . '/compat/safe-mode.php';
		new Bluehost_Plugin_Compatibility_Safe_Mode( $scan );

		return;
	}
}

// Check PHP version before initializing to prevent errors if plugin is incompatible.
if ( version_compare( PHP_VERSION, '5.6', '>=' ) ) {
	require dirname( __FILE__ ) . '/bootstrap.php';
}
