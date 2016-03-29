<?php
function mm_admin_style() {
	if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) ) {
		wp_enqueue_style( 'mojo-admin-css', MM_ASSETS_URL . 'css/style.css' );
		wp_enqueue_style( 'mojo-admin-roboto-css', 'https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,500' );
		wp_enqueue_style( 'mojo-admin-bootstrap-css', MM_ASSETS_URL . 'css/bootstrap.css' );
		wp_enqueue_style( 'mojo-admin-main-css', MM_ASSETS_URL . 'css/main.css' );
	}
	wp_enqueue_script( 'mojo-admin-nice-notices', MM_ASSETS_URL . 'js/nice-notices.js', array( 'jquery' ), MM_VERSION );
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
			font-family: "Open Sans",sans-serif;
			width: 102%;
			float: right;
			display: none;
			color: #fff;
			font-weight: bold;
			padding-left: 20px;
		}
		.mojo-nice-notice{
			float: right;
			text-indent: 25px;
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

function mm_partner_styles() {
	?>
	<style type="text/css">
		.mm-partner-themes-banner-top,
		.mm-partner-themes-banner-bottom,
		.mm-partner-plugins-banner-top,
		.mm-partner-plugins-banner-bottom,
		.mm-partner-services-banner-top,
		.mm-partner-services-banner-bottom,
		.mm-partner-graphics-banner-top,
		.mm-partner-graphics-banner-bottom {
			float: left;
			max-width: 500px;
			max-height: 100px;
			overflow: hidden;
		}
		.mm-partner-themes-banner-top a,
		.mm-partner-themes-banner-bottom a,
		.mm-partner-plugins-banner-top a,
		.mm-partner-plugins-banner-bottom a,
		.mm-partner-services-banner-top a,
		.mm-partner-services-banner-bottom a,
		.mm-partner-graphics-banner-top a,
		.mm-partner-graphics-banner-bottom a{
			display: inline-block;
		}
		.mm-partner-themes-banner-top img,
		.mm-partner-themes-banner-bottom img,
		.mm-partner-plugins-banner-top img,
		.mm-partner-plugins-banner-bottom img,
		.mm-partner-services-banner-top img,
		.mm-partner-services-banner-bottom img,
		.mm-partner-graphics-banner-top img,
		.mm-partner-graphics-banner-bottom img{
			width: 100%;
		}
		.mm-partner-themes-banner-top img:hover,
		.mm-partner-themes-banner-bottom img:hover,
		.mm-partner-plugins-banner-top img:hover,
		.mm-partner-plugins-banner-bottom img:hover,
		.mm-partner-services-banner-top img:hover,
		.mm-partner-services-banner-bottom img:hover,
		.mm-partner-graphics-banner-top img:hover,
		.mm-partner-graphics-banner-bottom img:hover,
		.mm-partner-themes-single-item img:hover,
		.mm-partner-plugins-single-item img:hover,
		.mm-partner-services-single-item img:hover,
		.mm-partner-graphics-single-item img:hover {
			opacity: 0.8;
		}
		.mm-partner-themes-single-item img,
		.mm-partner-plugins-single-item img,
		.mm-partner-services-single-item img,
		.mm-partner-graphics-single-item img {
			width: 100%;
		}
	</style>
	<?php
}
add_action( 'admin_head', 'mm_partner_styles' );