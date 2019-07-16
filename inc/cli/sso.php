<?php

/**
 * Class EIG_WP_CLI_SSO
 *
 * This class is instantiated in /inc/cli-init.php
 */
class EIG_WP_CLI_SSO extends EIG_WP_CLI_Command {

	/**
	 * @var string - Stored transient key used for SSO.
	 */
	public static $transient_slug = 'sso_token';

	/**
	 * @var string - Nonce validation key.
	 */
	public static $nonce_slug = 'mojo-sso';

	/**
	 * @var string - Nonce action key.
	 */
	public static $nonce_action = 'sso-check';

	/**
	 * @var int Time for nonce token to be valid.
	 */
	public $expiry_min = 3;

	/**
	 * @var string - Cryptographic salt.
	 */
	protected $salt;

	/**
	 * @var string - Validation nonce.
	 */
	protected $nonce;

	/**
	 * @var string - Cryptographic hash.
	 */
	protected $hash;

	/**
	 * Single Sign On via WP-CLI.
	 *
	 * @param  null $args Unused.
	 * @param  array $assoc_args Additional args to define which user or role to login as.
	 */
	public function __invoke( $args, $assoc_args ) {

		$this->create_salt_nonce_and_hash();

		$params = $this->build_request_params(
			$assoc_args,
			array(
				'action' => static::$nonce_action,
				'salt'   => $this->salt,
				'nonce'  => $this->nonce,
			)
		);

		set_transient(
			static::$transient_slug,
			$this->hash,
			MINUTE_IN_SECONDS * $this->expiry_min
		);

		$link = add_query_arg( $params, admin_url( 'admin-ajax.php' ) );

		if ( isset( $assoc_args['url-only'] ) ) {
			\WP_CLI::log( $link );
		} else {
			$this->success( 'Single-use login link valid for ' . $this->expiry_min . ' minutes' );
			$this->colorize_log( $link, 'underline' );
		}

	}

	/**
	 * Build request parameters for SSO URL.
	 *
	 * @param array $assoc_args
	 * @param array $params
	 *
	 * @return array
	 */
	protected function build_request_params( $assoc_args, $params ) {
		if ( ! empty( $assoc_args ) ) {
			if ( isset( $assoc_args['role'] ) ) {
				$user = get_users( array( 'role' => 'administrator', 'number' => 1 ) );
				if ( is_array( $user ) && is_a( $user[0], 'WP_User' ) ) {
					$params['user'] = $user[0]->ID;
				}
			}

			if ( isset( $assoc_args['email'] ) ) {
				$user = get_user_by( 'email', $assoc_args['email'] );
				if ( is_a( $user, 'WP_User' ) ) {
					$params['user'] = $user->ID;
				}
			}

			if ( isset( $assoc_args['username'] ) ) {
				$user = get_user_by( 'login', $assoc_args['username'] );
				if ( is_a( $user, 'WP_User' ) ) {
					$params['user'] = $user->ID;
				}
			}

			if ( isset( $assoc_args['id'] ) ) {
				$user = get_user_by( 'ID', $assoc_args['id'] );
				if ( is_a( $user, 'WP_User' ) ) {
					$params['user'] = $user->ID;
				}
			}

			if ( isset( $assoc_args['min'] ) ) {
				$this->expiry_min = (int) $assoc_args['min'];
			}
		}

		return $params;
	}

	/**
	 * Setup cryptographic strings for SSO link.
	 */
	protected function create_salt_nonce_and_hash() {
		$this->salt  = wp_generate_password( 32, false );
		$this->nonce = wp_create_nonce( static::$nonce_slug );
		$this->hash  = substr(
			base64_encode( hash( 'sha256', $this->nonce . $this->salt, false ) ),
			0,
			64
		);
	}
}
