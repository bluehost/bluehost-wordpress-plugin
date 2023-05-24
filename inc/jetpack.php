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
