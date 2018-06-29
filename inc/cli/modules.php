<?php

/**
 * Class EIG_WP_CLI_Module
 */
class EIG_WP_CLI_Module extends EIG_WP_CLI_Command {
	/**
	 * @var array - strings for module options/keys
	 */
	protected static $module_options = array(

	);
	/**
	 * Update the appearance of the plugin branding.
	 *
	 * @param  null $args
	 * @param  array $assoc_args
	 */
	public function __invoke( $args, $assoc_args ) {
		switch( $args ) {
			case 'enable':
				// do enable
				break;
			case 'disable':
				// do disable
				break;
			case 'status':
				// do status check
				break;
			case 'list':
			default:

				break;
		}
	}
}
