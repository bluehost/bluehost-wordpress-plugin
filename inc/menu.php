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

	if ( 'Bluehost_India' == $menu_name ) {
		$menu_name = 'Bluehost';
	}

	$menu_name = str_replace( '_', ' ', $menu_name );

	add_menu_page( $menu_name, $menu_name, 'manage_options', 'mojo-marketplace', 'mm_marketplace_page', 'data:image/svg+xml;base64, ' . $icon_hash, $menu_position );

}
add_action( 'admin_menu', 'mm_main_menu' );

function mm_main_menu_fix_subdomain_label() {
	global $submenu;
	$home = null;
	if ( isset( $submenu['mojo-marketplace'] ) && is_array( $submenu['mojo-marketplace'] ) ) {
		$submenu['mojo-marketplace'][0][0] = 'Marketplace';
		$home = array_search( array( 'Home', 'manage_options', 'mojo-home', 'Home' ), $submenu['mojo-marketplace'] );
	}

	if ( ! is_null( $home ) && is_numeric( $home ) ) {
		$home_placeholder = $submenu['mojo-marketplace'][ $home ];
		unset( $submenu['mojo-marketplace'][ $home ] );
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
				'href'  => admin_url( 'admin.php?page=mojo-staging' ),
				'title' => '<div style="background-color: #ce0000; padding: 0px 10px;color:#fff;">Staging Environment</div>',
				'meta'  => array(
					'title' => 'Staging Actions',
				),
			);
			$admin_bar->add_menu( $args );
		}
		if ( defined( 'DESKTOPSERVER' ) ) {
			$args = array(
				'id'    => 'desktop-server',
				'href'  => 'http://mojo.live/desktopserver',
				'title' => '<div style="background-color: #3575C0; padding: 0px 10px;color:#fff;">Get Online Now</div>',
				'meta'  => array(
					'title' => 'Get Online Now',
				),
			);
			$admin_bar->add_menu( $args );
		}
		if ( 'true' === get_option( 'mm_coming_soon', 'false' ) ) {
			$cs_args = array(
				'id'    => 'mojo-home',
				'href'  => admin_url( 'admin.php?page=mojo-home' ),
				'title' => '<div style="background-color: #F89C24; padding: 0px 10px;color:#fff;">Coming Soon Active</div>',
				'meta'  => array(
					'title' => 'Launch Your Site',
				),
			);
			$admin_bar->add_menu( $cs_args );
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
	add_submenu_page( null, 'Redirecting', 'Redirecting', 'manage_options', 'mojo-purchases', '__return_false' );
	add_submenu_page( null, 'Redirecting', 'Redirecting', 'manage_options', 'mojo-single-item', '__return_false' );
}
add_action( 'admin_menu', 'mm_marketplace_menu' );

function mm_marketplace_page() {
	$valid_sections = array( 'themes', 'plugins', 'services', 'graphics', 'business-tools', 'search', 'mixed-themes', 'purchases', 'single-item' );
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
	if (  'bluehost' == mm_brand() || 'bluehost-india' == mm_brand() ) {
		add_submenu_page( 'mojo-marketplace', 'Home', 'Home', 'manage_options', 'mojo-home', 'mm_home_page' );
	}
}
add_action( 'admin_menu', 'mm_home_menu' );

function mm_home_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-home.php' );
}

function mm_staging_menu() {
	if ( 'bluehost' == mm_brand() || 'bluehost-india' == mm_brand() ) {
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

function mm_my_purchases_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-purchases.php' );
}

function mm_hosting_menu() {
	if ( 'bluehost' == mm_brand() ) {
		add_submenu_page( 'mojo-marketplace', 'Back to Bluehost', 'Back to Bluehost', 'manage_options', 'mojo-hosting-panel', '__return_false' );
	}
}
add_action( 'admin_menu', 'mm_hosting_menu' );

function mm_jetpack_connect_menu() {
	if ( 'bluehost' == mm_brand() ) {
		add_submenu_page( null, 'Connect Jetpack', 'Connect Jetpack', 'manage_options', 'mojo-jetpack-connect-bounce', '__return_false' );
	}
}
add_action( 'admin_menu', 'mm_jetpack_connect_menu' );

function mm_item_search_menu() {
	add_submenu_page( null, 'Search Items', 'Search Items', 'manage_options', 'mojo-search', 'mm_item_search_page' );
}
add_action( 'admin_menu', 'mm_item_search_menu' );

function mm_item_search_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-search.php' );
}

function mm_onboarding_menu() {
	add_submenu_page( null, 'Onboarding', 'Onboarding', 'manage_options', 'mojo-onboarding', 'mm_onboarding_page' );
}
add_action( 'admin_menu', 'mm_onboarding_menu' );

function mm_onboarding_page() {
	mm_require( MM_BASE_DIR . 'pages/mojo-onboarding.php' );
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
		} elseif ( 'mojo-purchases' == $_GET['page'] ) {
			$destination = admin_url( 'admin.php?page=mojo-marketplace&section=purchases' );
		} elseif ( 'mojo-single-item' == $_GET['page'] &&  isset( $_GET['item_id'] ) ) {
			$destination = add_query_arg( array( 'page' => 'mojo-marketplace', 'section' => 'single-item', 'item_id' => $_GET['item_id'] ), admin_url( 'admin.php' ) );
		} elseif ( 'mojo-hosting-panel' == $_GET['page'] ) {
			wp_redirect( 'https://my.bluehost.com/cgi/home', 302 );
		} elseif ( 'mojo-jetpack-connect-bounce' == $_GET['page'] ) {
			if ( class_exists( 'Jetpack' ) ) {
				wp_redirect( Jetpack::init()->build_connect_url( true ), 302 );
			} else {
				$destination = admin_url( 'admin.php?page=mojo-home' );
			}
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
