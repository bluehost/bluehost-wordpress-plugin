<?php
/**
 * Include REST API related files.
 */
function bluehost_include_rest_api() {
  require_once MM_BASE_DIR . 'inc/rest-api/class-mojo-items-controller.php';
}
add_action( 'rest_api_init', 'bluehost_include_rest_api', 5 );

/**
 * Instanciate controllers and register routes.
 */
function bluehost_init_rest_api() {
  $mojo_items_controller = new Mojo_Items_Controller();
  $mojo_items_controller->register_routes();
}
add_action( 'rest_api_init', 'bluehost_init_rest_api' );
