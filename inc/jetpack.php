<?php
// Add Photon to the list of default modules activated when Jetpack is linked to WP.
function mm_customize_jetpack_default_modules( $modules ) {
	$modules[] = 'photon';
	$modules[] = 'sso';
	return array_unique( $modules );
}
add_filter( 'jetpack_get_default_modules', 'mm_customize_jetpack_default_modules' );

function mm_jpo_from( $from, $version ) {
	if ( mm_brand() == 'bluehost' ) {
		return sprintf( 'jpo-%s-bluehost', $version );
	} else {
		return $from;
	}
}
add_filter( 'jpo_tracking_from_arg', 'mm_jpo_from', 10, 2 );

function mm_prep_onboarding() {
	$brand = mm_brand();
	if ( 'bluehost' == $brand || 'bluehost-india' == $brand ) {

		if ( false == get_option( 'jpo_started' ) && false == get_option( 'jpo_hide_always' ) && false == get_option( 'mm_jpo_viewed' ) ) {
			if ( isset( $_GET['page'] ) && 'mojo-marketplace' == $_GET['page'] && isset( $_GET['section'] ) && 'mixed-themes' == $_GET['section'] ) {
				update_option( 'jpo_hide_always', 1 );
			} else {
				wp_redirect( add_query_arg( array( 'page' => 'mojo-onboarding' ), admin_url( 'admin.php' ) ) );
			}
		}

		if ( isset( $_GET['page'] ) && 'mojo-onboarding' == $_GET['page'] && 1 == get_option( 'jpo_hide_always' ) ) {
			wp_redirect( add_query_arg( array( 'page' => 'mojo-home' ), admin_url( 'admin.php' ) ) );
		}

		add_action( 'mm_onboarding', 'mm_add_jpo_wizard' );
		add_filter( 'jpo_review_cta_button_url', 'mm_cta_button_url' );
		$site_tagline = get_option( 'blogdescription' );
		if ( ! in_array( $site_tagline , array( '', 'Just another WordPress site' ) ) ) {
			add_filter( 'jpo_wizard_step_enabled_title', '__return_false' );
		}
		add_filter( 'jpo_wizard_step_enabled_woocommerce', '__return_false' );
	}
}
add_action( 'admin_init', 'mm_prep_onboarding' );

function mm_add_jpo_wizard() {
	update_option( 'mm_jpo_viewed', 1 );
	?>
	<div id='jpo-welcome-panel'><span class='screen-reader-text'>Loading Welcome Wizard</span></div>
	<?php
}

function mm_cta_button_url() {
	$home_url = add_query_arg( array( 'page' => 'mojo-home' ), admin_url( 'admin.php' ) );
	return add_query_arg( array( 'return' => $home_url ), admin_url( 'customize.php' ) );
}
