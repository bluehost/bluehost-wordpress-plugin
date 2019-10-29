<?php

namespace Bluehost\WP\Admin_App;

/**
 * Class Errors
 *
 * @package Bluehost\WP\Admin_App
 */
class Errors extends \WP_REST_Controller {

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
	 * Number of Errors stored in Database.
	 *
	 * @var integer
	 */
	protected $error_count = 10;

	/**
	 * Number of Incidents stored per-error.
	 *
	 * @var integer
	 */
	protected $error_incident_count = 5;

	/**
	 * Undocumented variable
	 *
	 * @var [type]
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
	 * @var array
	 */
	protected $updated;

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
	 * @param \WP_REST_Request $request WP request model.
	 *
	 * @return \WP_REST_Response
	 */
	public function error_logging( \WP_REST_Request $request ) {
		$this->params = $request->get_body_params();
		unset( $this->params['browser']['versionNumber'] );
		if ( ! empty( $this->params ) ) {
			$code = $this->handle_error_log();
		}

		return new \WP_REST_Response(
			[
				'success' => 'it-the-success',
				'code'    => $code,
			]
		);
	}

	/**
	 * Endpoint fallback
	 *
	 * @return int
	 */
	protected function handle_error_log() {
		$this->saved = $this->database( 'get' );

		if ( ! $this->should_log( $this->saved ) ) {
			if ( ! empty( $this->saved['error_max'] || ! $this->saved['error_max'] ) ) {
				$this->database(
					'update',
					array_merge(
						$this->saved,
						array(
							'error_max' => true,
							'date'      => new Date(),
						)
					)
				);
			}

			return 0;
		}

		$this->updated     = $this->saved; // make immutable
		$this->key         = base64_encode( $this->params['message'] ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode
		$this->browser_key = base64_encode( implode( ',', $this->params['browser'] ) ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode

		if ( $this->params['browser']['mobile'] ) {
			$this->params['browser']['mobile'] = true === $this->params['browser']['mobile'] ? 'mobile' : 'desktop';
		}

		if ( ! empty( $this->updated[ $this->key ] ) && ! empty( $this->updated[ $this->key ]['count'] ) ) {
			$count = (int) $this->updated[ $this->key ]['count'];
			if ( ! isset( $this->updated['error_max'] ) || 'true' != $this->updated['error_max'] ) {
				if ( ! in_array( implode( ',', $this->params['browser'] ), $this->updated[ $this->key ]['browsers'] ) ) {
					$this->updated[ $this->key ]['browsers'][] = implode( ',', $this->params['browser'] );
				}
				$this->make_log_summary();
				$this->limit_log_entries();
				$this->updated[ $this->key ]['max'] = 'true';
			} elseif ( ( (int) $this->error_count - 1 ) >= $count ) {
				$this->updated[ $this->key ]['count'] = (int) $this->updated[ $this->key ]['count'] + 1;
				if ( ! in_array( implode( ',', $this->params['browser'] ), $this->updated[ $this->key ]['browsers'] ) ) {
					$this->updated[ $this->key ]['browsers'][] = implode( ',', $this->params['browser'] );
				}
				$this->make_log_summary();
				$this->limit_log_entries();
			}
		} elseif ( ! isset( $this->updated[ $this->key ] ) ) {
			$this->updated[ $this->key ] = array(
				'count'    => 1,
				'message'  => $this->params['message'],
				'browsers' => array(
					implode( ',', $this->params['browser'] ),
				),
			);
			$this->make_log_summary();
		}

		if ( $this->updated !== $this->saved ) {
			return $this->database( 'update', $this->updated ) ? 1 : 2;
		}

		return 3;
	}

	/**
	 * Make Incident Summary from Available Parameters.
	 */
	protected function make_log_summary() {
		$this->updated[ $this->key ]['incidents'][ $this->params['date'] ] = $this->params['browser']['name'] . ' ' . $this->params['browser']['version'] . ' on ' . $this->params['browser']['os'];
	}

	/**
	 * Limit most log entries per-error based on $this->error_incident_count
	 *
	 * @return void
	 */
	protected function limit_log_entries() {
		$this->updated[ $this->key ]['incidents'] = array_slice(
			$this->updated[ $this->key ]['incidents'],
			- $this->error_incident_count
		);
	}

	/**
	 * Evaluate data to determine if it should be logged.
	 *
	 * @param array $saved
	 *
	 * @return bool
	 */
	protected function should_log( $saved = array() ) {
		$filter = apply_filters( 'bluehost_admin_error_logging_active', true );

		if ( true === (
				! empty( $saved['error_max'] )
				&& is_bool( $saved['error_max'] )
				&& true === (bool) $saved['error_max']
			)
			 || count( $stored ) >= $this->error_store_count
			 || ( true || 1 ) !== $filter
		) {
			return false;
		}

		return true;
	}

	/**
	 * Database Helper
	 *
	 * @param string $type
	 * @param array  $data
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
				return \get_option( $this->option_key );
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
