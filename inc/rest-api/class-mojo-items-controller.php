<?php

class Mojo_Items_Controller extends WP_REST_Controller {

	protected $namespace = 'mojo/v1';

	protected $base = 'themes';

	protected $type = 'themes';

	public function query_mojo_api( $params, $request ) {
		$api_url  = 'https://api.mojomarketplace.com/api/v2/items';
		$defaults = array_merge(
			array(
				'category'  => 'wordpress',
				'count'     => 20,
				'direction' => '',
			),
			$request->get_default_params()
		);

		if ( ! empty( $request['page'] ) ) {
			$params['page'] = $request->get_param( 'page' );
		}

		if ( ! empty( $request['sort'] ) ) {
			$params['order'] = $request->get_param( 'sort' );
		}

		if ( ! empty( $request['direction'] ) ) {
			$params['direction'] = $request->get_param( 'direction' );
		}

		$params       = wp_parse_args( $params, $defaults );
		$api_url      = add_query_arg( $params, $api_url );
		$api_response = mm_api_cache( $api_url );

		if ( is_wp_error( $api_respose ) ) {
			$this->handle_error( $api_response );
		} else {
			return json_decode( $api_response['body'] );
		}
	}

	public function perform_mojo_search( $params, $request ) {
		$api_url = 'https://api.mojomarketplace.com/api/v2/items';

		$defaults = array(
			'category' => 'wordpress',
			'size'     => 150,
			'order'    => 'score',
		);

		$params['search'] = sanitize_title_for_query( $request['search'] );
		$params           = wp_parse_args( $params, $defaults );
		$api_url          = add_query_arg( $params, $api_url );
		$api_response     = mm_api_cache( $api_url );

		if ( is_wp_error( $api_respose ) ) {
			$this->handle_error( $api_response );
		} else {
			return json_decode( $api_response['body'] );
		}
	}

	/**
	 * Check if a given request has access to get items
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function get_items_permissions_check( $request ) {
		return true;

		// We don't want these endpoints to be publicly queryable.
		// This would make it easy to DDoS any bluehost site.
		return current_user_can( 'edit_post' );
	}

	/**
	 * Prepare the item for the REST response
	 *
	 * @param mixed           $item WordPress representation of the item.
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
			'seller'       => array(
				'description'       => 'User ID or brand profile name.',
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
			'category'     => array(
				'description' => 'Category ID or slug (this is ItemTypeCategory).',
				'type'        => 'string',
				'enum'        => array(
					'wordpress',
				),
				'default'     => 'wordpress',
			),
			'itemcategory' => array(
				'description'       => 'Item Category slug (this is ItemCategory).',
				'type'              => 'string',
				'sanitize_callback' => 'sanitize_text_field',
			),
			'order'        => array(
				'description' => 'Order to sort items by.',
				'type'        => 'string',
				'enum'        => array(
					'popular',
					'latest',
					'random',
					'sales',
				),
				'default'     => 'sales',
			),
			'type'         => array(
				'description' => 'Item type.',
				'type'        => 'string',
				'enum'        => array(
					'themes',
					'graphics',
					'plugins',
					'services',
				),
				'default'     => 'themes',
			),
			'services'     => array(
				'description' => 'Indicates that services should be returned instead of purchasable items. If you define the type as services then you can ignore this flag.',
				'type'        => 'boolean',
				'default'     => false,
			),
			'count'        => array(
				'description' => 'Maximum number of items to return (maximum allowed is 50).',
				'type'        => 'integer',
				'default'     => 20,
			),
			'page'         => array(
				'description' => 'Offset from the first several items (maximum allowed is 10).',
				'type'        => 'integer',
			),
			'direction'    => array(
				'description' => 'Sort direction.',
				'type'        => 'string',
				'enum'        => array(
					'asc',
					'desc',
				),
				'default'     => 'desc',
			),
			'search'       => array(
				'description' => 'A search query.',
				'type'        => 'string',
				'default'     => '',
			),
		);
	}
}
