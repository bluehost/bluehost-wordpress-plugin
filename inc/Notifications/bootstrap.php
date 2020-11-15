<?php

namespace Bluehost\Notifications;

add_action( 'admin_notices', array( AdminNotices::class, 'maybeRenderAdminNotices' ) );
add_action( 'rest_api_init', array( NotificationsApi::class, 'registerRoutes' ) );

add_filter(
	'bluehost_admin_page_data',
	function ( $data ) {

		// Grab the latest settings using an interal REST API request
		$request = new \WP_REST_Request( 'GET', '/bluehost/v1/notifications' );
		$request->set_query_params( array( 'context' => 'bluehost-plugin' ) );
		$response = rest_do_request( $request );
		$server   = rest_get_server();

		$data['notifications'] = $server->response_to_data( $response, false );

		return $data;
	}
);
