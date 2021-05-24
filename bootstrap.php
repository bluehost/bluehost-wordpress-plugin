<?php

use Bluehost\AdminBar;
use Bluehost\BuildAssets;
use Bluehost\LoginRedirect;
use Bluehost\UpgradeHandler;
use Endurance_WP_Plugin_Updater\Updater;

// Define constants
define( 'MOJO_ASSETS_URL', 'https://www.mojomarketplace.com/mojo-plugin-assets/' );

// Composer autoloader
require __DIR__ . '/vendor/autoload.php';

// Handle plugin updates
if ( is_admin() || ( defined( 'DOING_CRON' ) && DOING_CRON ) || ( defined( 'WP_CLI' ) && WP_CLI ) ) {
	new Updater( 'bluehost', 'bluehost-wordpress-plugin', 'bluehost-wordpress-plugin/bluehost-wordpress-plugin.php' );
}

// Handle any upgrade routines
if ( is_admin() ) {

	// Handle plugin upgrades
	$upgrade_handler = new UpgradeHandler(
		BLUEHOST_PLUGIN_DIR . '/inc/upgrades',
		get_option( 'bluehost_plugin_version', '1.0' ),
		BLUEHOST_PLUGIN_VERSION
	);

	$did_upgrade = $upgrade_handler->maybe_upgrade();
	if ( $did_upgrade ) {
		update_option( 'bluehost_plugin_version', BLUEHOST_PLUGIN_VERSION, true );
	}
}

AdminBar::init();
BuildAssets::init();
LoginRedirect::init();

// Require files
require __DIR__ . '/inc/admin.php';
require __DIR__ . '/inc/admin-page-notifications-blocker.php';
require __DIR__ . '/inc/base.php';
require __DIR__ . '/inc/cli-init.php';
require __DIR__ . '/inc/coming-soon.php';
require __DIR__ . '/inc/jetpack.php';
require __DIR__ . '/inc/menu.php';
require __DIR__ . '/inc/mojo-themes.php';
require __DIR__ . '/inc/Notifications/bootstrap.php';
require __DIR__ . '/inc/partners.php';
require __DIR__ . '/inc/performance.php';
require __DIR__ . '/inc/plugin-search.php';
require __DIR__ . '/inc/shortcode-generator.php';
require __DIR__ . '/inc/styles.php';
require __DIR__ . '/inc/track-last-login.php';
require __DIR__ . '/inc/updates.php';
require __DIR__ . '/inc/user-experience-tracking.php';
require __DIR__ . '/inc/RestApi/rest-api.php';
