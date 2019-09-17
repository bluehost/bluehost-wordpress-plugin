<?php

function mm_update_muplugins() {

	$muplugins_details = wp_remote_get( 'https://api.mojomarketplace.com/mojo-plugin-assets/json/mu-plugins.json' );

	if ( is_wp_error( $muplugins_details ) || ! isset( $muplugins_details['body'] ) ) {
		return;
	}

	$mu_plugin = json_decode( $muplugins_details['body'], true );

	if ( ! is_null( $mu_plugin ) ) {
		foreach ( $mu_plugin as $slug => $info ) {
			if ( isset( $info['constant'] ) && defined( $info['constant'] ) ) {
				if ( (float) $info['version'] > (float) constant( $info['constant'] ) ) {
					$file = wp_remote_get( $info['source'] );
					if ( ! is_wp_error( $file ) && isset( $file['body'] ) && strpos( $file['body'], $info['constant'] ) ) {
						file_put_contents( WP_CONTENT_DIR . $info['destination'], $file['body'] );
					}
				}
			}
		}
	}

}
add_action( 'mm_check_muplugin_update', 'mm_update_muplugins' );
