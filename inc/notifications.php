<?php
/**
 * This file will handle the checking, loading, and expiring of notifications.
 */

function mm_notification_api( $args = array() ) {
	$url = "https://mojomarketplace.com/api/v2/notifications";
	$default_args = array(
		"context" => "mojo-marketplace-wordpress-plugin",
		"identification" => array(
			//"whoami" => 'whoami',
			"site_url" => site_url(),
			"cms" => "wordpress",
			//"user_id" => "<user_id>",
			//"theme_id" => "<theme>",
			//"script_install_id" => "<script_install_id>",
			//"brand_id" => "<brand_id>"
		)
	);
	$args = wp_parse_args( $args, $default_args );
	$results = wp_remote_get( $url, $args );
	$json = json_decode( $results['body'] );
	if( is_wp_error( $results ) || strlen( $results['body'] ) < 200 || ! $json ) {
		return false;
	}
	return $json;
	/*Sample response from API

	$json = '{
	    "status": "success",
	    "notification": {
	        "id": "786f1az11",
	        "message": "<div style=\'border-radius: 5px;color: #fff; padding: 15px;\'>Hello there, you should buy a theme.</div>",
	        "background": "url("http://test.com") 50% 50%",
	        "expires": 1804925514,
	        "category": {
	            "name": "Special Offers",
	            "slug": "special-offers"
	        },
	        "priority": "low",
	        "type": "offer",
	        "location": {
	        	"banner":[
	        		"options.php?(test|otherthing)",
	        		"edit.php?(findme|findyou)"
	        	]
	        }
	    }
	}';	*/
}

function mm_notification_deadline( $exp ) {
	$current_time = time();
	if( $exp < $current_time ) {
		return false;
	}
	$deadline = $exp - $current_time;
	return $deadline;
}

function mm_notification_check_dismissed( $id ) {
	return get_transient( 'mm_notice_' . $id, false );
}

function mm_load_notifications() {
	if( ! get_transient( 'mm_notification', false ) ) {
		if( $notice = mm_notification_api() ) {
			$expires = $notice->notification->expires;
			if( $expiration = mm_notification_deadline( $expires ) ) {
				set_transient( 'mm_notification', $notice, $expiration );
			}
		}
	}
}
add_action( 'wp_login', 'mm_load_notifications' );

function mm_build_notification( $notice, $id ) {
	if ( ! empty( $notice->background ) ) {
		$background = " style='background: " . wp_kses( $notice->background, 'strip' ) . "'";
	} else {
		$background = "";
	}

	$notice = "<div class='mojo-notice' " . $background . ">";
	$notice .= "<a href='" . admin_url( "?mojo-dismiss-notice=" . esc_attr( $id ) ) . "' class='mojo-dismiss dashicons dashicons-dismiss' alt='dismiss'></a>";
	$notice .= wp_kses_post( $notice->message );
	$notice .= "</div>";
	return $notice;
}

function mm_dismiss_notice() {
	if( isset( $_GET['mojo-dismiss-notice'] ) ) {
		$id = esc_attr( $_GET['mojo-dismiss-notice'] );
		$dismissed_notices = get_option( 'mm_notice_dismissed' );
		$dismissed_notices[ $id ] = true;
		update_option( 'mm_notice_dismissed', $dismissed_notices );
		delete_transient( 'mm_notification' );
		wp_safe_redirect( wp_get_referer() );
	}
}
add_action( 'admin_init', 'mm_dismiss_notice' );

function mm_display_notifications() {
	$page = $_SERVER['REQUEST_URI'];
	if( $notice = get_transient( 'mm_notification', false ) ) {
		$dismissed_notices = get_option( 'mm_notice_dismissed', false );
		$locations = $notice->notification->location;

		if( ! isset( $dismissed_notices[ $notice->notification->id ] ) && property_exists( $locations, 'banner' ) ) {
			$locations->banner;
			foreach( $locations->banner as $matcher ) {
				$matcher = str_replace( "?", "\?", $matcher );
				if( preg_match( "/" . $matcher . "/i", $page ) ) {
					echo mm_build_notification( $notice->notification, $notice->notification->id );
					return;
				}
			}
		}
	}
}
add_action( 'admin_notices', 'mm_display_notifications' );