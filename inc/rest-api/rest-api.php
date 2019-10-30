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
	require __DIR__ . '/class-staging-controller.php';
	require __DIR__ . '/class-bluehost-admin-errors.php';
	require __DIR__ . '/class-bluehost-settings-controller.php';
	require __DIR__ . '/class-bluehost-caching-controller.php';
}

add_action( 'rest_api_init', 'bluehost_include_rest_api', 5 );

/**
 * Instantiate controllers and register routes.
 */
function bluehost_init_rest_api() {
	$controllers = array(
		'Bluehost_Staging_Controller',
		'Bluehost_Settings_Controller',
		'Bluehost_Settings_Controller',
		'Mojo_Item_Controller',
		'Mojo_Themes_Controller',
		'Mojo_Plugins_Controller',
		'Mojo_Services_Controller',
		'\\Bluehost\\WP\\Admin_App\\Errors',
	);

	foreach ( $controllers as $controller ) {
		/**
		 * Get an instance of the WP_REST_Controller.
		 *
		 * @var $instance WP_REST_Controller
		 */
		$instance = new $controller();
		$instance->register_routes();
	}
}

add_action( 'rest_api_init', 'bluehost_init_rest_api' );
