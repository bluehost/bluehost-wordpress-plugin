<?php
/**
 * All data retrieval and saving happens from this file.
 *
 * @package WPPluginBluehost
 */

namespace Bluehost;

/**
 * \Bluehost\Data
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
			'url'       => BLUEHOST_BUILD_URL,
			'version'   => BLUEHOST_PLUGIN_VERSION,
			'resturl'   => \get_home_url() . '/index.php?rest_route=',
			'wpversion' => $wp_version,
			'admin'     => \admin_url(),
			'siteurl'   => \get_site_url(),
			'sitetitle' => \get_bloginfo( 'name' ),
			'env'       => array(
				'brand'    => 'bluehost',
				'isJarvis' => false
			),
			'assets'    => BLUEHOST_PLUGIN_URL . 'assets/',
		);

		return $runtime;
	}

}
