<?php
/**
 * This file adds filters for partler links.
 *
 * @package WPPluginBluehost
 */

namespace Bluehost;

/**
 * WPForms upgrade affiliate link.
 *
 * @param string $url Destination URL.
 *
 * @return string
 */
function wpforms_upgrade_affiliate_link( $url ) {
	return 'http://www.shareasale.com/r.cfm?B=837827&U=1258907&M=64312&urllink=' . rawurlencode( $url );
}

add_filter( 'wpforms_upgrade_link', __NAMESPACE__ . '\\wpforms_upgrade_affiliate_link' );

/**
 * All-in-One SEO upgrade affiliate link.
 *
 * @param string $url Destination URL.
 *
 * @return string
 */
function aioseo_upgrade_affiliate_link( $url ) {
	return 'http://www.shareasale.com/r.cfm?B=1491200&U=1258907&M=94778&urllink=' . rawurlencode( $url );
}

add_filter( 'aioseo_upgrade_link', __NAMESPACE__ . '\\aioseo_upgrade_affiliate_link' );

/**
 * Enable Sharing with WooCommerce
 *
 * @param string  $plugin the plugin
 * @param boolean $network_activation flag is network activated
 *
 * @return void
 */
function plugin_activated( $plugin, $network_activation ) {
	switch ( $plugin ) {
		case 'woocommerce/woocommerce.php':
			// Enable the usage tracking option by default https://woocommerce.com/usage-tracking/
			update_option( 'woocommerce_allow_tracking', 'yes' );
			break;
	}
}

add_action( 'activated_plugin', __NAMESPACE__ . '\\plugin_activated', 10, 2 );
