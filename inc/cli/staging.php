<?php

if ( ! class_exists( 'WP_CLI' ) ) {
	return;
}

/**
 * Class EIG_WP_CLI_Staging
 *
 * This class is instantiated in /inc/cli-init.php
 */
class EIG_WP_CLI_Staging extends EIG_WP_CLI_Command {

	/**
	 * @var array - Subcommand actions used to create/modify staging environments.
	 */
	protected static $valid_actions = array(
		'create',
		'clone',
		'destroy',
		'sso_staging',
		'deploy',
		'deploy_files',
		'deploy_db',
		'deploy_files_db',
		'save_state',
		'restore_state',
		'sso_production',
	);
	/**
	 * Used internally to create staging environment.
	 *
	 * @param $args null
	 * @param $assoc_args array
	 * @throws \WP_CLI\ExitException
	 */
	public function __invoke( $args, $assoc_args ) {
		if ( ! is_array( $args ) || ! isset( $args[0] ) ) {
			$this->error( 'No sub-command provided' );
		}
		if ( ! in_array( $args[0], static::$valid_actions ) ) {
			$this->error( 'Invalid action' );
		}
		switch ( $args[0] ) {
			case 'create':
				set_transient( 'mm_fresh_staging', true, 300 );
				$json_response = mm_cl( 'create' );
				break;

			case 'clone':
				$json_response = mm_cl( 'clone' );
				break;

			case 'destroy':
				$json_response = mm_cl( 'destroy' );
				break;

			case 'sso_staging':
				$user = get_users( array( 'role' => 'administrator', 'number' => 1 ) );
				if ( is_array( $user ) && is_a( $user[0], 'WP_User' ) ) {
					$user = $user[0];
					$user = $user->ID;
				}
				$json_response = mm_cl( 'sso_staging', array( $user ) );
				break;

			case 'sso_production':
				$user = get_users( array( 'role' => 'administrator', 'number' => 1 ) );
				if ( is_array( $user ) && is_a( $user[0], 'WP_User' ) ) {
					$user = $user[0];
					$user = $user->ID;
				}
				$json_response = mm_cl( 'sso_production', array( $user ) );
				break;

			case 'deploy':
				if ( ! isset( $args[1] ) || ! in_array( $args[1], array( 'files', 'db', 'database', 'all', 'both' ) ) ) {
					$this->error( 'Invalid deploy type' );
				}
				if ( 'files' == $args[1] ) {
					$json_response = mm_cl( 'deploy_files' );
				}
				if ( 'db' == $args[1] || 'database' == $args[1] ) {
					$json_response = mm_cl( 'deploy_db' );
				}
				if ( 'all' == $args[1] || 'both' == $args[1] ) {
					$json_response = mm_cl( 'deploy_files_db' );
				}
				break;

			case 'deploy_files':
				$json_response = mm_cl( 'deploy_files' );
				break;

			case 'deploy_db':
				$json_response = mm_cl( 'deploy_db' );
				break;

			case 'deploy_files_db':
				$json_response = mm_cl( 'deploy_files_db' );
				break;

			case 'save_state':
				$json_response = mm_cl( 'save_state' );
				break;

			case 'restore_state':
				if ( ! isset( $assoc_args['revision'] ) ) {
					$this->error( 'Revision not provided.' );
				}
				$json_response = mm_cl( 'restore_state', array( esc_attr( $assoc_args['revision'] ) ) );
				break;
		}
		$json_response = preg_replace( '/[^[:print:]]/', '',$json_response );
		$json_response = str_replace( '[H[2J', '', $json_response );

		if ( $response = json_decode( $json_response ) ) {
			if ( 'success' == $response->status ) {
				$this->success( $response->message );
			} else {
				$this->error( $response->message );
			}
		} else {
			$this->error( 'Invalid JSON response' );
		}
	}
}
