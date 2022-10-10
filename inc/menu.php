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
 * Add Marketplace premium plugins link to WP plugins.
 */
function bluehost_add_plugin_premium_link() {
	?>
	<script type="text/javascript">
	window.addEventListener('DOMContentLoaded', () => {
		const pluginsFilterContainer = document.querySelector('.wp-filter .filter-links');
		const bluehostPremiumPluginsLink = document.createElement('li');

		bluehostPremiumPluginsLink.innerHTML = '<a style="text-decoration: none;" onclick="location.href=\'admin.php?page=bluehost#/marketplace\'"><?php esc_html_e( 'Premium', 'bluehost-wordpress-plugin' ); ?></a>';
		pluginsFilterContainer.appendChild(bluehostPremiumPluginsLink);
	});
	</script>
	<?php
}

add_action( 'admin_head-plugin-install.php', 'bluehost_add_plugin_premium_link' );
