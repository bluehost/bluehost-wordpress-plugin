<?php
/**
 * Plugin Name: Jetpack Onboarding Tracks
 * Plugin URI: https://github.com/automattic/jetpack-onboarding-tracks
 * Description: Tracking for Jetpack Onboarding
 * Version: 0.1
 */

require_once( plugin_dir_path( __FILE__ ) . 'lib/tracks/client.php');

class JetpackOnboardingTracking {
	static $product_name = 'jpo';

	static function track_jpo_usage() {
		add_action( 'jpo_started', array(__CLASS__, 'track_started'), 1, 1 );
		add_action( 'jpo_disabled', array(__CLASS__, 'track_disabled'), 1, 0 );
		add_action( 'jpo_firstrun', array(__CLASS__, 'track_firstrun'), 1, 0 );
		add_action( 'jpo_step_skipped', array(__CLASS__, 'track_step_skipped'), 1, 1 );
		add_action( 'jpo_step_viewed', array(__CLASS__, 'track_step_viewed'), 1, 1 );
		add_action( 'jpo_step_complete', array(__CLASS__, 'track_step_complete'), 1, 2 );
		add_action( 'jpo_contact_page_built', array(__CLASS__, 'track_contact_page_built'), 1, 0 );
		add_action( 'jpo_closed', array(__CLASS__, 'track_closed'), 1, 0 );
		add_action( 'jpo_opened', array(__CLASS__, 'track_opened'), 1, 0 );
	}

	static function track_closed() { 
		self::record_user_event('wizard_hidden', array());
	}

	// TODO - how?
	static function track_opened() {
		self::record_user_event('wizard_shown', array());
	}

	static function track_firstrun() {
		self::record_user_event('wizard_viewed', array());
	}

	static function track_started( $site_type ) {
		self::record_user_event('wizard_started', array( 'site_type' => $site_type ));
	}

	static function track_disabled() {
		self::record_user_event('wizard_disabled', array());
	}

	static function track_step_viewed($step_slug) {
		self::record_user_event('wizard_step_viewed', array('step_slug' => $step_slug));
	}

	static function track_step_skipped($step_slug) {
		self::record_user_event('wizard_step_skipped', array('step_slug' => $step_slug));
	}

	static function track_contact_page_built() {
		self::record_user_event('contact_page_built', array());
	}

	static function track_mojo_activated() {
		self::record_user_event('mojo_plugin_activated', array());
	}

	static function track_mojo_deactivated() {
		self::record_user_event('mojo_plugin_deactivated', array());
	}

	static function track_jpo_tracks_activated() {
		self::record_user_event('tracks_plugin_activated', array());
	}

	static function track_jpo_tracks_deactivated() {
		self::record_user_event('tracks_plugin_deactivated', array());
	}

	static function track_step_complete($step_slug, $data) {
		// note: $data is an associative array of metadata related to the step completed
		// e.g. when the "design" step is completed, data looks like: {themeId: 'the-theme-id'}
		$data['step_slug'] = $step_slug;
		self::record_user_event('wizard_step_completed', $data);
	}

	static function record_user_event($event_type, $data) {
		error_log($event_type);
		
		$user = wp_get_current_user();
		$site_url = get_option( 'siteurl' );
		$site_domain = str_replace( 'http://', '', $site_url );

		$data['_via_ua'] = $_SERVER['HTTP_USER_AGENT'];
		$data['_via_ip'] = $_SERVER['REMOTE_ADDR'];
		$data['_lg']     = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
		$data['blog_url'] = $site_url;
		$data['jpphp_vendor'] = JETPACK_ONBOARDING_VENDOR_CODE;
		$data['jpphp_product'] = JETPACK_ONBOARDING_PRODUCT_CODE;

		if ( false !== ( $bh_mm_test_value = get_transient( 'mm_test' ) ) ) {
			$data['bh_mm_test_key'] = $bh_mm_test_value['key'];
			$data['bh_mm_test_name'] = $bh_mm_test_value['name'];
		}

		$data['jpo_version'] = defined('Jetpack_Onboarding_EndPoints::VERSION') ? Jetpack_Onboarding_EndPoints::VERSION : "0";

		$response = tracks_record_event($user, self::$product_name.'_'.$event_type, $data);

		if ( is_wp_error( $response ) ) {
			error_log("There was an error: ".$response->get_error_message());
		}
	}
}

add_action( 'init',  array('JetpackOnboardingTracking', 'track_jpo_usage') );

// for testing
register_activation_hook( __FILE__, array('JetpackOnboardingTracking', 'track_jpo_tracks_activated') );
register_deactivation_hook( __FILE__, array('JetpackOnboardingTracking', 'track_jpo_tracks_deactivated') );

// track the acivation/deactivation of Mojo on Bluehost
if ( defined('MM_BASE_DIR') ) {
	register_activation_hook( MM_BASE_DIR . "mojo-marketplace.php", array('JetpackOnboardingTracking', 'track_mojo_activated') );
	register_deactivation_hook( MM_BASE_DIR . "mojo-marketplace.php", array('JetpackOnboardingTracking', 'track_mojo_deactivated') );
}
