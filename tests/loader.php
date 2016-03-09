<?php

function mm_jetpack_bluehost_only() {
	$host = @exec( 'hostname' );
	$is_bluehost = ( stripos( $host, 'bluehost' ) ) ? true : false;
	return $is_bluehost;
}

function mm_jpo_test( $file ) {
	return mm_ab_test_file( 'jetpack-onboarding-v1.1.1', $file, 'vendor/jetpack/jetpack-onboarding/jetpack-onboarding.php', 'tests/jetpack-onboarding/jetpack-onboarding.php', 33, DAY_IN_SECONDS * 90 );
}
add_filter( 'mm_require_file', 'mm_jpo_test' );

function mm_jpo_test_exempt() {
	mm_ab_test_inclusion( 'jetpack-onboarding-v1.1.1-exempt', md5( 'jetpack-onboarding-v1-exempt' ), 25, DAY_IN_SECONDS * 90 );
}
add_action( 'init', 'mm_jpo_test_exempt', 9 );