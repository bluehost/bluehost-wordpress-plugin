<?php
/**
 * Upgrader API: Plugin_Quiet_Upgrader_Skin class
 *
 * @package Bluehost/DefaultContent
 */

/**
 * Quiet Skin for the WordPress Upgrader classes.
 * This skin is designed to be used when installing a required plugin in the background.
 */
class Plugin_Quiet_Upgrader_Skin extends WP_Upgrader_Skin {

	/**
	 * Action to perform following a single plugin update.
	 */
	public function after() {
		// redirect to admin_url()/?dcpage=contact to restart with plugin installed
		\wp_safe_redirect( \get_admin_url( null, 'post-new.php?dcpage=contact&post_type=page' ) );
	}

	/**
	 * Header - keep it quiet.
	 */
	public function header() {
		// nothing here. =)
	}

	/**
	 * Footer - keep it quiet too.
	 */
	public function footer() {
		// nothing there. =)
	}

	/**
	 * Feedback - keep it all quiet.
	 *
	 * @param string $string - string
	 * @param Array  ...$args - arrgss
	 */
	public function feedback( $string, ...$args ) {
		// nothing here either. =)
	}
}
