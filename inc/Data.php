<?php
/**
 * All data retrieval and saving happens from this file.
 *
 * @package WPPluginBlueprint
 */

namespace Blueprint;

/**
 * \Blueprint\Data
 * This class does not have a constructor to get instantiated, just static methods.
 */
final class Data {

	/**
	 * Data loaded onto window.WPPB
	 *
	 * @return array
	 */
	public static function runtime() {
		global $wp_version;

		$runtime = array(
			'url'       => BLUEPRINT_BUILD_URL,
			'version'   => BLUEPRINT_PLUGIN_VERSION,
			'resturl'   => \get_home_url() . '/index.php?rest_route=',
			'wpversion' => $wp_version,
			'admin'     => \admin_url(),
			'assets'    => BLUEPRINT_PLUGIN_URL . 'assets/',
		);

		return $runtime;
	}

}
