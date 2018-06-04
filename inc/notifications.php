<?php

function mm_partner_offers( $location, $echo = true ) {
	$offers = mm_api_cache( 'https://api.mojomarketplace.com/mojo-plugin-assets/json/mojo-partner-offers.json' );
	if ( ! is_wp_error( $offers ) && null !== json_decode( $offers['body'] ) ) {
		$offers = json_decode( $offers['body'] );
		if ( isset( $offers->{ $location } ) ) {
			$offer = $offers->{ $location };
		}
		if ( 'default' != mm_brand() && isset( $offers->{ strtolower( mm_brand() ) }->{ $location } ) ) {
			$offer = $offers->{ strtolower( mm_brand() ) }->{ $location };
		}
	}

	if ( isset( $offer ) && is_object( $offer ) && isset( $offer->url ) && isset( $offer->img ) ) {
		$offer_display = '<div class="mm-partner-offer mm-partner-%s"><a href="%s" target="_blank"><img src="%s" /></a></div>';
		$offer_display = sprintf( $offer_display, sanitize_title( $location ), esc_url( $offer->url ), esc_url( $offer->img ) );
		if ( $echo ) {
			echo $offer_display;
		} else {
			return $offer_display;
		}
	}
}
