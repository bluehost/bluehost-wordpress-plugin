<?php

use Bluehost\Staging;

/**
 * Adds a hidden submenu page that is used for theme demos.
 */
function bluehost_preview_menu() {
	add_submenu_page( null, 'Theme Preview', 'Theme Preview', 'manage_options', 'mojo-theme-preview', 'bluehost_theme_preview_page' );
}

add_action( 'admin_menu', 'bluehost_preview_menu' );

/**
 * Callback for loading the theme preview page.
 */
function bluehost_theme_preview_page() {
	?>
	<style type="text/css">
		.wp-full-overlay-sidebar .wp-full-overlay-header {
			padding: 15px;
		}

		.install-theme-info {
			display: block;
		}

		.wp-full-overlay-main iframe {
			width: 100%;
			height: 100%;
		}
	</style>
	<?php
	mojo_require( BLUEHOST_PLUGIN_DIR . '/pages/theme-preview.php' );
}

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
		if ( 'true' === get_option( 'mm_coming_soon', 'false' ) ) {
			$cs_args = array(
				'id'    => 'mojo-home',
				'href'  => admin_url( 'admin.php?page=bluehost#/home' ),
				'title' => '<div style="background-color: #F89C24; padding: 0 10px;color:#fff;">' . esc_html__( 'Coming Soon Active', 'bluehost-wordpress-plugin' ) . '</div>',
				'meta'  => array(
					'title' => esc_attr__( 'Launch Your Site', 'bluehost-wordpress-plugin' ),
				),
			);
			$admin_bar->add_menu( $cs_args );
		}
	}
}

add_action( 'admin_bar_menu', 'bluehost_add_tool_bar_items', 100 );

/**
 * Adds a 'Premium' link to the plugin installation screen.
 */
function bluehost_plugins_premium_link() {
	?>
	<script type="text/javascript">
		jQuery(document).ready(function ($) {
			$('.wp-filter .filter-links li:last-of-type').after('<li><a style="text-decoration: none;" onclick="location.href=\'admin.php?page=bluehost#/marketplace/plugins\'">Premium</a></li>');
		});
	</script>
	<?php
}

add_action( 'admin_head-plugin-install.php', 'bluehost_plugins_premium_link' );
