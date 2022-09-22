<?php
/**
 * Handle updates for version 2.12.7
 *
 * @package Bluehost
 */

// Clear bh_cdata throttle values with throttle fix in bluehost-wp-customer-data@1.4.5
if ( get_option( 'bh_cdata_retry_count' ) ) {
	delete_option( 'bh_cdata_retry_count' );
}
if ( get_transient( 'bh_cdata_pause' ) ) {
	delete_transient( 'bh_cdata_pause' );
}
