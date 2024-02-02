<?php
/**
 * Handle updates for version 2.0
 *
 * @package Bluehost
 */

// Delete old transients
delete_transient( 'mm_api_calls' );
