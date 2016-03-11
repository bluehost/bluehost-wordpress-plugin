<?php
function mm_admin_style() {
	if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) ) {
		wp_enqueue_style( 'mojo-admin-css', MM_ASSETS_URL . 'css/style.css' );
		wp_enqueue_style( 'mojo-admin-roboto-css', 'https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,500' );
		wp_enqueue_style( 'mojo-admin-bootstrap-css', MM_ASSETS_URL . 'css/bootstrap.css' );
		wp_enqueue_style( 'mojo-admin-main-css', MM_ASSETS_URL . 'css/main.css' );
	}
	wp_enqueue_script( 'mojo-admin-nice-notices', MM_BASE_URL . 'tmp/nice-notices.js', array( 'jquery' ), MM_VERSION );
}
add_action( 'admin_init', 'mm_admin_style' );

function mm_frontend_style() {
	//Only run this if there is a shortcode on the page.
	global $use_mm_styles;
	if ( $use_mm_styles ) {
		?>
		<link rel='stylesheet' id='mojo-frontent-css'  href='<?php echo MM_ASSETS_URL . 'css/front-end.css'; ?>' type='text/css' media='all' />
		<?php
	}
}
add_action( 'wp_footer', 'mm_frontend_style' );

function mm_nice_notice_styles() {
	?>
	<style type="text/css">
		.mojo-nice-notice-wrap{
			width: 100%;
			float: right;
			display: none;
			color: #fff;
			font-weight: bold;
			padding-left: 20px;
			margin-left: -20px;
		}
		.mojo-nice-notice{
			padding-left: 20px;
			margin-left: -20px;
			width: 100%;
			display: inline-block;
		}
		.mojo-nice-notice p{margin: 1em 0;}
		.mojo-nice-notice a{color: #fff;text-decoration: underline;}
		.mojo-notice-error{background-color:#EF524A;}
		.mojo-notice-success{background-color:#6BBA72;}
		.mojo-notice-info{background-color:#75B9D8;}
	</style>
	<?php
}
add_action( 'admin_head', 'mm_nice_notice_styles' );