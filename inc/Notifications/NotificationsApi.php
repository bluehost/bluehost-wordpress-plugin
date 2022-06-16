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
							return is_string( $value ) && in_array( $value, array( 'bluehost-plugin', 'wp-admin-notice', 'wp-admin-prime' ), true );
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

		// Add route for dispatching events
		register_rest_route(
			'bluehost/v1',
			'/notifications/events',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'args'                => array(
					'action'   => array(
						'required'          => true,
						'description'       => __( 'Event action', 'bluehost-wordpress-plugin' ),
						'type'              => 'string',
						'sanitize_callback' => function ( $value ) {
							return sanitize_title( $value );
						},
					),
					'category' => array(
						'default'           => 'admin',
						'description'       => __( 'Event category', 'bluehost-wordpress-plugin' ),
						'type'              => 'string',
						'sanitize_callback' => function ( $value ) {
							return sanitize_title( $value );
						},
					),
					'data'     => array(
						'description' => __( 'Event data', 'bluehost-wordpress-plugin' ),
						'type'        => 'object',
					),
					'queue'    => array(
						'default'           => true,
						'description'       => __( 'Whether or not to queue the event', 'bluehost-wordpress-plugin' ),
						'type'              => 'boolean',
						'sanitize_callback' => function ( $value ) {
							return filter_var( $value, FILTER_VALIDATE_BOOLEAN );
						},
					),
				),
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
				'callback'            => function ( \WP_REST_Request $request ) {

					$request = new \WP_REST_Request( 'POST', '/newfold-data/v1/events' );
					$request->set_body( \WP_REST_Server::get_raw_data() );
					$request->set_header( 'Content-Type', 'application/json' );
					$response = rest_do_request( $request );
					// The hub API returns arrays of Notification objects. Each Notification has an array of
					// location objects. However, the WP REST API converts all nested objects to
					// associative arrays in a standard HTTP response. Since this proxing through an internal
					// request, we end up with the original nested objects.
					// The encode/decode here standardizes to all associative arrays.
					$data = json_decode( wp_json_encode( $response->data ), true );

					if ( ! $request->get_param( 'queue' ) && 201 === intval( $response->get_status() ) ) {
						$notifications = Arr::get( $data, 'data', array() );
						set_transient( NotificationsRepository::TRANSIENT, $notifications, 5 * MINUTE_IN_SECONDS );
					}

					return new \WP_REST_Response( $data, $response->get_status() );
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

					if ( $notifications->has( $id ) ) {
						// Delete standard notifications
						$deleted = $notifications->get( $id )->asArray();
						$notifications->remove( $id );
					} else {
						// Delete realtime notifications
						$deleted      = array( 'id' => $id );
						$notification = new Notification( $deleted );
						$notification->dismiss();
					}

					return rest_ensure_response( $deleted );
				},
				'permission_callback' => function () {
					return current_user_can( 'manage_options' );
				},
			)
		);

	}

}
