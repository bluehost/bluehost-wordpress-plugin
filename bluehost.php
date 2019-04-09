<?php
/**
 * Plugin Name: Bluehost
 * Description: This plugin integrates your WordPress site with the Bluehost control panel, including performance, security, and update features.
 * Version: 1.4.3
 * Author: Bluehost
 * Author URI: https://www.bluehost.com/
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
define( 'MM_VERSION', '1.4.3' );
define( 'MM_BASE_DIR', plugin_dir_path( __FILE__ ) );
define( 'MM_BASE_URL', plugin_dir_url( __FILE__ ) );
define( 'MM_ASSETS_URL', 'https://www.mojomarketplace.com/mojo-plugin-assets/' );

define( 'BLUEHOST_PLUGIN_VERSION', MM_VERSION );

// Composer autoloader
if ( version_compare( phpversion(), 5.3, '<' ) ) {
	require dirname( __FILE__ ) . '/vendor/autoload_52.php';
} else {
	require dirname( __FILE__ ) . '/vendor/autoload.php';
}

// Handle any upgrade routines
if ( is_admin() ) {

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
require dirname( __FILE__ ) . '/inc/base.php';
require dirname( __FILE__ ) . '/inc/checkout.php';
require dirname( __FILE__ ) . '/inc/menu.php';
require dirname( __FILE__ ) . '/inc/shortcode-generator.php';
require dirname( __FILE__ ) . '/inc/mojo-themes.php';
require dirname( __FILE__ ) . '/inc/styles.php';
require dirname( __FILE__ ) . '/inc/plugin-search.php';
require dirname( __FILE__ ) . '/inc/jetpack.php';
require dirname( __FILE__ ) . '/inc/user-experience-tracking.php';
require dirname( __FILE__ ) . '/inc/notifications.php';
require dirname( __FILE__ ) . '/inc/staging.php';
require dirname( __FILE__ ) . '/inc/updates.php';
require dirname( __FILE__ ) . '/inc/coming-soon.php';
require dirname( __FILE__ ) . '/inc/tests.php';
require dirname( __FILE__ ) . '/inc/track-last-login.php';
require dirname( __FILE__ ) . '/inc/performance.php';
require dirname( __FILE__ ) . '/inc/partners.php';

mm_require( dirname( __FILE__ ) . '/inc/branding.php' );
if ( mm_jetpack_bluehost_only() ) {
	$onboard_time = strtotime( get_option( 'mm_install_date', 0 ) ) + DAY_IN_SECONDS * 90;
	if ( $onboard_time > time() ) {
		mm_require( dirname( __FILE__ ) . '/vendor/automattic/jetpack-onboarding/jetpack-onboarding.php' );
		mm_require( dirname( __FILE__ ) . '/lib/jetpack-onboarding-tracks/jetpack-onboarding-tracks.php' );
	}
}
mm_require( dirname( __FILE__ ) . '/updater.php' );
// Check proper PHP and bring CLI loader online
if ( version_compare( PHP_VERSION, '5.3.29' ) >= 0 ) {
	mm_require( dirname( __FILE__ ) . '/inc/cli-init.php' );
}

mm_require( dirname( __FILE__ ) . '/inc/admin-page-notifications-blocker.php' );
