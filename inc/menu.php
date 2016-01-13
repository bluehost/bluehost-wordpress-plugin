<?php

function mm_main_menu() {
	add_menu_page( 'Marketplace', 'Marketplace', 'manage_options', 'mojo-themes', 'mm_theme_page', 'div', 59 );
}
add_action( 'admin_menu', 'mm_main_menu' );

function mm_preview_menu() {
	add_submenu_page( null, 'Theme Preview', 'Theme Preview', 'manage_options', 'mojo-theme-preview', 'mm_theme_preview_page' );
}
add_action( 'admin_menu', 'mm_preview_menu' );

function mm_menu_icon() {
	?>
	<style type="text/css">
		li.toplevel_page_mojo-themes .wp-menu-image{
			background-image: url( '<?php echo MM_BASE_URL . "img/mojo-icon-22.png"; ?>' );
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
			'id'     => 'mojo-services',
			'title'  => 'Services',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-services' ),
			'meta'   => array(
				'title' => __( 'Services' )
			),
		) );
		$admin_bar->add_menu( array(
			'id'     => 'mojo-plugins',
			'title'  => 'Plugins',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-plugins' ),
			'meta'   => array(
				'title' => __( 'Services' )
			),
		) );
	}
}
add_action( 'admin_bar_menu', 'mm_add_tool_bar_items', 100 );

function mm_services_menu() {
	add_submenu_page( 'mojo-themes', 'Services', 'Services', 'manage_options', 'mojo-services', 'mm_services_page' );
}
add_action( 'admin_menu', 'mm_services_menu' );

function mm_services_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-services.php' );
}

function mm_plugins_menu() {
	add_submenu_page( 'mojo-themes', 'Plugins', 'Plugins', 'manage_options', 'mojo-plugins', 'mm_plugins_page' );
	add_plugins_page( 'MOJO Plugins', 'MOJO Plugins', 'manage_options', 'plugins-mojo', 'mm_plugins_page' );
}
add_action( 'admin_menu', 'mm_plugins_menu' );

function mm_plugins_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-plugins.php' );
}
