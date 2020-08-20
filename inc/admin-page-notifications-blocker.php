<?php

/**
 * Only run on bluehost pages
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
	function __construct() {
		add_action( 'admin_print_styles', array( $this, 'remove_notifications_on_bluehost_pages' ) );
	}

	/**
	 * Target notices using highly-specific CSS selectors to avoid collisions.
	 */
	function remove_notifications_on_bluehost_pages() {
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
