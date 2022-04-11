<?php

/**
 * Class Bluehost_Plugin_Compatibility_Scan
 */
class Bluehost_Plugin_Compatibility_Scan {

	/**
	 * Configuration defaults.
	 *
	 * @var array
	 */
	public $defaults = array(
		'plugin'               => 'bluehost-wordpress-plugin',
		'incompatible_plugins' => array(
			'mojo-marketplace-wp-plugin/mojo-marketplace.php',
		),
		'min_wp'               => '5.2',
		'min_php'              => '5.6',
		'php_extensions'       => array(),
		'multisite'            => false,
	);

	/**
	 * Environment data.
	 *
	 * @var array
	 */
	public $data = array(
		'plugins'         => array(),
		'php_version'     => '',
		'wp_version'      => '',
		'multisite'       => '',
		'php-ext-missing' => array(),
	);

	/**
	 * Active Config
	 *
	 * @var array
	 */
	public $config = array();

	/**
	 * Test statuses.
	 *
	 * @var array
	 */
	public $test_statuses = array(
		'standard',
		'unsupported-php',
		'unsupported-wp',
		'unsupported-multisite',
		'php-ext-missing',
	);

	/**
	 * Result of the compatibility scan.
	 *
	 * @var string
	 */
	public $result = '';

	/**
	 * Bluehost_Plugin_Compatibility_Scan constructor.
	 *
	 * @param array $config Config data.
	 */
	public function __construct( $config = array() ) {
		// Setup Scan Configuration
		$this->setup( $config );
		// Fetch Relevant Data
		$this->fetch();
		// Evaluate Using Configuration & Data
		$this->evaluate();

		return array(
			'status' => $this->result,
			'data'   => $this->data,
		);
	}

	/**
	 * Register config.
	 *
	 * @param array $config Config data.
	 */
	protected function setup( $config ) {
		$this->config = array_merge( $this->defaults, $config );
	}

	/**
	 * Set up environment data to be checked.
	 */
	protected function fetch() {
		global $wp_version;

		$this->data = array_merge(
			$this->data,
			array(
				'php_version' => phpversion(),
				'wp_version'  => $wp_version,
			)
		);

		$previous = Bluehost_Plugin_Compatibility_Status::get();
		if ( ! empty( $previous ) && is_array( $previous ) ) {
			$this->data['previous_result'] = $previous;
		}
	}

	/**
	 * Runs the compatibility check.
	 */
	protected function evaluate() {

		$this->result = 'scan-initiated';

		if ( version_compare( $this->data['wp_version'], $this->config['min_wp'], '<' ) ) {
			$this->result = 'unsupported-wp';
		}

		if ( version_compare( $this->data['php_version'], $this->config['min_php'], '<' ) ) {
			$this->result = 'unsupported-php';
		}

		if ( \is_multisite() && 'local' !== \wp_get_environment_type() ) {
			$this->result = 'unsupported-multisite';
		}

		if ( ! empty( $this->config['php_extentions'] ) ) {
			foreach ( $this->config['php_extensions'] as $extension ) {
				if ( ! extension_loaded( $extension ) ) {
					$this->result = 'php-ext-missing';
				}
			}
		}

		if ( ! empty( $this->config['incompatible_plugins'] ) ) {

			if ( ! function_exists( 'is_plugin_active' ) ) {
				require ABSPATH . 'wp-admin/includes/plugin.php';
			}

			foreach ( $this->config['incompatible_plugins'] as $plugin ) {
				// check for plugin using plugin name
				if ( is_plugin_active( $plugin ) ) {
					list( $plugin_slug ) = explode( '/', $plugin );
					$this->result        = 'plugin-compat-clash-' . $plugin_slug;
				}
			}
		}

		if ( 'scan-initiated' === $this->result ) {
			$this->result = 'standard';
		}

	}

}
