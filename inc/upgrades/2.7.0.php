<?php
/**
 * Handle updates for version 2.7.0.
 *
 * Sync the plugin's auto-update settings with the new, WordPress Core options.
 *
 * @package Bluehost
 */

if ( ! function_exists( 'get_plugins' ) ) {
	require_once ABSPATH . 'wp-admin/includes/plugin.php';
}

$auto_update_plugins = get_option( 'auto_update_plugin', 'true' );

if ( 'true' === $auto_update_plugins ) {
	update_site_option( 'auto_update_plugins', array_keys( get_plugins() ) );
}

$auto_update_themes = get_option( 'auto_update_theme', 'true' );

if ( 'true' === $auto_update_themes ) {
	update_site_option( 'auto_update_themes', array_keys( wp_get_themes() ) );
}
