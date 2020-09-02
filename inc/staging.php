<?php

namespace Bluehost;

// phpcs:disable WordPress.NamingConventions.ValidFunctionName.MethodNameInvalid, WordPress.NamingConventions.ValidVariableName.VariableNotSnakeCase

/**
 * Class Staging
 */
class Staging {

	/**
	 * Get an instance of this class.
	 *
	 * @return Staging
	 */
	public static function getInstance() {
		return new self();
	}

	/**
	 * Get the staging configuration.
	 *
	 * @param bool $cache Whether or not to hit the cached config on this function call.
	 *
	 * @return array
	 */
	public function getConfig( $cache = true ) {
		static $config;

		if ( ! isset( $config ) || false === $cache ) {
			$config = get_option( 'staging_config', [] );
		}

		return $config;
	}

	/**
	 * Get a specific staging configuration value.
	 *
	 * Allowed keys:
	 *  - production_dir
	 *  - production_url
	 *  - staging_dir
	 *  - staging_url
	 *  - creation_date
	 *
	 * @param string $key     Configuration name.
	 * @param string $default Return value if key doesn't exist.
	 *
	 * @return string
	 */
	public function getConfigValue( $key, $default = '' ) {
		$config = $this->getConfig();

		return isset( $config[ $key ] ) ? $config[ $key ] : $default;
	}

	/**
	 * Get the production directory
	 *
	 * @return string
	 */
	public function getProductionDir() {
		return $this->getConfigValue( 'production_dir', ABSPATH );
	}

	/**
	 * Get the production URL
	 *
	 * @return string
	 */
	public function getProductionUrl() {
		return $this->getConfigValue( 'production_url', site_url() );
	}

	/**
	 * Get the staging directory
	 *
	 * @return string
	 */
	public function getStagingDir() {
		return $this->getConfigValue( 'staging_dir' );
	}

	/**
	 * Get the staging URL
	 *
	 * @return string
	 */
	public function getStagingUrl() {
		return $this->getConfigValue( 'staging_url' );
	}

	/**
	 * Get the staging creation date
	 *
	 * @return string
	 */
	public function getCreationDate() {
		return $this->getConfigValue( 'creation_date' );
	}

	/**
	 * Get the name of the current environment.
	 *
	 * @return string|false
	 */
	public function getEnvironment() {
		return get_option( 'staging_environment', 'production' );
	}

	/**
	 * Get production screenshot URL.
	 *
	 * @param int $width  Screenshot width.
	 * @param int $height Screenshot height.
	 *
	 * @return string
	 */
	public function getProductionScreenshotUrl( $width = 122, $height = 92 ) {
		return '';
	}

	/**
	 * Get staging screenshot URL.
	 *
	 * @param int $width  Screenshot width.
	 * @param int $height Screenshot height.
	 *
	 * @return string
	 */
	public function getStagingScreenshotUrl( $width = 122, $height = 92 ) {
		return '';
	}

	/**
	 * Check if the current environment matches a specific value.
	 *
	 * @param string $env Environment name (production or staging).
	 *
	 * @return bool
	 */
	public function isEnvironment( $env ) {
		return $this->getEnvironment() === $env;
	}

	/**
	 * Check if the current environment is staging.
	 *
	 * @return bool
	 */
	public function isStaging() {
		return $this->isEnvironment( 'staging' );
	}

	/**
	 * Check if the current environment is production.
	 *
	 * @return bool
	 */
	public function isProduction() {
		return $this->isEnvironment( 'production' );
	}

	/**
	 * Check if the staging exists
	 *
	 * @return bool
	 */
	public function stagingExists() {
		$stagingDir = $this->getStagingDir();

		return ! empty( $stagingDir ) && file_exists( $stagingDir );
	}

	/**
	 * Clone production environment to staging.
	 *
	 * @return array|\WP_Error
	 */
	public function cloneProductionToStaging() {
		if ( ! $this->isProduction() ) {
			return new \WP_Error(
				'invalid_environment',
				__( 'Cloning can only be done from the production environment.', 'bluehost-wordpress-plugin' )
			);
		}

		return $this->runCommand( 'clone' );
	}

	/**
	 * Run a compatibility check to see if the environment supports staging.
	 *
	 * @return array|\WP_Error
	 */
	public function compatibilityCheck() {
		return $this->runCommand( 'compat_check' );
	}

	/**
	 * Create a staging environment.
	 *
	 * @return array|\WP_Error
	 */
	public function createStaging() {
		if ( $this->stagingExists() ) {
			return new \WP_Error(
				'environment_exists',
				__( 'Staging environment already exists!', 'bluehost-wordpress-plugin' )
			);
		}

		return $this->runCommand( 'create' );
	}

	/**
	 * Deploy changes from staging to production.
	 *
	 * @param string $type Deployment type. One of `db`, `files`, or `all`.
	 *
	 * @return array|\WP_Error
	 */
	public function deployToProduction( $type = 'all' ) {
		switch ( $type ) {
			case 'db':
				return $this->runCommand( 'deploy_db' );
			case 'files':
				return $this->runCommand( 'deploy_files' );
			default:
				return $this->runCommand( 'deploy_files_db' );
		}
	}

