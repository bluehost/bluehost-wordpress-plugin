<?php

namespace Bluehost;

/**
 * Class LoginRedirect
 *
 * @package Bluehost
 */
class LoginRedirect {

	/**
	 * Initialize the login redirect functionality.
	 */
	public static function init() {
		add_action( 'login_redirect', array( __CLASS__, 'on_login_redirect' ), 10, 3 );
		add_action( 'login_init', array( __CLASS__, 'on_login_init' ), 10, 3 );
		add_filter( 'login_form_defaults', array( __CLASS__, 'filter_login_form_defaults' ) );
		add_filter( 'newfold_sso_success_url_default', array( __CLASS__, 'get_default_redirect_url' ) );
	}

	/**
	 * Get default redirect URL.
	 *
	 * @param string $url
	 *
	 * @return string
	 */
	public static function get_default_redirect_url( $url ) {
		return current_user_can( 'manage_options' ) ? self::get_bluehost_dashboard_url() : $url;
	}

	/**
	 * Set the $_REQUEST['redirect_to'] value on the login_init action since there isn't a better way to do it before
	 * WordPress automatically defaults it to the WordPress dashboard URL.
	 */
	public static function on_login_init() {
		if ( ! isset( $_REQUEST['redirect_to'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$_REQUEST['redirect_to'] = self::get_bluehost_dashboard_url();
		}
	}

	/**
	 * Set default redirect used in the wp_login_form() function.
	 *
	 * @param array $defaults Collection of existing defaults.
	 *
	 * @return array
	 */
	public static function filter_login_form_defaults( array $defaults ) {
		$defaults['redirect'] = self::get_bluehost_dashboard_url();

		return $defaults;
	}

	/**
	 * Customize the login redirect URL if one hasn't already been set.
	 *
	 * @param string   $redirect_to           Current redirect URL.
	 * @param string   $requested_redirect_to Requested redirect URL.
	 * @param \WP_User $user                  WordPress user.
	 *
	 * @return string
	 */
	public static function on_login_redirect( $redirect_to, $requested_redirect_to, $user ) {

		if ( self::is_user( $user ) ) {
			// If no redirect is defined and the user is an administrator, redirect to the Bluehost dashboard.
			if ( empty( $requested_redirect_to ) && self::is_administrator( $user ) ) {
				return self::get_bluehost_dashboard_url();
			}

			// If the user isn't an admin and the redirect is to the Bluehost dashboard, point them to the WP dashboard instead.
			if ( ! self::is_administrator( $user ) && self::is_bluehost_redirect( $requested_redirect_to ) ) {
				return admin_url( '/' );
			}
		}

		return $redirect_to;
	}

	/**
	 * Check if we have a valid user.
	 *
	 * @param \WP_User $user The WordPress user object.
	 *
	 * @return bool
	 */
	public static function is_user( $user ) {
		return $user && is_object( $user ) && is_a( $user, 'WP_User' );
	}

	/**
	 * Check if a user is an administrator.
	 *
	 * @param \WP_User $user WordPress user.
	 *
	 * @return bool
	 */
	public static function is_administrator( $user ) {
		return self::is_user( $user ) && $user->has_cap( 'manage_options' );
	}

	/**
	 * Check if the current redirect is to the Bluehost plugin.
	 *
	 * @param string $redirect The current redirect URL.
	 *
	 * @return bool
	 */
	public static function is_bluehost_redirect( $redirect ) {
		return false !== strpos( $redirect, admin_url( 'admin.php?page=bluehost' ) );
	}

	/**
	 * Get the Bluehost dashboard URL.
	 *
	 * @return string
	 */
	public static function get_bluehost_dashboard_url() {
		return admin_url( 'admin.php?page=bluehost#/home' );
	}

}
