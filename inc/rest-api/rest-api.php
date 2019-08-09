<?php
/**
 * Include REST API related files.
 */
function bluehost_include_rest_api() {
	require_once MM_BASE_DIR . 'inc/rest-api/class-mojo-items-controller.php';
	require_once MM_BASE_DIR . 'inc/rest-api/class-mojo-themes-controller.php';
	require_once MM_BASE_DIR . 'inc/rest-api/class-mojo-plugins-controller.php';
	require_once MM_BASE_DIR . 'inc/rest-api/class-mojo-services-controller.php';
	require_once MM_BASE_DIR . 'inc/rest-api/class-staging-controller.php';
}
add_action( 'rest_api_init', 'bluehost_include_rest_api', 5 );

/**
 * Instanciate controllers and register routes.
 */
function bluehost_init_rest_api() {
	$controllers = array(
		'Mojo_Themes_Controller',
		'Mojo_Plugins_Controller',
		'Mojo_Services_Controller',
		'Bluehost_Staging_Controller'
	);

	foreach ( $controllers as $controller ) {
		$temp = new $controller();
		$temp->register_routes();
	}
}
add_action( 'rest_api_init', 'bluehost_init_rest_api' );
