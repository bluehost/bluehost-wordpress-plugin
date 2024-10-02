<?php
/**
 * Handle updates for version 2.13.2
 *
 * Delete bh_platform option since it's no longer used.
 *
 * @package Bluehost
 */

// Delete existing bh_platform option if found.
if ( get_option( 'bh_platform' ) ) {
	delete_option( 'bh_platform' );
}
