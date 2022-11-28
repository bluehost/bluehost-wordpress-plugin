<?php
/**
 * Handle updates for version 2.12.11
 *
 * Update the plugin legacy coming soon option.
 *
 * @package Bluehost
 */

// Migrate any exisint legacy coming soon setting.
if ( 'true' === get_option( 'mm_coming_soon', 'false' ) ) {
	add_option( 'nfd_coming_soon', 'true' );
}
