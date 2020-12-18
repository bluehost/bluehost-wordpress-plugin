<?php

namespace Bluehost\Notifications;

add_action( 'admin_notices', array( AdminNotices::class, 'maybeRenderAdminNotices' ) );
add_action( 'rest_api_init', array( NotificationsApi::class, 'registerRoutes' ) );

add_action(
	'bh_event_log',
	function ( $key ) {
		$events = array(
			'login',
			'sso',
			'plugin_activated',
			'site_launched',
			'jetpack_connected',
			'first_post_published',
			'fifth_post_published',
			'plugin_search',
		);
		if ( in_array( $key, $events, true ) ) {
			$notifications = get_transient( 'bluehost_notifications' );
			set_transient( 'bluehost_notifications', array_filter( (array) $notifications ), 5 );
		}
	}
);

add_filter(
	'bluehost_admin_page_data',
	function ( $data ) {

		// Grab the latest settings using an internal REST API request
		$request = new \WP_REST_Request( 'GET', '/bluehost/v1/notifications' );
		$request->set_query_params( array( 'context' => 'bluehost-plugin' ) );
		$response = rest_do_request( $request );
		$server   = rest_get_server();

		$data['notifications'] = $server->response_to_data( $response, false );

		return $data;
	}
);
