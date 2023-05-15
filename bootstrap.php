<?php
/**
 * Plugin bootstrap file
 *
 * @package WPPluginBlueprint
 */

namespace Blueprint;

use WP_Forge\WPUpdateHandler\PluginUpdater;
use WP_Forge\UpgradeHandler\UpgradeHandler;
use NewfoldLabs\WP\ModuleLoader\Container;
use NewfoldLabs\WP\ModuleLoader\Plugin;
use function NewfoldLabs\WP\ModuleLoader\container as setContainer;

// Composer autoloader
if ( is_readable( __DIR__ . '/vendor/autoload.php' ) ) {
	require __DIR__ . '/vendor/autoload.php';
} else {
	if ( 'local' === wp_get_environment_type() ) {
		wp_die( esc_html( __( 'Please install the Blueprint Plugin dependencies.', 'wp-plugin-blueprint' ) ) );
	}
	return;
}

/*
 * Initialize coming soon module via container
 */
$blueprint_module_container = new Container(
	array(
		'cache_types' => array( 'browser', 'file', 'skip404' ),
	)
);

// Set plugin to container
$blueprint_module_container->set(
	'plugin',
	$blueprint_module_container->service(
		function() {
			return new Plugin(
				array(
					'id'           => 'blueprint',
					'file'         => BLUEPRINT_PLUGIN_FILE,
					'brand'        => get_option( 'mm_brand', 'blueprint' ),
					'install_date' => get_option( 'blueprint_plugin_install_date' ),
				)
			);
		}
	)
);

// BLUEPRINT to show products in marketplace for a different brand, 
// this should be updated or removed once a proper brand exists in hiive 
// for this plugin. This is placeholder now so that the blueprint plugin 
// can display some marketplace products.
$blueprint_module_container->set(
	'marketplace_brand',
	'bluehost'
);

// Set coming soon values
$blueprint_module_container->set(
	'comingsoon',
	array(
		'admin_app_url'       => admin_url( 'admin.php?page=blueprint#/home' ),
		'template_h1'         => __( 'Coming Soon!', 'wp-plugin-blueprint' ),
		'template_h2'         => __( 'A New WordPress Site', 'wp-plugin-blueprint' ),
		'template_footer_t'   => sprintf(
			/* translators: %1$s is replaced with opening link tag taking you to blueprint.com/wordpress, %2$s is replaced with closing link tag, %3$s is replaced with opening link tag taking you to login page, %4$s is replaced with closing link tag, %5$s is replaced with opening link tag taking you to my.blueprint.com, %6$s is replaced with closing link tag */
			esc_html__( 'A %1$sBlueprint%2$s powered website. Is this your website? Log in to %3$sWordPress%4$s or %5$sBlueprint%6$s.', 'wp-plugin-blueprint' ) . '&nbsp;',
			'<a href="' . esc_url( 'https://www.blueprint.com/websites/wordpress' ) . '" target="_blank" rel="noopener noreferrer nofollow">',
			'</a>',
			'<a href="' . esc_url( wp_login_url() ) . '">',
			'</a>',
			'<a href="' . esc_url( 'https://www.blueprint.com/my-account/account-center/login' ) . '" target="_blank" rel="noopener noreferrer nofollow">',
			'</a>'
		),
		'template_page_title' => sprintf(
			/* translators: %s: Blog name */
			__( '%s &mdash; Coming Soon', 'wp-plugin-blueprint' ),
			esc_html( get_option( 'blogname' ) )
		),
		'admin_bar_text'      => '<div style="background-color: #FEC101; color: #000; padding: 0 1rem;">' . __( 'Coming Soon Active', 'wp-plugin-blueprint' ) . '</div>',
		'admin_notice_text'   => sprintf(
			/* translators: %1$s is replaced with the opening link tag to preview the page, and %2$s is replaced with the closing link tag, %3$s is the opening link tag, %4$s is the closing link tag. */
			__( 'Your site is currently displaying a %1$scoming soon page%2$s. Once you are ready, %3$slaunch your site%4$s.', 'wp-plugin-blueprint' ),
			'<a href="' . get_home_url() . '?preview=coming_soon" title="' . __( 'Preview the coming soon landing page', 'wp-plugin-blueprint' ) . '">',
			'</a>',
			'<a href="' . esc_url( admin_url( 'admin.php?page=blueprint#/home' ) ) . '">',
			'</a>'
		),
		'template_styles'     => esc_url( BLUEPRINT_PLUGIN_URL . 'assets/styles/coming-soon.css' ),
	)
);
setContainer( $blueprint_module_container );

// Set up the updater endpoint and map values
$updateurl     = 'https://hiive.cloud/workers/release-api/plugins/newfold-labs/wp-plugin-blueprint'; // Custom API GET endpoint
$pluginUpdater = new PluginUpdater( BLUEPRINT_PLUGIN_FILE, $updateurl );
$pluginUpdater->setDataMap(
	array(
		'version'       => 'version.latest',
		'download_link' => 'download',
		'last_updated'  => 'updated',
		'requires'      => 'requires.wp',
		'requires_php'  => 'requires.php',
		'tested'        => 'tested.wp',
	)
);

// Handle any upgrade routines (only in the admin)
if ( is_admin() ) {

	// Handle plugin upgrades
	$upgrade_handler = new UpgradeHandler(
		BLUEPRINT_PLUGIN_DIR . '/inc/upgrades',            // Directory where upgrade routines live
		get_option( 'blueprint_plugin_version', '0.1.0' ), // Old plugin version (from database)
		BLUEPRINT_PLUGIN_VERSION                           // New plugin version (from code)
	);

	// Returns true if the old version doesn't match the new version
	$did_upgrade = $upgrade_handler->maybe_upgrade();

	if ( $did_upgrade ) {
		// If an upgrade occurred, update the new version in the database to prevent running the routine(s) again.
		update_option( 'blueprint_plugin_version', BLUEPRINT_PLUGIN_VERSION, true );
	}
}

// Required files
require BLUEPRINT_PLUGIN_DIR . '/inc/Admin.php';
require BLUEPRINT_PLUGIN_DIR . '/inc/AdminBar.php';
require BLUEPRINT_PLUGIN_DIR . '/inc/base.php';
require BLUEPRINT_PLUGIN_DIR . '/inc/jetpack.php';
require BLUEPRINT_PLUGIN_DIR . '/inc/partners.php';
require BLUEPRINT_PLUGIN_DIR . '/inc/performance.php';
require BLUEPRINT_PLUGIN_DIR . '/inc/RestApi/CachingController.php';
require BLUEPRINT_PLUGIN_DIR . '/inc/RestApi/SettingsController.php';
require BLUEPRINT_PLUGIN_DIR . '/inc/RestApi/rest-api.php';
require BLUEPRINT_PLUGIN_DIR . '/inc/settings.php';
require BLUEPRINT_PLUGIN_DIR . '/inc/updates.php';

/* WordPress Admin Page & Features */
if ( is_admin() ) {
	new Admin();
}

AdminBar::init();
