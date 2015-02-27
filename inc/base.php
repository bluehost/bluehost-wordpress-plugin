<?php

function mm_setup() {
	if ( ! get_option( 'mm_master_aff' ) ) {
		update_option( 'mm_master_aff', ( defined( 'MMAFF' ) ? MMAFF : '' ) );
	}
	if ( ! get_option( 'mm_install_date' ) ) {
		update_option( 'mm_install_date', date( 'M d, Y' ) );
		$event = array(
			't'		=> 'event',
			'ec'	=> 'plugin_status',
			'ea'	=> 'installed',
			'el'	=> 'Install date: ' . get_option( 'mm_install_date', date( 'M d, Y' ) ),
			'keep'	=> false,
		);
		$events = get_option( 'mm_cron', array() );
		$events['hourly'][ $event['ea'] ] = $event;
		update_option( 'mm_cron', $events );
	}
}
add_action( 'init', 'mm_setup' );

function mm_api( $args = array(), $query = array() ) {
	$api_url = 'http://mojomarketplace.com/api/v1/';
	$default_args = array(
		'mojo-platform' 	=> 'wordpress',
		'mojo-type' 		=> 'themes',
		'mojo-items' 		=> 'recent',
	);
	$default_query = array(
		'count'		=> 30,
		'seller'	=> '',
	);
	$args = wp_parse_args( $args, $default_args );
	$query = wp_parse_args( $query, $default_query );
	$query = http_build_query( array_filter( $query ) );
	$request_url = $api_url . $args['mojo-items'] . '/' . $args['mojo-platform'] . '/' . $args['mojo-type'];

	$request_url = rtrim( $request_url, '/' );
	$request_url = $request_url . '?' . $query;

	$key = md5( $request_url );

	if ( false === ( $transient = get_transient( 'mm_api_calls' ) ) || ! isset( $transient[ $key ] ) ) {
		$transient[ $key ] = wp_remote_get( $request_url );
		if ( ! is_wp_error( $transient[ $key ] ) ) {
			set_transient( 'mm_api_calls', $transient, DAY_IN_SECONDS );
		}
	}
	return $transient[ $key ];
}

function mm_build_link( $url, $args = array() ) {
	$defaults = array(
		'utm_source'	=> 'mojo_wp_plugin', //this should always be mojo_wp_plugin
		'utm_campaign'	=> 'mojo_wp_plugin',
		'utm_medium'	=> 'plugin_', //(plugin_admin, plugin_widget, plugin_shortcode)
		'utm_content'	=> '', //specific location
		'r'				=> get_option( 'mm_master_aff' ),
	);
	$args = wp_parse_args( array_filter( $args ), array_filter( $defaults ) );

	$test = get_transient( 'mm_test', '' );

	if ( isset( $test['key'] ) && isset( $test['name'] ) ) {
		$args['utm_medium'] = $args['utm_medium'] . '_' . $test['name'] . '_' . $test['key'];
	}

	$args = wp_parse_args( array_filter( $args ), array_filter( $defaults ) );

	$url = add_query_arg( $args, $url );

	return esc_url( $url );
}

function mm_clear_api_calls() {
	if ( is_admin() ) {
		delete_transient( 'mojo-api-calls' );
	}
}
add_action( 'wp_login', 'mm_clear_api_calls' );
add_action( 'pre_current_active_plugins', 'mm_clear_api_calls' );

function mm_cron() {
	if ( ! wp_next_scheduled( 'mm_cron_monthly' ) ) {
		wp_schedule_event( time(), 'monthly', 'mm_cron_monthly' );
	}
	if ( ! wp_next_scheduled( 'mm_cron_weekly' ) ) {
		wp_schedule_event( time(), 'weekly', 'mm_cron_weekly' );
	}
	if ( ! wp_next_scheduled( 'mm_cron_daily' ) ) {
		wp_schedule_event( time(), 'daily', 'mm_cron_daily' );
	}
	if ( ! wp_next_scheduled( 'mm_cron_twicedaily' ) ) {
		wp_schedule_event( time(), 'twicedaily', 'mm_cron_twicedaily' );
	}
	if ( ! wp_next_scheduled( 'mm_cron_hourly' ) ) {
		wp_schedule_event( time(), 'hourly', 'mm_cron_hourly' );
	}
}
add_action( 'admin_init', 'mm_cron' );

function mm_cron_schedules( $shedules ) {
	$schedules['weekly'] = array(
		'interval' => 604800,
		'display' => __( 'Once Weekly' )
	);
	$schedules['monthly'] = array(
		'interval' => 2635200,
		'display' => __( 'Once a month' )
	);
	return $schedules;
}
add_filter( 'cron_schedules', 'mm_cron_schedules' );


function mm_slug_to_title( $slug ) {
	$words = explode( '-', $slug );
	$capital_words = array_map( 'ucfirst', $words );
	$title = implode( ' ', $capital_words );
	return $title;
}

function mm_title_to_slug( $title ) {
	$words = explode( ' ', $title );
	$lowercase_words = array_map( 'strtolower', $words );
	$slug = implode( '-', $lowercase_words );
	return $slug;
}

function mm_require( $file ) {
	$file = apply_filters( 'mm_require_file', $file );
	if ( file_exists( $file ) ) {
		require( $file );
	}
	return $file;
}

function mm_minify( $content ) {
	$content = str_replace( "\r", '', $content );
	$content = str_replace( "\n", '', $content );
	$content = str_replace( "\t", '', $content );
	$content = str_replace( '  ', ' ', $content );
	$content = trim( $content );
	return $content;
}

function mm_safe_hosts( $hosts ) {
	$hosts[] = 'mojomarketplace.com';
	return $hosts;
}
add_filter( 'allowed_redirect_hosts', 'mm_safe_hosts' );

function mm_better_news_feed( $feed ) {
	return 'http://feeds.feedburner.com/wp-pipes';
}
add_filter( 'dashboard_secondary_feed', 'mm_better_news_feed' );
add_filter( 'dashboard_secondary_link', 'mm_better_news_feed' );

function mm_adjust_feed_transient_lifetime( $lifetime ) {
	return 10800;
}
add_filter( 'wp_feed_cache_transient_lifetime', 'mm_adjust_feed_transient_lifetime' );