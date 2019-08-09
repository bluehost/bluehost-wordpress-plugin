<?php

class Bluehost_Staging_Controller extends WP_REST_Controller {

	protected $namespace = 'bluehost/v1';

	public function register_routes() {

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
					'callback'            => array( $this, 'clone' ),
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

	function is_staging() {
		return ( get_option( 'staging_environment' ) == 'staging' ) ? true : false;
	}

	function check_environment( $env ) {
		$current_env = get_option( 'staging_environment', false );
		if ( $env == $current_env ) {
			return true;
		} else {
			return false;
		}
	}

	function check_permission() {
		return (bool) current_user_can( 'manage_options' );
	}

	function compatibility_check(){
		return $this->exec( 'compat_check' );
	}

	function create(){
		$this->check_environment( false );
		set_transient( 'mm_fresh_staging', true, 300 );
		$create = $this->exec( 'create' );
		return new WP_Rest_Response( $create, 200 );
	}

	function clone(){
		$this->check_environment( 'production' );
		$clone = $this->exec( 'clone' );
		return new WP_Rest_Response( $clone, 200 );
	}

	function destroy(){
		$this->check_environment( 'production' );
		$destroy = $this->exec( 'destroy' );
		return new WP_Rest_Response( $destroy, 200 );
	}

	function sso_staging(){
		$this->check_environment( 'staging' );
		$sso = $this->exec( 'sso_staging', array( get_current_user_id() ) );
		return new WP_Rest_Response( $sso, 200 );
	}

	function deploy(){
		$this->check_environment( 'staging' );
		$deploy = $this->exec( 'deploy_files_db' );
		return new WP_Rest_Response( $deploy, 200 );
	}

	function deploy_files(){
		$this->check_environment( 'staging' );
		$deploy = $this->exec( 'deploy_files' );
		return new WP_Rest_Response( $deploy, 200 );
	}

	function deploy_db(){
		$this->check_environment( 'staging' );
		$deploy =  $this->exec( 'deploy_db' );
		return new WP_Rest_Response( $deploy, 200 );
	}

	function sso_production(){
		$this->check_environment( 'staging' );
		$sso = $this->exec( 'sso_production', array( get_current_user_id() ) );
		return new WP_Rest_Response( $sso, 200 );
	}

	function save_state(){ return new WP_Rest_Response( null, 200 ); }
	function restore_state(){ return new WP_Rest_Response( null, 200 ); }

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
			echo json_encode( array( 'status' => 'error', 'message' => 'Command not found in whitelist.' ) );
		} else {
			if ( ! class_exists( 'WP_CLI_Command' ) ) {
				mm_check_env( $whitelist_commands[ $command ] );
			}
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
			echo json_encode( array( 'status' => 'error', 'message' => 'Invalid character in command (;).' ) );
			die;
		}

		if ( false !== strpos( $command, '&' ) ) {
			echo json_encode( array( 'status' => 'error', 'message' => 'Invalid character in command (&).' ) );
			die;
		}

		if ( false !== strpos( $command, '|' ) ) {
			echo json_encode( array( 'status' => 'error', 'message' => 'Invalid character in command (|).' ) );
			die;
		}

		$script = MM_BASE_DIR . 'lib/.staging';

		if ( 0755 != (int) substr( sprintf( '%o', fileperms( $script ) ), -4 ) ) {
			chmod( $script, 0755 );
		}

		putenv( 'PATH=' . getenv( 'PATH' ) . PATH_SEPARATOR . '/usr/local/bin' );

		$response = exec( $script . ' ' . $command );

		return $response;
	}
}
