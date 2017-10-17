<?php

function mm_add_theme_button() {
	if ( ! isset( $_GET['page'] ) ) {
	?>
	<script type="text/javascript">
	jQuery( document ).ready( function( $ ) {
		$( '.page-title-action' ).html( 'WordPress.org Themes' );
		$( '.page-title-action' ).before( '<a class="add-new-h2" href="admin.php?page=mojo-themes">Premium Themes</a>' );
		$( '.page-title-action:nth-of-type(2)' ).after( '<a class="add-new-h2" href="theme-install.php?upload">Upload</a>' );
	} );
	</script>
	<?php
	}
}
add_action( 'admin_head-themes.php', 'mm_add_theme_button' );

function mm_add_premium_link() {
	?>
	<script type="text/javascript">
	jQuery( document ).ready( function( $ ) {
		$( '.wp-filter .filter-links li:last-of-type' ).after( '<li><a style="text-decoration: none;" onclick="location.href=\'admin.php?page=mojo-themes&btn=appearance_premium\'">Premium</a></li>' );
	} );
	</script>
	<?php
}
add_action( 'admin_head-theme-install.php', 'mm_add_premium_link' );

function mm_add_theme_page() {
	add_theme_page( 'Premium Themes', 'Premium Themes', 'install_themes', 'themes-mojo', '__return_false' );
}
add_action( 'admin_menu', 'mm_add_theme_page' );

function mm_theme_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-themes.php' );
}

function mm_theme_preview_page() {
	?>
	<style type="text/css">
	.wp-full-overlay-sidebar .wp-full-overlay-header {
		padding:15px;
	}
	.install-theme-info{
		display: block;
	}
	.wp-full-overlay-main iframe{
		width: 100%;
		height: 100%;
	}
	</style>
	<?php
	mm_require( MM_BASE_DIR . '/pages/theme-preview.php' );
}

//Help the theme authors with the capital P ;)
add_filter( 'mm_item_name', 'capital_P_dangit' );
