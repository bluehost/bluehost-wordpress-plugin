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
					$params['user'] = $user[0]->ID;
				}
			}

			if ( isset( $assoc_args['email'] ) ) {
				$user = get_user_by( 'email', $assoc_args['email'] );
				if ( is_a( $user, 'WP_User' ) ) {
					$params['user'] = $user->ID;
				}
			}

			if ( isset( $assoc_args['username'] ) ) {
				$user = get_user_by( 'login', $assoc_args['username'] );
				if ( is_a( $user, 'WP_User' ) ) {
					$params['user'] = $user->ID;
				}
			}

			if ( isset( $assoc_args['id'] ) ) {
				$user = get_user_by( 'ID', $assoc_args['id'] );
				if ( is_a( $user, 'WP_User' ) ) {
					$params['user'] = $user->ID;
				}
			}

			if ( isset( $assoc_args['min'] ) ) {
				$minutes = (int) $assoc_args['min'];
			}
		}

		set_transient( 'mm_sso', $hash, MINUTE_IN_SECONDS * $minutes );

		$link = add_query_arg( $params, admin_url( 'admin-ajax.php' ) );
		if ( ! isset( $assoc_args['url-only'] ) ) {
			WP_CLI::success( 'Single use login link valid for ' . $minutes . " minutes: \n" . $link );
		} else {
			WP_CLI::log( $link );
		}
	}


	/**
	 * Maintain the cache options.
	 *
	 * @param  array $args        Action and Type.
	 * @param  array $assoc_args  Unused.
	 */
	public function cache( $args, $assoc_args ) {
		$valid_actions = array(
			'add',
			'remove',
		);

		if ( ! is_array( $args ) || ! isset( $args[0] ) ) {
			WP_CLI::error( 'No action provided.' );
		}
		if ( ! in_array( $args[0], $valid_actions ) ) {
			WP_CLI::error( 'Invalid action. Use: add or remove.' );
		}

		$valid_cache_options = array(
			'page',
			'browser',
			'object',
		);

		if ( ! is_array( $args ) || ! isset( $args[1] ) ) {
			WP_CLI::error( 'No cache type selected.' );
		}

		if ( ! in_array( $args[1], $valid_cache_options ) ) {
			WP_CLI::error( 'Invalid cache type.' );
		}

		if ( 'add' == $args[0] ) {

			switch ( $args[1] ) {
				case 'page':
					$code = 'https://raw.githubusercontent.com/bluehost/endurance-page-cache/production/endurance-page-cache.php';
					if ( ! is_dir( WP_CONTENT_DIR . '/mu-plugins' ) ) {
						mkdir( WP_CONTENT_DIR . '/mu-plugins' );
						WPCLI::log( 'Creating mu-plugins directory.' );
					}
					$response = wp_remote_get( $code );
					if ( ! is_wp_error( $response ) && is_array( $response ) && isset( $response['body'] ) && strlen( $response['body'] ) > 200 ) {
						file_put_contents( WP_CONTENT_DIR . '/mu-plugins/endurance-page-cache.php', $response['body'] );
						if ( file_exists( WP_CONTENT_DIR . '/mu-plugins/endurance-page-cache.php' ) ) {
							save_mod_rewrite_rules();
							WP_CLI::success( 'Page cache enabled.' );
						}
					} else {
						WP_CLI::error( 'Error activating page cache.' );
					}
					break;

				case 'browser':
					$code = 'https://raw.githubusercontent.com/bluehost/endurance-browser-cache/production/endurance-browser-cache.php';
					if ( ! is_dir( WP_CONTENT_DIR . '/mu-plugins' ) ) {
						mkdir( WP_CONTENT_DIR . '/mu-plugins' );
					}
					$response = wp_remote_get( $code );
					if ( ! is_wp_error( $response ) && is_array( $response ) && isset( $response['body'] ) && strlen( $response['body'] ) > 200 ) {
						file_put_contents( WP_CONTENT_DIR . '/mu-plugins/endurance-browser-cache.php', $response['body'] );
						if ( file_exists( WP_CONTENT_DIR . '/mu-plugins/endurance-browser-cache.php' ) ) {
							save_mod_rewrite_rules();
							WP_CLI::success( 'Browser cache enabled.' );
						}
					} else {
						WP_CLI::error( 'Error activating browser cache.' );
					}
					break;

				case 'object':
					WP_CLI::log( 'Object cache coming soon!' );
					break;
			}
		} else if ( 'remove' == $args[0] ) {
			switch ( $args[1] ) {
				case 'page':
					if ( file_exists( WP_CONTENT_DIR . '/mu-plugins/endurance-page-cache.php' ) ) {
						if ( unlink( WP_CONTENT_DIR . '/mu-plugins/endurance-page-cache.php' ) ) {
							save_mod_rewrite_rules();
							WP_CLI::success( 'Page caching disabled.' );
						} else {
							WP_CLI::error( 'Unable to remove page cache file from mu-plugins directory.' );
						}
					} else {
						WP_CLI::log( 'Page caching plugin file does not exist.' );
					}
					break;

				case 'browser':
					if ( file_exists( WP_CONTENT_DIR . '/mu-plugins/endurance-browser-cache.php' ) ) {
						if ( unlink( WP_CONTENT_DIR . '/mu-plugins/endurance-browser-cache.php' ) ) {
							save_mod_rewrite_rules();
							WP_CLI::success( 'Browser caching disabled.' );
						} else {
							WP_CLI::error( 'Unable to remove browser cache file from mu-plugins directory.' );
						}
					} else {
						WP_CLI::log( 'Browser caching plugin file does not exist.' );
					}
					break;

				case 'browser':
					WP_CLI::log( 'Object cache coming soon!' );
					break;
			}
		}
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
						delete_transient( 'mm_icon_hash' );
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
				delete_transient( 'mm_icon_hash' );
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
		$siteurl = str_replace( array( 'http://', 'https://' ), '', get_option( 'siteurl' ) );
		$home = str_replace( array( 'http://', 'https://' ), '', get_option( 'home' ) );
		$template = get_option( 'template' );
		$stylesheet = get_option( 'stylesheet' );
		$details = array();
		$details['SITE URL'] = ( $home != $siteurl ) ? $home .':'. $siteurl: $home;
		$details['DB NAME'] = DB_NAME;
		$details['WP VERSION'] = $wp_version;
		$details['PHP VERSION'] = phpversion();
		$details['MYSQL VERSION'] = $wpdb->get_var( 'SHOW VARIABLES LIKE "version";', 1 );
		$details['ACTIVE THEME'] = ( $template != $stylesheet ) ? $template . ':' . $stylesheet : $template;
		$details['ACTIVE PLUGINS'] = count( get_option( 'active_plugins' ) );
		$details['TOTAL PLUGINS'] = count( get_plugins() );
		$details['TOTAL THEMES'] = count( wp_get_themes() );
		$details['TOTAL POSTS'] = count( get_posts( array( 'post_type' => 'post', 'numberposts' => -1 ) ) );
		$details['TOTAL PAGES'] = count( get_posts( array( 'post_type' => 'page', 'numberposts' => -1 ) ) );
		$details['TOTAL MEDIA'] = count( get_posts( array( 'post_type' => 'attachment', 'numberposts' => -1 ) ) );
		$comments_count = wp_count_comments();
		$details['TOTAL COMMENTS'] = $comments_count->total_comments;
		$details['COMMENTS APPROVED'] = $comments_count->approved;
		$details['COMMENTS MODERATION'] = $comments_count->moderated;
		$details['COMMENTS SPAM'] = $comments_count->spam;
		$details['COMMENTS TRASHED'] = $comments_count->trash;
		$details['CRON COUNT'] = count( get_option( 'cron' ) );
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

	public function staging( $args, $assoc_args ) {
		$valid_actions = array(
			'create',
			'clone',
			'destroy',
			'sso_staging',
			'deploy',
			'deploy_files',
			'deploy_db',
			'deploy_files_db',
			'save_state',
			'restore_state',
			'sso_production',
		);
		if ( ! is_array( $args ) || ! isset( $args[0] ) ) {
			WP_CLI::error( 'No function provided.' );
		}
		if ( ! in_array( $args[0], $valid_actions ) ) {
			WP_CLI::error( 'Invalid function.' );
		}
		switch ( $args[0] ) {
			case 'create':
				set_transient( 'mm_fresh_staging', true, 300 );
				$json_response = mm_cl( 'create' );
				break;

			case 'clone':
				$json_response = mm_cl( 'clone' );
				break;

			case 'destroy':
				$json_response = mm_cl( 'destroy' );
				break;

			case 'sso_staging':
				$user = get_users( array( 'role' => 'administrator', 'number' => 1 ) );
				if ( is_array( $user ) && is_a( $user[0], 'WP_User' ) ) {
					$user = $user[0];
					$user = $user->ID;
				}
				$json_response = mm_cl( 'sso_staging', array( $user ) );
				break;

			case 'sso_production':
				$user = get_users( array( 'role' => 'administrator', 'number' => 1 ) );
				if ( is_array( $user ) && is_a( $user[0], 'WP_User' ) ) {
					$user = $user[0];
					$user = $user->ID;
				}
				$json_response = mm_cl( 'sso_production', array( $user ) );
				break;

			case 'deploy':
				if ( ! isset( $args[1] ) || ! in_array( $args[1], array( 'files', 'db', 'database', 'all', 'both' ) ) ) {
					WP_CLI::error( 'Invalid deploy type.' );
				}
				if ( 'files' == $args[1] ) {
					$json_response = mm_cl( 'deploy_files' );
				}
				if ( 'db' == $args[1] || 'database' == $args[1] ) {
					$json_response = mm_cl( 'deploy_db' );
				}
				if ( 'all' == $args[1] || 'both' == $args[1] ) {
					$json_response = mm_cl( 'deploy_files_db' );
				}
				break;

			case 'deploy_files':
				$json_response = mm_cl( 'deploy_files' );
				break;

			case 'deploy_db':
				$json_response = mm_cl( 'deploy_db' );
				break;

			case 'deploy_files_db':
				$json_response = mm_cl( 'deploy_files_db' );
				break;

			case 'save_state':
				$json_response = mm_cl( 'save_state' );
				break;

			case 'restore_state':
				if ( ! isset( $assoc_args['revision'] ) ) {
					WP_CLI::error( 'Revision not provided.' );
				}
				$json_response = mm_cl( 'restore_state', array( esc_attr( $assoc_args['revision'] ) ) );
				break;
		}
		$json_response = preg_replace( '/[^[:print:]]/', '',$json_response );
		$json_response = str_replace( '[H[2J', '', $json_response );

		if ( $response = json_decode( $json_response ) ) {
			if ( 'success' == $response->status ) {
				WP_CLI::success( $response->message );
			} else {
				WP_CLI::error( $response->message );
			}
		} else {
			WP_CLI::error( 'Invalid JSON response.' );
		}
	}
}
$mm_command_alias = array(
	'mojo',
	'eig',
	'bluehost',
	'hostmonster',
	'justhost',
	'hostgator',
	'ipage',
	'ipower',
	'fatcow',
	'domain',
	'site5',
);

foreach ( $mm_command_alias as $brand ) {
	WP_CLI::add_command( $brand, 'WP_MOJO_Commands' );
}
