<?php

namespace Bluehost\Notifications;

use wpscholar\Url;

/**
 * Class AdminNotices
 *
 * @package Bluehost\Notifications
 */
class AdminNotices {

	/**
	 * Render admin notices where appropriate.
	 */
	public static function maybeRenderAdminNotices() {
		$page          = str_replace( admin_url(), '', Url::getCurrentUrl() );
		$notifications = new NotificationsRepository();
		$notifications->collection()->each(
			function ( Notification $notification ) use ( $page ) {
				if ( $notification->shouldShow( 'wp-admin-notice', array( 'page' => $page ) ) ) {
					echo $notification->content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				}
			}
		);
	}

}