	/**
	 * Destroy the staging environment.
	 *
	 * @return array|\WP_Error
	 */
	public function destroyStaging() {
		if ( ! $this->isProduction() ) {
			return new \WP_Error(
				'invalid_environment',
				__( 'You must switch to the production environment before destroying staging.', 'bluehost-wordpress-plugin' )
			);
		}

		return $this->runCommand( 'destroy' );
	}

	/**
	 * Switch to a different environment.
	 *
	 * @param string $env     Environment name (staging or production).
	 * @param int    $user_id User ID to login as.
	 *
	 * @return array|\WP_Error
	 */
	public function switchTo( $env, $user_id = 0 ) {
		if ( ! $user_id ) {
			$user_id = get_current_user_id();
		}
		if ( $this->isEnvironment( $env ) ) {
			return new \WP_Error(
				'invalid_environment',
				__( 'Switch to an environment you are already in, you cannot.', 'bluehost-wordpress-plugin' )
			);
		}

		if ( 'staging' === $env ) {
			return $this->runCommand( 'sso_staging', [ $user_id ] );
		}

		return $this->runCommand( 'sso_production', [ $user_id ] );
	}

	/**
	 * Execute a staging CLI command.
	 *
	 * @param string     $command CLI command to be run.
	 * @param array|null $args    CLI command arguments to be passed.
	 *
	 * @return array|\WP_Error
	 */
	protected function runCommand( $command, $args = null ) {

		$allowedCommands = [
			'clone'           => true,
			'compat_check'    => true,
			'create'          => true,
			'deploy_db'       => true,
			'deploy_files'    => true,
			'deploy_files_db' => true,
			'destroy'         => true,
			'sso_production'  => true,
			'sso_staging'     => true,
		];

		// Check if command is allowed
		if ( ! array_key_exists( $command, $allowedCommands ) ) {
			return new \WP_Error(
				'invalid_command',
				__( 'Invalid staging CLI command.', 'bluehost-wordpress-plugin' )
			);
		}

		$config = $this->getConfig();

		// If config is empty, then we are creating a staging environment.
		if ( empty( $config ) || 'create' === $command ) {

			$uniqueId = wp_rand( 1000, 9999 );

			$config = [
				'creation_date'  => date( 'M j, Y' ),
				'production_dir' => ABSPATH,
				'production_url' => get_option( 'siteurl' ),
				'staging_dir'    => ABSPATH . 'staging/' . $uniqueId,
				'staging_url'    => get_option( 'siteurl' ) . '/staging/' . $uniqueId,
			];

			update_option( 'staging_config', $config );

		}

		$token = wp_generate_password( 32, false );
		set_transient( 'staging_auth_token', $token, 60 );

		$command = [
			$command,
			$token,
			$config['production_dir'],
			$config['staging_dir'],
			$config['production_url'],
			$config['staging_url'],
			get_current_user_id(),
		];

		if ( $args && is_array( $args ) ) {
			$command = array_merge( $command, array_values( $args ) );
		}

		$command = implode( ' ', array_map( 'escapeshellcmd', $command ) );

		// Check for invalid characters
		$invalidChars = [ ';', '&', '|' ];
		foreach ( $invalidChars as $char ) {
			if ( false !== strpos( $command, $char ) ) {
				return new \WP_Error(
					'invalid_character',
					// translators: Invalid character that was entered
					sprintf( __( 'Invalid character (%s) in command.', 'bluehost-wordpress-plugin' ), $char )
				);
			}
		}

		$script = BLUEHOST_PLUGIN_DIR . 'lib/.staging';

		$disabled_functions = explode( ',', ini_get( 'disable_functions' ) );
		if ( is_array( $disabled_functions ) && in_array( 'exec', array_map( 'trim', $disabled_functions ) ) ) {
			return new \WP_Error( 'error_response', __( 'Unable to execute script (disabled_function).', 'bluehost-wordpress-plugin' ) );
		}

		// Verify staging script file permissions
		if ( 0755 != (int) substr( sprintf( '%o', fileperms( $script ) ), - 4 ) ) { // phpcs:ignore
			if ( is_writable( $script ) ) {
				chmod( $script, 0755 );
			} else {
				return new \WP_Error( 'error_response', __( 'Unable to execute script (permission error).', 'bluehost-wordpress-plugin' ) );
			}
		}

		putenv( 'PATH=' . getenv( 'PATH' ) . PATH_SEPARATOR . '/usr/local/bin' ); // phpcs:ignore

		do_action( 'bh_staging_command', $command );

		$json = exec( "{$script} {$command}" ); // phpcs:ignore

		// Check if we can properly decode the JSON
		$response = json_decode( $json, true );
		if ( ! $response ) {
			return new \WP_Error( 'json_decode', __( 'Unable to parse JSON', 'bluehost-wordpress-plugin' ) );
		}

		// Check if response is an error response.
		if ( isset( $response->status, $response->message ) && 'error' === $response->status ) {
			return new \WP_Error( 'error_response', $response->message );
		}

		return $response;
	}

}
