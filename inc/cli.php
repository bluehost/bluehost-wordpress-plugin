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

	/**
	 * Remove Orphaned Postmeta.
	 *
	 * @param  null  $args        Unused.
	 * @param  array $assoc_args  Unused.
	 */
	public function remove_orphan_post_meta( $args, $assoc_args ) {
		global $wpdb;
		$sql = 'DELETE pm
			FROM ' . $wpdb->base_prefix . 'postmeta pm
			LEFT JOIN ' . $wpdb->base_prefix . 'posts wp ON wp.ID = pm.post_id
			WHERE wp.ID IS NULL';
		$result = $wpdb->query( $sql );
		if ( false === $result ) {
			WP_CLI::error( 'Unable to remove orphaned postmeta.' );
		} elseif ( 0 === $result ) {
			WP_CLI::log( 'No orphaned postmeta found.' );
		} else {
			WP_CLI::success( 'Successfully removed ' . $result . ' orphaned postmeta records.' );
		}
	}

	/**
	 * Display Digest of Info.
	 *
	 * @param  null  $args        Unused.
	 * @param  array $assoc_args  Unused.
	 */
	public function digest( $args, $assoc_args ) {
		global $wpdb;
		global $wp_version;
		$details = array();
		$details['WP VERSION'] = $wp_version;
		$details['PHP VERSION'] = phpversion();
		$details['MYSQL VERSION'] = $wpdb->get_var( 'SHOW VARIABLES LIKE "version";', 1 );
		$details['ACTIVE THEME'] = get_option( 'stylesheet' );
		$details['ACTIVE PLUGINS'] = count( get_option( 'active_plugins' ) );
		$details['TOTAL PLUGINS'] = count( get_plugins() );
		$details['TOTAL THEMES'] = count( wp_get_themes() );
		$details['TOTAL POSTS'] = count( get_posts( array( 'post_type' => 'post' ) ) );
		$details['TOTAL PAGES'] = count( get_posts( array( 'post_type' => 'page' ) ) );
		$details['TOTAL MEDIA'] = count( get_posts( array( 'post_type' => 'attachment' ) ) );
		$comments_count = wp_count_comments();
		$details['TOTAL COMMENTS'] = $comments_count->total_comments;
		$details['COMMENTS APPROVED'] = $comments_count->approved;
		$details['COMMENTS MODERATION'] = $comments_count->moderated;
		$details['COMMENTS SPAM'] = $comments_count->spam;
		$details['COMMENTS TRASHED'] = $comments_count->trash;
		$options = wp_load_alloptions();
		$all_transients = 0;
		$all_options = 0;
		foreach ( $options as $name => $value ) {
			if ( false !== strpos( $name, 'transient' ) ) {
				$all_transients++;
			} else {
				$all_options++;
			}
		}
		$details['ALL OPTIONS'] = $all_options;
		$details['ALL TRANSIENTS'] = $all_transients;
		$output = ' +' . str_pad( '', 21, '-' ) . '+' . str_pad( '', 32, '-' ) . "+ \n";
		$output .= ' |' . str_pad( 'NAME ', 21, ' ', STR_PAD_LEFT ) . '|' . str_pad( 'VALUE ', 32, ' ', STR_PAD_LEFT ) . "| \n";
		$output .= ' +' . str_pad( '', 21, '-' ) . '+' . str_pad( '', 32, '-' ) . "+ \n";
		foreach ( $details as $name => $value ) {
			$output .= ' |' . str_pad( $name, 20, ' ', STR_PAD_LEFT ) . ' | ' . str_pad( $value, 30, ' ', STR_PAD_LEFT ) . " | \n";
		}
		$output .= ' +' . str_pad( '', 21, '-' ) . '+' . str_pad( '', 32, '-' ) . "+ \n";
		echo $output;
	}
}
WP_CLI::add_command( 'mojo', 'WP_MOJO_Commands' );
