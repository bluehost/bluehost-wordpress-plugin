<?php
/**
 * Include REST API related files.
 */
function bluehost_include_rest_api() {
	require __DIR__ . '/class-bluehost-admin-errors.php';
}

add_action( 'rest_api_init', 'bluehost_include_rest_api', 5 );

/**
 * Instantiate controllers and register routes.
 */
function bluehost_init_rest_api() {

	$controllers = [
		'Bluehost\\RestApi\\StagingController',
		'Bluehost\\RestApi\\SettingsController',
		'Bluehost\\RestApi\\CachingController',
		'Bluehost\\RestApi\\MojoItemController',
		'Bluehost\\RestApi\\MojoThemesController',
		'Bluehost\\RestApi\\MojoPluginsController',
		'Bluehost\\RestApi\\MojoServicesController',
		'\\Bluehost\\WP\\Admin_App\\Errors',
	];

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
