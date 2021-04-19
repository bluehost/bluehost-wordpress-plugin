<?php

use  Bluehost\Staging;

if ( ! class_exists( 'WP_CLI' ) ) {
	return;
}

/**
 * Class BH_WP_CLI_Staging
 *
 * This class is instantiated in /inc/cli-init.php
 */
class BH_WP_CLI_Staging extends BH_WP_CLI_Command {

	/**
	 * Used internally to create staging environment.
	 *
	 * @param array $args       Command arguments
	 * @param array $assoc_args Associative command arguments.
	 *
	 * @throws \WP_CLI\ExitException On CLI failure.
	 */
	public function __invoke( $args, $assoc_args ) {

		if ( ! is_array( $args ) || ! isset( $args[0] ) ) {
			$this->error( 'No sub-command provided' );
		}

		switch ( $args[0] ) {

			case 'create':
				$this->render( Staging::getInstance()->createStaging() );
				break;

			case 'clone':
				$this->render( Staging::getInstance()->cloneProductionToStaging() );
				break;

			case 'destroy':
				$this->render( Staging::getInstance()->destroyStaging() );
				break;

			case 'sso_staging':
				$user_id = $this->get_admin_user_id();
				if ( ! $user_id ) {
					$this->error( 'Invalid user.' );
				}
				$this->render( Staging::getInstance()->switchTo( 'staging', $user_id ) );
				break;

			case 'sso_production':
				$user_id = $this->get_admin_user_id();
				if ( ! $user_id ) {
					$this->error( 'Invalid user.' );
				}
				$this->render( Staging::getInstance()->switchTo( 'production', $user_id ) );
				break;

			case 'deploy':
				$deploy_type = isset( $args[1] ) ? $args[1] : '';
				switch ( $deploy_type ) {
					case 'all':
					case 'both':
						$this->render( Staging::getInstance()->deployToProduction( 'all' ) );
						break;
					case 'db':
					case 'database':
						$this->render( Staging::getInstance()->deployToProduction( 'db' ) );
						break;
					case 'files':
						$this->render( Staging::getInstance()->deployToProduction( 'files' ) );
						break;
					default:
						$this->error( 'Invalid deploy type' );
				}
				break;

			case 'deploy_files':
				$this->render( Staging::getInstance()->deployToProduction( 'files' ) );
				break;

			case 'deploy_db':
				$this->render( Staging::getInstance()->deployToProduction( 'db' ) );
				break;

			case 'deploy_files_db':
				$this->render( Staging::getInstance()->deployToProduction( 'all' ) );
				break;

			default:
				$this->error( 'Invalid action' );
		}
	}

	/**
	 * Render a success or error message based on provided data.
	 *
	 * @param mixed $data The data from which to fetch the message.
	 */
	protected function render( $data ) {
		$response = array(
			'status'  => 'error',
			'message' => __( 'Invalid JSON response', 'bluehost-wordpress-plugin' ),
		);
		switch ( gettype( $data ) ) {
			case 'string':
				$decoded = json_decode( $data );
				if ( $decoded && isset( $decoded['message'] ) ) {
					$response = $decoded;
				}
				break;
			case 'array':
				$response = $data;
				break;
			case 'object':
				if ( is_wp_error( $data ) ) {
					$response['message'] = $data->message;
				}
				break;
		}
		if ( 'success' === $response['status'] ) {
			$this->success( $response['message'] );
		} else {
			$this->error( $response['message'] );
		}
	}

	/**
	 * Get an admin user ID.
	 *
	 * @return int
	 */
	protected function get_admin_user_id() {

		$user_id = 0;

		$users = get_users(
			array(
				'role'   => 'administrator',
				'number' => 1,
			)
		);

		if ( is_array( $users ) && is_a( $users[0], 'WP_User' ) ) {
			$user    = $users[0];
			$user_id = $user->ID;
		}

		return $user_id;
	}

}
