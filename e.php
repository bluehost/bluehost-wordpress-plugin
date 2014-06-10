<?php
require_once( '../../../wp-load.php' );

include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

/* if the plugin isn't active do not run any of the actions */
if ( ! is_plugin_active( 'mojo-marketplace/mojo-marketplace.php' ) && ! is_plugin_active( 'mojo-marketplace-wp-plugin/mojo-marketplace.php' ) ) {
	exit;
} else {
	$mm_approved_action = apply_filters( 'mm_approved_endpoint_action', array() );
	if( in_array( $_GET['action'], $mm_approved_action ) ) {
		do_action( 'mm_endpoint-' . $_GET['action'] );
	} else {
		wp_die( 'Invalid Action' );
	}
}

/* Example Usage

function mm_endpoint_filter_sso( $approved_actions ) {
	$approved_actions[] = "sso";
	return $approved_actions;
}
add_filter( 'mm_approved_endpoint_action', 'mm_endpoint_filter_sso' );

function mm_endpoint_action_sso() {
	//execute this code...
}
add_action( 'mm_endpoint-sso', 'mm_endpoint_action_sso' );

endpoint : wp-content/plugins/mojo-marketplace/e.php?action=sso

*/