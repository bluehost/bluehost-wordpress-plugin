<?php

class Mojo_Items_Controller extends WP_REST_Controller {

	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {
		$namespace = 'mojo/v1';
		$base = 'items';

		register_rest_route( $namespace, '/' . $base, array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_items' ),
				// 'permission_callback' => array( $this, 'get_items_permissions_check' ),
				'args'                => $this->get_collection_params()
			),
		) );
	}

	/**
	 * Get a collection of items
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_items( $request ) {
		$api_url = 'https://api.mojomarketplace.com/api/v2/items';

		$params = array();

		if ( ! empty( $request['paged'] ) ) {
			$params['paged'] = $request->get_param( 'paged' );
		}

		if ( ! empty( $request['sort'] ) ) {
			$params['order'] = $request->get_param( 'sort' );
		}

		if ( 'popular' != $request['items'] ) {
			$params['itemcategory'] = $request->get_param( 'items' );
		}

		$defaults = $request->get_default_params();
		$params = wp_parse_args( $params, $defaults );

		$api_url = add_query_arg( $params, $api_url );


		$api_response = mm_api_cache( $api_url );

		if ( ! is_wp_error( $api_response ) ) {
			$data = json_decode( $api_response['body'] );
		}

		return new WP_REST_Response( $data, 200 );

		foreach( $items as $item ) {
			$itemdata = $this->prepare_item_for_response( $item, $request );
			$data[] = $this->prepare_response_for_collection( $itemdata );
		}

		return new WP_REST_Response( $data, 200 );
	}

	/**
	 * Check if a given request has access to get items
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function get_items_permissions_check( $request ) {
		//return true; <--use to make readable by all
		return current_user_can( 'edit_post' );
	}

	/**
	 * Prepare the item for the REST response
	 *
	 * @param mixed $item WordPress representation of the item.
	 * @param WP_REST_Request $request Request object.
	 * @return mixed
	 */
	public function prepare_item_for_response( $item, $request ) {
		return array();
	}

	/**
	 * Get the query params for collections
	 *
	 * @return array
	 */
	public function get_collection_params() {
		return array(
			'seller'     => array(
				'description'       => 'User ID or brand profile name.',
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
			'category' => array(
				'description'       => 'Category ID or slug (this is ItemTypeCategory).',
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field()',
			),
			'itemcategory'   => array(
				'description'       => 'Item Category slug (this is ItemCategory).',
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
			'order'   => array(
				'description'       => 'Order to sort items by.',
				'type'              => 'string',
				'enum' => array(
					'popular',
					'latest',
					'random',
					'sales',
				),
				'default' => 'sales',
			),
			'type'   => array(
				'description'       => 'Item type.',
				'type'              => 'string',
				'enum' => array(
					'themes',
					'graphics',
					'plugins',
					'services',
				),
				'default' => 'themes'
			),
			'services'   => array(
				'description'       => 'Indicates that services should be returned instead of purchasable items. If you define the type as services then you can ignore this flag.',
				'type'              => 'boolean',
				'default' => false,
			),
			'count'   => array(
				'description'       => 'Maximum number of items to return (maximum allowed is 50).',
				'type'              => 'integer',
			),
			'page'   => array(
				'description'       => 'Offset from the first several items (maximum allowed is 10).',
				'type'              => 'integer',
			),
			'direction' => array(

			)
		);
	}
}
