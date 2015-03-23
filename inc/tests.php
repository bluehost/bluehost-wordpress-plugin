<?php
function mm_ab_test_inclusion( $test_name, $key, $audience, $duration ) {
	if( false === ( $test = get_transient( 'mm_test', false ) ) ) {
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

/**
 * Should Jetpack Start perform well, we would move this stuff to inc/jetpack.php.
 */

function mm_jetpack_bluehost_only() {
	$host = @exec( 'hostname' );
	$is_bluehost = ( stripos( $host, 'bluehost' ) ) ? true : false;
	return $is_bluehost;
}

function mm_jetpack_start_test() {
	$file = MM_BASE_DIR . 'tests/jetpack-start/jetpack-start.php';
	if ( file_exists( $file ) && mm_jetpack_bluehost_only() ) {
		if ( ! mm_ab_test_inclusion( 'jetpack-start-v7', md5( 'jetpack-start-v7' ), 25, WEEK_IN_SECONDS * 4 ) ) {
			mm_ab_test_inclusion( 'jetpack-start-exempt-v7', md5( 'jetpack-start-exempt-v7' ), 33, WEEK_IN_SECONDS * 4 );
			add_option( 'jpstart_wizard_has_run', true );
		} else {
			require( $file );
		}
	}
}
add_action( 'init', 'mm_jetpack_start_test', 5 );

function mm_jetpack_remove_themes_step( $steps ) {
	for ( $i = 0; $i < count( $steps ); $i++ ) {
		if ( is_a( $steps[ $i ], 'Jetpack_Start_Step_select_theme' ) ) {
			unset( $steps[ $i ] );
		}
	}
	return $steps;
}
add_filter( 'jetpack_start_steps', 'mm_jetpack_remove_themes_step' );

/*
Introduce a modified version of JPS
*/
function mm_jetpack_start_modified_test() {
	$file = MM_BASE_DIR . 'tests/jetpack-start/jetpack-start.php';
	if ( file_exists( $file ) && mm_jetpack_bluehost_only() ) {
		if ( mm_ab_test_inclusion( 'jetpack-start-modified-v7', md5( 'jetpack-start-modified-v7' ), 20, WEEK_IN_SECONDS * 4 ) ) {
			require( $file );
		}
	}
}
add_action( 'init', 'mm_jetpack_start_modified_test', 4 );

function mm_jetpack_remove_all_steps( $steps ) {
	$test = get_transient( 'mm_test', false );
	if( isset( $test['name'] ) && $test['name'] === 'jetpack-start-modified-v7' ) {
		$steps = array();
	}
	return $steps;
}
add_filter( 'jetpack_start_steps', 'mm_jetpack_remove_all_steps' );

