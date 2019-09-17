<?php
/**
 * Plugin Name: Bluehost
 * Description: This plugin integrates your WordPress site with the Bluehost control panel, including performance, security, and update features.
 * Version: 1.5
 * Author: Bluehost
 * Author URI: https://www.bluehost.com/
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package Bluehost
 */

use Endurance_WP_Plugin_Updater\Updater;

// Do not access file directly!
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Define constants
define( 'MM_VERSION', '1.5' );
define( 'MM_BASE_DIR', plugin_dir_path( __FILE__ ) );
define( 'MM_BASE_URL', plugin_dir_url( __FILE__ ) );
define( 'MM_ASSETS_URL', 'https://www.mojomarketplace.com/mojo-plugin-assets/' );

define( 'BLUEHOST_PLUGIN_VERSION', MM_VERSION );

// Composer autoloader
require dirname( __FILE__ ) . '/vendor/autoload.php';

// Handle any upgrade routines
if ( is_admin() ) {

	// Handle plugin updates
	new Updater( 'bluehost', 'bluehost-wordpress-plugin', 'bluehost-wordpress-plugin/bluehost.php' );

	require dirname( __FILE__ ) . '/inc/upgrade-handler.php';

	$upgrade_handler = new Bluehost_Upgrade_Handler(
		dirname( __FILE__ ) . '/upgrades',
		get_option( 'bluehost_plugin_version', BLUEHOST_PLUGIN_VERSION ),
		BLUEHOST_PLUGIN_VERSION
	);

	$did_upgrade = $upgrade_handler->maybe_upgrade();
	if ( $did_upgrade ) {
		update_option( 'bluehost_plugin_version', BLUEHOST_PLUGIN_VERSION, true );
	}
}

// Require files
require dirname( __FILE__ ) . '/inc/class-access-token.php';
require dirname( __FILE__ ) . '/inc/class-response-utilities.php';
require dirname( __FILE__ ) . '/inc/class-site-meta.php';
require_once MM_BASE_DIR . 'inc/admin.php';
require_once MM_BASE_DIR . 'inc/base.php';
require_once MM_BASE_DIR . 'inc/checkout.php';
require_once MM_BASE_DIR . 'inc/menu.php';
require_once MM_BASE_DIR . 'inc/shortcode-generator.php';
require_once MM_BASE_DIR . 'inc/mojo-themes.php';
require_once MM_BASE_DIR . 'inc/styles.php';
require_once MM_BASE_DIR . 'inc/plugin-search.php';
require_once MM_BASE_DIR . 'inc/jetpack.php';
require_once MM_BASE_DIR . 'inc/user-experience-tracking.php';
require_once MM_BASE_DIR . 'inc/notifications.php';
require_once MM_BASE_DIR . 'inc/staging.php';
require_once MM_BASE_DIR . 'inc/updates.php';
require_once MM_BASE_DIR . 'inc/coming-soon.php';
require_once MM_BASE_DIR . 'inc/tests.php';
require_once MM_BASE_DIR . 'inc/track-last-login.php';
require_once MM_BASE_DIR . 'inc/performance.php';
require_once MM_BASE_DIR . 'inc/partners.php';
require_once MM_BASE_DIR . 'inc/rest-api/rest-api.php';

mm_require( MM_BASE_DIR . 'inc/branding.php' );
// mm_require( MM_BASE_DIR . 'updater.php' );

// Check proper PHP and bring CLI loader online
if ( version_compare( PHP_VERSION, '5.3.29' ) >= 0 ) {
	mm_require( MM_BASE_DIR . 'inc/cli-init.php' );
}

mm_require( MM_BASE_DIR . 'inc/admin-page-notifications-blocker.php' );

if ( is_admin() ) {
	// Keep the Bluehost API access token fresh.
	add_action( 'shutdown', array( 'Bluehost_Access_Token', 'maybe_refresh_token' ) );
}
