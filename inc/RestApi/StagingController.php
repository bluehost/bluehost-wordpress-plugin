<?php

namespace Bluehost\RestApi;

use Bluehost\Staging;

/**
 * Class StagingController
 */
class StagingController extends \WP_REST_Controller {

	/**
	 * The namespace of this controller's route.
	 *
	 * @var string
	 */
	protected $namespace = 'bluehost/v1';

	/**
	 * An instance of the BluehostStaging class.
	 *
	 * @var Staging
	 */
	protected $staging;

	/**
	 * Bluehost_Staging_Controller constructor.
	 */
	public function __construct() {
		$this->staging = new Staging();
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
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => [ $this, 'getStagingDetails' ],
					'permission_callback' => [ $this, 'checkPermission' ],
				],
				[
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => [ $this, 'createStaging' ],
					'permission_callback' => [ $this, 'checkPermission' ],
				],
				[
					'methods'             => \WP_REST_Server::DELETABLE,
					'callback'            => [ $this, 'destroyStaging' ],
					'permission_callback' => [ $this, 'checkPermission' ],
				],
			]
		);

		register_rest_route(
			$this->namespace,
			'/staging/clone',
			[
				[
					'methods'             => \WP_REST_Server::EDITABLE,
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
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => [ $this, 'deployToProduction' ],
					'permission_callback' => [ $this, 'checkPermission' ],
					'args'                => [
						'type' => [
							'default'           => 'all',
							'enum'              => [ 'all', 'db', 'files' ],
							'validate_callback' => function ( $value ) {
								return in_array( $value, [ 'all', 'db', 'files' ], true );
							},
						],
					],
				],
			]
		);

		register_rest_route(
			$this->namespace,
			'/staging/switch-to',
			[
				[
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => [ $this, 'switchTo' ],
					'permission_callback' => [ $this, 'checkPermission' ],
					'args'                => [
						'env' => [
							'required'          => true,
							'enum'              => [ 'staging', 'production' ],
							'validate_callback' => function ( $value ) {
								return in_array( $value, [ 'staging', 'production' ], true );
							},
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
	 * @return \WP_REST_Response
	 */
	public function createStaging() {
		$payload = $this->staging->createStaging();
		if ( ! is_wp_error( $payload ) ) {
			$this->staging->getConfig( false );
			$payload = [
				'creationDate'           => $this->staging->getCreationDate(),
				'currentEnvironment'     => $this->staging->getEnvironment(),
				'message'                => $payload['message'],
				'productionDir'          => $this->staging->getProductionDir(),
				'productionThumbnailUrl' => $this->staging->getProductionScreenshotUrl(),
				'productionUrl'          => $this->staging->getProductionUrl(),
				'stagingDir'             => $this->staging->getStagingDir(),
				'stagingExists'          => $this->staging->stagingExists(),
				'stagingThumbnailUrl'    => $this->staging->getStagingScreenshotUrl(),
				'stagingUrl'             => $this->staging->getStagingUrl(),
				'status'                 => $payload['status'],
			];
		}

		return rest_ensure_response( $payload );
	}

	/**
	 * Clone production environment to staging.
	 *
	 * @return \WP_REST_Response
	 */
	public function cloneProductionToStaging() {
		return rest_ensure_response( $this->staging->cloneProductionToStaging() );
	}

	/**
	 * Deploy files and/or database from staging to production.
	 *
	 * @param \WP_REST_Request $request WordPress HTTP request model.
	 *
	 * @return \WP_REST_Response
	 */
	public function deployToProduction( \WP_REST_Request $request ) {
		return rest_ensure_response( $this->staging->deployToProduction( $request->get_param( 'type' ) ) );
	}

	/**
	 * Destroy the staging environment.
	 *
	 * @return \WP_REST_Response
	 */
	public function destroyStaging() {
		return rest_ensure_response( $this->staging->destroyStaging() );
	}

	/**
	 * Get all staging details.
	 *
	 * @return \WP_REST_Response
	 */
	public function getStagingDetails() {
		return rest_ensure_response(
			[
				'creationDate'           => $this->staging->getCreationDate(),
				'currentEnvironment'     => $this->staging->getEnvironment(),
				'productionDir'          => $this->staging->getProductionDir(),
				'productionThumbnailUrl' => $this->staging->getProductionScreenshotUrl(),
				'productionUrl'          => $this->staging->getProductionUrl(),
				'stagingDir'             => $this->staging->getStagingDir(),
				'stagingExists'          => $this->staging->stagingExists(),
				'stagingThumbnailUrl'    => $this->staging->getStagingScreenshotUrl(),
				'stagingUrl'             => $this->staging->getStagingUrl(),
			]
		);
	}

	/**
	 * Switch to the production environment.
	 *
	 * @param \WP_REST_Request $request WordPress HTTP request model.
	 *
	 * @return \WP_REST_Response
	 */
	public function switchTo( \WP_REST_Request $request ) {
		return rest_ensure_response( $this->staging->switchTo( $request->get_param( 'env' ) ) );
	}
}
