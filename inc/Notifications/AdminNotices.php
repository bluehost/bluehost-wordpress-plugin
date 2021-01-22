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

		$screen = get_current_screen();

		if ( 'toplevel_page_bluehost' === $screen->id ) {
			// We already handle notifications in our React app.
			return;
		}

		if ( 'plugin-install' === $screen->id ) {

			// Handle realtime notifications
			wp_enqueue_script(
				'bh-plugin-realtime-notices',
				plugins_url( 'inc/Notifications/js/realtime-notices.js', BLUEHOST_PLUGIN_FILE ),
				array( 'lodash' ),
				BLUEHOST_PLUGIN_VERSION,
				true
			);
			wp_localize_script(
				'bh-plugin-realtime-notices',
				'bluehostRealtimeNotices',
				array(
					'restApiUrl'   => esc_url_raw( rest_url() ),
					'restApiNonce' => wp_create_nonce( 'wp_rest' ),
				)
			);

			?>
			<style>
				.bluehost-realtime-notice {
					margin: 5px 0 15px 0;
				}
			</style>
			<?php

		}

		$page          = str_replace( admin_url(), '', Url::getCurrentUrl() );
		$notifications = new NotificationsRepository();
		$collection    = $notifications->collection();
		if ( $collection->count() ) {
			$collection->each(
				function ( Notification $notification ) use ( $page ) {
					if ( $notification->shouldShow( 'wp-admin-notice', array( 'page' => $page ) ) ) {
						?>
						<div class="bluehost-notice" data-id="<?php echo esc_attr( $notification->id ); ?>">
							<?php echo $notification->content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						</div>
						<?php
					}
				}
			);
			wp_enqueue_script(
				'bh-dismiss-notices',
				plugins_url( 'inc/Notifications/js/dismiss-notices.js', BLUEHOST_PLUGIN_FILE ),
				array(),
				BLUEHOST_PLUGIN_VERSION,
				true
			);
			wp_localize_script(
				'bh-dismiss-notices',
				'bluehostNotices',
				array(
					'restApiUrl'   => esc_url_raw( rest_url() ),
					'restApiNonce' => wp_create_nonce( 'wp_rest' ),
				)
			);
		}
	}

}
