<?php
/**
 * Blueprint WordPress Plugin
 *
 * @package           WPPluginBlueprint
 * @author            Newfold Digital
 * @copyright         Copyright 2023 by Newfold Digital - All rights reserved.
 * @license           GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name:       The Bluehost Plugin
 * Plugin URI:        https://blueprint.com
 * Description:       WordPress plugin that integrates a WordPress site with the Blueprint control panel, including performance, security, and update features.
 * Version:           0.1.0
 * Requires at least: 4.7
 * Requires PHP:      5.6
 * Tested up to:      6.2
 * Author:            Blueprint
 * Author URI:        https://blueprint.com
 * Text Domain:       wp-plugin-blueprint
 * Domain Path:       /languages
 * License:           GPL 2.0 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 */

namespace Blueprint;

// Do not allow multiple copies of the Blueprint Plugin to be active
if ( defined( 'BLUEPRINT_PLUGIN_VERSION' ) ) {
	exit;
}

// Define constants
define( 'BLUEPRINT_PLUGIN_VERSION', '0.1.0' );
define( 'BLUEPRINT_PLUGIN_FILE', __FILE__ );
define( 'BLUEPRINT_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'BLUEPRINT_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
if ( ! defined( 'NFD_HIIVE_URL' ) ) {
	define( 'NFD_HIIVE_URL', 'https://hiive.cloud/api' );
}

define( 'BLUEPRINT_BUILD_DIR', BLUEPRINT_PLUGIN_DIR . 'build/' . BLUEPRINT_PLUGIN_VERSION );
define( 'BLUEPRINT_BUILD_URL', BLUEPRINT_PLUGIN_URL . 'build/' . BLUEPRINT_PLUGIN_VERSION );

global $pagenow;
if ( 'plugins.php' === $pagenow ) {

	require BLUEPRINT_PLUGIN_DIR . '/inc/plugin-php-compat-check.php';

	$plugin_check = new Plugin_PHP_Compat_Check( __FILE__ );

	$plugin_check->min_php_version = '5.3';
	$plugin_check->min_wp_version  = '4.7';

	$plugin_check->check_plugin_requirements();
}

// Check NFD plugin incompatibilities
require_once BLUEPRINT_PLUGIN_DIR . '/inc/plugin-nfd-compat-check.php';
$nfd_plugins_check = new NFD_Plugin_Compat_Check( BLUEPRINT_PLUGIN_FILE );
// Defer to Incompatible plugin, self-deactivate
$nfd_plugins_check->incompatible_plugins = array(
	'The Bluehost Plugin' => 'bluehost-wordpress-plugin/bluehost-wordpress-plugin.php',
);
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
