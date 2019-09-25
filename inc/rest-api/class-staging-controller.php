<?php

/**
 * Class Bluehost_Staging_Controller
 */
class Bluehost_Staging_Controller extends WP_REST_Controller {

	/**
	 * The namespace of this controller's route.
	 *
	 * @var string
	 */
	protected $namespace = 'bluehost/v1';

	/**
	 * An instance of the BluehostStaging class.
	 *
	 * @var BluehostStaging
	 */
	protected $staging;

	/**
	 * Bluehost_Staging_Controller constructor.
	 */
	public function __construct() {
		$this->staging = new BluehostStaging();
	}

	/**
	 * Registers the routes for the objects of the controller.
	 */
	public function register_routes() {

		register_rest_route(
			$this->namespace,
			'/staging',
			[
				[
					'methods'  => WP_REST_Server::READABLE,
					'callback' => [ $this, 'stagingExists' ],
				],
				[
					'methods'  => WP_REST_Server::CREATABLE,
					'callback' => [ $this, 'createStaging' ],
				],
				[
					'methods'  => WP_REST_Server::DELETABLE,
					'callback' => [ $this, 'destroyStaging' ],
				],
				'permission_callback' => [ $this, 'checkPermission' ],
			]
		);

		register_rest_route(
			$this->namespace,
			'/staging/clone',
			[
				[
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => [ $this, 'cloneProductionToStaging' ],
					'permission_callback' => [ $this, 'checkPermission' ],
				],
			]
		);

		register_rest_route(
			$this->namespace,
			'/staging/deploy',
			[
				[
					'methods'             => WP_REST_Server::EDITABLE,
					'callback'            => [ $this, 'deployToProduction' ],
					'permission_callback' => [ $this, 'checkPermission' ],
					'args'                => [
						'type' => [
							'default'           => 'all',
							'enum'              => [ 'all', 'db', 'files' ],
							'validate_callback' => function ( $value ) {
								return in_array( $value, [ 'all', 'db', 'files' ] );
							}
						],
					],
				],
			]
		);

		register_rest_route(
			$this->namespace,
			'/staging/environment',
			[
				[
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => [ $this, 'getEnvironment' ],
					'permission_callback' => [ $this, 'checkPermission' ],
				],
			]
		);

		register_rest_route(
			$this->namespace,
			'/staging/switch-to',
			[
				[
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => [ $this, 'switchTo' ],
					'permission_callback' => [ $this, 'checkPermission' ],
					'args'                => [
						'env' => [
							'required'          => true,
							'enum'              => [ 'staging', 'production' ],
							'validate_callback' => function ( $value ) {
								return in_array( $value, [ 'staging', 'production' ] );
							}
						],
					],
				],
			]
		);

	}

	/**
	 * Check permissions for routes.
	 *
	 * @return bool
	 */
	public function checkPermission() {
		return (bool) current_user_can( 'manage_options' );
	}

	/**
	 * Create a staging environment.
	 *
	 * @return WP_REST_Response
	 */
	public function createStaging() {
		return rest_ensure_response( $this->staging->createStaging() );
	}

	/**
	 * Clone production environment to staging.
	 *
	 * @return WP_REST_Response
	 */
	public function cloneProductionToStaging() {
		return rest_ensure_response( $this->staging->cloneProductionToStaging() );
	}

	/**
	 * Deploy files and/or database from staging to production.
	 *
	 * @param WP_REST_Request $request
	 *
	 * @return WP_REST_Response
	 */
	public function deployToProduction( WP_REST_Request $request ) {
		return rest_ensure_response( $this->staging->deployToProduction( $request->get_param( 'type' ) ) );
	}

	/**
	 * Destroy the staging environment.
	 *
	 * @return WP_REST_Response
	 */
	public function destroyStaging() {
		return rest_ensure_response( $this->staging->destroyStaging() );
	}

	/**
	 * Get the current environment name.
	 *
	 * @return WP_REST_Response
	 */
	public function getEnvironment() {
		$environment = 'production';
		if ( $this->staging->isStaging() ) {
			$environment = 'staging';
		}

		return rest_ensure_response( $environment );
	}

	/**
	 * Check if the staging environment exists.
	 *
	 * @return WP_REST_Response
	 */
	public function stagingExists() {
		return rest_ensure_response( $this->staging->stagingExists() );
	}

	/**
	 * Switch to the production environment.
	 *
	 * @param WP_REST_Request $request
	 *
	 * @return WP_REST_Response
	 */
	public function switchTo( WP_REST_Request $request ) {
		return rest_ensure_response( $this->staging->switchTo( $request->get_param( 'env' ) ) );
	}
}
