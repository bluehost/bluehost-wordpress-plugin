<?php

function mm_add_theme_button() {
	if( ! isset( $_GET['page'] ) ) {
	?>
	<script type="text/javascript">
	jQuery( document ).ready( function() {
		jQuery( '.add-new-h2' ).html( 'WordPress.org Themes' );
		jQuery( '.add-new-h2' ).before( '<a class="add-new-h2" href="admin.php?page=mojo-themes">MOJO Themes</a>' );
		jQuery( '.add-new-h2:nth-of-type(2)' ).after( '<a class="add-new-h2" href="theme-install.php?upload">Add New</a>' );
	} );
	</script>
	<?php
	}
}
add_action( 'admin_head-themes.php', 'mm_add_theme_button' );

function mm_add_premium_link() {
	?>
	<script type="text/javascript">
	jQuery( document ).ready( function() {
		jQuery( '.wp-filter .filter-links li:last-of-type' ).after( '<li><a style="text-decoration: none;" onclick="location.href=\'admin.php?page=mojo-themes&btn=appearance_premium\'">Premium</a></li>' );
	} );
	</script>
	<?php
}
add_action( 'admin_head-theme-install.php', 'mm_add_premium_link' );

function mm_add_theme_page() {
	add_theme_page( 'MOJO Themes', 'MOJO Themes', 'install_themes', 'mojo-themes', 'mm_theme_page' );
}
add_action( 'admin_menu', 'mm_add_theme_page' );

function mm_theme_page() {
	add_thickbox();
	mm_require( MM_BASE_DIR . '/pages/mojo-themes.php' );
	?>
	<script type="text/javascript">
	jQuery( '.thickbox' ).each( function( index, value ) {
		var w = Math.floor( window.innerWidth * .85 );
		var h = Math.floor( window.innerHeight * .85 );
		var href = jQuery( this ).attr( 'href' );
		var find = 'width=1200&height=800';
		var replace = 'width=' + w + '&height=' + h;
		href = href.replace( find, replace )
		jQuery( this ).attr( 'href', href );
	} );
	</script>
	<?php
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