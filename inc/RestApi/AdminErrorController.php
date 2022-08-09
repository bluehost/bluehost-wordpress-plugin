<?php

namespace Bluehost\RestApi;

/**
 * Class Errors
 *
 * @package Bluehost\WP\Admin_App
 */
class AdminErrorController extends \WP_REST_Controller {

	/**
	 * Undocumented variable
	 *
	 * @var string
	 */
	protected $browser_key;

	/**
	 * Undocumented variable
	 *
	 * @var string
	 */
	protected $endpoint = '/error/track';

	/**
	 * Number of versions to retain
	 *
	 * @var integer
	 */
	protected $retain_versions = 5;

	/**
	 * Errors per-version to retain
	 *
	 * @var integer
	 */
	protected $errors_per_version = 12;

	/**
	 * Unique key for error.
	 *
	 * @var string
	 */
	protected $key;

	/**
	 * REST API Endpoint Namespace
	 *
	 * @var string $n
	 */
	protected $namespace = 'bluehost/v1';

	/**
	 * Key for Data in WordPress Options Table in Database.
	 *
	 * @var string
	 */
	protected $option_key = 'bluehost_plugin_admin_errors';

	/**
	 * Collection of saved errors.
	 *
	 * @var array
	 */
	protected $saved;

	/**
	 * A collection of body parameters.
	 *
	 * @var array
	 */
	protected $params;

	/**
	 * Collection of updated errors.
	 *
	 * @var array
	 */
	protected $updated;

	/**
	 * Conditional outcome (for error-tracing this error reporting)
	 *
	 * @var integer
	 */
	protected $condition = 0;

	/**
	 * Register routes.
	 */
	public function register_routes() {
		\register_rest_route(
			$this->namespace,
			$this->endpoint,
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'error_logging' ),
					'permission_callback' => array( $this, 'authorize_error_logging' ),
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
	public function error_logging( \WP_REST_Request $request ) {
		$this->params = $request->get_params();
		if ( ! empty( $this->params ) ) {
			$this->condition = 0.5;
			$this->key       = base64_encode( $this->params['message'] ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode
			$response        = $this->handle_error_log();
		} else {
			$this->condition = 0.25;
		}

		return new \WP_REST_Response(
			array(
				'condition' => $this->condition,
				'debug'     => $request,
			),
			false === $response ? 500 : 200
		);
	}

	/**
	 * Endpoint fallback
	 *
	 * @return int
	 */
	protected function handle_error_log() {
		$plug_ver      = BLUEHOST_PLUGIN_VERSION;
		$this->saved   = $this->database( 'get' );
		$this->updated = $this->saved;

		if ( isset( $this->saved[ $plug_ver ] ) ) {
			if ( count( $this->saved[ $plug_ver ] ) <= $this->errors_per_version ) {
				array_unshift( $this->updated[ $plug_ver ], $this->key );
				$this->updated[ $plug_ver ] = array_unique( $this->updated[ $plug_ver ] );
				$this->condition            = 1;
			} else {
				array_pop( $this->updated[ $plug_ver ] );
				array_unshift( $this->updated[ $plug_ver ], $this->key );
				$this->updated[ $plug_ver ] = array_unique( $this->updated[ $plug_ver ] );
				$this->condition            = 2;
			}
		} elseif ( count( $this->saved ) <= $this->retain_versions ) {
			$this->updated[ $plug_ver ] = array( $this->key );
			$this->condition            = 3;
		} else {
			array_pop( $this->updated );
			$this->updated[ $plug_ver ] = array( $this->key );
			$this->condition            = 4;
		}

		if ( ! isset( $this->saved[ $plug_ver ][ $this->key ] ) ) {
			$request = new \WP_REST_Request( 'POST', '/newfold-data/v1/events' );
			$request->set_body_params(
				array(
					'action'   => 'bwa-error',
					'category' => 'AdminError',
					'data'     => $this->params,
				)
			);
			$response = \rest_do_request( $request );
			if ( ! $response->is_error() ) {
				$this->database( 'update', $this->updated );

				return $response;
			} else {
				return false;
			}
		} else {
			return null;
		}
	}

	/**
	 * Database Helper
	 *
	 * @param string $type Action type.
	 * @param array  $data Data.
	 *
	 * @return mixed
	 */
	protected function database( $type = 'get', $data = array() ) {
		switch ( $type ) {
			case 'create':
			case 'update':
				return \update_option( $this->option_key, $data );
			case 'delete':
				return \delete_option( $this->option_key, $data );
			case 'read':
			case 'get':
			default:
				return \get_option( $this->option_key, array() );
		}
	}

	/**
	 * Permission Callback for Logging Errors.
	 *
	 * @return boolean
	 */
	public function authorize_error_logging() {
		return (bool) current_user_can( 'manage_options' );
	}
}
