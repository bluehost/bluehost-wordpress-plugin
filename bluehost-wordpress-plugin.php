<?php
/**
 * Plugin Name: Bluehost
 * Description: This plugin integrates your WordPress site with the Bluehost control panel, including performance, security, and update features.
 * Version: 2.12.10
 * Tested up to: 6.0.2
 * Requires at least: 5.8
 * Requires PHP: 7.0
 * Author: Bluehost
 * Author URI: https://www.bluehost.com/
 * Text Domain: bluehost-wordpress-plugin
 * Domain Path: /languages
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package Bluehost
 */

use NewfoldLabs\WP\ModuleLoader\Container;
use NewfoldLabs\WP\ModuleLoader\Plugin;
use function NewfoldLabs\WP\ModuleLoader\container as setContainer;

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
define( 'BLUEHOST_PLUGIN_VERSION', '2.12.10' );
define( 'BLUEHOST_PLUGIN_FILE', __FILE__ );
define( 'BLUEHOST_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'BLUEHOST_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
if ( ! defined( 'NFD_HIIVE_URL' ) ) {
	define( 'NFD_HIIVE_URL', 'https://hiive.cloud/api' );
}

// Run Compatibility Scan
require_once BLUEHOST_PLUGIN_DIR . '/inc/compat/status.php';

if ( 'standard' !== Bluehost_Plugin_Compatibility_Status::get() ) {
	require BLUEHOST_PLUGIN_DIR . '/inc/compat/scan.php';
	$scan = new Bluehost_Plugin_Compatibility_Scan();
	Bluehost_Plugin_Compatibility_Status::set( $scan );

	// Safe Mode
	if ( 'standard' !== $scan->result ) {
		require BLUEHOST_PLUGIN_DIR . '/inc/compat/safe-mode.php';
		new Bluehost_Plugin_Compatibility_Safe_Mode( $scan );

		return;
	}
}

// Check PHP version before initializing to prevent errors if plugin is incompatible.
if ( version_compare( PHP_VERSION, '5.6', '>=' ) ) {
	require dirname( __FILE__ ) . '/bootstrap.php';
}

/*
 * Initialize container values for data module
 */
$bh_module_container = new Container();
// Set plugin to container
$bh_module_container->set(
	'plugin',
	$bh_module_container->service(
		function() {
			return new Plugin(
				array(
					'id'   => 'bluehost',
					'file' => BLUEHOST_PLUGIN_FILE,
				)
			);
		}
	)
);

// Complete the module loader setup by assigning the container
setContainer( $bh_module_container );
