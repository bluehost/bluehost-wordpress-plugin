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
add_action( 'wp_logout', 'mm_ab_test_inclusion_none', 99 );

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

/**
 * Should Jetpack Starter perform well, we would move this stuff to inc/jetpack.php.
 */

function mm_jetpack_bluehost_only() {
	$host = @exec( 'hostname' );
	$is_bluehost = ( stripos( $host, 'bluehost' ) ) ? true : false;
	return $is_bluehost;
}

function mm_jetpack_start_test() {
	$file = MM_BASE_DIR . 'tests/jetpack-start/jetpack-start.php';
	if( file_exists( $file ) && 
		mm_ab_test_inclusion( 'jetpack-start-4.0', md5( $file ), 20, WEEK_IN_SECONDS * 4 ) &&
		mm_jetpack_bluehost_only()
		) {
		require( $file );
	} else {
		//dont show a user jetpack start later in life
		add_option( 'jpstart_wizard_has_run', true );
	}
}
add_action( 'init', 'mm_jetpack_start_test', 5 );


/* function mm_jetpack_start_themes( $themes ) {

	include_once( ABSPATH . 'wp-admin/includes/theme-install.php' );
	$installed_themes = search_theme_directories( true );
	$uninstalled_themes = array();
	
	foreach( $themes as $theme ) {
		if( ! array_key_exists( $theme, $installed_themes ) ) {
			//theme is not installed
			$uninstalled_themes[] = $theme;
		}
	}
	
	set_transient( 'jps_uninstalled_themes', $uninstalled_themes, WEEK_IN_SECONDS );
	
	return array_diff( $themes, $uninstalled_themes );
}
add_filter( 'jetpack_start_themes', 'mm_jetpack_start_themes' );*/

function mm_jetpack_start_onboarding() {
	$mm_test = get_transient( 'mm_test', array( 'name' => 'none' ) );
	if( ! get_option( 'jpstart_wizard_has_run' ) && 
		! isset( $_GET['jps_wizard_start'] )  && 
		! get_option( 'jps_started' ) &&
		$mm_test['name'] == 'jetpack-start-4.0' ) {
		add_option( 'jps_started', time() );
		wp_safe_redirect( admin_url( '?jps_wizard_start' ) );
	}
}
add_action( 'admin_init', 'mm_jetpack_start_onboarding', 10 );

function mm_jetpack_remove_themes_step( $steps ) {
	for ( $i = 0; $i < count( $steps ); $i++ ) { 
		if( is_a( $steps[ $i ], 'Jetpack_Start_Step_select_theme' ) ) {
			unset( $steps[ $i ] );
		}
	}
	return $steps;
}
add_filter( 'jetpack_start_steps', 'mm_jetpack_remove_themes_step' );

function mm_spam_test() {
	$file = MM_BASE_DIR . 'tests/spam-prevention.php';
	if( file_exists( $file ) && mm_ab_test_inclusion( 'spam-prevention-v1', md5( 'tests/spam-prevention.php' ), 20, WEEK_IN_SECONDS * 4 ) ) {
		require( $file );
	}
}
add_action( 'init', 'mm_spam_test', 8 );
