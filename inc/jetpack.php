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
 * Unregister Jetpack blocks that we do not want enabled by default.
 *
 * @param array $blocks Collection of registered blocks.
 *
 * @return array
 */
function bluehost_jetpack_unregister_blocks( $blocks ) {
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

add_filter( 'jetpack_set_available_blocks', 'bluehost_jetpack_unregister_blocks' );

/**
 * Provides links that the SSO can utilize to redirect customers directly to the Jetpack connection.
 *
 * @return void
 */
function bluehost_jetpack_connection_redirect() {
	if ( isset( $_GET['page'] ) && in_array( $_GET['page'], array( 'mojo-jetpack-connect-bounce', 'bluehost-jetpack-connect-bounce' ) ) ) {
		if ( class_exists( 'Jetpack' ) ) {
			wp_redirect( Jetpack::init()->build_connect_url( true ), 302 );
		} else {
			// In the future this should be a Jetpack product page.
			wp_safe_redirect( admin_url( 'admin.php?page=bluehost' ), 302 );
		}
	}
}

add_action( 'admin_init', 'bluehost_jetpack_connection_redirect' );

/**
 * Registers non-menu pages to leverage as redirects for the Jetpack connection.
 *
 * @return void
 */
function bluehost_jetpack_connect_menu() {
	add_submenu_page( null, __( 'Connect Jetpack', 'bluehost-wordpress-plugin' ), __( 'Connect Jetpack', 'bluehost-wordpress-plugin' ), 'manage_options', 'mojo-jetpack-connect-bounce', '__return_false' );
	add_submenu_page( null, __( 'Connect Jetpack', 'bluehost-wordpress-plugin' ), __( 'Connect Jetpack', 'bluehost-wordpress-plugin' ), 'manage_options', 'bluehost-jetpack-connect-bounce', '__return_false' );
}
add_action( 'admin_menu', 'bluehost_jetpack_connect_menu' );
