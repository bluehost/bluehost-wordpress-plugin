<?php

function mm_buy_now() {
	$id = preg_replace( "/[^A-Za-z0-9\-]/", '', $_POST['id'] );
	$price = preg_replace( "/[^0-9.]/", '', $_POST['price'] );
	$args = array(
		'headers' => array(
			'AuthType'      => 'Token',
			'x-api'         => get_transient( '_mm_session_token' ),
		),
		'body' => '{
			"items": [
				{
					"id": "' . $id . '",
					"license": "single_domain_license",
					"amount_paid": ' . $price . '
				}
			],
			"send_receipt": true,
			"affiliate_name": "' . get_option( 'mm_master_aff', '' ) . '",
			"redirect_to": "' . add_query_arg( array( 'page' => 'mojo-purchases', 'thank-you' => 'true' ), admin_url( 'admin.php' ) ) . '"
		}',
	);
	$response = wp_remote_post( 'https://api.mojomarketplace.com/api/v2/create_order', $args );
	if ( ! is_wp_error( $response ) && isset( $response['body'] ) ) {
		$order = json_decode( $response['body'] );
		echo json_encode( $order );
	} else {
		echo '{"status":"error","error":"Unable to process order."}';
	}
	die;
}
add_action( 'wp_ajax_mm_buy_now', 'mm_buy_now' );

function _mm_login(){
	if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) && false == get_transient( '_mm_session_token' ) ) {
		$args = array(
			'headers' => array(
				'AuthType'            => 'Token',
				'x-api-refresh-token' => get_option( '_mm_refresh_token' ),
			),
		);
		$session = wp_remote_get( 'https://api.mojomarketplace.com/api/v2/user_token', $args );
		if ( ! is_wp_error( $session ) && isset( $session['response']['code'] ) && 200 == $session['response']['code'] ) {
			$session_data = json_decode( $session['body'] );
			if ( property_exists( $session_data, 'status' ) && 'success' == $session_data->status && property_exists( $session_data, 'token' ) ) {
				set_transient( '_mm_session_token', $session_data->token, HOUR_IN_SECONDS );
			}
		}
	}
}
add_action( 'admin_init', '_mm_login' );
