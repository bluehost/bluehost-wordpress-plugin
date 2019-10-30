<?php

/**
 * Class Bluehost_Plugin_Compatibility_Check
 *
 * NOTE: This class is responsible for performing basic checks to see if the minimum requirements
 * for the plugin have been met.
 */
class Bluehost_Plugin_Compatibility_Check {

	/**
	 * Callbacks for additional checks
	 *
	 * @var array
	 */
	public $callbacks = array();

	/**
	 * Collection of errors.
	 *
	 * @var WP_Error
	 */
	public $errors;

	/**
	 * A reference to the main plugin file
	 *
	 * @var string
	 */
	public $file;

	/**
	 * Minimum PHP version required for this plugin
	 *
	 * @var string
	 */
	public $min_php_version;

	/**
	 * Minimum WordPress version required for this plugin
	 *
	 * @var string
	 */
	public $min_wp_version;

	/**
	 * Plugin name
	 *
	 * @var string
	 */
	public $name;

	/**
	 * Required PHP extensions
	 *
	 * @var array
	 */
	public $req_php_extensions = array();

	/**
	 * Setup our class properties
	 *
	 * @param string $file Path to main plugin file.
	 */
	public function __construct( $file ) {
		$this->errors = new WP_Error();
		$this->file   = $file;
		$this->name   = $this->get_plugin_name();
	}

	/**
	 * Get the plugin name from the plugin file headers
	 *
	 * @return string
	 */
	public function get_plugin_name() {
		$plugin = get_file_data( $this->file, array( 'name' => 'Plugin Name' ) );

		return isset( $plugin['name'] ) ? $plugin['name'] : '';
	}

	/**
	 * Get the required PHP version from plugin headers.
	 *
	 * @return string
	 */
	public function get_required_php_version() {
		$plugin = get_file_data( $this->file, array( 'version' => 'Requires PHP' ) );

		return isset( $plugin['version'] ) ? $plugin['version'] : $this->min_php_version;
	}

	/**
	 * Get the required WP version from plugin headers.
	 *
	 * @return string
	 */
	public function get_required_wp_version() {
		$plugin = get_file_data( $this->file, array( 'version' => 'Requires at least' ) );

		return isset( $plugin['version'] ) ? $plugin['version'] : $this->min_wp_version;
	}

	/**
	 * Set the minimum PHP version if not already defined and the information exists in the plugin headers.
	 */
	public function maybe_set_min_php_version() {
		if ( ! isset( $this->min_php_version ) ) {
			$this->min_php_version = $this->get_required_php_version();
		}
	}

	/**
	 * Set the minimum WP version if not already defined and the information exists in the plugin headers.
	 */
	public function maybe_set_min_wp_version() {
		if ( ! isset( $this->min_wp_version ) ) {
			$this->min_wp_version = $this->get_required_wp_version();
		}
	}

	/**
	 * Check all our plugin requirements.
	 * Displays an admin notice and deactivates the plugin if all requirements are not met.
	 */
	public function check_plugin_requirements() {
		$this->maybe_set_min_php_version();
		if ( isset( $this->min_php_version ) ) {
			$this->check_has_min_php_version();
		}
		if ( ! empty( $this->req_php_extensions ) ) {
			$this->check_has_required_php_extensions();
		}
		$this->maybe_set_min_wp_version();
		if ( isset( $this->min_wp_version ) ) {
			$this->check_has_min_wp_version();
		}
		if ( ! empty( $this->callbacks ) ) {
			foreach ( $this->callbacks as $callback ) {
				if ( is_callable( $callback ) ) {
					call_user_func_array( $callback, array( $this ) );
				}
			}
		}
		if ( $this->has_errors() ) {
			// Suppress 'Plugin Activated' notice.
			unset( $_GET['activate'] ); //phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$this->deactivate();
			add_action( 'admin_notices', array( $this, 'admin_notices' ) );
		}
	}

	/**
	 * Check if the minimum required PHP version is available
	 */
	public function check_has_min_php_version() {
		if ( version_compare( PHP_VERSION, $this->min_php_version, '<' ) ) {
			$this->errors->add(
				'php_version',
				sprintf(
					// Translators: 1 Plugin name, 2: Required PHP version number, 3: Current PHP version number
					esc_html__( '%1$s requires PHP version %2$s or later. You are currently running version %3$s.', 'bluehost-wordpress-plugin' ),
					$this->name,
					$this->min_php_version,
					PHP_VERSION
				)
			);
		}
	}

	/**
	 * Check if a required PHP extension is available.
	 * See http://www.php.net/manual/en/extensions.alphabetical.php for a full list.
	 */
	public function check_has_required_php_extensions() {
		foreach ( $this->req_php_extensions as $extension ) {
			if ( ! extension_loaded( $extension ) ) {
				$this->errors->add(
					'php_extension',
					sprintf(
						// Translators: 1 Plugin name, 2: PHP extension name
						esc_html__( '%1$s requires the %2$s PHP extension.', 'bluehost-wordpress-plugin' ),
						$this->name,
						$extension
					)
				);
			}
		}
	}

	/**
	 * Check if the minimum required WordPress version is available
	 */
	public function check_has_min_wp_version() {
		global $wp_version;
		if ( version_compare( $wp_version, $this->min_wp_version, '<' ) ) {
			$this->errors->add(
				'wp_version',
				sprintf(
					// Translators: 1 Plugin name, 2: Required WP version number, 3: Current WP version number
					esc_html__( '%1$s requires WordPress version %2$s or later. You are currently running version %3$s.', 'bluehost-wordpress-plugin' ),
					$this->name,
					$this->min_wp_version,
					$wp_version
				)
			);
		}
	}

	/**
	 * Check if any errors were encountered during our plugin checks
	 *
	 * @return bool
	 */
	public function has_errors() {
		return (bool) count( $this->errors->errors );
	}

	/**
	 * Deactivate the plugin
	 */
	public function deactivate() {
		require_once ABSPATH . '/wp-admin/includes/plugin.php';
		if ( function_exists( 'deactivate_plugins' ) ) {
			deactivate_plugins( $this->file );
		}
	}

	/**
	 * Display error messages in the admin
	 */
	public function admin_notices() {
		echo '<div class="error">';
		foreach ( $this->errors->get_error_messages() as $msg ) {
			echo '<p>' . esc_html( $msg ) . '</p>';
		}
		echo '<p>';
		esc_html_e( 'This plugin has been deactivated.', 'bluehost-wordpress-plugin' );
		echo '</p></div>';
	}

}
