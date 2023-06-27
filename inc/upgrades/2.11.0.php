<?php
/**
 * Handle updates for version 2.11.0
 *
 * @package Bluehost
 */

// Sync the data module options to new version.
// Migrate any exisint legacy options to new options.

// option: bh_data_queue_lock > nfd_data_queue_lock
if ( get_option( 'bh_data_queue_lock' ) ) {
	add_option( 'nfd_data_queue_lock', get_option( 'bh_data_queue_lock' ) );
	delete_option( 'bh_data_queue_lock' );
}

// option: bh_data_queue > nfd_data_queue
if ( get_option( 'bh_data_queue' ) ) {
	add_option( 'nfd_data_queue', get_option( 'bh_data_queue' ) );
	delete_option( 'bh_data_queue' );
}

// option: bh_data_connection_attempts > nfd_data_connection_attempts
if ( get_option( 'bh_data_connection_attempts' ) ) {
	add_option( 'nfd_data_connection_attempts', get_option( 'bh_data_connection_attempts' ) );
	delete_option( 'bh_data_connection_attempts' );
}

// option: bh_data_token > nfd_data_token
if ( get_option( 'bh_data_token' ) ) {
	add_option( 'nfd_data_token', get_option( 'bh_data_token' ) );
	delete_option( 'bh_data_token' );
}
