<?php

function mm_jpo_test( $file ) {
	return mm_ab_test_file( 'jetpack-onboarding-v1.2', $file, 'vendor/jetpack/jetpack-onboarding/jetpack-onboarding.php', 'tests/jetpack-onboarding/jetpack-onboarding.php', 33, DAY_IN_SECONDS * 30 );
}
add_filter( 'mm_require_file', 'mm_jpo_test' );

function mm_jpo_test_exempt() {
	mm_ab_test_inclusion( 'jetpack-onboarding-v1.2-exempt', md5( 'jetpack-onboarding-v1.2-exempt' ), 25, DAY_IN_SECONDS * 30 );
}
add_action( 'init', 'mm_jpo_test_exempt', 7 );

function mm_demo_test( $file ) {
	return mm_ab_test_file( 'mojo-demo-v1', $file, 'pages/mojo-themes.php', 'tests/mojo-themes.php', 25, DAY_IN_SECONDS * 90 );
}
add_filter( 'mm_require_file', 'mm_demo_test' );

function mm_demo_test_exempt() {
	mm_ab_test_inclusion( 'mojo-demo-v1-exempt', md5( 'mojo-demo-v1-exempt' ), 33, DAY_IN_SECONDS * 90 );
}
add_action( 'init', 'mm_demo_test_exempt', 9 );

function mm_branding_test_exempt( $file ) {
	return mm_ab_test_file( 'mojo-branding-exempt', $file, 'inc/branding.php', 'tests/branding.php', 25, DAY_IN_SECONDS * 90 );
}
add_filter( 'mm_require_file', 'mm_branding_test_exempt' );

function mm_branding_test() {
	mm_ab_test_inclusion( 'mojo-branding-' . mm_brand() , md5( 'mojo-branding' . mm_brand() ), 33, DAY_IN_SECONDS * 90 );
}
add_action( 'init', 'mm_branding_test', 8 );
