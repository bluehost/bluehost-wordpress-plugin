<?php
/**
 * Handle updates for version 2.5.0.
 *
 * @package Bluehost
 */

// Sync the plugin's auto-update setting with the new one in WP Core for major auto-updates.
$plugin_auto_update = get_option( 'allow_major_auto_core_updates', 'true' );

if ( 'false' === $plugin_auto_update ) {
	update_option( 'auto_update_core_major', 'disabled' );
} else {
	update_option( 'auto_update_core_major', 'enabled' );
}
