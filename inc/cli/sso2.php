<?php

/**
 * Class EIG_WP_CLI_SSO_v2
 *
 * This class is instantiated in /inc/cli-init.php
 */
class EIG_WP_CLI_SSO_v2 extends EIG_WP_CLI_Command {
	/**
	 * @var string
	 */
	private static $transient_slug = 'eig_sso';
	/**
	 * @var string
	 */
	private static $nonce_slug   = 'eig-sso';
	/**
	 * @var string 
	 */
	private static $nonce_action = 'eig-sso-check';
}
