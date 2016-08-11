<?php
if ( ! defined( 'WPINC' ) ) { die; }

function mm_is_staging() {
	return ( get_option( 'staging_environment' ) == 'staging' ) ? true : false;
}

function mm_staging_dashboard_widgets() {
	if ( false == get_option( 'staging_environment' ) ) {
		wp_add_dashboard_widget(
			'mojo-staging',
			'Staging Site Setup',
			'mm_staging_dashboard_display'
		);
		global $wp_meta_boxes;

		$normal_dashboard = $wp_meta_boxes['dashboard']['normal']['core'];

		$widget_backup = array( 'mojo-staging' => $normal_dashboard['mojo-staging'] );

		unset( $normal_dashboard['mojo-staging'] );

		$sorted_dashboard = array_merge( $widget_backup, $normal_dashboard );

		$wp_meta_boxes['dashboard']['normal']['core'] = $sorted_dashboard;
	}
}
add_action( 'wp_dashboard_setup', 'mm_staging_dashboard_widgets' );

function mm_staging_dashboard_display() {
	mm_require( MM_BASE_DIR . 'pages/dashboard-staging-widget.php' );
}

function mm_staging_page() {
	$env = get_option( 'staging_environment' );
	switch ( $env ) {
		case 'production':
			require_once( MM_BASE_DIR . 'pages/staging-production.php' );
			break;

		case 'staging':
			require_once( MM_BASE_DIR . 'pages/staging-staging.php' );
			break;

		default:
			require_once( MM_BASE_DIR . 'pages/staging-create.php' );
			break;
	}
}

function mm_cl( $command, $args = null ) {
	mm_check_admin();
	$command = array( $command );
	$token = wp_generate_password( 32, false );
	set_transient( 'staging_auth_token', $token, 30 );
	$command[] = $token;
	$config = get_option( 'staging_config' );
	if ( false == $config || ! isset( $config['production_dir'] ) || ! isset( $config['staging_dir'] ) ) {
		$staging_rel = 'staging/' . mt_rand( 1000, 9999 );
		$config = array(
			'production_dir' => ABSPATH,
			'staging_dir'    => ABSPATH . $staging_rel . '/',
			'production_url' => get_option( 'siteurl' ),
			'staging_url'    => get_option( 'siteurl' ) . '/' . $staging_rel,
			'creation_date'  => date( 'M j, Y' ),
		);
		update_option( 'staging_config', $config );
	}

	$command[] = $config['production_dir'];
	$command[] = $config['staging_dir'];
	$command[] = $config['production_url'];
	$command[] = $config['staging_url'];

	if ( ! is_null( $args ) && is_array( $args ) ) {
		$args = array_values( $args );
		$command = array_merge( $command, $args );
	}

	array_map( 'escapeshellcmd', $command );
	$command = implode( ' ', $command );

	if ( false !== strpos( $command, ';' ) ) {
		echo json_encode( array( 'status' => 'error', 'message' => 'Invalid character in command (;).' ) );
		die;
	}

	if ( false !== strpos( $command, '&&' ) ) {
		echo json_encode( array( 'status' => 'error', 'message' => 'Invalid character in command (&&).' ) );
		die;
	}

	$response = exec( MM_BASE_DIR . 'lib/staging.sh ' . $command );

	return $response;
}

function mm_check_admin() {
	if ( ! current_user_can( 'manage_options' ) ) {
		$response = array(
			'status'  => 'error',
			'message' => 'Invalid user permissions.',
		);
		echo json_encode( $response );
		die;
	}
}

function mm_check_env( $env ) {
	$current_env = get_option( 'staging_environment', false );
	if ( $env == $current_env ) {
		return true;
	} else {
		$response = array(
			'status'  => 'error',
			'message' => 'Invalid environment for command.',
		);
		echo json_encode( $response );
		die;
	}
}

function mm_test_service() {
	//make sure all requirements are met.
}
add_action( 'wp_ajax_mm_test_service', 'mm_test_service' );

function mm_create() {
	mm_check_env( false );
	set_transient( 'mm_fresh_staging', true, 300 );
	echo mm_cl( 'create' );
	die;
}
add_action( 'wp_ajax_mm_create', 'mm_create' );

function mm_clone() {
	mm_check_env( 'production' );
	echo mm_cl( 'clone' );
	die;
}
add_action( 'wp_ajax_mm_clone', 'mm_clone' );

function mm_deploy_files() {
	mm_check_env( 'staging' );
	echo mm_cl( 'deploy_files' );
	die;
}
add_action( 'wp_ajax_mm_deploy_files', 'mm_deploy_files' );

function mm_deploy_files_db() {
	mm_check_env( 'staging' );
	echo mm_cl( 'deploy_files_db' );
	die;
}
add_action( 'wp_ajax_mm_deploy_files_db', 'mm_deploy_files_db' );

function mm_deploy_db() {
	mm_check_env( 'staging' );
	echo mm_cl( 'deploy_db' );
	die;
}
add_action( 'wp_ajax_mm_deploy_db', 'mm_deploy_db' );

function mm_destroy() {
	mm_check_env( 'production' );
	echo mm_cl( 'destroy' );
	die;
}
add_action( 'wp_ajax_mm_destroy', 'mm_destroy' );

function mm_save_state() {
	mm_check_env( 'staging' );
	echo mm_cl( 'save_state' );
	die;
}
add_action( 'wp_ajax_mm_save_state', 'mm_save_state' );

function mm_restore_state() {
	mm_check_env( 'staging' );
	echo mm_cl( 'restore_state' );
	die;
}
add_action( 'wp_ajax_mm_restore_state', 'mm_restore_state' );

function mm_sso_production() {
	mm_check_env( 'staging' );
	echo mm_cl( 'sso_production' );
	die;
}
add_action( 'wp_ajax_mm_sso_production', 'mm_sso_production' );

function mm_sso_staging() {
	mm_check_env( 'production' );
	echo mm_cl( 'sso_staging' );
	die;
}
add_action( 'wp_ajax_mm_sso_staging', 'mm_sso_staging' );

function mm_interim() {
	if ( isset( $_POST['template'] ) ) {
		$interim = MM_BASE_DIR . 'pages/interim-' . sanitize_file_name( $_POST['template'] ) . '.php';
		if ( file_exists( $interim ) ) {
			mm_require( $interim );
		}
	}
	die;
}
add_action( 'wp_ajax_mm_interim', 'mm_interim' );

function mm_modal() {
	if ( isset( $_POST['template'] ) ) {
		$interim = MM_BASE_DIR . 'pages/modal-' . sanitize_file_name( $_POST['template'] ) . '.php';
		if ( file_exists( $interim ) ) {
			?>
			<div id="mm-modal-wrap">
				<style type="text/css">
					#mm-modal-wrap {
						display: none;
						position: fixed;
						z-index: 1;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						overflow: auto;
						background-color: rgb( 0, 0, 0 );
						background-color: rgba( 0, 0, 0, 0.4 );
					}

					/* Modal Content/Box */
					#mm-modal-wrap .container {
						background-color: #fefefe;
						margin: 15% auto;
						padding: 20px;
						border: 1px solid #888;
						width: 30%;
					}
				</style>
				<?php
				mm_require( $interim );
				?>
			</div>
			<?php
		}
	}
	die;
}
add_action( 'wp_ajax_mm_modal', 'mm_modal' );
