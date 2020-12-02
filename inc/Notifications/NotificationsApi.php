<?php

namespace Bluehost\Notifications;

use WP_Forge\Helpers\Arr;

/**
 * Class NotificationsApi
 *
 * @package Bluehost\Notifications
 */
class NotificationsApi {

	/**
	 * Register notification routes.
	 */
	public static function registerRoutes() {

		// Add route for fetching notifications
		register_rest_route(
			'bluehost/v1',
			'/notifications',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => function ( \WP_REST_Request $request ) {

					$notifications = new NotificationsRepository();

					$results = $notifications
						->collection()
						->filter(
							function ( Notification $notification ) use ( $request ) {
								$params  = $request->get_params();
								$context = Arr::get( $params, 'context' );
								$page    = Arr::get( $params, 'page' );

								return $notification->shouldShow( $context, array( 'page' => $page ) );
							}
						)
						->map(
							function ( Notification $notification ) {
								return $notification->asArray();
							}
						)
						->values();

					return rest_ensure_response( $results );
				},
				'args'                => array(
					'context' => array(
						'required'          => true,
						'validate_callback' => function ( $value ) {
							return is_string( $value ) && in_array( $value, array( 'bluehost-plugin', 'wp-admin-notice' ), true );
						},
					),
					'page'    => array(
						'required'          => false,
						'validate_callback' => function ( $value, \WP_REST_Request $request ) {
							$context = $request->get_param( 'context' );
							if ( 'bluehost-plugin' === $context || 'wp-admin-notice' === $context ) {
								return is_string( $value );
							}

							return true;
						},
					),
				),
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			)
		);

		// Add route for dismissing notifications
		register_rest_route(
			'bluehost/v1',
			'/notifications/(?P<id>[a-zA-Z0-9-]+)',
			array(
				'methods'             => \WP_REST_Server::DELETABLE,
				'callback'            => function ( \WP_REST_Request $request ) {

					$id            = $request->get_param( 'id' );
					$notifications = new NotificationsRepository();
					$deleted       = $notifications->get( $id )->asArray();

					$notifications->remove( $id );

					$response = rest_ensure_response( $deleted );
					$response->set_status( 204 );

					return $response;
				},
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			)
		);

	}

}
