<?php
/**
 * This file tracks basic user actions to improve the user experience.
 *
 * @package bluehost-wordpress-plugin
 */

/**
 * Log customer lifecycle management actions.
 *
 * @param string $name       Event name
 * @param array  $properties Event properties
 */
function mojo_clm_log( $name, $properties = array() ) {
	global $mm_clm_events;

	$refresh_token = get_option( '_mm_refresh_token' );

	if ( false !== $refresh_token ) {
		$clm_endpoint = 'https://my.bluehost.com/api/events';
		$path_hash    = mojo_site_bin2hex();
		$domain       = wp_parse_url( get_option( 'siteurl' ), PHP_URL_HOST );

		$package                            = new stdClass();
		$package->token                     = $refresh_token;
		$package->domain                    = $domain;
		$package->site_id                   = $path_hash;
		$package->event_name                = $name;
		$package->event_properties          = (object) $properties;
		$package->event_properties->site_id = $path_hash;
		$package->event_properties->domain  = get_option( 'siteurl' );

		$args = array(
			'timeout'  => 10,
			'blocking' => false,
			'body'     => wp_json_encode( $package ),
		);

		if ( ! isset( $mm_clm_events ) || is_null( $mm_clm_events ) ) {
			$mm_clm_events = array();
		}

		$key = md5( $name . wp_json_encode( $properties ) );

		if ( ! in_array( $key, $mm_clm_events, true ) && false === get_transient( 'mm_' . $key ) ) {
			$mm_clm_events[] = $key;
			set_transient( 'mm_' . $key, 'true', 600 );
			wp_remote_post( $clm_endpoint, $args );
		}
	}

}

/**
 * Log post status transitions.
 *
 * @param string   $new_status New post status.
 * @param string   $old_status Old post status.
 * @param \WP_Post $post       WP_Post object.
 */
function mojo_clm_log_content_status( $new_status, $old_status, $post ) {
	$status = array( 'draft', 'pending', 'publish', 'new', 'future', 'private', 'trash' );
	if ( $old_status !== $new_status && in_array( $new_status, $status, true ) ) {
		mojo_clm_log( 'content_' . $new_status, $post );
	}
}

add_action( 'transition_post_status', 'mojo_clm_log_content_status', 10, 3 );

/**
 * Log site launch (user disabled 'Coming Soon').
 *
 * @param mixed $new_option New option value.
 * @param mixed $old_option Previous option value.
 *
 * @return mixed
 */
function mojo_clm_site_launched( $new_option, $old_option ) {
	if ( $old_option !== $new_option && 'false' === $new_option ) {
		$post_count = wp_count_posts( 'post' );
		$page_count = wp_count_posts( 'page' );
		$data       = array(
			'theme'        => get_option( 'stylesheet' ),
			'post_count'   => $post_count->publish,
			'page_count'   => $page_count->publish,
			'plugin_count' => count( get_option( 'active_plugins', array() ) ),
		);
		mojo_clm_log( 'site_launched', $data );
	}

	return $new_option;
}

add_filter( 'pre_update_option_mm_coming_soon', 'mojo_clm_site_launched', 10, 2 );
