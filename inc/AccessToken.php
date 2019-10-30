<?php
/**
 * Class for managing Bluehost access tokens.
 *
 * @package BluehostWordPressPlugin
 */

// phpcs:disable PHPCompatibility.FunctionUse.NewFunctions.random_bytesFound -- WordPress provides a fallback for this function.
// phpcs:disable WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode -- We use this for security reasons.

namespace Bluehost;

use Bluehost\ResponseUtilities;
use Bluehost\SiteMeta;

/**
 * Class AccessToken
 *
 * @uses ResponseUtilities, SiteMeta
 */
class AccessToken {

	/**
	 * Check if an access token is stored.
	 *
	 * @return bool
	 */
	public static function has_token() {
		$token = self::get_token();

		return ! empty( $token );
	}

	/**
	 * Get the stored access token, if available.
	 *
	 * @return string Access token or an empty string if not available.
	 */
	public static function get_token() {
		$token      = '';
		$expiration = get_option( 'bluehost_access_token_expiration', 0 );
		if ( $expiration > time() ) {
			$token = get_option( 'bluehost_access_token', '' );
		}

		return (string) $token;
	}

	/**
	 * Save an access token.
	 *
	 * @param string $token Access token
	 * @param int    $expiration Timestamp of expiration
	 */
	public static function set_token( $token, $expiration ) {
		update_option( 'bluehost_access_token', $token, true );
		update_option( 'bluehost_access_token_expiration', $expiration, true );
	}

	/**
	 * Request an access token.
	 *
	 * @throws \Exception The random_bytes() function may throw an Exception in some cases.
	 *
	 * @return array|\WP_Error
	 */
	public static function request_token() {

		$domain  = SiteMeta::get_domain();
		$site_id = SiteMeta::get_id();

		$hashing_algorithm    = 'sha256';
		$transient_name       = 'authorizations_' . base64_encode( random_bytes( 12 ) );
		$salt                 = random_bytes( 24 );
		$client_secret        = random_bytes( 40 );
		$hashed_client_secret = hash( $hashing_algorithm, $salt . $client_secret, true );
		$transient_value      = sprintf(
			'%s:%s:%s',
			$hashing_algorithm,
			base64_encode( $salt ),
			base64_encode( $hashed_client_secret )
		);

		set_transient( $transient_name, $transient_value, MINUTE_IN_SECONDS );

		return wp_remote_post(
			sprintf( 'https://my.bluehost.com/siteapi/sites/%s/%s/authorizations', $domain, $site_id ),
			array(
				'timeout' => 45,
				'body'    => array(
					'transient_name' => $transient_name,
					'client_secret'  => base64_encode( $client_secret ),
					'domain'         => $domain,
					'site_id'        => $site_id,
					'scopes'         => array(),
				),
			)
		);

	}

	/**
	 * Refresh the stored token.
	 */
	public static function refresh_token() {
		try {
			$response = self::request_token();
			$data     = ResponseUtilities::parse_json_response( $response );
			if ( isset( $data['access_token'], $data['expires_in'] ) ) {
				$token      = $data['access_token'];
				$expires_in = (int) $data['expires_in'];
				$timestamp  = ResponseUtilities::get_response_timestamp( $response );
				self::set_token( $token, $timestamp + $expires_in );
			}
		} catch ( \Exception $e ) {
			trigger_error( $e->getMessage() ); // phpcs:ignore
		}
	}

	/**
	 * Check for proper conditions before refreshing the token.
	 */
	public static function maybe_refresh_token() {
		if ( current_user_can( 'manage_options' ) && ! self::has_token() ) {
			self::refresh_token();
		}
	}

}
