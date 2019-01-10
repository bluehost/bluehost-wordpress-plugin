<?php
/**
 * File handles tracking the last time a user logged in.
 *
 * @package Mojo Marketplace
 */

add_action( 'wp_login', 'endurance_set_last_login', 10, 2 );

/**
 * Sets the time in ISO8601 format for the last time a user logged in.
 *
 * @param string   $username Current user login name
 * @param \WP_User $user Current user object
 */
function endurance_set_last_login( $username, WP_User $user ) {

	// Store last login for current user
	update_user_meta( $user->ID, 'eig_last_login', date( 'c' ) );

	// Store last login for entire site for any user that can impact content.
	if ( $user->has_cap( 'edit_posts' ) ) {
		update_option( 'eig_last_site_login', date( 'c' ) );
	}

}
