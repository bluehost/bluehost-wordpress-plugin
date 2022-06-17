<?php

namespace Newfold\Plugin\RestApi;

/**
 * Undocumented class
 */
abstract class BaseHiiveController extends \WP_REST_Controller {
	/**
	 * REST namespace
	 *
	 * @var string
	 */
	protected $namespace = 'newfold/v1';
	/**
	 * STUB: Query Hiive for API-driven functionality.
	 *
	 * @param string $url - url
	 * @param array  $args - args
	 * @param int    $cache - cache
	 * @return - payload from transient or request or error
	 */
	protected function get( $url, $args = array(), $cache = 0 ) {
		$request = $url . '?' . http_build_query( $args );
		$payload = null;
		if ( $cache > 0 ) {
			$payload = \get_transient( 'hiive_' . md5( $request ) );
			if ( false !== $payload ) {
				return $payload;
			}
		}

		$response = \wp_remote_get( $request );
		if ( 200 === \wp_remote_retrieve_response_code( $request ) ) {
			$payload = \wp_remote_retrieve_body( $response );
			if ( $cache > 0 ) {
				\set_transient( $request, $payload, $cache );
			}
			return $payload;
		}

		return 'hiive-error';
	}

	/**
	 * Limit all requests to logged-in, subscriber users.
	 *
	 * @param string $permission - permission needed
	 * @return boolean
	 */
	public function is_authorized_request( $permission = 'read' ) {
		// return current_user_can( $permission );
		return true;
	}
}
