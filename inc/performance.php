<?php

function mm_cache_toggle() {
	if ( isset( $_POST['type'] ) && isset( $_POST['current_status'] ) ) {
		$defaults = array(
			'page'    => 'disabled',
			'browser' => 'disabled',
			'object'  => 'disabled',
		);
		$cache_settings = get_option( 'mm_cache_settings' );
		$cache_settings = wp_parse_args( $cache_settings, $defaults );
		$valid_cache_names = array(
			'browser',
			'page',
			'object',
		);
		$valid_status = array(
			'enabled',
			'disabled',
		);

		if ( in_array( $_POST['current_status'], $valid_status ) ) {
			$new_status = ( 'disabled' == $_POST['current_status'] ) ? 'enabled': 'disabled';
		} else {
			$response = array( 'status' => 'error', 'message' => 'Invalid status.' );
		}

		if ( in_array( $_POST['type'], $valid_cache_names ) && ! isset( $response ) ) {
			if ( 'enabled' == $new_status ) {
				$response = mm_cache_add( $_POST['type'] );
			} else {
				$response = mm_cache_remove( $_POST['type'] );
			}
			if ( 'object' != $_POST['type'] && 'success' == $response['status'] ) {
				save_mod_rewrite_rules();
			}
		} else {
			$response = array( 'status' => 'error', 'message' => 'Invalid cache type.' );
		}

		if ( 'success' == $response['status'] ) {
			$cache_settings[ $_POST['type'] ] = $new_status;
			update_option( 'mm_cache_settings', $cache_settings );
		}
		echo json_encode( $response );
	}
	die;
}
add_action( 'wp_ajax_mm_cache', 'mm_cache_toggle' );

function mm_cache_add( $type = null ) {
	$cache = array();
	if ( ! is_dir( WP_CONTENT_DIR . '/mu-plugins' ) ) {
		mkdir( WP_CONTENT_DIR . '/mu-plugins' );
	}
	switch ( $type ) {
		case 'browser':
			$cache['code'] = 'https://raw.githubusercontent.com/bluehost/endurance-browser-cache/production/endurance-browser-cache.php';
			$cache['location'] = WP_CONTENT_DIR . '/mu-plugins/endurance-browser-cache.php';
			break;

		case 'page':
			$cache['code'] = 'https://raw.githubusercontent.com/bluehost/endurance-page-cache/production/endurance-page-cache.php';
			$cache['location'] = WP_CONTENT_DIR . '/mu-plugins/endurance-page-cache.php';
			break;

		case 'object':
			if ( class_exists( 'memcached' ) || class_exists( 'memcache' ) ) {
				$response = array( 'status' => 'error', 'message' => 'Object cache coming soon.' );
			} else {
				$response = array( 'status' => 'error', 'message' => 'Object cache not available on your hosting plan.' );
			}
			break;
	}
	if ( isset( $cache['code'] ) && isset( $cache['location'] ) ) {
		$request = wp_remote_get( $cache['code'] );
		if ( ! is_wp_error( $request ) ) {
			file_put_contents( $cache['location'], $request['body'] );
			if ( file_exists( $cache['location'] ) ) {
				$response = array( 'status' => 'success', 'message' => ucfirst( $type ) . ' cache added successfully.' );
			}
		}
	}

	if ( ! isset( $response ) ) {
		$response = array( 'status' => 'error', 'message' => 'Unable to add ' . ucfirst( $type ) . ' cache.' );
	}
	return $response;

}

function mm_cache_remove( $type = null ) {
	switch ( $type ) {
		case 'browser':
			$file = WP_CONTENT_DIR . '/mu-plugins/endurance-browser-cache.php';
			break;
		case 'page':
			$file = WP_CONTENT_DIR . '/mu-plugins/endurance-page-cache.php';
			break;
		case 'object':
			$file = WP_CONTENT_DIR . '/object-cache.php';
			break;
	}
	if ( file_exists( $file ) ) {
		if ( unlink( $file ) ) {
			$response = array( 'status' => 'success', 'message' => ucfirst( $type ) . ' cache removed successfully.' );
		} else {
			$response = array( 'status' => 'error', 'message' => 'Could not remove cache file.' );
		}
	} else {
		$response = array( 'status' => 'error', 'message' => 'Cache file does not exist.' );
	}
	return $response;
}
