<?php
if ( ! defined( 'WPINC' ) ) { die; }
$current_compat = get_transient( 'mm_compat_check', false );
if ( false === $current_compat ) {
	$json = wp_remote_get( add_query_arg( array( 'action' => 'mm_compat_check' ), admin_url( 'admin-ajax.php' ) ), array( 'timeout' => 10, 'cookies' => $_COOKIE ) );

	if ( ! is_wp_error( $json ) ) {
		$json = json_decode( $json['body'] );
	}

	if ( is_object( $json ) && property_exists( $json, 'status' ) && 'success' == $json->status ) {
		set_transient( 'mm_compat_check', 'compatible', DAY_IN_SECONDS * 30 );
		$current_compat = 'compatible';
	} else {
		set_transient( 'mm_compat_check', 'incompatible', DAY_IN_SECONDS * 30 );
		$current_compat = 'incompatible';
	}
}
?>
<div id="mojo-wrapper" class="<?php echo mm_brand( 'mojo-%s-branding' );?>">
<?php
require_once( MM_BASE_DIR . 'pages/header/header.php' );
?>
	<main id="main">
		<div class="container">
			<div class="panel panel-default">
				<div class="panel-body">
					<div class="row">
						<div class="col-xs-12 col-sm-5">
							<h1>What&#8217;s a staging site?</h1>
							<br/>
							<p style="font-size: 18px;">A staging site allows you to make and save changes without your public site being affected.</p>
							<p style="font-size: 18px;">Once you&#8217;ve perfected your site in the staging environment you can deploy it to production so everyone can see your changes.</p>
							<br/><br/><br/>
							<?php
							if ( 'compatible' == $current_compat ) {
								?>
								<button class="btn btn-success btn-lg staging-action" data-staging-action="mm_create" data-interim="staging-create">Create Staging Site</button>
								<?php
							} else {
								?>
								<a class="btn btn-primary btn-lg" href="<?php echo mm_build_link( 'https://helpchat.bluehost.com/', array( 'utm_campaign' => mm_brand( '%s_wp_plugin' ), 'utm_medium' => 'plugin_staging', 'utm_content' => 'help', 'r' => '' ) ); ?>" target="_blank">Chat with Support</a>
								<p class='small text-danger'>Please contact support to find out how to enable staging.</p>
								<?php
							}
							?>
						</div>
						<div class="col-xs-12 col-sm-6 col-sm-offset-1">
							<img class="img-responsive" src="<?php echo esc_url( MM_ASSETS_URL . 'img/staging-diagram.jpg' ); ?>" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<script type="text/javascript" src="https://api.mojomarketplace.com/mojo-plugin-assets/js/staging.js"></script>
