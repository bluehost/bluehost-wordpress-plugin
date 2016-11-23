<?php

function mm_main_menu() {
	$icon_hash = get_transient( 'mm_icon_hash', false );
	if ( false === $icon_hash ) {
		$icon_raw = wp_remote_get( MM_ASSETS_URL . 'img/icons/' . mm_brand() . '-icon.svg' );
		if ( ! is_wp_error( $icon_raw ) ) {
			$icon_hash = base64_encode( $icon_raw['body'] );
			set_transient( 'mm_icon_hash', $icon_hash, WEEK_IN_SECONDS );
		}
	}
	$brand = get_option( 'mm_brand' );
	if ( false !== $brand ) {
		$menu_position = -10;
		$menu_name = $brand;
	} else {
		$menu_position = 59;
		$menu_name = 'Marketplace';
	}

	if ( 'BlueHost' == $menu_name ) {
		$menu_name = 'Bluehost';
	}

	add_menu_page( $menu_name, $menu_name, 'manage_options', 'mojo-themes', 'mm_theme_page', 'data:image/svg+xml;base64, ' . $icon_hash, $menu_position );
}
add_action( 'admin_menu', 'mm_main_menu' );

function mm_main_menu_fix_subdomain_label() {
	global $submenu;
	if ( isset( $submenu['mojo-themes'] ) && is_array( $submenu['mojo-themes'] ) ) {
		$submenu['mojo-themes'][0][0] = 'Themes';
	}
}
add_action( 'admin_menu', 'mm_main_menu_fix_subdomain_label', 11 );

function mm_preview_menu() {
	add_submenu_page( null, 'Theme Preview', 'Theme Preview', 'manage_options', 'mojo-theme-preview', 'mm_theme_preview_page' );
}
add_action( 'admin_menu', 'mm_preview_menu' );

function mm_add_tool_bar_items( $admin_bar ) {
	if ( current_user_can( 'manage_options' ) ) {
		$admin_bar->add_menu( array(
			'id'    => 'mojo-marketplace',
			'title' => 'Marketplace',
			'href'  => admin_url( 'admin.php?page=mojo-themes' ),
			'meta'  => array( 'title' => __( 'Marketplace' ) ),
		) );
		$admin_bar->add_menu( array(
			'id'     => 'mojo-themes',
			'title'  => 'Themes',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-themes' ),
			'meta'   => array( 'title' => __( 'Themes' ) ),
		) );
		$admin_bar->add_menu( array(
			'id'     => 'mojo-plugins',
			'title'  => 'Plugins',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-plugins' ),
			'meta'   => array( 'title' => __( 'Plugins' ) ),
		) );
		$admin_bar->add_menu( array(
			'id'     => 'mojo-services',
			'title'  => 'Services',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-services' ),
			'meta'   => array( 'title' => __( 'Services' ) ),
		) );
		$admin_bar->add_menu( array(
			'id'     => 'mojo-graphics',
			'title'  => 'Graphics',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-graphics' ),
			'meta'   => array( 'title' => __( 'Graphics' ) ),
		) );
		$admin_bar->add_menu( array(
			'id'     => 'mojo-business-tools',
			'title'  => 'Business Tools',
			'parent' => 'mojo-marketplace',
			'href'   => admin_url( 'admin.php?page=mojo-business-tools' ),
			'meta'   => array( 'title' => __( 'Business Tools' ) ),
		) );
		if ( mm_is_staging() ) {
			$args = array(
				'id'    => 'mojo-staging',
				'title' => 'Staging Actions',
				'href'  => admin_url( 'admin.php?page=mojo-staging' ),
				'title' => '<div style="background-color: #ce0000; padding: 0px 5px;color:#fff;">Staging Environment</div>',
			);
			$admin_bar->add_menu( $args );
		}
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

function mm_business_tools_menu() {
	add_submenu_page( 'mojo-themes', 'Business Tools', 'Business Tools', 'manage_options', 'mojo-business-tools', 'mm_business_tools_page' );
}
add_action( 'admin_menu', 'mm_business_tools_menu' );

function mm_business_tools_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-business-tools.php' );
}

function mm_performance_menu() {
	add_submenu_page( 'mojo-themes', 'Performance', 'Performance', 'manage_options', 'mojo-performance', 'mm_performance_page' );
}
add_action( 'admin_menu', 'mm_performance_menu' );

function mm_performance_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-performance.php' );
}

function mm_staging_menu() {
	if ( 'compatible' !== get_transient( 'mm_compat_check', false ) ) {
		$json = wp_remote_get( add_query_arg( array( 'action' => 'mm_compat_check' ), admin_url( 'admin-ajax.php' ) ), array( 'timeout' => 10, 'cookies' => $_COOKIE ) );

		if ( ! is_wp_error( $json ) ) {
			$json = json_decode( $json['body'] );
		}

		if ( is_object( $json ) && property_exists( $json, 'status' ) && 'success' == $json->status ) {
			set_transient( 'mm_compat_check', 'compatible', DAY_IN_SECONDS * 30 );
			$add_staging_menu = true;
		} else {
			set_transient( 'mm_compat_check', 'incompatible', DAY_IN_SECONDS * 30 );
		}
	} else {
		$add_staging_menu = true;
	}
	if ( isset( $add_staging_menu ) && true == $add_staging_menu ) {
		add_submenu_page( 'mojo-themes', 'Staging (beta)', 'Staging <small>(beta)</small>', 'manage_options', 'mojo-staging', 'mm_staging_page' );
	}
}
add_action( 'admin_menu', 'mm_staging_menu' );

function mm_staging_page() {
	$env = get_option( 'staging_environment' );
	switch ( $env ) {
		case 'production':
			require_once( MM_BASE_DIR . 'pages/staging-production.php' );
			break;

		case 'staging':
			require_once( MM_BASE_DIR . 'pages/staging-staging.php' );
			break;

		default:
			require_once( MM_BASE_DIR . 'pages/staging-create.php' );
			break;
	}
	echo "<a target='_blank' href='https://goo.gl/forms/HNmqYgRkpzu9KQfM2' style='z-index: 10;position: fixed; padding: 4px 10px; color: #fff;background-color: #000;right:0px;bottom:0px;'>Staging Feedback</a>";
}

function mm_my_purchases_menu() {
	if ( false !== get_transient( '_mm_session_token' ) ) {
		add_submenu_page( 'mojo-themes', 'My Purchases', 'My Purchases', 'manage_options', 'mojo-purchases', 'mm_my_purchases_page' );
	}
}
add_action( 'admin_menu', 'mm_my_purchases_menu' );

function mm_my_purchases_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-purchases.php' );
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
