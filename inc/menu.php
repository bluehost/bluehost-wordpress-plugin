<?php

function mm_main_menu() {
	add_menu_page( 'Marketplace', 'Marketplace', 'manage_options', 'mojo-themes', 'mm_theme_page', 'div', 59 );
}
add_action( 'admin_menu', 'mm_main_menu' );

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
}
add_action('admin_bar_menu', 'mm_add_tool_bar_items', 100);