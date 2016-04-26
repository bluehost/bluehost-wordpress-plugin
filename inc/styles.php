<?php
function mm_admin_style() {
	wp_enqueue_style( 'mojo-admin-css', MM_ASSETS_URL . 'css/style.css' );
	if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) ) {
		wp_enqueue_style( 'mojo-admin-roboto-css', 'https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,500' );
		wp_enqueue_style( 'mojo-admin-bootstrap-css', MM_ASSETS_URL . 'css/bootstrap.css' );
		wp_enqueue_style( 'mojo-admin-main-css', MM_ASSETS_URL . 'css/main.css' );
	}
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
