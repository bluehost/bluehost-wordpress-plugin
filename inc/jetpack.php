<?php
// Add Photon to the list of default modules activated when Jetpack is linked to WP.
function mm_customize_jetpack_default_modules( $modules ) {
	$modules[] = 'photon';
	return array_unique( $modules );
}
add_filter( 'jetpack_get_default_modules', 'mm_customize_jetpack_default_modules' );