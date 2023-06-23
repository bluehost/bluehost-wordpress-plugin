<?php
/**
 * Handle updates for version 2.12.10
 *
 * @package Bluehost
 */

// Clear newfold_marketplace transient with update in wp-module-marketplace@1.4.0
if ( get_transient( 'newfold_marketplace' ) ) {
	delete_transient( 'newfold_marketplace' );
}
