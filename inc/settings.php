<?php
/**
 * Functionality related to Settings
 * see RestApi/SettingsController.php for implementation
 *
 * @package WPPluginBluehost
 */

namespace Bluehost;

if ( ! defined( 'EMPTY_TRASH_DAYS' ) ) {
	$nfd_empty_trash_days = get_option( 'nfd_empty_trash_days', 30 );
	define( 'EMPTY_TRASH_DAYS', $nfd_empty_trash_days );
}
