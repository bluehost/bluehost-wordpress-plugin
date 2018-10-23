<?php
/**
 * This file adds a coming soon page for new installs
 */

function mm_cs_notice_display() {
	if ( 'true' === get_option( 'mm_coming_soon', 'false' ) && 'bluehost' != mm_brand() ) {
		?>
		<div class='notice notice-warning'>
			<p>Your site is currently displaying a "Coming Soon" page. Once you are ready to launch your site <a href='<?php echo esc_url( add_query_arg( array( 'mm_cs_launch' => true ) ) );?>'>click here</a>.</p>
		</div>
		<?php
	}
}
add_action( 'admin_notices', 'mm_cs_notice_display' );

function mm_bh_cs_notice_display() {
	if ( 'true' === get_option( 'mm_coming_soon', 'false' ) ) {
		?>

		<div class="row">
			<div class="col-xs-12 col-sm-12">
				<div class="panel panel-default panel-body panel-warning">
					<div>
						<h2>Coming Soon Active</h2>
						<p>Your site is currently displaying a "Coming Soon" page. This allows you to work on your site without the public seeing until you are ready to unveil it.</p>
						<div class="col-xs-12 col-sm-12 text-right">
							<a class="btn btn-default btn-md" href="<?php echo esc_url( add_query_arg( array( 'mm_cs_launch' => true ) ) );?>">Launch your site</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
	}
}
add_action( 'mojo_home_top', 'mm_bh_cs_notice_display' );

function mm_bh_cs_notice_launch_message() {
	?>
		<div class="row">
			<div class="col-xs-12 col-sm-12">
				<div class="panel panel-default panel-body panel-success">
					<div>
						<span class="pull-left dashicons dashicons-yes"></span>
						<h2>Congratulations your site is now live!</h2>
						<p>Your site is now live for the public to see! Make sure you are checking back frequently to see your visitors comments and feedback.</p>
						<div class="col-xs-12 col-sm-12 text-right">
							<a class="btn btn-success btn-md" href="<?php echo esc_url( get_option( 'siteurl' ) ); ?>">View Site</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	<?php
}

function mm_cs_notice_launch_message() {
	?>
		<div class='notice updated'>
			<p>Congratulations. Your site is now live, <a target='_blank' href='<?php echo esc_url( get_option( 'siteurl' ) ); ?>'>click here</a> to view it.</p>
		</div>
	<?php
}


function mm_cs_notice_launch() {
	if ( isset( $_GET['mm_cs_launch'] ) ) {
		update_option( 'mm_coming_soon', 'false' );
		if ( 'bluehost' == mm_brand() ) {
			add_action( 'mojo_home_top', 'mm_bh_cs_notice_launch_message' );
		} else {
			add_action( 'admin_notices', 'mm_cs_notice_launch_message' );
		}
	}
}
add_action( 'admin_init', 'mm_cs_notice_launch' );

function mm_cs_load() {
	if ( ! is_user_logged_in() ) {
		$coming_soon = get_option( 'mm_coming_soon', 'false' );
		if ( 'true' === $coming_soon ) {
			mm_cs_content();
			die();
		}
	}
}
add_action( 'template_redirect', 'mm_cs_load' );

function mm_cs_meta() {
	$meta = mm_api_cache( 'https://api.mojomarketplace.com/api/v1/meta/landing_page' );
	if ( is_wp_error( $meta ) ) {return;}
	if ( isset( $meta['body'] ) && '' != $meta['body']  ) {
		return "<meta name='robots' content='noindex, nofollow' />";
	}
	return;
}

function mm_cs_enabled_callback( $args ) {
		$value = get_option( $args['field'], 'false' );
		echo "On <input type='radio' name='" . esc_attr( $args['field'] ) . "' value='true'" . checked( $value, 'true', false ) . " />";
		echo "Off <input type='radio' name='" . esc_attr( $args['field'] ) . "' value='false'" . checked( $value, 'false', false ) . " />";
}

function mm_cs_settings() {
	$section_name = 'mm_cs_settings_section';
	$section_hook = 'general';

	if ( 'bluehost' == mm_brand() || 'bluehost-india' == mm_brand() ) {
		$brand = 'Bluehost';
	} else {
		$brand = mm_brand();
	}

	add_settings_section(
		$section_name, //Section
		$brand . ' Coming Soon Page', //Title
		'__return_false', //section description callback
		$section_hook //Setting Hook
	);

	add_settings_field(
		'mm_coming_soon',
		'Enable',
		'mm_cs_enabled_callback',
		$section_hook,
		$section_name,
		array( 'field' => 'mm_coming_soon' )
	);
	register_setting( 'general', 'mm_coming_soon' );

}
add_action( 'admin_init', 'mm_cs_settings' );

function mm_cs_content() {
	$brand = mm_brand();
	if ( 'mojo' != $brand && file_exists( MM_BASE_DIR . 'pages/coming-soon/' . $brand . '.php' ) ) {
		require( MM_BASE_DIR . 'pages/coming-soon/' . $brand . '.php' );
	} else {
		require( MM_BASE_DIR . 'pages/coming-soon/mojo.php' );
	}
}

// Handle Ajax response
function mm_coming_soon_subscribe() {
	
	$response 	= array();
	$a_response 	= array();
	$email 		= sanitize_email( wp_unslash( $_POST['email'] ) );

	if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( wp_unslash( $_POST['nonce'] ), 'mm_coming_soon_subscribe_nonce' ) ) {

		$a_response['message'] 	= __( 'Gotcha!', 'mojo' );
		$a_response['status'] 	= 'nonce_failure';

	} else {
		
		// Initialize JetPack_Subscriptions
		$jetpack = Jetpack_Subscriptions::init();

		if ( ! is_email( $email ) ) {

			$a_response['message'] 	= __( 'Please provide a valid email address', 'mojo' );
			$a_response['status'] 	= 'invalid_email';

		} else {

			// Get JetPack response and subscribe email if response is true
			$response = $jetpack->subscribe( $email, 0, false );

			if( isset( $response[0]->errors ) ) {

				$error_text = array_keys( $response[0]->errors );
				$error_text = $error_text[0];

				$a_response['message'] 	= __( 'There was an error with the subscription', 'mojo' );
				$a_response['status'] 	= $error_text;

		    	} else {

				$a_response['message'] 	= __( 'Subscription successful', 'mojo' );
		    		$a_response['status'] 	= 'success';

			}

		}

  		wp_send_json( $a_response );

  	}

}
add_action( 'wp_ajax_mm_coming_soon_subscribe', 'mm_coming_soon_subscribe' );
add_action( 'wp_ajax_nopriv_mm_coming_soon_subscribe', 'mm_coming_soon_subscribe' );

/**
 * When the coming soon module is enabled, add a filter to override Jetpack to prevent emails from being sent.
 */
function mm_coming_soon_prevent_emails() {

	$enabled = get_option( 'mm_coming_soon', 'false' );
	if ( 'true' === $enabled ) {
	    add_filter(
	        'jetpack_subscriptions_exclude_all_categories_except',
	        'mm_coming_soon_prevent_emails_return_array'
	    );
	}

}
add_action( 'plugins_loaded', 'mm_coming_soon_prevent_emails' );

function mm_coming_soon_prevent_emails_return_array() {

    return array(
        'please-for-the-love-of-all-things-do-not-exist'
    );

}
