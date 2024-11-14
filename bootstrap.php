<?php
/**
 * Plugin bootstrap file
 *
 * @package WPPluginBluehost
 */

namespace Bluehost;

use WP_Forge\WPUpdateHandler\PluginUpdater;
use WP_Forge\UpgradeHandler\UpgradeHandler;
use NewfoldLabs\WP\ModuleLoader\Container;
use NewfoldLabs\WP\ModuleLoader\Plugin;
use NewfoldLabs\WP\Module\Features\Features;
use function NewfoldLabs\WP\ModuleLoader\container as setContainer;
use function NewfoldLabs\WP\Context\setContext;
use function NewfoldLabs\WP\Context\getContext;

// Composer autoloader
if ( is_readable( __DIR__ . '/vendor/autoload.php' ) ) {
	require __DIR__ . '/vendor/autoload.php';
} else {
	if ( 'local' === wp_get_environment_type() ) {
		wp_die( esc_html( __( 'Please install the Bluehost Plugin dependencies.', 'wp-plugin-bluehost' ) ) );
	}

	return;
}

/*
 * Initialize module settings via container
 */
$bluehost_module_container = new Container();

// Context setup
add_action(
	'newfold/context/set',
	function () {
		// set brand
		setContext( 'brand.name', 'bluehost' );
	}
);

// Set plugin to container
$bluehost_module_container->set(
	'plugin',
	$bluehost_module_container->service(
		function () {
			return new Plugin(
				array(
					'id'           => 'bluehost',
					'file'         => BLUEHOST_PLUGIN_FILE,
					'brand'        => get_option( 'mm_brand', 'bluehost' ),
					'install_date' => get_option( 'bluehost_plugin_install_date' ),
				)
			);
		}
	)
);

// Assign container values based on context
add_action(
	'plugins_loaded',
	function () {
		global $bluehost_module_container;

		// Performance default settings
		$cache_types = array( 'browser', 'skip404' );
		// Marketplace default settings
		$marketplace_brand = 'bluehost';

		// Platform overrides
		if ( 'atomic' === getContext( 'platform' ) ) {
			$cache_types       = array();
			$marketplace_brand = 'bluehost-cloud';
		}

		if ( $bluehost_module_container ) {
			$bluehost_module_container->set( 'cache_types', $cache_types );
			$bluehost_module_container->set( 'marketplace_brand', $marketplace_brand );
		}
	}
);

// Properly get branding links depending on market
$wordpress_hosting_page = ( get_option( 'mm_brand' ) === 'Bluehost_India' ) ? 'https://www.bluehost.in?utm_source=coming-soon-template&amp;utm_medium=bluehost_plugin' : 'https://bluehost.com?utm_source=coming-soon-template&amp;utm_medium=bluehost_plugin';
$my_panel               = ( get_option( 'mm_brand' ) === 'Bluehost_India' ) ? 'https://my.bluehost.in/web-hosting/cplogin' : 'https://my.bluehost.com/web-hosting/cplogin';
$website_guide_link     = 'https://www.bluehost.com/blog/how-to-create-a-website-guide/';
$migrate_link           = 'https://www.bluehost.com/blog/how-to-migrate-a-wordpress-website-to-a-new-server/';
$hosting_link           = 'https://www.bluehost.com/hosting/shared';

