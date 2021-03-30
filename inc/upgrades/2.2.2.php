<?php
/**
 * Handle updates for version 2.2.2
 *
 * @package Bluehost
 */

// Deactivate the Mojo plugin since this plugin is meant to replace it
require_once ABSPATH . 'wp-admin/includes/plugin.php';
if ( is_plugin_active( 'mojo-marketplace-wp-plugin/mojo-marketplace.php' ) ) {
	deactivate_plugins( 'mojo-marketplace-wp-plugin/mojo-marketplace.php' );
}

// Remove old cron schedules
wp_clear_scheduled_hook( 'mm_cron_hourly' );
wp_clear_scheduled_hook( 'mm_cron_twicedaily' );
wp_clear_scheduled_hook( 'mm_cron_daily' );
wp_clear_scheduled_hook( 'mm_cron_weekly' );
wp_clear_scheduled_hook( 'mm_cron_monthly' );
