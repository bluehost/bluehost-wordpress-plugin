<?php

/**
 * Instantiate controllers and register routes.
 */
function bluehost_init_rest_api() {

	$controllers = array(
		'Bluehost\\RestApi\\AdminErrorController',
		'Bluehost\\RestApi\\BluehostBlogController',
		'Bluehost\\RestApi\\CachingController',
		'Bluehost\\RestApi\\SettingsController',
		'Bluehost\\RestApi\\StagingController',
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
