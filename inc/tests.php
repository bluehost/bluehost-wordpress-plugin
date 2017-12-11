<?php
function mm_ab_test_inclusion( $test_name, $key, $audience = 10, $duration = WEEK_IN_SECONDS ) {
	if ( false === ( $test = get_transient( 'mm_test', false ) ) ) {

		$previous_tests = get_option( 'mm_previous_tests', array() );

		if ( in_array( $test_name, $previous_tests ) ) { return false; }

		$score = mt_rand( 0, 99 );

		if ( $audience > $score ) {
			set_transient( 'mm_test', array( 'name' => $test_name, 'key' => $key ), $duration );
			$previous_tests[] = $test_name;
			update_option( 'mm_previous_tests', $previous_tests );
			return true;
		}
	} else if ( $test['key'] === $key ) {
		return true;
	}
	return false;
}

function mm_ab_test_inclusion_none() {
	if ( is_admin() && false === get_transient( 'mm_test', false ) ) {
		$duration = WEEK_IN_SECONDS * 4;
		set_transient( 'mm_test', array( 'key' => 'none' ), $duration );
	}
}
add_action( 'admin_footer', 'mm_ab_test_inclusion_none', 99 );

function mm_ab_test_file( $test_name, $file, $original, $test, $audience = 10, $duration = WEEK_IN_SECONDS  ) {
	if ( strpos( $file, $original ) ) {
		$key = md5( serialize( $test ) );

		$test_file = str_replace( $original, $test, $file );

		if ( file_exists( $test_file ) && mm_ab_test_inclusion( $test_name, $key, $audience, $duration ) ) {
			$file = $test_file;
		}
	}
	return $file;
}

function mm_ab_test_content( $test_name, $original, $test, $audience = 10, $duration = WEEK_IN_SECONDS ) {
	$key = md5( serialize( $test ) );
	if ( mm_ab_test_inclusion( $test_name, $key, $audience, $duration ) ) {
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

function mm_jetpack_bluehost_only() {
	$host = @exec( 'hostname' );
	$bluehost_hostname = ( stripos( $host, 'bluehost' ) ) ? true : false;
	$bluehost_brand = ( false !== strpos( strtolower( mm_brand() ), 'bluehost' ) ) ? true : false;
	if ( $bluehost_hostname || $bluehost_brand ) {
		$is_bluehost = true;
	} else {
		$is_bluehost = false;
	}
	return $is_bluehost;
}

/* Start individual tests */
mm_require( MM_BASE_DIR . 'tests/loader.php' );