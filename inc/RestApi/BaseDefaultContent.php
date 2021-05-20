<?php

namespace Bluehost\RestApi;

class BaseDefaultContent extends \WP_REST_Controller {
    protected $namespace = 'newfold/v1';
    protected $rest_base = 'defaultcontent';
    
    protected function query_remote_content( $url, $args ) {
        // Hiive calls here
    } 

    public function is_authorized_request() {
        return true;
    }
}
