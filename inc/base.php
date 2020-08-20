<?php

function mojo_setup() {
	if ( ( '' === get_option( 'mm_master_aff' ) || false === get_option( 'mm_master_aff' ) ) && defined( 'MMAFF' ) ) {
		update_option( 'mm_master_aff', MMAFF );
	}
	if ( ! get_option( 'mm_install_date' ) ) {
		update_option( 'mm_install_date', date( 'M d, Y' ) );
		$event                            = array(
			't'    => 'event',
			'ec'   => 'plugin_status',
			'ea'   => 'installed',
			'el'   => 'Install date: ' . get_option( 'mm_install_date', date( 'M d, Y' ) ),
			'keep' => false,
		);
		$events                           = get_option( 'mm_cron', array() );
		$events['hourly'][ $event['ea'] ] = $event;
		update_option( 'mm_cron', $events );
	}
}

add_action( 'admin_init', 'mojo_setup' );

function mojo_api( $args = array(), $query = array() ) {
	$api_url       = 'http://api.mojomarketplace.com/api/v1/';
	$default_args  = array(
		'mojo-platform' => 'wordpress',
		'mojo-type'     => 'themes',
		'mojo-items'    => 'recent',
	);
	$default_query = array(
		'count'  => 30,
		'seller' => '',
	);
	$args          = wp_parse_args( $args, $default_args );
	$query         = wp_parse_args( $query, $default_query );
	$query         = http_build_query( array_filter( $query ) );
	$request_url   = $api_url . $args['mojo-items'] . '/' . $args['mojo-platform'] . '/' . $args['mojo-type'];

	$request_url = rtrim( $request_url, '/' );
	$request_url = $request_url . '?' . $query;

	return mojo_api_cache( $request_url );
}

function mojo_api_cache( $api_url ) {
	$key = md5( $api_url );
	if ( false === ( $transient = get_transient( 'mm_api_calls' ) ) || ! isset( $transient[ $key ] ) ) {
		$transient[ $key ] = wp_remote_get( $api_url, array( 'timeout' => 15 ) );
		if ( ! is_wp_error( $transient[ $key ] ) ) {
			set_transient( 'mm_api_calls', $transient, DAY_IN_SECONDS );
		}
	}

	return $transient[ $key ];
}

function mojo_build_link( $url, $args = array() ) {
	$defaults = array(
		'utm_source'   => 'mojo_wp_plugin', // this should always be mojo_wp_plugin
		'utm_campaign' => 'mojo_wp_plugin',
		'utm_medium'   => 'plugin_admin', // (plugin_admin, plugin_widget, plugin_shortcode)
		'utm_content'  => '', // specific location
		'r'            => get_option( 'mm_master_aff' ),
	);
	$args     = wp_parse_args( array_filter( $args ), array_filter( $defaults ) );

	$test = get_transient( 'mm_test', '' );

	if ( isset( $test['key'] ) && isset( $test['name'] ) ) {
		$args['utm_medium'] = $args['utm_medium'] . '_' . $test['name'] . '_' . $test['key'];
	}

	if ( false !== strpos( $url, 'mojomarketplace.com' ) ) {
		$args['theme'] = 'bluehost';
	}

	$args = wp_parse_args( array_filter( $args ), array_filter( $defaults ) );

	$url = add_query_arg( $args, $url );

	return esc_url( $url );
}

function mojo_clear_api_calls() {
	if ( is_admin() ) {
		delete_transient( 'mojo_api_calls' );
	}
}

add_action( 'wp_login', 'mojo_clear_api_calls' );
add_action( 'pre_current_active_plugins', 'mojo_clear_api_calls' );

function mojo_cron() {
	if ( ! wp_next_scheduled( 'mojo_cron_monthly' ) ) {
		wp_schedule_event( time(), 'monthly', 'mojo_cron_monthly' );
	}
	if ( ! wp_next_scheduled( 'mojo_cron_weekly' ) ) {
		wp_schedule_event( time(), 'weekly', 'mojo_cron_weekly' );
	}
	if ( ! wp_next_scheduled( 'mojo_cron_daily' ) ) {
		wp_schedule_event( time(), 'daily', 'mojo_cron_daily' );
	}
	if ( ! wp_next_scheduled( 'mojo_cron_twicedaily' ) ) {
		wp_schedule_event( time(), 'twicedaily', 'mojo_cron_twicedaily' );
	}
	if ( ! wp_next_scheduled( 'mojo_cron_hourly' ) ) {
		wp_schedule_event( time(), 'hourly', 'mojo_cron_hourly' );
	}
}

