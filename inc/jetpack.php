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

/**
 * Unregister the MailChimp block.
 *
 * @param array $blocks Collection of registered blocks.
 *
 * @return array
 */
function mm_jetpack_unregister_mailchimp_block( $blocks ) {
	$found = array_search( 'mailchimp', $blocks, true );
	if ( false !== $found ) {
		unset( $blocks[ $found ] );
	}

	return $blocks;
}

add_filter( 'jetpack_set_available_blocks', 'mm_jetpack_unregister_mailchimp_block' );
