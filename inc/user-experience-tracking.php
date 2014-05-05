<?php
/*
This file tracks basic user actions to improve the user experience.
*/

function mm_ux_log( $args = array() ) {
	$url = "https://ssl.google-analytics.com/collect";
	global $title;
	$defaults = array(
		'v'		=> '1',
		'tid'	=> 'UA-39246514-3',
		't'		=> 'pageview', //hit type
		'cid' 	=> md5( get_option( 'site_url' ) . get_current_user_id() ),
		'uid'	=> md5( get_current_user_id() ), //user
		'cn'	=> 'mojo_wp_plugin', //campaign name
		'cs'	=> 'mojo_wp_plugin', //campaign source
		'cm'	=> 'plugin_admin', //campaign medium
		'ul'	=> get_locale(), //language
		'dp'	=> $_SERVER['REQUEST_URI'], //path
		'sc'	=> '', //start or end
		'ua'	=> $_SERVER['HTTP_USER_AGENT'],
		'dl'	=> $_SERVER['REQUEST_URI'],
		'dh'	=> get_option( 'site_url' ),
		'dt'	=> $title, //title
		'ec'	=> '', //event category
		'ea'	=> '', //event action
		'el'	=> '', //event label
		'ev'	=> ''  //event value
	);
	$params = wp_parse_args( $args, $defaults );
	$query = http_build_query( array_filter( $params ) );
	$args = array(
		'body'		=> $query,
		'method'	=> 'POST',
		'blocking'	=> false
	);
	wp_remote_post( $url, $args );
}
add_action( 'admin_footer', 'mm_ux_log', 90 );

function mm_ux_log_start() {
	$user = array(
		'sc'	=> 'start'
	);
	mm_ux_log( $user );
}
add_action( 'wp_login', 'mm_ux_log_start' );

function mm_ux_log_end() {
	$user = array(
		'sc'	=> 'end'
	);
	mm_ux_log( $user );
}
add_action( 'wp_logout', 'mm_ux_log_end' );

function mm_ux_log_deactivated() {
	$event = array(
		't'		=> 'event',
		'ec'	=> 'plugin_status',
		'ea'	=> 'deactivated',
		'el'	=> 'Install date: ' . get_option( 'mm_install_date', date( 'M d, Y' ) )
	);
	mm_ux_log( $event );
}

function mm_ux_log_activated() {
	$event = array(
		't'		=> 'event',
		'ec'	=> 'plugin_status',
		'ea'	=> 'activated',
		'el'	=> 'Install date: ' . get_option( 'mm_install_date', date( 'M d, Y' ) )
	);
	mm_ux_log( $event );
}
$plugin_dir = plugin_dir_path( dirname( __FILE__ ) );
register_activation_hook( $plugin_dir . "mojo-marketplace.php", 'mm_ux_log_activated' );
register_deactivation_hook( $plugin_dir . "mojo-marketplace.php", 'mm_ux_log_deactivated' );

function mm_ux_log_theme_preview() {
	if( $_GET['page'] == "mojo-theme-preview" ) {
		global $theme;
		$event = array(
			't'		=> 'event',
			'ec'	=> 'theme_preview',
			'ea'	=> esc_attr( $_GET['items'] ),
			'el'	=> $theme->name
		);
		mm_ux_log( $event );
	}
}
add_action( 'admin_footer', 'mm_ux_log_theme_preview' );