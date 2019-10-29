<?php

/**
 * Only run on mojo pages
 */
if ( ! is_admin()
	 || ! isset( $_GET['page'] )
	 || false === stripos( filter_input( INPUT_GET, 'page' ), 'mojo-' )
) {
	return;
}

/**
 * Class EIG_Admin_Page_Notifications_Blocker
 */
class EIG_Admin_Page_Notifications_Blocker {
	/**
	 * EIG_Admin_Page_Notifications_Blocker constructor.
	 */
	function __construct() {
		add_action( 'admin_print_styles', array( $this, 'remove_notifications_on_mojo_pages' ) );
	}

	/**
	 * Target notices using highly-specific CSS selectors to avoid collisions.
	 */
	function remove_notifications_on_mojo_pages() {
		if ( ! isset( $_GET['page'] ) || false === stripos( filter_input( INPUT_GET, 'page' ), 'mojo-' ) ) {
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

new EIG_Admin_Page_Notifications_Blocker();
