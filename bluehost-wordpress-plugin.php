<?php
/**
 * Bluehost WordPress Plugin
 *
 * @package           WPPluginBluehost
 * @author            Newfold Digital
 * @copyright         Copyright 2023 by Newfold Digital - All rights reserved.
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       The Bluehost Plugin
 * Plugin URI:        https://bluehost.com
 * Update URI:        https://github.com/bluehost/bluehost-wordpress-plugin
 * Description:       WordPress plugin that integrates a WordPress site with the Bluehost control panel, including performance, security, and update features.
 * Version:           3.5.0
 * Requires at least: 6.0
 * Requires PHP:      7.1
 * Tested up to:      6.3.2
 * Author:            Bluehost
 * Author URI:        https://bluehost.com
 * Text Domain:       wp-plugin-bluehost
 * Domain Path:       /languages
 * License:           GPL 2.0 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Bluehost;

// Do not allow multiple copies of the Bluehost Plugin to be active
if ( defined( 'BLUEHOST_PLUGIN_VERSION' ) ) {
	exit;
}

// Define constants
define( 'BLUEHOST_PLUGIN_VERSION', '3.5.0' );
define( 'BLUEHOST_PLUGIN_FILE', __FILE__ );
define( 'BLUEHOST_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'BLUEHOST_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
if ( ! defined( 'NFD_HIIVE_URL' ) ) {
	define( 'NFD_HIIVE_URL', 'https://hiive.cloud/api' );
}

if ( defined( 'BURST_SAFETY_MODE' ) && BURST_SAFETY_MODE ) {

	// Load alternate experience
	require __DIR__ . '/inc/alt-experience/init.php';

	// Short-circuit all plugin functionality
	return;
}

define( 'BLUEHOST_BUILD_DIR', BLUEHOST_PLUGIN_DIR . 'build/' . BLUEHOST_PLUGIN_VERSION );
define( 'BLUEHOST_BUILD_URL', BLUEHOST_PLUGIN_URL . 'build/' . BLUEHOST_PLUGIN_VERSION );

global $pagenow;
if ( 'plugins.php' === $pagenow ) {

	require BLUEHOST_PLUGIN_DIR . '/inc/plugin-php-compat-check.php';

	$plugin_check = new Plugin_PHP_Compat_Check( __FILE__ );

	$plugin_check->min_php_version = '7.1';
	$plugin_check->min_wp_version  = '6.0';

	$plugin_check->check_plugin_requirements();
}

// Check NFD plugin incompatibilities
require_once BLUEHOST_PLUGIN_DIR . '/inc/plugin-nfd-compat-check.php';
$nfd_plugins_check = new NFD_Plugin_Compat_Check( BLUEHOST_PLUGIN_FILE );
// Defer to Incompatible plugin, self-deactivate
$nfd_plugins_check->incompatible_plugins = array();
// Deactivate legacy plugin
$nfd_plugins_check->legacy_plugins = array(
	'The MOJO Marketplace'     => 'mojo-marketplace-wp-plugin/mojo-marketplace.php',
	'The MOJO Plugin'          => 'wp-plugin-mojo/wp-plugin-mojo.php',
	'The HostGator Plugin'     => 'wp-plugin-hostgator/wp-plugin-hostgator.php',
	'The Web.com Plugin'       => 'wp-plugin-web/wp-plugin-web.php',
	'The Crazy Domains Plugin' => 'wp-plugin-web/wp-plugin-crazy-domains.php',
);
$pass_nfd_check = $nfd_plugins_check->check_plugin_requirements();

// Check PHP version before initializing to prevent errors if plugin is incompatible.
if ( $pass_nfd_check && version_compare( PHP_VERSION, '5.3', '>=' ) ) {
	require dirname( __FILE__ ) . '/bootstrap.php';
}
