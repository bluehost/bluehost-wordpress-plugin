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

	add_menu_page( $menu_name, $menu_name, 'manage_options', 'mojo-marketplace', 'mm_marketplace_page', 'data:image/svg+xml;base64, ' . $icon_hash, $menu_position );

}
add_action( 'admin_menu', 'mm_main_menu' );

function mm_main_menu_fix_subdomain_label() {
	global $submenu;
	if ( isset( $submenu['mojo-marketplace'] ) && is_array( $submenu['mojo-marketplace'] ) ) {
		$submenu['mojo-marketplace'][0][0] = 'Marketplace';
	}
	if ( 'mojo-home' == $submenu['mojo-marketplace'][2][2] ) {
		$home_placeholder = $submenu['mojo-marketplace'][2];
		unset( $submenu['mojo-marketplace'][2] );
		array_unshift( $submenu['mojo-marketplace'], $home_placeholder );
	}
}
add_action( 'admin_menu', 'mm_main_menu_fix_subdomain_label', 11 );

function mm_preview_menu() {
	add_submenu_page( null, 'Theme Preview', 'Theme Preview', 'manage_options', 'mojo-theme-preview', 'mm_theme_preview_page' );
}
add_action( 'admin_menu', 'mm_preview_menu' );

function mm_add_tool_bar_items( $admin_bar ) {
	if ( current_user_can( 'manage_options' ) ) {
		if ( mm_is_staging() ) {
			$args = array(
				'id'    => 'mojo-staging',
				'title' => 'Staging Actions',
				'href'  => admin_url( 'admin.php?page=mojo-staging' ),
				'title' => '<div style="background-color: #ce0000; padding: 0px 5px;color:#fff;">Staging Environment</div>',
			);
			$admin_bar->add_menu( $args );
		}
		if ( defined( 'DESKTOPSERVER' ) ) {
			$args = array(
				'id'    => 'desktop-server',
				'title' => 'Get Online Now',
				'href'  => 'http://mojo.live/desktopserver',
				'title' => '<div style="background-color: #3575C0; padding: 0px 5px;color:#fff;">Get Online Now</div>',
			);
			$admin_bar->add_menu( $args );
		}
	}
}
add_action( 'admin_bar_menu', 'mm_add_tool_bar_items', 100 );

function mm_marketplace_menu() {
	add_submenu_page( 'mojo-marketplace', 'Marketplace', 'Marketplace', 'manage_options', 'mojo-marketplace', 'mm_marketplace_page' );
	add_submenu_page( null, 'Redirecting', 'Redirecting', 'manage_options', 'mojo-themes', '__return_false' );
	add_submenu_page( null, 'Redirecting', 'Redirecting', 'manage_options', 'mojo-plugins', '__return_false' );
	add_submenu_page( null, 'Redirecting', 'Redirecting', 'manage_options', 'mojo-services', '__return_false' );
	add_submenu_page( null, 'Redirecting', 'Redirecting', 'manage_options', 'mojo-graphics', '__return_false' );
}
add_action( 'admin_menu', 'mm_marketplace_menu' );

function mm_marketplace_page() {
	$valid_sections = array( 'themes', 'plugins', 'services', 'graphics', 'business-tools', 'search', 'mixed-themes' );
	if ( isset( $_GET['section'] ) && in_array( $_GET['section'], $valid_sections ) ) {
		$section = sanitize_key( $_GET['section'] );
	} else {
		$section = 'themes';
	}
	mm_require( MM_BASE_DIR . 'pages/mojo-' . $section . '.php' );
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

function mm_business_tools_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-business-tools.php' );
}

function mm_performance_menu() {
	add_submenu_page( 'mojo-marketplace', 'Performance', 'Performance', 'manage_options', 'mojo-performance', 'mm_performance_page' );
}
add_action( 'admin_menu', 'mm_performance_menu' );

function mm_performance_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-performance.php' );
}

function mm_home_menu() {
	if ( mm_brand() == 'bluehost' ) {
		add_submenu_page( 'mojo-marketplace', 'Home', 'Home', 'manage_options', 'mojo-home', 'mm_home_page' );
	}
}
add_action( 'admin_menu', 'mm_home_menu' );

function mm_home_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-home.php' );
}

function mm_staging_menu() {
	if ( mm_brand() !== 'bluehost' ) {
		return;
	}

	$current_compat = get_transient( 'mm_compat_check', false );
	if ( false === $current_compat ) {
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
	} else if ( 'compatible' === $current_compat ) {
		$add_staging_menu = true;
	}
	if ( isset( $add_staging_menu ) && true == $add_staging_menu ) {
		add_submenu_page( 'mojo-marketplace', 'Staging (beta)', 'Staging <small>(beta)</small>', 'manage_options', 'mojo-staging', 'mm_staging_page' );
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
		add_submenu_page( null, 'My Purchases', 'My Purchases', 'manage_options', 'mojo-purchases', 'mm_my_purchases_page' );
	}
}
add_action( 'admin_menu', 'mm_my_purchases_menu' );

function mm_my_purchases_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-purchases.php' );
}

function mm_hosting_menu() {
	if ( 'bluehost' == mm_brand() ) {
		add_submenu_page( 'mojo-marketplace', 'Back to Bluehost', 'Back to Bluehost', 'manage_options', 'mojo-hosting-panel', '__return_false' );
	}
}
add_action( 'admin_menu', 'mm_hosting_menu' );

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
		if ( 'mojo-marketplace' == $_GET['page'] && ! isset( $_GET['section'] ) ) {
			$destination = admin_url( 'admin.php?page=mojo-marketplace&section=themes' );
		} elseif ( 'themes-mojo' == $_GET['page'] ) {
			$destination = admin_url( 'admin.php?page=mojo-marketplace&section=themes' );
		} elseif ( 'plugins-mojo' == $_GET['page'] ) {
			$destination = admin_url( 'admin.php?page=mojo-marketplace&section=plugins' );
		} elseif ( 'mojo-themes' == $_GET['page'] && isset( $_GET['items'] ) && 'mixed-themes' == $_GET['items'] ) {
			$destination = admin_url( 'admin.php?page=mojo-marketplace&section=mixed-themes' );
			unset( $_GET['items'] );
		} elseif ( 'mojo-themes' == $_GET['page'] ) {
			$destination = admin_url( 'admin.php?page=mojo-marketplace&section=themes' );
		} elseif ( 'mojo-plugins' == $_GET['page'] ) {
			$destination = admin_url( 'admin.php?page=mojo-marketplace&section=plugins' );
		} elseif ( 'mojo-services' == $_GET['page'] ) {
			$destination = admin_url( 'admin.php?page=mojo-marketplace&section=services' );
		} elseif ( 'mojo-graphics' == $_GET['page'] ) {
			$destination = admin_url( 'admin.php?page=mojo-marketplace&section=graphics' );
		} elseif ( 'mojo-business-tools' == $_GET['page'] ) {
			$destination = admin_url( 'admin.php?page=mojo-marketplace&section=business-tools' );
		} elseif ( 'mojo-hosting-panel' == $_GET['page'] ) {
			wp_redirect( 'https://my.bluehost.com/cgi/home', 302 );
		}
		if ( isset( $destination ) ) {
			if ( isset( $_GET['items'] ) ) {
				$destination = add_query_arg( array( 'items' => $_GET['items'] ), $destination );
			}
			wp_safe_redirect( $destination, '301' );
		}
	}
}
add_action( 'admin_init', 'mm_menu_redirects' );
