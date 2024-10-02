<?php
/**
 * Handle updates for version 2.2.3
 *
 * @package Bluehost
 */

// Remove the bad data connection transients
delete_transient( 'bh_data_connection_throttle' );
delete_transient( 'bh_data_verify_token' );

// Remove the options if those were used as fallback to transients
delete_option( 'bh_data_connection_throttle' );
delete_option( 'bh_data_verify_token' );
