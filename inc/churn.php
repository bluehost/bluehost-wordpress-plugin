<?php

function mm_churn() {
	$test = get_transient( 'mm_test' );
	$test = ( isset( $test['name'] ) ) ? $test['name'] : '';
	$domain = str_replace( array( 'http://', 'https://' ), '', get_option( 'siteurl' ) );

	if ( ! $churn_data = get_option( 'mm_churn' ) ) {
		$churn_data = array(
			'ip'     => $_SERVER['REMOTE_ADDR'],
			'whoami' => @exec( 'whoami' ),
		);

		$details = array(
			'domain'   => $domain,
			'ip'       => $churn_data['ip'],
			'username' => $churn_data['whoami'],
			'host'     => get_option( 'mm_host', '' ),
			'test'     => $test,
		);

		$args = array(
			'body'		=> http_build_query( array_filter( $details ) ),
			'method'	=> 'POST',
		);
		$url = 'http://162.144.133.144/api/create';

		$response = wp_remote_post( $url, $args );

		if ( ! is_wp_error( $response ) && $response['response']['code'] != 406 ) {
			$churn_data['key'] = $response['body'];
			update_option( 'mm_churn', $churn_data );
		}
	} else {
		$changed = false;
		if ( isset( $churn_data['ip'] ) && $churn_data['ip'] != $_SERVER['REMOTE_ADDR'] ) {
			$changed = 'ip';
		}

		if ( isset( $churn_data['whoami'] ) && $churn_data['whoami'] != @exec( 'whoami' ) ) {
			$changed = 'whoami';
		}

		$churn_data['test'] = get_transient( 'mm_test' );
		$churn_data['test'] = ( isset( $churn_data['test']['name'] ) ) ? $churn_data['test']['name'] : '';
		update_option( 'mm_churn', $churn_data );

		if ( $changed ) {
			$event = array(
				't'     => 'event',
				'ec'    => 'scheduled',
				'ea'    => 'churn_v1_' . $changed,
				'el'    => $churn_data['test'],
			);
			mm_ux_log( $event );
		}

		$domain = str_replace( array( 'http://', 'https://' ), '', get_option( 'siteurl' ) );

		$details = array(
			'key'      => $churn_data['key'],
			'domain'   => $domain,
			'ip'       => $_SERVER['REMOTE_ADDR'],
			'username' => @exec( 'whoami' ),
			'test'     => $test,
			'host'     => get_option( 'mm_host', '' ),
		);
		$args = array(
			'body'		=> http_build_query( array_filter( $details ) ),
			'method'	=> 'POST',
			'blocking'	=> false,
			'timeout'   => 0.1,
		);
		$url = 'http://162.144.133.144/api/update';
		$return = wp_remote_post( $url, $args );
	}
	die;
}
add_action( 'mm_cron_weekly', 'mm_churn' );
