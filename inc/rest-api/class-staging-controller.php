<?php

class Bluehost_Staging_Controller extends WP_REST_Controller {

	protected $namespace = 'bluehost/v1';

	public function register_routes() {

		register_rest_route(
			$this->namespace,
			'/staging/ping',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'is_staging' ),
					'permission_callback' => array( $this, 'check_permission' ),
					'args'                => $this->get_collection_params(),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/staging/create',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'create' ),
					'permission_callback' => array( $this, 'check_permission' ),
					'args'                => $this->get_collection_params(),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/staging/clone',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'clone_env' ),
					'permission_callback' => array( $this, 'check_permission' ),
					'args'                => $this->get_collection_params(),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/staging/sso/staging',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'staging' ),
					'permission_callback' => array( $this, 'check_permission' ),
					'args'                => $this->get_collection_params(),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/staging/sso/production',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'sso_production' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/staging/destroy',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'destroy' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/staging/deploy',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'deploy' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/staging/deploy_files',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'deploy_files' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/staging/deploy_db',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'deploy_db' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			)
		);

		register_rest_route(
			$this->namespace,
			'/staging/sso/production',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( $this, 'sso_production' ),
					'permission_callback' => array( $this, 'check_permission' ),
				),
			)
		);
	}

	/**
	 * Check if the current environment is staging.
	 *
	 * @return bool
	 */
	function is_staging() {
		return ( get_option( 'staging_environment' ) === 'staging' ) ? true : false;
	}

	function check_environment( $env ) {
		$current_env = get_option( 'staging_environment' );

		return $env === $current_env;
	}

	function check_permission() {
		return (bool) current_user_can( 'manage_options' );
	}

	function create() {
		$this->check_environment( false ); // TODO: Make this do something!
		set_transient( 'mm_fresh_staging', true, 300 );
		$json = $this->exec( 'create' );

		return $this->getResponse( $json );
	}

	function clone_env() {
		$this->check_environment( 'production' ); // TODO: Make this do something!
		$json = $this->exec( 'clone' );

		return $this->getResponse( $json );
	}

	function destroy() {
		$this->check_environment( 'production' ); // TODO: Make this do something!
		$json = $this->exec( 'destroy' );

		return $this->getResponse( $json );
	}

	function sso_staging() {
		$this->check_environment( 'staging' ); // TODO: Make this do something!
		$json = $this->exec( 'sso_staging', array( get_current_user_id() ) );

		return $this->getResponse( $json );
	}

	function deploy() {
		$this->check_environment( 'staging' ); // TODO: Make this do something!
		$json = $this->exec( 'deploy_files_db' );

		return $this->getResponse( $json );
	}

	function deploy_files() {
		$this->check_environment( 'staging' ); // TODO: Make this do something!
		$json = $this->exec( 'deploy_files' );

		return $this->getResponse( $json );
	}

	function deploy_db() {
		$this->check_environment( 'staging' ); // TODO: Make this do something!
		$json = $this->exec( 'deploy_db' );

		return $this->getResponse( $json );
	}

	function sso_production() {
		$this->check_environment( 'staging' ); // TODO: Make this do something!
		$json = $this->exec( 'sso_production', array( get_current_user_id() ) );

		return $this->getResponse( $json );
	}

	function save_state() {
		return new WP_Rest_Response( null, 200 );
	}

	function restore_state() {
		return new WP_Rest_Response( null, 200 );
	}

	function exec( $command, $args = null ) {

		$whitelist_commands = array(
			'create'          => false,
			'clone'           => 'production',
			'destroy'         => 'production',
			'sso_staging'     => 'production',
			'deploy_files'    => 'staging',
			'deploy_db'       => 'staging',
			'deploy_files_db' => 'staging',
			'sso_production'  => 'staging',
			'save_state'      => 'staging',
			'restore_state'   => 'staging',
			'revisions'       => 'staging',
			'compat_check'    => false,
		);

		if ( ! array_key_exists( $command, $whitelist_commands ) ) {
			return json_encode( array( 'status' => 'error', 'message' => 'Command not found in whitelist.' ) );
		} else if ( ! class_exists( 'WP_CLI_Command' ) ) {
			mm_check_env( $whitelist_commands[ $command ] );
		}

		if ( 'compat_check' != $command && 'revisions' != $command ) {
			do_action( 'mm_staging_command', $command );
		}

		$command = array( $command );
		$token = wp_generate_password( 32, false );
		set_transient( 'staging_auth_token', $token, 60 );
		$command[] = $token;
		$config = get_option( 'staging_config' );
		if ( false == $config || ! isset( $config['production_dir'] ) || ! isset( $config['staging_dir'] ) ) {
			$staging_rel = 'staging/' . mt_rand( 1000, 9999 );
			$config = array(
				'production_dir' => ABSPATH,
				'staging_dir'    => ABSPATH . $staging_rel . '/',
				'production_url' => get_option( 'siteurl' ),
				'staging_url'    => get_option( 'siteurl' ) . '/' . $staging_rel,
				'creation_date'  => date( 'M j, Y' ),
			);
			update_option( 'staging_config', $config );
		}

		$command[] = $config['production_dir'];
		$command[] = $config['staging_dir'];
		$command[] = $config['production_url'];
		$command[] = $config['staging_url'];
		$command[] = get_current_user_id();

		if ( ! is_null( $args ) && is_array( $args ) ) {
			$args = array_values( $args );
			$command = array_merge( $command, $args );
		}

		array_map( 'escapeshellcmd', $command );
		$command = implode( ' ', $command );

		if ( false !== strpos( $command, ';' ) ) {
			return json_encode( array( 'status' => 'error', 'message' => 'Invalid character in command (;).' ) );
		}

		if ( false !== strpos( $command, '&' ) ) {
			return json_encode( array( 'status' => 'error', 'message' => 'Invalid character in command (&).' ) );
		}

		if ( false !== strpos( $command, '|' ) ) {
			return json_encode( array( 'status' => 'error', 'message' => 'Invalid character in command (|).' ) );
		}

		$script = MM_BASE_DIR . 'lib/.staging';

		if ( 0755 != (int) substr( sprintf( '%o', fileperms( $script ) ), - 4 ) ) {
			chmod( $script, 0755 );
		}

		putenv( 'PATH=' . getenv( 'PATH' ) . PATH_SEPARATOR . '/usr/local/bin' );

		$response = exec( $script . ' ' . $command );

		return $response;
	}

	/**
	 * Check if response is an error.
	 *
	 * @param stdClass $data
	 *
	 * @return bool
	 */
	protected function isError( stdClass $data ) {
		$isError = false;

		if ( isset( $data, $data->status ) && 'error' === $data->status ) {
			$isError = true;
		}

		return $isError;
	}

	/**
	 * Convert the JSON payload into a WP_REST_Response.
	 *
	 * @param string $payload JSON
	 *
	 * @return WP_REST_Response
	 */
	protected function getResponse( $payload ) {
		$data = json_decode( $payload );

		if ( ! $data ) {
			return new WP_REST_Response( [ 'status' => 'error', 'message' => 'Unable to parse JSON response.' ], 500 );
		}

		if ( $this->isError( $data ) ) {
			return new WP_REST_Response( $data, 500 );
		}

		return new WP_REST_Response( $data );
	}
}
