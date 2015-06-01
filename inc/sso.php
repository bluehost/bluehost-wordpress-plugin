<?php
function mm_sso_check () {
	if ( ! isset( $_GET['salt'] ) || ! isset( $_GET['nonce'] ) || ! isset( $_GET['userid'] ) ) { mm_sso_req_login(); }
	if ( mm_sso_check_blocked() ) { mm_sso_req_login(); }
	$nonce = esc_attr( $_GET['nonce'] );
	$salt = esc_attr( $_GET['salt'] );
	$user_id = (int)$_GET['userid'];
	$hash = base64_encode( hash( 'sha256', $nonce . $salt, true ) );
	if ( get_transient( 'mm_sso' ) == $hash ) {
		$user = get_user_by( 'id', $user_id );
		if ( is_a( $user, 'WP_User' ) ) {
			wp_set_current_user( $user->ID, $user->user_login );
			wp_set_auth_cookie( $user->ID );
			do_action( 'wp_login', $user->user_login );
			delete_transient( 'mm_sso' );
			wp_safe_redirect( admin_url() );
		} else {
			mm_sso_req_login();
		}
	} else {
		mm_sso_add_failed_attempt();
		mm_sso_req_login();
	}
	die();
}
add_action( 'wp_ajax_nopriv_mmsso-check', 'mm_sso_check' );
add_action( 'wp_ajax_mmsso-check', 'mm_sso_check' );

function mm_sso_req_login() {
	wp_safe_redirect( wp_login_url() );
}

function mm_sso_get_attempt_id() {
	return 'mmsso' . esc_url( $_SERVER['REMOTE_ADDR'] );
}

function mm_sso_add_failed_attempt() {
	$attempts = get_transient( mm_sso_get_attempt_id(), 0 );
	$attempts++;
	set_transient( mm_sso_get_attempt_id(), $attempts, 300 );
}

function mm_sso_check_blocked() {
	$attempts = get_transient( mm_sso_get_attempt_id(), 0 );
	if ( $attempts > 4 ) {
		return true;
	}
	return false;
}
