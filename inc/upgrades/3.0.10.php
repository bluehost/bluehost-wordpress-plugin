<?php
/**
 * Handle updates for version 3.0.10
 *
 * @package Bluehost
 */

/**
 * Reset the connection attempts counter.
 **/
update_option( 'nfd_data_connection_attempts', 0 );
