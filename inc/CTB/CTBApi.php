<?php

namespace Bluehost\CTB;

use Bluehost\SiteMeta;
use Endurance\WP\Module\Data\HubConnection;
use WP_Error;

/**
 * Class CTBApi
 *
 * @package Bluehost\CTB
 */
class CTBApi {

	/**
	 * Register notification routes.
	 */
	public static function registerRoutes() {

		// Add route for fetching a CTB
		register_rest_route(
			'bluehost/v1',
			'/ctb/(?P<id>[a-zA-Z0-9-]+)',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
				'callback'            => function ( \WP_REST_Request $request ) {

					$response = wp_remote_get(
						BH_HUB_URL . '/sites/v1/ctb/' . $request->get_param( 'id' ) . '',
						array(
							'headers' => array(
								'Content-Type'  => 'application/json',
								'Accept'        => 'application/json',
								'Authorization' => 'Bearer ' . HubConnection::get_auth_token(),
							),
							'timeout' => 20,
						)
					);

					if ( $response instanceof WP_Error ) {
						return $response;
					}

					return new \WP_REST_Response( json_decode( wp_remote_retrieve_body( $response ) ), wp_remote_retrieve_response_code( $response ) );
				},
			)
		);

		// Add route for purchasing a CTB
		register_rest_route(
			'bluehost/v1',
			'/ctb/(?P<id>[a-zA-Z0-9-]+)',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
				'callback'            => function ( \WP_REST_Request $request ) {

					$ctb_id = $request->get_param( 'id' );
					$payload = array(
						'ctb_id'  => $ctb_id,
						'site_id' => SiteMeta::get_id(),
					);

					$response = wp_remote_post(
						BH_HUB_URL . '/sites/v1/ctb/' . $ctb_id . '/purchase',
						array(
							'headers' => array(
								'Content-Type'  => 'application/json',
								'Accept'        => 'application/json',
								'Authorization' => 'Bearer ' . HubConnection::get_auth_token(),
							),
							'body'    => wp_json_encode( $payload ),
							'timeout' => 20,
						)
					);

					if ( $response instanceof WP_Error ) {
						return $response;
					}

					return new \WP_REST_Response( json_decode( wp_remote_retrieve_body( $response ) ), wp_remote_retrieve_response_code( $response ) );
				},
			)
		);
	}

}
