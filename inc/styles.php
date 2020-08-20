<?php

/**
 * Load admin stylesheets.
 */
function mojo_admin_style() {
	if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) ) {
		wp_enqueue_style( 'mojo-admin-css', MOJO_ASSETS_URL . 'css/style.css' );
		wp_enqueue_style( 'mojo-admin-roboto-css', 'https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,500' );
		wp_enqueue_style( 'mojo-admin-bootstrap-css', MOJO_ASSETS_URL . 'css/bootstrap.css' );
		wp_enqueue_style( 'mojo-admin-main-css', MOJO_ASSETS_URL . 'css/main.css' );
		wp_enqueue_style( 'mojo-admin-bluerock-css', BLUEHOST_PLUGIN_URL . 'assets/css/bluerock.css' );
		wp_enqueue_script( 'mojo-admin-main-js', MOJO_ASSETS_URL . 'js/main.js', 'jquery' );
		wp_enqueue_script( 'mojo-admin-bootstrap-js', MOJO_ASSETS_URL . 'js/bootstrap.min.js', 'jquery' );
	}
}

add_action( 'admin_init', 'mojo_admin_style' );

function mojo_admin_body_class( $classes ) {
	if ( isset( $_GET['page'] ) && false !== strpos( $_GET['page'], 'mojo-' ) ) {
		$classes .= ' mojo-admin-page ';
	}

	return $classes;
}

add_filter( 'admin_body_class', 'mojo_admin_body_class' );

/**
 * Load front end stylesheet.
 */
function mojo_frontend_style() {
	// Only run this if there is a shortcode on the page.
	global $use_mm_styles;
	if ( $use_mm_styles ) {
		?>
		<link rel='stylesheet' id='mojo-frontent-css' href='<?php echo MOJO_ASSETS_URL . 'css/front-end.css'; ?>'
			  type='text/css' media='all'/>
		<?php
	}
}

add_action( 'wp_footer', 'mojo_frontend_style' );
