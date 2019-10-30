<?php

namespace Bluehost\RestApi;

/**
 * Class CachingController
 */
class CachingController extends \WP_REST_Controller {

	/**
	 * The namespace of this controller's route.
	 *
	 * @var string
	 */
	protected $namespace = 'bluehost/v1';

	/**
	 * Constructor.
	 *
	 * @since 4.7.0
	 */
	public function __construct() {
	}

	/**
	 * Registers the settings route
	 */
	public function register_routes() {

		register_rest_route(
			$this->namespace,
			'/caching',
			[
				'methods'             => \WP_REST_Server::DELETABLE,
				'callback'            => [ $this, 'purge_all' ],
				'permission_callback' => [ $this, 'check_permission' ],
			]
		);

	}

	/**
	 * Clears the entire cache
	 */
	public function purge_all() {
		if ( ! class_exists( 'Endurance_Page_Cache' ) ) {
			return new \WP_Error( 'epc_not_installed', __( 'Endurance Page Cache plugin is not installed.', 'bluehost-wordpress-plugin' ), array( 'status' => 500 ) );
		}

		$epc = new \Endurance_Page_Cache();
		$epc->purge_all();

		return array(
			'status'  => 'success',
			'message' => 'Cache purged',
		);

	}

	/**
	 * Check permissions for route.
	 *
	 * @return bool|\WP_Error
	 */
	public function check_permission() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error( 'rest_forbidden_context', __( 'Sorry, you are not allowed to access this endpoint.', 'bluehost-wordpress-plugin' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

}
