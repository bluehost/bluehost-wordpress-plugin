<?php
add_action(
	'admin_menu',
	function () {
		add_menu_page(
			'Bluehost',
			'Bluehost',
			'manage_options',
			'bluehost',
			function () {
				$version = BLUEHOST_PLUGIN_VERSION;
				$asset_file = BLUEHOST_BUILD_DIR . '/index.asset.php';
				if ( is_readable( $asset_file ) ) {
					$asset = include_once $asset_file;
					$version = $asset['version'];
				}

				wp_enqueue_style(
					'bluehost-style',
					BLUEHOST_BUILD_URL . '/index.css',
					array( 'wp-components' ),
					$version
				);

				echo file_get_contents( __DIR__ . '/index.html' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped, WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
			},
			'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+CiAgICA8cGF0aCBmaWxsPSIjYTdhYWFkIiBkPSJNNCA0aDguOTMzdjguOTIzSDRWNFptMTEuNTMgMGg4Ljk0djguOTIzaC04Ljk0VjRabTExLjUzMSAwSDM2djguOTIzaC04LjkzOVY0Wk00IDE1LjUzOGg4LjkzM3Y4LjkyNEg0di04LjkyNFptMTEuNTMgMGg4Ljk0djguOTI0aC04Ljk0di04LjkyNFptMTEuNTMxIDBIMzZ2OC45MjRoLTguOTM5di04LjkyNFpNNCAyNy4wNzdoOC45MzNWMzZINHYtOC45MjNabTExLjUzIDBoOC45NFYzNmgtOC45NHYtOC45MjNabTExLjUzMSAwSDM2VjM2aC04LjkzOXYtOC45MjNaIi8+Cjwvc3ZnPg==',
			1
		);
	}
);
