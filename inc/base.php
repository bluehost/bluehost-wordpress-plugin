<?php

function mm_setup() {
	if ( ( '' === get_option( 'mm_master_aff' ) || false === get_option( 'mm_master_aff' ) ) && defined( 'MMAFF' ) ) {
		update_option( 'mm_master_aff', MMAFF );
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
		update_user_meta( 1, 'show_welcome_screen', 1 );
	}
}
add_action( 'init', 'mm_setup' );

function mm_api( $args = array(), $query = array() ) {
	$api_url = 'http://api.mojomarketplace.com/api/v1/';
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

	return mm_api_cache( $request_url );
}

function mm_api_cache( $api_url, $duration = DAY_IN_SECONDS ) {
	$key = md5( $api_url );
	if ( false === ( $transient = get_transient( 'mm_api_calls' ) ) || ! isset( $transient[ $key ] ) ) {
		$transient[ $key ] = wp_remote_get( $api_url );
		if ( ! is_wp_error( $transient[ $key ] ) ) {
			set_transient( 'mm_api_calls', $transient, $duration );
		}
	}
	return $transient[ $key ];
}

function mm_build_link( $url, $args = array() ) {
	$defaults = array(
		'utm_source'	=> 'mojo_wp_plugin', //this should always be mojo_wp_plugin
		'utm_campaign'	=> 'mojo_wp_plugin',
		'utm_medium'	=> 'plugin_admin', //(plugin_admin, plugin_widget, plugin_shortcode)
		'utm_content'	=> '', //specific location
		'r'				=> get_option( 'mm_master_aff' ),
	);
	$args = wp_parse_args( array_filter( $args ), array_filter( $defaults ) );

	$test = get_transient( 'mm_test', '' );

	if ( isset( $test['key'] ) && isset( $test['name'] ) ) {
		$args['utm_medium'] = $args['utm_medium'] . '_' . $test['name'] . '_' . $test['key'];
	}

	if ( false !== strpos( $url, 'mojomarketplace.com' ) && 'default' != mm_brand() ) {
		$args['theme'] = mm_brand();
	}

	$args = wp_parse_args( array_filter( $args ), array_filter( $defaults ) );

	$url = add_query_arg( $args, $url );

	return esc_url( $url );
}

