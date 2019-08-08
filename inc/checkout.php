<?php

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
