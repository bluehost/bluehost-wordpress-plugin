<?php

namespace Bluehost\RestApi;

/**
 * Class Errors
 *
 * @package Bluehost\WP\Admin_App
 */
class BluehostResourcesController extends \WP_REST_Controller {


	/**
	 * Undocumented variable
	 *
	 * @var string
	 */
	protected $endpoint = '/resources';

	/**
	 * REST API Endpoint Namespace
	 *
	 * @var string $n
	 */
	protected $namespace = 'bluehost/v1';

	/**
	 * Register routes.
	 */
	public function register_routes() {
		\register_rest_route(
			$this->namespace,
			$this->endpoint,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'query_resources' ),
					'permission_callback' => array( $this, 'authorize_bh_resources_query' ),
				),
			)
		);
	}

	/**
	 * Rest handler for error logging.
	 *
	 * @param \WP_REST_Request $request WP request model.
	 *
	 * @return \WP_REST_Response
	 */
	public function query_resources( \WP_REST_Request $request ) {
		$cache = \get_transient('bluehost_resource_articles');
		if ( false !== $cache ) {
			return new \WP_REST_Response( $cache, 200 );
		}
        $request = \wp_remote_get( 'https://www.bluehost.com/resources/page-data/index/page-data.json' );
		$response = \wp_remote_retrieve_body( $request );

		\set_transient( 'bluehost_blog_posts', $response, 5 * HOUR_IN_SECONDS );

		return new \WP_REST_Response(
			$response,
			200
		);
	}

	/**
	 * Permission Callback for Logging Errors.
	 *
	 * @return boolean
	 */
	public function authorize_bh_resources_query() {
		// return (bool) current_user_can( 'read' );
		return true;
	}
}