function mm_clear_api_calls() {
	if ( is_admin() ) {
		delete_transient( 'mojo_api_calls' );
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

function mm_cron_schedules( $schedules ) {
	$schedules['weekly'] = array(
		'interval' => WEEK_IN_SECONDS,
		'display' => __( 'Once Weekly' ),
	);
	$schedules['monthly'] = array(
		'interval' => 4 * WEEK_IN_SECONDS,
		'display' => __( 'Once a month' ),
	);
	return $schedules;
}
add_filter( 'cron_schedules', 'mm_cron_schedules' );

function mm_all_api_calls() {
	$calls = array(
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=popular&page=1',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=blog',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=business',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=church',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=woocommerce',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=fashion',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=fitness',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=health',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=landing-page',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=magazine',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=photography',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=portfolio',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=real-estate',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=restaurant',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=sports',
		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=themes&count=20&order=sales&page=1&itemcategory=travel',

		'https://api.mojomarketplace.com/api/v2/items?category=wordpress&type=plugins&count=20&order=sales&page=1',

		'https://api.mojomarketplace.com/api/v2/items?type=services&count=20&order=sales&page=1',

		'https://api.mojomarketplace.com/api/v2/items?type=graphics&count=20&order=sales&page=1',
		'https://api.mojomarketplace.com/api/v2/items?type=graphics&count=20&order=popular&page=1',
		'https://api.mojomarketplace.com/api/v2/items?type=graphics&count=20&order=sales&page=1&category=logo',
		'https://api.mojomarketplace.com/api/v2/items?type=graphics&count=20&order=sales&page=1&category=business-cards',

		'https://api.mojomarketplace.com/mojo-plugin-assets/json/search-patterns.json',
		'https://api.mojomarketplace.com/mojo-plugin-assets/json/mojo-partner-offers.json',
	);
	foreach ( $calls as $call ) {
		mm_api_cache( $call );
	}
	die;
}
add_action( 'wp_ajax_all-api-calls', 'mm_all_api_calls' );

function mm_preload_api_calls() {
	//this makes the themes/services pages load much quicker
	//without effect on the user
	$admin_ajax = admin_url( 'admin-ajax.php' );
	$params = array( 'action' => 'all-api-calls' );
	$url = $admin_ajax . '?' . http_build_query( $params );
	$res = wp_remote_get( $url, array( 'blocking' => false, 'timeout' => 0.1 ) );
}
add_action( 'admin_footer-index.php', 'mm_preload_api_calls', 99 );

function mm_slug_to_title( $slug ) {
	return ucwords( str_replace( '-', ' ', $slug ) );
}

function mm_title_to_slug( $title ) {
	return sanitize_title( $title );
}

function mm_require( $original ) {
	$file = apply_filters( 'mm_require_file', $original );
	if ( file_exists( $file ) ) {
		require( $file );
		return $file;
	} elseif ( file_exists( $original ) ) {
		require( $original );
		return $original;
	} else {
		return false;
	}
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
	return 3 * HOUR_IN_SECONDS;
}
add_filter( 'wp_feed_cache_transient_lifetime', 'mm_adjust_feed_transient_lifetime' );

function mm_stars( $rating = 4.5, $sales = 0 ) {
	if ( ! is_numeric( $rating ) || 0 == $rating ) { return; }
	?>
	<div class="star-rating">
		<ul class="list-unstyled list-inline">
			<?php
			$rating_half = round( $rating * 2 ) / 2;
			$stars = ( 0 == $rating_half) ? 5 : 0;
			for ( $i = 0; $i < floor( $rating_half ); $i++ ) {
				$stars++;
				?>
				<li><a href="#"><span class="dashicons dashicons-star-filled"></span></a></li>
				<?php
			}
			if ( false !== strpos( $rating_half, '.' ) ) {
				$stars++;
				?>
				<li><a href="#"><span class="dashicons dashicons-star-half"></span></a></li>
				<?php
			}
			if ( $stars < 5 ) {
				$empty_stars = 5 - $stars;
				for ( $i = 0; $i < $empty_stars; $i++ ) {
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

function mm_pagination( $page = 1, $total_pages = 1 ) {
	if ( 1 == $total_pages ) { return; }
	?>
	<div class="alignright">
		<nav class="pagination">
			<ul class="group">
				<?php
				$pagination_start = $page - 5;
				$pagination_end = $page + 5;
				if ( $page < 5 ) {
					$pagination_extra = 10 - $page;
					$pagination_end = $page + $pagination_extra;
				}
				if ( $pagination_start < 1 ) {
					$pagination_start = 1;
				}
				if ( $total_pages - $pagination_start < 10 && $total_pages - 10 > 1 ) {
					$pagination_start = $total_pages - 10;
				}
				if ( $pagination_end > $total_pages ) {
					$pagination_end = $total_pages;
				}
				?>
				<li class="prev">
					<a href="<?php echo esc_url( add_query_arg( array( 'paged' => $page - 1 ) ) ); ?>"><span class="dashicons dashicons-arrow-left"></span></a>
				</li>
				<?php
				for ( $i = $pagination_start;  $i <= $pagination_end;  $i++ ) {
					?>
					<li<?php if ( $i == $page ) { echo " class='active'";}?> >
						<a href="<?php echo esc_url( add_query_arg( array( 'paged' => $i ) ) ); ?>"><?php echo $i; ?></a>
					</li>
					<?php
				}
				?>
				<li class="next">
					<?php
					$next_num = ( $page + 1 >= $total_pages ) ? $total_pages : $page + 1 ;
					?>
					<a rel="next" href="<?php echo esc_url( add_query_arg( array( 'paged' => $next_num ) ) ); ?>">
						<span class="dashicons dashicons-arrow-right"></span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
	<?php
}