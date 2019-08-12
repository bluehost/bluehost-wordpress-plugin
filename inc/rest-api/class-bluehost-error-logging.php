<?php

class Bluehost_Error_Logging extends WP_REST_Controller {

	protected $namespace = 'bluehost/v1';

	public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/error/log',
            array(
                array(
                    'methods'               => WP_REST_Server::EDITABLE,
                    'callback'              => array( $this, 'error_logging' ),
                    'permission_callback'   => array( $this, 'authorize_error_logging' ),
                )
            )
        );
    }

    public function error_logging( $request ) {
        $errors = $request->get_body_params();
        error_log( 'dat export' . PHP_EOL );
        error_log( var_export( $errors, true ) );
    }

    public function authorize_error_logging() {
        return true;
        // return (bool) current_user_can( 'manage_options' );
    }
}
