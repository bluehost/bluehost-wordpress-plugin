<?php
/**
 * Handle updates for version 2.2.2
 *
 * @package Bluehost
 */

// Deactivate the Mojo plugin since this plugin is meant to replace it
if ( is_plugin_active( 'mojo-marketplace-wp-plugin/mojo-marketplace.php' ) ) {
	deactivate_plugins( 'mojo-marketplace-wp-plugin/mojo-marketplace.php' );
}

