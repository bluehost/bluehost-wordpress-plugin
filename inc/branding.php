<?php

function mm_brand( $format = '%s' ) {
	$mm_brand = get_option( 'mm_brand', 'default' );
	$brands = mm_api_cache( MM_ASSETS_URL . 'json/branding.json' );
	if ( ! is_wp_error( $brands ) && $brands = json_decode( $brands['body'] ) ) {
		if ( property_exists( $brands, $mm_brand ) ) {
			$brand = $brands->{$mm_brand};
		}
	}
	if ( ! isset( $brand ) || empty( $brand ) ) {
		$brand = 'default';
	}
	return sprintf( $format, sanitize_title( $brand ) );
}
