<?php
/**
 * This file adds a coming soon page for new installs
 */

function mm_bh_cs_notice_display() {
	if ( 'true' === get_option( 'mm_coming_soon', 'false' ) ) {
		?>
		<div class="col-xs-12 col-sm-12">
			<div class="panel panel-default panel-body panel-info">
				<div>
					<span class="pull-left dashicons dashicons-flag"></span>
					<h2>Launch your site</h2>
					<p>Your site is currently displaying a "Coming Soon" page. This allows you to work on your site without the public seeing until you are ready to unveil it.</p>
					<div class="col-xs-12 col-sm-12 text-right">
						<a class="btn btn-default btn-md" href="<?php echo esc_url( add_query_arg( array( 'mm_cs_launch' => true ) ) );?>">Launch</a>
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