add_action( 'admin_init', 'mojo_cron' );

function mojo_cron_schedules( $schedules ) {
	$schedules['weekly']  = array(
		'interval' => WEEK_IN_SECONDS,
		'display'  => __( 'Once Weekly', 'bluehost-wordpress-plugin' ),
	);
	$schedules['monthly'] = array(
		'interval' => 4 * WEEK_IN_SECONDS,
		'display'  => __( 'Once a month', 'bluehost-wordpress-plugin' ),
	);

	return $schedules;
}

add_filter( 'cron_schedules', 'mojo_cron_schedules' );

function mojo_require( $original ) {
	$file = apply_filters( 'mm_require_file', $original );
	if ( file_exists( $file ) ) {
		require $file;

		return $file;
	} elseif ( file_exists( $original ) ) {
		require $original;

		return $original;
	} else {
		return false;
	}
}

function mojo_minify( $content ) {
	$content = str_replace( "\r", '', $content );
	$content = str_replace( "\n", '', $content );
	$content = str_replace( "\t", '', $content );
	$content = str_replace( '  ', ' ', $content );
	$content = trim( $content );

	return $content;
}

function mojo_safe_hosts( $hosts ) {
	$hosts[] = 'mojomarketplace.com';

	return $hosts;
}

add_filter( 'allowed_redirect_hosts', 'mojo_safe_hosts' );

function mojo_better_news_feed( $feed ) {
	return 'http://feeds.feedburner.com/wp-pipes';
}

add_filter( 'dashboard_secondary_feed', 'mojo_better_news_feed' );
add_filter( 'dashboard_secondary_link', 'mojo_better_news_feed' );

function mojo_adjust_feed_transient_lifetime( $lifetime ) {
	return 3 * HOUR_IN_SECONDS;
}

add_filter( 'wp_feed_cache_transient_lifetime', 'mojo_adjust_feed_transient_lifetime' );

function mojo_stars( $rating = 4.5, $sales = 0 ) {
	if ( ! is_numeric( $rating ) || 0 == $rating ) {
		return;
	}
	?>
	<div class="star-rating">
		<ul class="list-unstyled list-inline">
			<?php
			$rating_half = round( $rating * 2 ) / 2;
			$stars       = ( 0 == $rating_half ) ? 5 : 0;
			for ( $i = 0; $i < floor( $rating_half ); $i ++ ) {
				$stars ++;
				?>
				<li><a href="#"><span class="dashicons dashicons-star-filled"></span></a></li>
				<?php
			}
			if ( false !== strpos( $rating_half, '.' ) ) {
				$stars ++;
				?>
				<li><a href="#"><span class="dashicons dashicons-star-half"></span></a></li>
				<?php
			}
			if ( $stars < 5 ) {
				$empty_stars = 5 - $stars;
				for ( $i = 0; $i < $empty_stars; $i ++ ) {
					?>
					<li><a href="#"><span class="dashicons dashicons-star-empty"></span></a></li>
					<?php
				}
			}
			?>
		</ul>
		<span class="rating-label"><span class="count"><?php echo $rating_half; ?></span> Stars
			<?php
			if ( 0 !== $sales ) {
				?>
				<span class="sales-count">(<?php echo number_format( $sales ); ?> Sales)</span>
				<?php
			}
			?>
		</span>
	</div>
	<?php
}

function mojo_loader() {
	if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) ) {
		?>
		<script type="text/javascript">
			jQuery(document).ready(function ($) {
				setTimeout(function () {
					$('.bluehost-loader').fadeOut('slow');
				}, 2000);
			});
		</script>
		<?php
	}
}

add_action( 'admin_footer', 'mojo_loader' );

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

function _mojo_login() {
	if ( ! current_user_can( 'administrator' ) ) {
		return;
	}
	if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) && false == get_transient( '_mm_session_token' ) ) {
		$args    = array(
			'headers' => array(
				'AuthType'            => 'Token',
				'x-api-refresh-token' => get_option( '_mm_refresh_token' ),
			),
		);
		$session = wp_remote_get( 'https://api.mojomarketplace.com/api/v2/user_token', $args );
		if ( ! is_wp_error( $session ) && isset( $session['response']['code'] ) && 200 == $session['response']['code'] ) {
			$session_data = json_decode( $session['body'] );
			if ( property_exists( $session_data, 'status' ) && 'success' == $session_data->status && property_exists( $session_data, 'token' ) ) {
				set_transient( '_mm_session_token', $session_data->token, HOUR_IN_SECONDS );
			}
		}
	}
}

add_action( 'admin_init', '_mojo_login', 5 );

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
