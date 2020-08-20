<?php

function mojo_cache_toggle() {
	if ( isset( $_POST['cache_level'] ) && is_numeric( $_POST['cache_level'] ) ) {
		$cache_level = (int) $_POST['cache_level'];
		$response    = mojo_cache_add( 'page' );

		if ( isset( $response['status'] ) && 'success' == $response['status'] ) {
			$update = update_option( 'endurance_cache_level', $cache_level );
			if ( true == $update ) {
				$response = array(
					'status'  => 'success',
					'message' => 'Cache level updated successfully.',
				);
			} else {
				$response = array(
					'status'  => 'error',
					'message' => 'Unable to update cache level.',
				);
			}
		} else {
			$response = array(
				'status'  => 'error',
				'message' => 'Unable to add cache plugin.',
			);
		}

		echo json_encode( $response );
	}
	die;
}
add_action( 'wp_ajax_mm_cache', 'mojo_cache_toggle' );

function mojo_cache_add( $type = null ) {
	$cache = array();
	if ( ! is_dir( WP_CONTENT_DIR . '/mu-plugins' ) ) {
		mkdir( WP_CONTENT_DIR . '/mu-plugins' );
	}
	switch ( $type ) {
		case 'page':
			$cache['code']     = 'https://raw.githubusercontent.com/bluehost/endurance-page-cache/production/endurance-page-cache.php';
			$cache['location'] = WP_CONTENT_DIR . '/mu-plugins/endurance-page-cache.php';
			break;

		case 'object':
			if ( class_exists( 'memcached' ) || class_exists( 'memcache' ) ) {
				$response = array(
					'status'  => 'error',
					'message' => 'Object cache coming soon.',
				);
			} else {
				$response = array(
					'status'  => 'error',
					'message' => 'Object cache not available on your hosting plan.',
				);
			}
			break;
	}
	if ( isset( $cache['code'] ) && isset( $cache['location'] ) ) {
		$request = wp_remote_get( $cache['code'] );
		if ( ! is_wp_error( $request ) ) {
			file_put_contents( $cache['location'], $request['body'] );
			if ( file_exists( $cache['location'] ) ) {
				$response = array(
					'status'  => 'success',
					'message' => ucfirst( $type ) . ' cache added successfully.',
				);
			}
		}
	}

	if ( ! isset( $response ) ) {
		$response = array(
			'status'  => 'error',
			'message' => 'Unable to add ' . ucfirst( $type ) . ' cache.',
		);
	}
	return $response;

}

function mojo_cache_remove( $type = null ) {
	switch ( $type ) {
		case 'browser':
			// do not remove cache file since it powers both types and the CDN.
			break;
		case 'page':
			// do not remove cache file since it powers both types and the CDN.
			break;
		case 'object':
			$file = WP_CONTENT_DIR . '/object-cache.php';
			break;
	}
	if ( file_exists( $file ) ) {
		if ( unlink( $file ) ) {
			$response = array(
				'status'  => 'success',
				'message' => ucfirst( $type ) . ' cache removed successfully.',
			);
		} else {
			$response = array(
				'status'  => 'error',
				'message' => 'Could not remove cache file.',
			);
		}
	} else {
		$response = array(
			'status'  => 'error',
			'message' => 'Cache file does not exist.',
		);
	}
	return $response;
}

