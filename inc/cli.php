<?php

if ( ! class_exists( 'WP_CLI' ) ) {
	return;
}

class WP_MOJO_Commands extends WP_CLI_Command {

	/**
	 * Single Sign On via WP-CLI
	 *
	 * @param  null  $args        Unused.
	 * @param  array $assoc_args  Additional args to define which user or role to login as.
	 */
	public function sso( $args, $assoc_args ) {
		$salt = wp_generate_password( 32, false );
		$nonce = wp_create_nonce( 'mojo-sso' );
		$hash = base64_encode( hash( 'sha256', $nonce . $salt, false ) );
		$hash = substr( $hash, 0, 64 );
		$minutes = 3;
		$params = array( 'action' => 'mmsso-check', 'salt' => $salt, 'nonce' => $nonce );
		$link = add_query_arg( $params, admin_url( 'admin-ajax.php' ) );

		if ( 0 != count( $assoc_args ) ) {
			if ( isset( $assoc_args['role'] ) ) {
				$user = get_users( array( 'role' => 'administrator', 'number' => 1 ) );
				if ( is_array( $user ) && is_a( $user[0], 'WP_User' ) ) {
					$params['id'] = $user[0]->ID;
				}
			}

			if ( isset( $assoc_args['email'] ) ) {
				$user = get_user_by( 'email', $assoc_args['email'] );
				if ( is_a( $user, 'WP_User' ) ) {
					$params['id'] = $user->ID;
				}
			}

			if ( isset( $assoc_args['username'] ) ) {
				$user = get_user_by( 'login', $assoc_args['username'] );
				if ( is_a( $user, 'WP_User' ) ) {
					$params['id'] = $user->ID;
				}
			}

			if ( isset( $assoc_args['min'] ) ) {
				$minutes = (int) $assoc_args['min'];
			}
		}

		set_transient( 'mm_sso', $hash, MINUTE_IN_SECONDS * $minutes );

		$link = add_query_arg( $params, admin_url( 'admin-ajax.php' ) );
		WP_CLI::success( 'Single use login link valid for ' . $minutes . " minutes: \n" . $link );
	}

	/**
	 * Update the appearance of the plugin branding.
	 *
	 * @param  null  $args        Unused.
	 * @param  array $assoc_args  Remove or Update with new value.
	 */
	public function branding( $args, $assoc_args ) {
		if ( isset( $assoc_args['update'] ) ) {
			$brands = mm_api_cache( MM_ASSETS_URL . 'json/branding.json' );
			if ( ! is_wp_error( $brands ) && $brands = json_decode( $brands['body'] ) ) {
				$brands = (array) $brands;
				while ( false !== ( $brand = array_search( 'default', $brands ) ) ) {
					unset( $brands[ $brand ] );
				}
				$valid_brands = array_keys( $brands );
				if ( in_array( $assoc_args['update'], $valid_brands ) ) {
					if ( update_option( 'mm_brand', $assoc_args['update'] ) ) {
						WP_CLI::success( 'Plugin branding updated succesfully.' );
					} else {
						WP_CLI::error( 'Unable to update plugin branding.' );
					}
				} else {
					WP_CLI::log( 'Valid brands are : ' . "\n" . implode( "\n", $valid_brands ) );
					WP_CLI::error( 'Invalid update value.' );
				}
			}
		}
		if ( isset( $assoc_args['remove'] ) ) {
			if ( delete_option( 'mm_brand' ) ) {
				WP_CLI::success( 'Plugin branding removed succesfully.' );
			}
		}
	}
}
WP_CLI::add_command( 'mojo', 'WP_MOJO_Commands' );
