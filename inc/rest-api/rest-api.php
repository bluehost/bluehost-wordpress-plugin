<?php
/**
 * Include REST API related files.
 */
function bluehost_include_rest_api() {
	require __DIR__ . '/class-mojo-items-controller.php';
	require __DIR__ . '/class-mojo-item-controller.php';
	require __DIR__ . '/class-mojo-themes-controller.php';
	require __DIR__ . '/class-mojo-plugins-controller.php';
	require __DIR__ . '/class-mojo-services-controller.php';
}

add_action( 'rest_api_init', 'bluehost_include_rest_api', 5 );

/**
 * Instantiate controllers and register routes.
 */
function bluehost_init_rest_api() {
	$controllers = array(
		'Mojo_Item_Controller',
		'Mojo_Themes_Controller',
		'Mojo_Plugins_Controller',
		'Mojo_Services_Controller',
	);

	foreach ( $controllers as $controller ) {
		$instance = new $controller();
		$instance->register_routes();
	}
}

add_action( 'rest_api_init', 'bluehost_init_rest_api' );
