<?php

/**
 * Customize the default Jetpack modules that should be enabled.
 *
 * @param array $modules List of default enabled Jetpack modules
 *
 * @return array
 */
function bluehost_customize_jetpack_default_modules( $modules ) {
	$modules[] = 'photon';
	$modules[] = 'sso';

	return array_unique( $modules );
}

add_filter( 'jetpack_get_default_modules', 'bluehost_customize_jetpack_default_modules' );

/**
 * Unregister the MailChimp block.
 *
 * @param array $blocks Collection of registered blocks.
 *
 * @return array
 */
function bluehost_jetpack_unregister_mailchimp_block( $blocks ) {
	$found = array_search( 'mailchimp', $blocks, true );
	if ( false !== $found ) {
		unset( $blocks[ $found ] );
	}

	return $blocks;
}

add_filter( 'jetpack_set_available_blocks', 'bluehost_jetpack_unregister_mailchimp_block' );

function bluehost_jetpack_connection_redirect() {
	if ( isset( $_GET['page'] ) && in_array( $_GET['page'], array( 'mojo-jetpack-connect-bounce', 'bluehost-jetpack-connect-bounce' ) ) ) {
		if ( class_exists( 'Jetpack' ) ) {
			wp_redirect( Jetpack::init()->build_connect_url( true ), 302 );
		} else {
			// In the future this should be a Jetpack product page.
			wp_safe_redirect( admin_url( 'admin.php?page=bluehost' ), 301 );
		}
	}
}
add_action( 'admin_init', 'bluehost_jetpack_connection_redirect' );
