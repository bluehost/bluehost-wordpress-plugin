<?php
/**
 * Class containing functions for blocking WP admin notices and notifications on Bluehost pages.
 *
 * @package BluehostWordPressPlugin
 */

/**
 * Only run on Bluehost pages
 */
if ( ! is_admin()
	|| ! isset( $_GET['page'] )
	|| false === stripos( filter_input( INPUT_GET, 'page' ), 'bluehost' )
) {
	return;
}

/**
 * Class BH_Admin_Page_Notifications_Blocker
 */
class BH_Admin_Page_Notifications_Blocker {
	/**
	 * BH_Admin_Page_Notifications_Blocker constructor.
	 */
	public function __construct() {
		add_action( 'admin_head', array( $this, 'remove_admin_notices_on_bluehost_pages' ), 99 );
		add_action( 'admin_print_styles', array( $this, 'remove_notifications_on_bluehost_pages' ) );
	}

	/**
	 * Remove WP admin notices.
	 */
	public function remove_admin_notices_on_bluehost_pages() {
		remove_all_actions( 'all_admin_notices' );
		remove_all_actions( 'admin_notices' );
		remove_all_actions( 'user_admin_notices' );
	}

	/**
	 * Target notices using highly-specific CSS selectors to avoid collisions.
	 */
	public function remove_notifications_on_bluehost_pages() {
		if ( ! isset( $_GET['page'] ) || false === stripos( filter_input( INPUT_GET, 'page' ), 'bluehost' ) ) {
			return;
		}
		?>
		<style type="text/css" data-bluehost-hide-notifications="1">
			#wpbody-content > div.error,
			#wpbody-content > div.notice,
			#wpbody-content > .update-nag {
				display: none !important;
			}
		</style>
		<?php
	}
}

new BH_Admin_Page_Notifications_Blocker();