// Set coming soon values
$bluehost_module_container->set(
	'comingsoon',
	array(
		'admin_app_url'              => admin_url( 'admin.php?page=bluehost#/home' ),
		'template_h1'                => __( 'Coming Soon!', 'wp-plugin-bluehost' ),
		'template_h2'                => __( 'A New WordPress Site', 'wp-plugin-bluehost' ),
		'template_coming_soon_links' =>
			'<a href="' . esc_url( $website_guide_link ) . '" target="_blank" rel="noopener noreferrer nofollow">' .
			__( 'How to Build a Website: A Practical Guide to WordPress on Bluehost', 'wp-plugin-bluehost' ) .
			'</a><br/>' .
			'<a href="' . esc_url( $migrate_link ) . '" target="_blank" rel="noopener noreferrer nofollow">' .
			__( 'How to Migrate a Website to Bluehost?', 'wp-plugin-bluehost' ) .
			'</a><br/>' .
			'<a href="' . esc_url( $hosting_link ) . '" target="_blank" rel="noopener noreferrer nofollow">' .
			__( 'Why choose Bluehost for your WordPress site?', 'wp-plugin-bluehost' ) .
			'</a><br/>',
		'template_footer_t'          => sprintf(
			/* translators: %1$s is replaced with opening link tag taking you to bluehost.com/wordpress, %2$s is replaced with closing link tag, %3$s is replaced with opening link tag taking you to login page, %4$s is replaced with closing link tag, %5$s is replaced with opening link tag taking you to my.bluehost.com, %6$s is replaced with closing link tag */
			esc_html__( 'A %1$sBluehost%2$s powered website. Is this your website? Log in to %3$sWordPress%4$s or %5$sBluehost%6$s.', 'wp-plugin-bluehost' ) . '&nbsp;',
			'<a href="' . esc_url( $wordpress_hosting_page ) . '" target="_blank" rel="noopener noreferrer nofollow">',
			'</a>',
			'<a href="' . esc_url( wp_login_url() ) . '">',
			'</a>',
			'<a href="' . esc_url( $my_panel ) . '" target="_blank" rel="noopener noreferrer nofollow">',
			'</a>'
		),
		'template_page_title'        => sprintf(
			/* translators: %s: Blog name */
			__( '%s &mdash; Coming Soon', 'wp-plugin-bluehost' ),
			esc_html( get_option( 'blogname' ) )
		),
		'admin_bar_text'             => '<div style="background-color: #FEC101; color: #000; padding: 0 1rem;">' . __( 'Coming Soon Active', 'wp-plugin-bluehost' ) . '</div>',
		'admin_notice_text'          => sprintf(
			/* translators: %1$s is replaced with the opening link tag to preview the page, and %2$s is replaced with the closing link tag, %3$s is the opening link tag, %4$s is the closing link tag. */
			__( 'Your site is currently displaying a %1$scoming soon page%2$s. Once you are ready, %3$slaunch your site%4$s.', 'wp-plugin-bluehost' ),
			'<a href="' . get_home_url() . '?preview=coming_soon" title="' . __( 'Preview the coming soon landing page', 'wp-plugin-bluehost' ) . '">',
			'</a>',
			'<a href="' . esc_url( admin_url( 'admin.php?page=bluehost&nfd-target=coming-soon-section#/settings' ) ) . '">',
			'</a>'
		),
		'template_styles'            => esc_url( BLUEHOST_PLUGIN_URL . 'assets/styles/coming-soon.css' ),
	)
);

setContainer( $bluehost_module_container );

// Set up the updater endpoint and map values
$updateurl     = 'https://hiive.cloud/workers/release-api/plugins/bluehost/bluehost-wordpress-plugin'; // Custom API GET endpoint
$pluginUpdater = new PluginUpdater( BLUEHOST_PLUGIN_FILE, $updateurl );
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
$pluginUpdater->setDataOverrides(
	array(
		'banners' => array(
			'2x' => 'https://cdn.hiive.space/marketplace/vendors-assets/bluehost-banner.svg',
			'1x' => 'https://cdn.hiive.space/marketplace/vendors-assets/bluehost-banner.svg',
		),
		'icons'   => array(
			'2x' => 'https://cdn.hiive.space/marketplace/vendors-assets/bluehost-icon.svg',
			'1x' => 'https://cdn.hiive.space/marketplace/vendors-assets/bluehost-icon.svg',
		),
	)
);

// Handle any upgrade routines (only in the admin)
if ( is_admin() ) {

	// Handle plugin upgrades
	$upgrade_handler = new UpgradeHandler(
		BLUEHOST_PLUGIN_DIR . '/inc/upgrades',                    // Directory where upgrade routines live
		get_option( 'bluehost_plugin_version', '0.1.0' ), // Old plugin version (from database)
		BLUEHOST_PLUGIN_VERSION                                  // New plugin version (from code)
	);

	// Returns true if the old version doesn't match the new version
	$did_upgrade = $upgrade_handler->maybe_upgrade();

	if ( $did_upgrade ) {
		// If an upgrade occurred, update the new version in the database to prevent running the routine(s) again.
		update_option( 'bluehost_plugin_version', BLUEHOST_PLUGIN_VERSION, true );
	}
}

// Required files
require BLUEHOST_PLUGIN_DIR . '/inc/Admin.php';
require BLUEHOST_PLUGIN_DIR . '/inc/base.php';
require BLUEHOST_PLUGIN_DIR . '/inc/jetpack.php';
require BLUEHOST_PLUGIN_DIR . '/inc/LoginRedirect.php';
require BLUEHOST_PLUGIN_DIR . '/inc/partners.php';
require BLUEHOST_PLUGIN_DIR . '/inc/RestApi/CachingController.php';
require BLUEHOST_PLUGIN_DIR . '/inc/RestApi/SettingsController.php';
require BLUEHOST_PLUGIN_DIR . '/inc/RestApi/rest-api.php';
require BLUEHOST_PLUGIN_DIR . '/inc/settings.php';
require BLUEHOST_PLUGIN_DIR . '/inc/updates.php';
require BLUEHOST_PLUGIN_DIR . '/inc/YoastAI.php';

/* WordPress Admin Page & Features */
if ( is_admin() ) {
	new Admin();
}

// Instantiate the Features singleton
Features::getInstance();
