<?php

/**
 * Customize the default Jetpack modules that should be enabled.
 *
 * @param array $modules List of default enabled Jetpack modules
 *
 * @return array
 */
function mm_customize_jetpack_default_modules( $modules ) {
	$modules[] = 'photon';
	$modules[] = 'sso';

	return array_unique( $modules );
}

add_filter( 'jetpack_get_default_modules', 'mm_customize_jetpack_default_modules' );
