<?php

/**
 * Handles a purchase.
 */
function mm_buy_now() {
	$id       = preg_replace( '/[^A-Za-z0-9\-]/', '', $_POST['id'] ); // phpcs:ignore WordPress.Security.NonceVerification.Missing
	$price    = preg_replace( '/[^0-9.]/', '', $_POST['price'] ); // phpcs:ignore WordPress.Security.NonceVerification.Missing
	$args     = array(
		'headers' => array(
			'AuthType' => 'Token',
			'x-api'    => get_transient( '_mm_session_token' ),
		),
		'body'    => wp_json_encode(
			array(
				'items'          => array(
					array(
						'id'          => $id,
						'license'     => 'single_domain_license',
						'amount_paid' => $price,
					),
				),
				'send_receipt'   => true,
				'affiliate_name' => get_option( 'mm_master_aff', '' ),
				'redirect_to'    => add_query_arg(
					array(
						'page'      => 'mojo-purchases',
						'thank-you' => 'true',
					),
					admin_url( 'admin.php' )
				),
			)
		),
	);
	$response = wp_remote_post( 'https://api.mojomarketplace.com/api/v2/create_order', $args );
	if ( ! is_wp_error( $response ) && isset( $response['body'] ) ) {
		$order                = json_decode( $response['body'] );
		$pending_transactions = get_transient( 'mm_pending_transaction' );
		if ( property_exists( $order, 'order' ) && property_exists( $order->order, 'Order' ) && property_exists( $order->order->Order, 'id' ) ) {
			if ( is_array( $pending_transactions ) ) {
				$pending_transactions[] = $order->order->Order->id;
			} else {
				$pending_transactions = array( $order->order->Order->id );
			}
			set_transient( 'mm_pending_transaction', $pending_transactions, DAY_IN_SECONDS * 7 );
		}
		echo wp_json_encode( $order );
	} else {
		echo wp_json_encode(
			array(
				'status' => 'error',
				'error'  => 'Unable to process order.',
			)
		);
	}
	die;
}

add_action( 'wp_ajax_mm_buy_now', 'mm_buy_now' );

/**
 * Record a transaction.
 *
 * @param object $item Item purchased
 */
function mm_record_transaction( $item ) {
	$pending_transactions = get_transient( 'mm_pending_transaction' );
	if ( false === $pending_transactions ) {
		return;
	}
	if ( property_exists( $item, 'order_details' ) ) {
		$order = $item->order_details;
	} else {
		return;
	}
	if ( property_exists( $order, 'id' ) && in_array( $order->id, $pending_transactions, true ) ) {
		$key = array_search( $order->id, $pending_transactions, true );
		unset( $pending_transactions[ $key ] );
		if ( ! empty( $pending_transactions ) ) {
			set_transient( 'mm_pending_transaction', $pending_transactions, DAY_IN_SECONDS );
		} else {
			delete_transient( 'mm_pending_transaction' );
		}
	}

}
