<?php

function mm_main_menu() {
	add_menu_page( 'Marketplace', 'Marketplace', 'manage_options', 'mojo-themes', 'mm_theme_page', 'div', 59 );
}
add_action( 'admin_menu', 'mm_main_menu' );

function mm_main_menu_fix_subdomain_label() {
	global $submenu;
	$submenu['mojo-themes'][0][0] = 'Themes';
}
add_action( 'admin_menu', 'mm_main_menu_fix_subdomain_label', 11 );

function mm_preview_menu() {
	add_submenu_page( null, 'Theme Preview', 'Theme Preview', 'manage_options', 'mojo-theme-preview', 'mm_theme_preview_page' );
}
add_action( 'admin_menu', 'mm_preview_menu' );

function mm_menu_icon() {
	?>
	<style type="text/css">
		li.toplevel_page_mojo-themes .wp-menu-image{
			background-image: url( '<?php echo mm_brand( MM_ASSETS_URL . "img/icon-22-%s.png" ); ?>' );
			background-position: 7px;
			background-repeat: no-repeat;
		}
	</style>
	<?php
}
add_action( 'admin_head','mm_menu_icon' );

function mm_add_tool_bar_items( $admin_bar ) {
	if ( current_user_can( 'manage_options' ) ) {
		$admin_bar->add_menu( array(
			'id'    => 'mojo-marketplace',
			'title' => 'Marketplace',
			'href'  => admin_url( 'admin.php?page=mojo-themes' ),
			'meta'  => array(
				'title' => __( 'Marketplace' )
			),
		) );
		$admin_bar->add_menu( array(
			'id'     => 'mojo-themes',
			'title'  => 'Themes',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-themes' ),
			'meta'   => array(
				'title' => __( 'Themes' )
			),
		) );
		$admin_bar->add_menu( array(
			'id'     => 'mojo-plugins',
			'title'  => 'Plugins',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-plugins' ),
			'meta'   => array(
				'title' => __( 'Plugins' )
			),
		) );
		$admin_bar->add_menu( array(
			'id'     => 'mojo-services',
			'title'  => 'Services',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-services' ),
			'meta'   => array(
				'title' => __( 'Services' )
			),
		) );
		$admin_bar->add_menu( array(
			'id'     => 'mojo-graphics',
			'title'  => 'Graphics',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-graphics' ),
			'meta'   => array(
				'title' => __( 'Graphics' )
			),
		) );
	}
}
add_action( 'admin_bar_menu', 'mm_add_tool_bar_items', 100 );

function mm_plugins_menu() {
	add_submenu_page( 'mojo-themes', 'Plugins', 'Plugins', 'manage_options', 'mojo-plugins', 'mm_plugins_page' );
	add_plugins_page( 'Premium Plugins', 'Premium Plugins', 'manage_options', 'plugins-mojo', '__return_false' );
}
add_action( 'admin_menu', 'mm_plugins_menu' );

function mm_plugins_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-plugins.php' );
}

function mm_services_menu() {
	add_submenu_page( 'mojo-themes', 'Services', 'Services', 'manage_options', 'mojo-services', 'mm_services_page' );
}
add_action( 'admin_menu', 'mm_services_menu' );

function mm_services_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-services.php' );
}

function mm_plugins_premium_link() {
	?>
	<script type="text/javascript">
	jQuery( document ).ready( function( $ ) {
		$( '.wp-filter .filter-links li:last-of-type' ).after( '<li><a style="text-decoration: none;" onclick="location.href=\'admin.php?page=mojo-plugins\'">Premium</a></li>' );
	} );
	</script>
	<?php
}
add_action( 'admin_head-plugin-install.php', 'mm_plugins_premium_link' );

function mm_graphics_menu() {
	add_submenu_page( 'mojo-themes', 'Graphics', 'Graphics', 'manage_options', 'mojo-graphics', 'mm_graphics_page' );
}
add_action( 'admin_menu', 'mm_graphics_menu' );

function mm_graphics_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-graphics.php' );
}

function mm_item_menu() {
	add_submenu_page( null, 'Single Item', 'Single Item', 'manage_options', 'mojo-single-item', 'mm_single_item_page' );
}
add_action( 'admin_menu', 'mm_item_menu' );

function mm_single_item_page() {
	mm_require( MM_BASE_DIR . 'pages/single-item.php' );
}

function mm_item_search_menu() {
	add_submenu_page( null, 'Search Items', 'Search Items', 'manage_options', 'mojo-search', 'mm_item_search_page' );
}
add_action( 'admin_menu', 'mm_item_search_menu' );

function mm_item_search_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-search.php' );
}

function mm_menu_redirects() {
	if ( isset( $_GET['page'] ) ) {
		if ( 'themes-mojo' == $_GET['page'] ) {
			wp_safe_redirect( admin_url( 'admin.php?page=mojo-themes' ), '301' );
		}
		if ( 'plugins-mojo' == $_GET['page'] ) {
			wp_safe_redirect( admin_url( 'admin.php?page=mojo-plugins' ), '301' );
		}
	}
}
add_action( 'admin_init', 'mm_menu_redirects' );