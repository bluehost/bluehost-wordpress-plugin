<?php
function mm_admin_style() {
	wp_enqueue_style( 'mojo-admin-css', MM_BASE_URL . 'css/style.css' );
}
add_action( 'admin_head', 'mm_admin_style' );

function mm_frontend_style() {
	//Only run this if there is a shortcode on the page.
	global $use_mm_styles;
	if( $use_mm_styles ) {
		?>
		<link rel='stylesheet' id='mojo-frontent-css'  href='<?php echo MM_BASE_URL . 'css/front-end.css'; ?>' type='text/css' media='all' />
		<?php
	}
}
add_action( 'wp_footer', 'mm_frontend_style' );