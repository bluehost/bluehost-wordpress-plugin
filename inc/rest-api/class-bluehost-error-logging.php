<?php

class Bluehost_Error_Logging extends WP_REST_Controller {

    protected $namespace = 'bluehost/v1';
    
    protected $option_key = 'bluehost_plugin_errors';

	public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/error/track',
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
        $params = $request->get_body_params();
        if ( ! empty( $params['message'] ) ) {
            $saved = $this->get_errors();
            $updated = $saved;
            $key = base64_encode( $params['message'] );
            $browser_key = base64_encode( implode( ',', $params['browser'] ) );
            unset( $params['browser']['versionNumber'] );
            if ( $params['browser']['mobile'] ) {
                $params['browser']['mobile'] = true === $params['browser']['mobile'] ? 'mobile' : 'desktop';
            }
            if ( isset( $updated[ $key ] ) && $updated[ $key ]['count'] <= 4 ) {
                $updated[ $key ]['count'] = (int) $updated[ $key ]['count'] + 1;
                if ( ! in_array( implode( ',', $params['browser'] ), $updated[ $key ]['browsers'] ) ) {
                    $updated[ $key ]['browsers'][] = implode( ',', $params['browser'] );
                }
                $updated[ $key ][ 'incidents' ][ $params['date'] ] = $params['browser']['name'] . ' ' . $params['browser']['version'] . ' on ' . $params['browser']['os'];
                $updated[ $key ][ 'incidents' ] = array_slice( $updated[ $key ]['incidents'], -5 );
            } elseif( ! isset( $updated[ $key ] ) ) {
                $updated[ $key ] = [
                    'count' => 1,
                    'message' => $params['message'],
                    'browsers' => [
                       implode( ',', $params['browser'] )
                    ],
                    'incidents' => [
                        $params['date'] => $params['browser']['name'] . ' ' . $params['browser']['version'] . ' on ' . $params['browser']['os']
                    ],
                ];
            }

            if ( $updated !== $saved ) {
                update_option( $this->option_key, $updated );
            }
        }

        return new WP_REST_Response( [ 'success' => 'it-the-success' ] );
    }

    protected function get_errors() {
        return get_option( $this->option_key, array() );
    }

    public function authorize_error_logging() {
        return true;
        // return (bool) current_user_can( 'manage_options' );
    }
}
