<?php

function mm_brand( $format = '%s' ) {
	return sprintf( $format, 'bluehost' );
}

function mm_plugin_details( $all_plugins ) {
	$plugin_file = 'mojo-marketplace-wp-plugin/mojo-marketplace.php';
	if ( isset( $all_plugins[ $plugin_file ] ) ) {
		switch ( mm_brand() ) {
			case 'bluehost':
				$branded_plugin_details = array(
					'Name'        => 'Bluehost',
					'Title'       => 'Bluehost',
					'Description' => 'This plugin integrates your WordPress site with the Bluehost control panel, including performance, security, and update features.',
				);
				break;
			case 'bluehost-india':
				$branded_plugin_details = array(
					'Name'  => 'Bluehost',
					'Title' => 'Bluehost',
				);
				break;
			default:
				$branded_plugin_details = array();
		}
		$all_plugins[ $plugin_file ] = wp_parse_args( $branded_plugin_details, $all_plugins[ $plugin_file ] );
	}
	return $all_plugins;
}
add_filter( 'all_plugins', 'mm_plugin_details' );
