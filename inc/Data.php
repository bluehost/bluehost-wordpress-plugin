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
	 * Data loaded onto window.NewfoldRuntime
	 *
	 * @return array
	 */
	public static function runtime() {
		global $bluehost_module_container;

		$runtime = array(
			'plugin' => array(
				'url'     => BLUEHOST_BUILD_URL,
				'version' => BLUEHOST_PLUGIN_VERSION,
				'assets'  => BLUEHOST_PLUGIN_URL . 'assets/',
				'brand'   => $bluehost_module_container->plugin()->brand,
			),
		);

		return $runtime;
	}
}
