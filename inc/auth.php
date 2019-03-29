<?php

/**
 * Class Bluehost_Auth
 */
class Bluehost_Auth {

	/**
	 * Get the domain for the WordPress installation.
	 *
	 * @return string
	 */
	public static function get_site_domain() {
		return wp_parse_url( get_home_url(), PHP_URL_HOST );
	}

	/**
	 * Get the absolute filesystem path to the root of the WordPress installation.
	 *
	 * @return string
	 */
	public static function get_site_path() {
		return strstr( ABSPATH, '/public_html/' );
	}

	/**
	 * Get the site ID given the full path to the site root.
	 *
	 * @return string Site ID is the path encoded as UTF-8 and converted to hexadecimal.
	 */
	public static function get_site_id() {
		$path = self::get_site_path();

		return bin2hex( iconv( mb_detect_encoding( $path, mb_detect_order(), true ), 'UTF-8', $path ) );
	}

	public static function request_access_token() {

		$domain  = self::get_site_domain();
		$site_id = self::get_site_id();

		$hashing_algorithm    = 'sha256';
		$transient_name       = random_bytes( 12 );
		$salt                 = random_bytes( 24 );
		$client_secret        = random_bytes( 40 );
		$hashed_client_secret = hash( $hashing_algorithm, $salt . $client_secret );
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
				),
			)
		);

	}

}

/*

// Test used on a Bluehost site to see if it works.
add_action(
	'init',
	function() {

		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			return;
		}

		var_dump(
			Bluehost_Auth::request_access_token()
		);
		die();

	}
);
*/
