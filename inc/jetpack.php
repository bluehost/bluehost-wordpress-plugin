<?php
/**
 * This file customizes Jetpack modules and blocks.
 *
 * @package WPPluginBluehost
 */

namespace Bluehost;

/**
 * Customize the default Jetpack modules that should be enabled.
 *
 * @param array $modules List of default enabled Jetpack modules
 *
 * @return array
 */
function customize_jetpack_default_modules( $modules ) {
	$modules[] = 'photon';
	$modules[] = 'sso';

	return array_unique( $modules );
}

add_filter( 'jetpack_get_default_modules', __NAMESPACE__ . '\\customize_jetpack_default_modules' );

/**
 * Unregister Jetpack blocks that we do not want enabled by default.
 *
 * @param array $blocks Collection of registered blocks.
 *
 * @return array
 */
function jetpack_unregister_blocks( $blocks ) {
	$blocks_to_deregister = array(
		'mailchimp',
		'revue',
	);
	foreach ( $blocks_to_deregister as $block_slug ) {
		$found = array_search( $block_slug, $blocks, true );
		if ( false !== $found ) {
			unset( $blocks[ $found ] );
		}
	}
	return $blocks;
}

add_filter( 'jetpack_set_available_blocks', __NAMESPACE__ . '\\jetpack_unregister_blocks' );

/**
 * Tell jetpack that the site is in construction mode.
 * See https://github.com/Automattic/jetpack/blob/trunk/projects/plugins/jetpack/_inc/lib/class.core-rest-api-endpoints.php#L1122-L1143
 */
function jetpack_construction() {
	if ( 'true' === get_option( 'nfd_coming_soon', 'false' ) ) {
		return true;
	}
}
add_filter( 'jetpack_is_under_construction_plugin', __NAMESPACE__ . '\\jetpack_construction' );

/**
 * Enable Sharing with Jetpack and WooCommerce
 */
function plugin_activated( $plugin, $network_activation ) {
	switch( $plugin ) {
		case 'woocommerce/woocommerce.php':
			// Enable the usage tracking option by default https://woocommerce.com/usage-tracking/
			update_option( 'woocommerce_allow_tracking', 'yes' );
			break;
		case 'jetpack/jetpack.php':
			// set the privacy settings to allow sharing information with analytics by default https://automattic.com/cookies/
			break;
	}
}

add_action( 'activated_plugin', __NAMESPACE__ . '\\plugin_activated', 10, 2 );