<?php

/**
 * Instantiate controllers and register routes.
 */
function bluehost_init_rest_api() {

	$controllers = array(
		'Bluehost\\RestApi\\StagingController',
		'Bluehost\\RestApi\\SettingsController',
		'Bluehost\\RestApi\\CachingController',
		'Bluehost\\RestApi\\MojoItemController',
		'Bluehost\\RestApi\\MojoThemesController',
		'Bluehost\\RestApi\\MojoPluginsController',
		'Bluehost\\RestApi\\MojoServicesController',
		'Bluehost\\RestApi\\AdminErrorController',
		'Bluehost\\RestApi\\BluehostBlogController',
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
