<?php
function mm_ab_test_inclusion( $test_name, $key, $audience, $duration ) {
	if( false === ( $test = get_transient( 'mm_test', false ) ) ) {
		$previous_tests = get_option( 'mm_previous_tests', array() );
		
		if( in_array( $test_name, $previous_tests ) ) {
			return false;
		}
		
		$score = rand( 0, 99 );
		
		if( $audience > $score ) {
			set_transient( 'mm_test', array( 'name' => $test_name, 'key' => $key ), $duration );
			$previous_tests[] = $test_name;
			update_option( 'mm_previous_tests', $previous_tests );
			return true;
		}
	} else {
		if( $test['key'] === $key ) {
			echo "key matches";
			return true;
		}
		echo "key does not match";
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

function mm_themes_style_large() {
	if( isset( $_GET['page'] ) && $_GET['page'] == "mojo-themes" ) {
		$styles = "
		<style type='text/css'>
		.theme-browser .theme{ 
			margin: 1% !important; 
			width: 48% !important;
		}
		.theme-browser h3.theme-name{
			box-shadow: 0 0 0 !important;
			display: inline-block;
			
		}
		.theme-browser .mojo-theme-actions{
			display: inline-block;
			position: absolute !important;
			right: 15px !important;
			bottom: 10px !important;
		}
		.theme-browser .mojo-theme-actions .price{
			position: relative !important;
			padding: 5px !important;
		}
		.theme-browser .mojo-theme-actions .mm-btn-primary,
		.theme-browser .mojo-theme-actions .button-secondary{
			margin: 5px 15px !important;
		}
		
		</style>";
		$duration = WEEK_IN_SECONDS * 2;
		if( mm_ab_test_inclusion( 'large_themes', md5( $styles ), 100, $duration ) ) {
			echo $styles;
		}
	}
}
add_action( 'admin_head', 'mm_themes_style_large' );
