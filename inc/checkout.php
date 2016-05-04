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
