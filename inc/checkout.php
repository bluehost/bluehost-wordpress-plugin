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
		$pending_transactions = get_transient( 'mm_pending_transaction' );
		if ( property_exists( $order, 'order' ) && property_exists( $order->order, 'Order' ) && property_exists( $order->order->Order, 'id' ) ) {
			if ( is_array( $pending_transactions ) ) {
				$pending_transactions[] = $order->order->Order->id;
			} else {
				$pending_transactions = array( $order->order->Order->id );
			}
			set_transient( 'mm_pending_transaction', $pending_transactions, DAY_IN_SECONDS * 7 );
			$checkout_type = 'paypal';
		}
		echo json_encode( $order );
	} else {
		echo '{"status":"error","error":"Unable to process order."}';
	}
	$event = array(
		't'     => 'event',
		'ec'    => 'user_action',
		'ea'    => 'checkout_type',
		'el'    => ( isset( $checkout_type ) ) ? $checkout_type : 'mojo',
	);
	mm_ux_log( $event );
	die;
}
add_action( 'wp_ajax_mm_buy_now', 'mm_buy_now' );

function mm_record_transaction( $item ) {
	$pending_transactions = get_transient( 'mm_pending_transaction' );
	if ( false == $pending_transactions ) { return; }
	if ( property_exists( $item, 'order_details' ) ) {
		$order = $item->order_details;
	} else {
		return;
	}
	if ( property_exists( $order, 'id' ) && in_array( $order->id, $pending_transactions ) ) {
		$transaction = array(
			't'  => 'transaction',
			'ti' => $order->id,
			'ta' => get_option( 'mm_master_aff', '' ),
			'tr' => $order->order_total,
			'cu' => 'USD',
		);
		mm_ux_log( $transaction );
		$item = array(
			't' => 'item',
			'in' => $item->name,
			'ip' => $item->prices->single_domain_license,
			'iq' => $item->sales_count,
			'ic' => $item->id,
			'iv' => $item->type,
		);
		mm_ux_log( $item );
		$key = array_search( $order->id, $pending_transactions );
		unset( $pending_transactions[ $key ] );
		if ( ! empty( $pending_transactions ) ) {
			set_transient( 'mm_pending_transaction', $pending_transactions, DAY_IN_SECONDS );
		} else {
			delete_transient( 'mm_pending_transaction' );
		}
	}
	return;
}
