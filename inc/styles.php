<?php
function mm_admin_style() {
	wp_enqueue_style( 'mojo-admin-css', MM_ASSETS_URL . 'css/style.css' );
	if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) ) {
		wp_enqueue_style( 'mojo-admin-roboto-css', 'https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,500' );
		wp_enqueue_style( 'mojo-admin-bootstrap-css', MM_ASSETS_URL . 'css/bootstrap.css' );
		wp_enqueue_style( 'mojo-admin-main-css', MM_ASSETS_URL . 'css/main.css' );
		wp_enqueue_script( 'mojo-admin-main-js', MM_ASSETS_URL . 'js/main.js', 'jquery' );
		wp_enqueue_script( 'mojo-admin-bootstrap-js', MM_ASSETS_URL . 'js/bootstrap.min.js', 'jquery' );
		wp_enqueue_style( 'mojo-admin-bluerock-css', MM_BASE_URL . 'assets/css/bluerock.css' );
		if ( class_exists( 'Jetpack_Onboarding_WelcomePanel' ) && ( 'bluehost' == mm_brand() || 'bluehost-india' == mm_brand() ) ) {
			add_action( 'admin_enqueue_scripts', array( 'Jetpack_Onboarding_WelcomePanel', 'add_wizard_assets' ) );
		}
	}
}
add_action( 'admin_init', 'mm_admin_style' );

function mm_admin_body_class( $classes ) {
	if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) ) {
		$classes .= ' mojo-admin-page ';
	}
	return $classes;
}
add_filter( 'admin_body_class', 'mm_admin_body_class' );

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
