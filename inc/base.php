<?php

/**
 * Check if plugin install date exists.
 *
 * @return bool
 */
function bh_has_plugin_install_date() {
	return ! empty( get_option( 'bh_plugin_install_date', '' ) );
}

/**
 * Get the plugin install date.
 *
 * @return string
 */
function bh_get_plugin_install_date() {
	return (string) get_option( 'bh_plugin_install_date', gmdate( 'U' ) );
}

/**
 * Set the plugin install date.
 *
 * @param string $value Date in Unix timestamp format.
 */
function bh_set_plugin_install_date( $value ) {
	update_option( 'bh_plugin_install_date', $value, true );
}

/**
 * Get the number of days since the plugin was installed.
 *
 * @return int
 */
function bh_get_days_since_plugin_install_date() {
	return absint( ( gmdate( 'U' ) - bh_get_plugin_install_date() ) / DAY_IN_SECONDS );
}

/**
 * Basic setup
 */
function bh_setup() {
	if ( ( '' === get_option( 'mm_master_aff' ) || false === get_option( 'mm_master_aff' ) ) && defined( 'MMAFF' ) ) {
		update_option( 'mm_master_aff', MMAFF );
	}
	$install_date = get_option( 'mm_install_date' );
	if ( empty( $install_date ) ) {
		update_option( 'mm_install_date', gmdate( 'M d, Y' ) );
		$event                            = array(
			't'    => 'event',
			'ec'   => 'plugin_status',
			'ea'   => 'installed',
			'el'   => 'Install date: ' . get_option( 'mm_install_date', gmdate( 'M d, Y' ) ),
			'keep' => false,
		);
		$events                           = get_option( 'mm_cron', array() );
		$events['hourly'][ $event['ea'] ] = $event;
		update_option( 'mm_cron', $events );
	}
	if ( ! bh_has_plugin_install_date() ) {
		$date = false;
		if ( ! empty( $install_date ) ) {
			$date = DateTime::createFromFormat( 'M d, Y', $install_date );
		}
		bh_set_plugin_install_date( $date ? $date->format( 'U' ) : gmdate( 'U' ) );
	}
}

add_action( 'admin_init', 'bh_setup' );

/**
 * Install date filter
 *
 * @param string $install_date - incoming install date
 * @return string filtered install date
 */
function bh_install_date_filter( $install_date ) {
	return bh_get_plugin_install_date();
}

add_filter( 'nfd_install_date_filter', 'bh_install_date_filter' );

/**
 * Makes a GET request to an API and caches the results.
 *
 * @param string $api_url - the api url
 *
 * @return array|WP_Error
 */
function bh_api_cache( $api_url ) {
	$hash      = md5( $api_url );
	$transient = get_transient( 'bh_api_calls' );
	if ( false === $transient || ! isset( $transient[ $hash ] ) ) {
		$transient[ $hash ] = wp_remote_get( $api_url, array( 'timeout' => 15 ) );
		if ( ! is_wp_error( $transient[ $hash ] ) ) {
			set_transient( 'bh_api_calls', $transient, DAY_IN_SECONDS );
		}
	}

	return $transient[ $hash ];
}

/**
 * Clear cached API responses.
 */
function bh_clear_api_calls() {
	if ( is_admin() ) {
		delete_transient( 'bh_api_calls' );
	}
}

add_action( 'wp_login', 'bh_clear_api_calls' );
add_action( 'pre_current_active_plugins', 'bh_clear_api_calls' );

/**
 * Use mojo news feed
 *
 * @param string $feed - incoming feed url
 */
function mojo_better_news_feed( $feed ) {
	return 'http://feeds.feedburner.com/wp-pipes';
}

add_filter( 'dashboard_secondary_feed', 'mojo_better_news_feed' );
add_filter( 'dashboard_secondary_link', 'mojo_better_news_feed' );

/**
 * Set mojo news transient expiry
 */
function mojo_adjust_feed_transient_lifetime() {
	return 3 * HOUR_IN_SECONDS;
}

add_filter( 'wp_feed_cache_transient_lifetime', 'mojo_adjust_feed_transient_lifetime' );

/**
 * Undocumented
 */
function mojo_site_bin2hex() {
	$path = ABSPATH;
	$path = explode( 'public_html/', $path );
	if ( 2 === count( $path ) ) {
		$path = '/public_html/' . $path[1];
	} else {
		return false;
	}

	$path_hash = bin2hex( $path );

	return $path_hash;
}

/**
 * Get the client IP address.
 *
 * @return string
 */
function bh_get_client_ip() {

	// Default to REMOTE_ADDR
	$ip = ( isset( $_SERVER['REMOTE_ADDR'] ) ) ? $_SERVER['REMOTE_ADDR'] : null;

	$proxy_headers = array(
		'HTTP_CF_CONNECTING_IP', // CloudFlare
		'HTTP_FASTLY_CLIENT_IP', // Fastly
		'HTTP_INCAP_CLIENT_IP', // Incapsula
		'HTTP_TRUE_CLIENT_IP', // CloudFlare Enterprise
		'HTTP_X_FORWARDED_FOR', // Any proxy
		'HTTP_X_SUCURI_CLIENTIP', // Sucuri
	);

	// Check for alternate headers indicating a forwarded IP address
	foreach ( $proxy_headers as $proxy_header ) {
		if ( ! empty( $_SERVER[ $proxy_header ] ) ) {
			$forwarded_ips = explode( ',', $_SERVER[ $proxy_header ] );
			$forwarded_ip  = array_shift( $forwarded_ips );
			if ( $forwarded_ip ) {
				$ip = $forwarded_ip;
				break;
			}
		}
	}

	return $ip;
}
