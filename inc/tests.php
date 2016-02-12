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

/* Start individual tests*/
function mm_jetpack_bluehost_only() {return true;
	$host = @exec( 'hostname' );
	$is_bluehost = ( stripos( $host, 'bluehost' ) ) ? true : false;
	return $is_bluehost;
}

/*function mm_jpo_test( $file ) {
	return mm_ab_test_file( 'jetpack-onboarding-v1.1.1', $file, 'vendor/jetpack/jetpack-onboarding/jetpack-onboarding.php', 'tests/jetpack-onboarding/jetpack-onboarding.php', 33, DAY_IN_SECONDS * 90 );
}
add_filter( 'mm_require_file', 'mm_jpo_test' );

function mm_jpo_test_exempt() {
	mm_ab_test_inclusion( 'jetpack-onboarding-v1.1.1-exempt', md5( 'jetpack-onboarding-v1-exempt' ), 25, DAY_IN_SECONDS * 90 );
}
add_action( 'init', 'mm_jpo_test_exempt', 9 );*/

function mm_design_test() {
	mm_ab_test_inclusion( 'mojo-design-overhaul-1', md5( 'mojo-design-overhaul-1' ), 100, DAY_IN_SECONDS * 90 );
}
add_action( 'init', 'mm_design_test', 8 );

function mm_design_test_file( $file ) {
	if ( file_exists( MM_BASE_DIR . 'tests/design-overhaul/mojo-list.php' ) && mm_ab_test_inclusion( 'mojo-design-overhaul-1', md5( 'mojo-design-overhaul-1' ) ) ) {
		$pages = array(
			'pages/mojo-themes.php',
			'pages/mojo-services.php',
			'pages/mojo-plugins.php',
			'pages/mojo-graphics.php',
		);
		if ( in_array( str_replace( MM_BASE_DIR, '', $file ), $pages ) ) {
			return MM_BASE_DIR . 'tests/design-overhaul/mojo-list.php';
		}
	}
	return $file;
}
add_filter( 'mm_require_file', 'mm_design_test_file' );

function mm_design_admin_style() {
	if ( mm_ab_test_inclusion( 'mojo-design-overhaul-1', md5( 'mojo-design-overhaul-1' ) ) ) {
		if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) ) {
			wp_enqueue_style( 'mojo-admin-roboto-css', 'https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,500' );
			wp_enqueue_style( 'mojo-admin-bootstrap-css', MM_BASE_URL . 'css/bootstrap.css' );
			wp_enqueue_style( 'mojo-admin-main-css', MM_BASE_URL . 'css/main.css' );
		}
	}
}
add_action( 'admin_head', 'mm_design_admin_style' );