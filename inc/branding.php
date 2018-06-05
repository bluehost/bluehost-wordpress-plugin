<?php

function mm_brand( $format = '%s' ) {
	$mm_brand = get_option( 'mm_brand', 'default' );

	$brands = mm_api_cache( MM_ASSETS_URL . 'json/branding.json' );

	if ( ! is_wp_error( $brands ) && $brands = json_decode( $brands['body'] ) ) {
		if ( property_exists( $brands, $mm_brand ) ) {
			$brand = $brands->{$mm_brand};
		}
	}

	if ( ! isset( $brand ) || empty( $brand ) || 'quickinstall' == $brand ) {
		$brand = 'default';
	}
	return sprintf( $format, sanitize_title( $brand ) );
}

function mm_plugin_details( $all_plugins ) {
	$plugin_file = 'mojo-marketplace-wp-plugin/mojo-marketplace.php';
	if ( isset( $all_plugins[ $plugin_file ] ) ) {
		switch ( mm_brand() ) {
			case 'bluehost':
				$branded_plugin_details = array(
					'Name'  => 'Bluehost',
					'Title' => 'Bluehost',
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
