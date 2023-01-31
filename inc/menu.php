<?php

use Bluehost\Staging;

/**
 * Customize the admin bar.
 *
 * @param WP_Admin_Bar $admin_bar An instance of the WP_Admin_Bar class.
 */
function bluehost_add_tool_bar_items( WP_Admin_Bar $admin_bar ) {
	if ( current_user_can( 'manage_options' ) ) {
		if ( Staging::getInstance()->isStaging() ) {
			$args = array(
				'id'    => 'mojo-staging',
				'href'  => admin_url( 'admin.php?page=bluehost#/tools/staging' ),
				'title' => '<div style="background-color: #ce0000; padding: 0 10px;color:#fff;">' . esc_html__( 'Staging Environment', 'bluehost-wordpress-plugin' ) . '</div>',
				'meta'  => array(
					'title' => esc_attr__( 'Staging Actions', 'bluehost-wordpress-plugin' ),
				),
			);
			$admin_bar->add_menu( $args );
		}
	}
}

add_action( 'admin_bar_menu', 'bluehost_add_tool_bar_items', 100 );
