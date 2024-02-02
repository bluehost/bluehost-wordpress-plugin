<?php

namespace Bluehost;

/**
 * Class YoastAI
 *
 * @package Bluehost
 */
class YoastAI {

	/**
	 * Initialize the Yoast AI class.
	 */
	public static function init() {
		add_action( 'init', array( __CLASS__, 'on_yoast_plugin_activation' ) );
		add_filter( 'http_request_args', array( __CLASS__, 'modify_http_request_args' ), 10, 2 );
	}

	/**
	 * Register Yoast plugin activation hook to enable the Yoast AI generator on new activations.
	 */
	public static function on_yoast_plugin_activation() {
		register_activation_hook( 'wordpress-seo/wp-seo.php', array( __CLASS__, 'enable_on_new_activations' ) );
	}

	/**
	 * Filter Yoast SEO default settings to enable AI on new installations/activations
	 */
	public static function enable_on_new_activations() {
		add_filter(
			'wpseo_option_wpseo_defaults',
			function ( $defaults ) {
				if ( ! is_array( $defaults ) || ! isset( $defaults['enable_ai_generator'] ) ) {
					return $defaults;
				}
				$defaults['enable_ai_generator'] = true;
				return $defaults;
			}
		);
	}

	/**
	 * Add a custom header to outbound Yoast AI requests for Bluehost customers.
	 *
	 * @param Array  $parsed_args - The args
	 * @param String $url - The URL
	 */
	public static function modify_http_request_args( $parsed_args, $url ) {
		$parsed_url = wp_parse_url( $url );
		if ( ! is_array( $parsed_url ) ) {
			return $parsed_args;
		}
		if ( 'ai.yoa.st' !== $parsed_url['host'] ) {
			return $parsed_args;
		}
		if ( is_array( $parsed_args['headers'] ) ) {
			$parsed_args['headers']['X-Yst-Cohort'] = 'Bluehost';
		}
		return $parsed_args;
	}
}

YoastAI::init();
