<?php
/**
 * Plugin Name: The Bluehost Plugin
 * Description: This plugin integrates your WordPress site with the Bluehost control panel, including performance, security, and update features.
 * Version: 2.13.0
 * Tested up to: 6.2
 * Requires at least: 5.9
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
define( 'BLUEHOST_PLUGIN_VERSION', '2.13.0' );
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
		function () {
			return new Plugin(
				array(
					'id'           => 'bluehost',
					'file'         => BLUEHOST_PLUGIN_FILE,
					'brand'        => get_option( 'mm_brand', 'bluehost' ),
					'install_date' => get_option( 'bh_plugin_install_date' ),
				)
			);
		}
	)
);

$wordpress_hosting_page = ( get_option( 'mm_brand' ) === 'Bluehost_India' ) ? 'https://www.bluehost.in/wordpress' : 'https://bluehost.com/wordpress';
$my_panel               = ( get_option( 'mm_brand' ) === 'Bluehost_India' ) ? 'https://my.bluehost.in/' : 'https://my.bluehost.com/';

// Set a value - scoped to comingsoon index
$bh_module_container->set(
	'comingsoon',
	array(
		'admin_app_url'       => admin_url( 'admin.php?page=bluehost#/home' ),
		'template_h1'         => __( 'A New WordPress Site!', 'bluehost-wordpress-plugin' ),
		'template_h2'         => __( 'Coming Soon!', 'bluehost-wordpress-plugin' ),
		'template_login_btn'  => true,
		'template_footer_t'   => sprintf(
		/* translators: %1$s is replaced with opening link tag taking you to bluehost.com/wordpress, %2$s is replaced with closing link tag, %3$s is replaced with opening link tag taking you to login page, %4$s is replaced with closing link tag, %5$s is replaced with opening link tag taking you to my.bluehost.com, %6$s is replaced with closing link tag */
			esc_html__( 'A %1$sBluehost%2$s powered website. Is this your website? Log in to %3$sWordPress%4$s or %5$sBluehost%6$s.', 'bluehost-wordpress-plugin' ) . '&nbsp;',
			'<a href="' . esc_url( $wordpress_hosting_page ) . '" target="_blank" rel="noopener noreferrer nofollow">',
			'</a>',
			'<a href="' . esc_url( wp_login_url() ) . '">',
			'</a>',
			'<a href="' . esc_url( $my_panel ) . '" target="_blank" rel="noopener noreferrer nofollow">',
			'</a>'
		),
		'template_page_title' => sprintf(
		/* translators: %s: Blog name */
			__( '%s &mdash; Coming Soon', 'bluehost-wordpress-plugin' ),
			esc_html( get_option( 'blogname' ) )
		),
		'admin_bar_text'      => '<div style="background-color: #ffcf00; color: #191936; padding: 0 1rem;">' . __( 'Coming Soon Active', 'bluehost-wordpress-plugin' ) . '</div>',
		'admin_notice_text'   => sprintf(
		/* translators: %1$s is replaced with the opening link tag and %2$s is replaced with the closing link tag, %3$s is the opening link tag to preview the page, %4$s is the closing link tag. */
			__( 'Your site is currently displaying a %1$scoming soon page%2$s. Once you are ready, %3$slaunch your site%4$s.', 'bluehost-wordpress-plugin' ),
			'<a href="' . get_home_url() . '?preview=coming_soon" title="' . __( 'Preview the coming soon landing page', 'bluehost-wordpress-plugin' ) . '">',
			'</a>',
			'<a href="' . esc_url( admin_url( 'admin.php?page=bluehost#/home' ) ) . '">',
			'</a>'
		),
		'template_styles'     => esc_url( BLUEHOST_PLUGIN_URL . 'static/coming-soon.css' ),
	)
);

// Complete the module loader setup by assigning the container
setContainer( $bh_module_container );
