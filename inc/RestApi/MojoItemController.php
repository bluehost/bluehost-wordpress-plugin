<?php

namespace Bluehost\RestApi;

/**
 * Class MojoItemController
 */
class MojoItemController extends MojoItemsController {

	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/' . $this->rest_base,
			[
				[
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => [ $this, 'query_mojo_item' ],
					'permission_callback' => [ $this, 'get_items_permissions_check' ],
					'args'                => [
						'id' => [
							'required' => true,
						],
					],
				],
			]
		);
	}

	/**
	 * Query the Mojo items endpoint.
	 *
	 * @param \WP_REST_Request $request Request model.
	 *
	 * @return array
	 */
	public function query_mojo_item( \WP_REST_Request $request ) {
		$api_url      = 'https://api.mojomarketplace.com/api/v2/items/' . $request['id'];
		$api_response = bh_api_cache( $api_url );

		return $this->get_response( $api_response );
	}

}
