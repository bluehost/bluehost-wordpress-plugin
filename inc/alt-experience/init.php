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
				echo '<style>';
				echo file_get_contents( BLUEHOST_PLUGIN_DIR . 'build/' . BLUEHOST_PLUGIN_VERSION . '/index.css' );
				echo '</style>';
				echo file_get_contents( __DIR__ . '/index.html' );
			},
			'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+CiAgICA8cGF0aCBmaWxsPSIjYTdhYWFkIiBkPSJNNCA0aDguOTMzdjguOTIzSDRWNFptMTEuNTMgMGg4Ljk0djguOTIzaC04Ljk0VjRabTExLjUzMSAwSDM2djguOTIzaC04LjkzOVY0Wk00IDE1LjUzOGg4LjkzM3Y4LjkyNEg0di04LjkyNFptMTEuNTMgMGg4Ljk0djguOTI0aC04Ljk0di04LjkyNFptMTEuNTMxIDBIMzZ2OC45MjRoLTguOTM5di04LjkyNFpNNCAyNy4wNzdoOC45MzNWMzZINHYtOC45MjNabTExLjUzIDBoOC45NFYzNmgtOC45NHYtOC45MjNabTExLjUzMSAwSDM2VjM2aC04LjkzOXYtOC45MjNaIi8+Cjwvc3ZnPg==',
			1
		);
	}
);
