<?php
/**
 * Upgrader API: Plugin_Quiet_Upgrader_Skin class
 */

class Plugin_Quiet_Upgrader_Skin extends WP_Upgrader_Skin {

	/**
	 * Holds the plugin slug in the Plugin Directory.
	 *
	 * @since 2.8.0
	 *
	 * @var string
	 */
	public $plugin = '';

	/**
	 * Whether the plugin is active.
	 *
	 * @since 2.8.0
	 *
	 * @var bool
	 */
	public $plugin_active = false;

	/**
	 * Whether the plugin is active for the entire network.
	 *
	 * @since 2.8.0
	 *
	 * @var bool
	 */
	public $plugin_network_active = false;


	/**
	 * Action to perform following a single plugin update.
	 *
	 * @since 2.8.0
	 */
	public function after() {
		// redirect to dcpage=contact page - admin_url()/?dcpage=contact
		\wp_safe_redirect(
			\get_admin_url(
				null,
				'post-new.php?dcpage=contact&post_type=page'
			)
		);
	}

	/**
	 * Feedback - keep it quiet.
	 */
	public function feedback() {
		// nothing here =)
	}
}
