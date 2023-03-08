<?php

namespace Bluehost\RestApi;

/**
 * Class CustomizeSiteController
 *
 * This class is responsible for redirecting the user to the correct destination when they click the "Customize Site" button.
 */
class CustomizeSiteController extends \WP_REST_Controller {
	
	/**
	 * The namespace of this controller's route.
	 *
	 * @var string
	 */
	protected $namespace = 'bluehost/v1';

	/**
	 * Registers the customizer route
	 */
	public function register_routes() {

		register_rest_route(
			$this->namespace,
			'/customize-site',
			array(
				'methods'             => \WP_REST_Server::READABLE,
				'callback'            => array( $this, 'redirect_destination' ),
			)
		);

	}

	/**
	 * Redirects to the correct destination based on the active theme.
	 */
	public function redirect_destination() {
		$is_fse      = is_readable( STYLESHEETPATH . '/templates/index.html' );
		$destination = get_admin_url() . ( $is_fse ? 'site-editor.php' : 'customize.php' );

		wp_safe_redirect( $destination );
		exit;
	}

}
