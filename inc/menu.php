<?php

function mm_main_menu() {
	add_menu_page( 'Marketplace', 'Marketplace', 'manage_options', 'mojo-themes', 'mm_theme_page', 'div', 59 );
}
add_action( 'admin_menu', 'mm_main_menu' );

function mm_preview_menu() {
	add_submenu_page( null, 'MOJO Theme Preview', 'MOJO Theme Preview', 'manage_options', 'mojo-theme-preview', 'mm_theme_preview_page' );
}
add_action( 'admin_menu', 'mm_preview_menu' );

function mm_menu_icon() {
	?>
	<style type="text/css">
		li.toplevel_page_mojo-themes .wp-menu-image{
			background-image: url( '<?php echo plugin_dir_url( dirname( __FILE__ ) ) . "img/mojo-icon-22.png"; ?>' );
			background-position: 7px;
			background-repeat: no-repeat;
		}
	</style>
	<?php
}
add_action( 'admin_head','mm_menu_icon' );

function mm_add_tool_bar_items( $admin_bar ) {
	$admin_bar->add_menu( array(
		'id'    => 'mojo-marketplace',
		'title' => 'MOJO Marketplace',
		'href'  => site_url() . '/wp-admin/admin.php?page=mojo-themes',
		'meta'  => array(
			'title' => __( 'MOJO Marketplace' )
		),
	) );
	$admin_bar->add_menu( array(
		'id'    => 'mojo-themes',
		'title' => 'MOJO Themes',
		'parent'=> 'mojo-marketplace',
		'href'  => site_url() . '/wp-admin/admin.php?page=mojo-themes',
		'meta'  => array(
			'title' => __( 'MOJO Themes' )
		),
	) );
	$admin_bar->add_menu( array(
		'id'    => 'mojo-services',
		'title' => 'MOJO Services',
		'parent'=> 'mojo-marketplace',
		'href'  => site_url() . '/wp-admin/admin.php?page=mojo-services',
		'meta'  => array(
			'title' => __( 'MOJO Services' )
		),
	) );
}
add_action('admin_bar_menu', 'mm_add_tool_bar_items', 100);

function mm_services_menu() {
	add_submenu_page( 'mojo-themes', 'MOJO Services', 'MOJO Services', 'manage_options', 'mojo-services', 'mm_services_page' );
}
add_action( 'admin_menu', 'mm_services_menu' );

function mm_services_page() {
	/*This page will exist in the future*/
}

function mm_temp_redirect() {
	/*This will only exist until mm_services_page is ready */
	if( isset( $_GET['page'] ) && $_GET['page'] == 'mojo-services' ) {
		wp_redirect( mm_build_link( 'http://www.mojomarketplace.com/services/all/wordpress', array( 'utm_medium' => 'plugin_admin', 'utm_content' => 'services_page' ) ) );
	}
}
add_action( 'admin_init', 'mm_temp_redirect' );