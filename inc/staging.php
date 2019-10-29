<?php
if ( ! defined( 'WPINC' ) ) { die; }

function bluehost_is_staging() {
	return ( get_option( 'staging_environment' ) == 'staging' ) ? true : false;
}

function mm_cl( $command, $args = null ) {
	$whitelist_commands = array(
		'create'          => false,
		'clone'           => 'production',
		'destroy'         => 'production',
		'sso_staging'     => 'production',
		'deploy_files'    => 'staging',
		'deploy_db'       => 'staging',
		'deploy_files_db' => 'staging',
		'sso_production'  => 'staging',
		'save_state'      => 'staging',
		'restore_state'   => 'staging',
		'revisions'       => 'staging',
		'compat_check'    => false,
	);

	if ( ! array_key_exists( $command, $whitelist_commands ) ) {
		echo json_encode(
			array(
				'status'  => 'error',
				'message' => 'Command not found in whitelist.',
			)
		);
	} else {
		if ( ! class_exists( 'WP_CLI_Command' ) ) {
			mm_check_env( $whitelist_commands[ $command ] );
		}
	}

	if ( 'compat_check' != $command && 'revisions' != $command ) {
		do_action( 'mm_staging_command', $command );
	}

	$command = array( $command );
	$token   = wp_generate_password( 32, false );
	set_transient( 'staging_auth_token', $token, 60 );
	$command[] = $token;
	$config    = get_option( 'staging_config' );
	if ( false == $config || ! isset( $config['production_dir'] ) || ! isset( $config['staging_dir'] ) ) {
		$staging_rel = 'staging/' . mt_rand( 1000, 9999 );
		$config      = array(
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
	$command[] = get_current_user_id();

	if ( ! is_null( $args ) && is_array( $args ) ) {
		$args    = array_values( $args );
		$command = array_merge( $command, $args );
	}

	array_map( 'escapeshellcmd', $command );
	$command = implode( ' ', $command );

	if ( false !== strpos( $command, ';' ) ) {
		echo json_encode(
			array(
				'status'  => 'error',
				'message' => 'Invalid character in command (;).',
			)
		);
		die;
	}

	if ( false !== strpos( $command, '&' ) ) {
		echo json_encode(
			array(
				'status'  => 'error',
				'message' => 'Invalid character in command (&).',
			)
		);
		die;
	}

	if ( false !== strpos( $command, '|' ) ) {
		echo json_encode(
			array(
				'status'  => 'error',
				'message' => 'Invalid character in command (|).',
			)
		);
		die;
	}

	$script = MM_BASE_DIR . 'lib/.staging';

	if ( 0755 != (int) substr( sprintf( '%o', fileperms( $script ) ), -4 ) ) {
		chmod( $script, 0755 );
	}

	putenv( 'PATH=' . getenv( 'PATH' ) . PATH_SEPARATOR . '/usr/local/bin' );

	$response = exec( $script . ' ' . $command );

	return $response;
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
