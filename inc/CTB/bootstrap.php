<?php

namespace Bluehost\CTB;

add_action( 'rest_api_init', array( CTBApi::class, 'registerRoutes' ) );
add_action(
	'admin_enqueue_scripts',
	function() {
		wp_register_script( 'a11y-dialog', plugins_url( 'inc/CTB/js/a11y-dialog.min.js', BLUEHOST_PLUGIN_FILE ), array(), '7.4.0', false );
		wp_enqueue_script(
			'bh-ctb',
			plugins_url( 'inc/CTB/js/ctb.js', BLUEHOST_PLUGIN_FILE ),
			array( 'a11y-dialog' ),
			BLUEHOST_PLUGIN_VERSION,
			true
		);
		wp_localize_script(
			'bh-ctb',
			'bhctb',
			array(
				'restApiUrl'   => esc_url_raw( get_home_url() . '/index.php?rest_route=/' ),
				'restApiNonce' => wp_create_nonce( 'wp_rest' ),
			)
		);
	}
);

add_action(
	'admin_enqueue_scripts',
	function() {
		wp_enqueue_style(
			'bh-ctb',
			plugins_url( 'inc/CTB/ctb.css', BLUEHOST_PLUGIN_FILE ),
			array(),
			BLUEHOST_PLUGIN_VERSION
		);
	}
);

add_action(
	'admin_footer',
	function () {
		echo "<div id='nfd-ctb-container' aria-hidden='true'></div>";
	}
);
