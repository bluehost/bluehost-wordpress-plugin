<?php
// Add Photon to the list of default modules activated when Jetpack is linked to WP.
function mm_customize_jetpack_default_modules( $modules ) {
	$modules[] = 'photon';
	return array_unique( $modules );
}
add_filter( 'jetpack_get_default_modules', 'mm_customize_jetpack_default_modules' );

function mm_prep_onboarding() {
	if ( mm_brand() == 'bluehost' ) {
		//temp solution for window.location bug in jpo
		if ( isset( $_SERVER['SCRIPT_FILENAME'] ) && false !== strpos( $_SERVER['SCRIPT_FILENAME'], 'admin.php' ) && ! isset( $_GET['page'] ) ) {
			wp_redirect( add_query_arg( array( 'page' => 'mojo-home' ), admin_url( 'admin.php' ) ) );
		}
		add_action( 'mm_onboarding', 'mm_add_jpo_wizard' );
		add_filter( 'jpo_review_cta_button_url', 'mm_cta_button_url' );
		$site_tagline = get_option( 'blogdescription' );
		if ( ! in_array( $site_tagline , array( '', 'Just another WordPress site' ) ) ) {
			add_filter( 'jpo_wizard_step_enabled_title', '__return_false' );
		}
	}
}
add_action( 'admin_init', 'mm_prep_onboarding' );

function mm_add_jpo_wizard() {
	?>
	<div id='jpo-welcome-panel'><span class='screen-reader-text'>Loading Welcome Wizard</span></div>
	<?php
}

function mm_cta_button_url() {
	$home_url = add_query_arg( array( 'page' => 'mojo-home' ), admin_url( 'admin.php' ) );
	return add_query_arg( array( 'return' => $home_url ), admin_url( 'customize.php' ) );
}
