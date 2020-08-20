<?php

/**
 * Class BH_WP_CLI_Secrets
 *
 * This class is instantiated in /inc/cli-init.php
 */
class BH_WP_CLI_Secrets extends BH_WP_CLI_Command {
	/**
	 * @var array - Keys for constants defined in wp-config.php.
	 */
	protected static $config_secret_slugs = array(
		'AUTH_KEY',
		'SECURE_AUTH_KEY',
		'LOGGED_IN_KEY',
		'NONCE_KEY',
		'AUTH_SALT',
		'SECURE_AUTH_SALT',
		'LOGGED_IN_SALT',
		'NONCE_SALT',
	);

	/**
	 * @var array - Generated key => values for $this->config_secret_slugs using wp_generate_password().
	 */
	protected $built_secrets = array();

	/**
	 * @var string - Timestamp stored in wp_options.
	 */
	protected static $timestamp_db_key = 'eig_wpconfig_secrets_timestamp';

	/**
	 * @var string - User-provided subcommand.
	 */
	protected $subcommand = '';

	/**
	 * List and regenerate wp-config.php secret keys & salts. If salts originated from this command, can show age.
	 *
	 * @param $args
	 * @param $assoc_args
	 *
	 * @throws \WP_CLI\ExitException
	 */
	public function __invoke( $args, $assoc_args ) {
		$this->subcommand = isset( $args[0] ) ? $args[0] : $this->subcommand;
		switch ( $this->subcommand ) {
			case 'create':
			case 'generate':
			case 'regenerate':
			case 'update':
				$this->update();
				break;
			case 'age':
			case 'timestamp':
				$this->timestamp();
				break;
			case 'list':
			default:
				$this->list_secrets();
				break;
		}
	}

	/**
	 * Show current secrets and timestamp -- if it exists.
	 */
	protected function list_secrets() {
		$fields = implode( ' ', static::$config_secret_slugs );
		\WP_CLI::runcommand( 'config list ' . $fields . ' --strict' );
		$this->timestamp();
	}

	/**
	 * Update wp-config.php _KEY and _SALT constants using wp config set.
	 *
	 * @throws \WP_CLI\ExitException
	 */
	protected function update() {
		$this->timestamp();
		$this->confirm( 'Updating the salts logs any active users out. Do it?', 'yellow' );
		/**
		 * Create new salts using wp_generate_password( 64, true true ) for 64-character alphanum + special keys.
		 */
		$this->build_secrets();
		if ( ! empty( $this->built_secrets ) ) {
			// delete existing generated constant
			$this->secret_timestamp( 'delete' );
			foreach ( $this->built_secrets as $secret_key => $secret_value ) {
				\WP_CLI::run_command(
					array(
						'config',
						'set',
						$secret_key,
						"$secret_value",
					),
					array(
						'type'      => 'constant',
						'anchor'    => '* @since 2.6.0.' . PHP_EOL . '*/',
						'placement' => 'after',
					)
				);
			}
			$this->secret_timestamp( 'create' );
		}
	}

	/**
	 * Use wp_generate_password() to create 64 character randomized strings with "extra" special characters
	 */
	protected function build_secrets() {
		foreach ( static::$config_secret_slugs as $salt_slug ) {
			$this->built_secrets[ $salt_slug ] = wp_generate_password( 64, true, true );
		}
	}

	/**
	 * Check for database timestamp and message accordingly.
	 */
	protected function timestamp() {
		$db_time = $this->secret_timestamp();
		if ( ! empty( $db_time ) && is_string( $db_time ) ) {
			$human_time = human_time_diff( strtotime( $db_time ), current_time( 'timestamp' ) );
			$this->info( 'Secrets last generated ' . $human_time . ' ago.' );
		} else {
			$this->info( 'No timestamp found for existing secrets -- they were likely created upon install.' );
		}
	}

	/**
	 * Helper method for Secrets Timestamp (time wp-config.php keys & salts were generated)
	 *
	 * @param string $case
	 *
	 * @return bool|mixed
	 */
	protected function secret_timestamp( $case = 'get' ) {
		switch ( $case ) {
			case 'delete':
				$success = delete_option( static::$timestamp_db_key );
				break;
			case 'create':
				$success = add_option( static::$timestamp_db_key, current_time( 'mysql' ), '', false );
				break;
			case 'get':
			default:
				$success = get_option( static::$timestamp_db_key, null );
				break;
		}

		return $success;
	}
}
