<?php
function mm_ab_test_inclusion( $test_name, $key, $audience, $duration ) {
	if( false === ( $test = get_transient( 'mm_test', false ) ) ) {
		$previous_tests = get_option( 'mm_previous_tests', array() );
		
		if( in_array( $test_name, $previous_tests ) ) {
			return false;
		}
		
		$score = mt_rand( 0, 99 );
		
		if( $audience > $score ) {
			set_transient( 'mm_test', array( 'name' => $test_name, 'key' => $key ), $duration );
			$previous_tests[] = $test_name;
			update_option( 'mm_previous_tests', $previous_tests );
			return true;
		}
	} else {
		if( $test['key'] === $key ) {
			return true;
		}
	}
	return false;
}

function mm_ab_test_inclusion_none() {
	if( is_admin() && false === get_transient( 'mm_test', false ) ) {
		$duration = WEEK_IN_SECONDS * 4;
		set_transient( 'mm_test', array( 'key' => 'none' ), $duration );
	}
}
add_action( 'wp_logout', 'mm_ab_test_inclusion_none' );

function mm_ab_test_file( $test_name, $file, $original, $test, $audience = 10, $duration = WEEK_IN_SECONDS  ) {
	if( strpos( $file, $original ) ) {
		$key = md5( serialize( $test ) );
		$inclusion = mm_ab_test_inclusion( $test_name, $key, $audience, $duration );

		$test_file = str_replace( $original, $test, $file );

		if( $inclusion && file_exists( $test_file ) ) {
			$file = $test_file;
		}
	}
	return $file;
}

function mm_ab_test_content( $test_name, $original, $test, $audience = 10, $duration = WEEK_IN_SECONDS ) {
	$key = md5( serialize( $test ) );
	$inclusion = mm_ab_test_inclusion( $test_name, $key, $audience, $duration );
	if( $inclusion ) {
		return $test;
	}
	return $original;
}

/* Few example tests

function mm_themes_ab( $file ) {
	return mm_ab_test_file( 'themes_page', $file, 'pages/mojo-themes.php', 'tests/mojo-themes.php' );
}
add_filter( 'mm_require_file', 'mm_themes_ab' );

function mm_themes_categories( $accepted_categories ) {
	$test_categories = array(
		'recent',
		'popular',
		'responsive',
		'business',
		'ecommerce',
		'photography',
		'real-estate',
		'restaurant'
	);
	return mm_ab_test_content( 'themes_categories_recent_first', $accepted_categories, $test_categories, 10 );
}
add_filter( 'mm_themes_accepted_categories', 'mm_themes_categories' );
*/

/* Start individual tests*/

function mm_add_plugin_patterns( $patterns ) {
	$patterns['/commerce/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/shop/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/store/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/checkout/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/credit/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/sell/i'] = array( 'name' => 'WooCommerce', 'url' => 'https://www.mojomarketplace.com/services/all/ecommerce' );
	$patterns['/analytics/i'] = array( 'name' => 'Google Analytics', 'url' => 'https://www.mojomarketplace.com/item/add-google-analytics-to-your-wordpress-site' );
	$patterns['/stats/i'] = array( 'name' => 'Google Analytics', 'url' => 'https://www.mojomarketplace.com/item/add-google-analytics-to-your-wordpress-site' );
	$patterns['/sitemap/i'] = array( 'name' => 'Sitemap', 'url' => 'https://www.mojomarketplace.com/item/add-an-seo-friendly-sitemap-to-your-wordpress-site' );
	$patterns['/seo/i'] = array( 'name' => 'SEO Sitemap', 'url' => 'https://www.mojomarketplace.com/item/add-an-seo-friendly-sitemap-to-your-wordpress-site' );
	$patterns['/buddypress/i'] = array( 'name' => 'BuddyPress', 'url' => 'https://www.mojomarketplace.com/item/install-and-setup-buddypress-wordpress-plugin' );
	$patterns['/bbpress/i'] = array( 'name' => 'bbPress', 'url' => 'https://www.mojomarketplace.com/item/install-and-setup-bbpress-wordpress-plugin' );
	$patterns['/bb press/i'] = array( 'name' => 'bbPress', 'url' => 'https://www.mojomarketplace.com/item/install-and-setup-bbpress-wordpress-plugin' );
	$patterns['/contact/i'] = array( 'name' => 'Contact Forms', 'url' => 'https://www.mojomarketplace.com/item/create-a-wordpress-contact-form' );
	$patterns['/form/i'] = array( 'name' => 'Contact Forms', 'url' => 'https://www.mojomarketplace.com/item/create-a-wordpress-contact-form' );
	$patterns['/map/i'] = array( 'name' => 'Google Maps', 'url' => 'https://www.mojomarketplace.com/item/add-a-google-map-to-my-wordpress-site' );
	$patterns['/locat/i'] = array( 'name' => 'Google Maps', 'url' => 'https://www.mojomarketplace.com/item/add-a-google-map-to-my-wordpress-site' );
	return $patterns;
}
add_filter( 'mm_search_plugin_patterns', 'mm_add_plugin_patterns' );

function mm_check_search_value( $search ) {
	$patterns = apply_filters( 'mm_search_plugin_patterns', array() );
	foreach ( $patterns as $pattern => $plugin ) {
		if( preg_match( $pattern, $search ) ) {
			return $plugin;
		}
	}
	return false;
}

function mm_plugin_search_notice() {
	if( isset( $_GET['s'] )  && $plugin = mm_check_search_value( $_GET['s'] ) ) {
		$link = mm_build_link( $plugin['url'], array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'plugin_search' ) );
		?>
		<div class="updated">
        	<p>Did you know? MOJO Marketplace has a <a target="_blank" href="<?php echo $link; ?>">service</a> for <a target="_blank" href="<?php echo $link; ?>"><?php echo $plugin['name']; ?></a></p>
    	</div>
		<?php
	}
}

function mm_plugin_search_offer() {
	$duration = WEEK_IN_SECONDS * 3;
	if( isset( $_GET['s'] ) && mm_ab_test_inclusion( 'search_services', md5( 'mm_plugin_search_notice' ), 50, $duration ) ) {
		add_action( 'admin_notices', 'mm_plugin_search_notice' );
	}
}
add_action( 'admin_head-plugin-install.php', 'mm_plugin_search_offer' );