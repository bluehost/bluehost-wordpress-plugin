<?php

namespace Bluehost;

/**
 * Helper to Register & Enqueue Plugin Assets
 *
 * @package Bluehost
 */
class BuildAssets {
	/**
	 * Prefix for all asset hooks
	 *
	 * @var string
	 */
	public static $asset_handle_prefix = 'bwp-';

	/**
	 * WordPress Hooks prefix
	 *
	 * @var string
	 */
	private static $hook_prefix = 'bwp_';

	/**
	 * CSS dependencies required by @app.
	 *
	 * @var array
	 */

	private static $app_csc_dependencies = array( 'wp-components', 'wpadmin-brand-bluehost' );

	/**
	 * Run asset registration globally. Use self::enqueue() in scoped contexts.
	 *
	 * @return void
	 */
	public static function init() {
		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register' ), 20 );
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'register' ), 20 );
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'admin_global_enqueue' ), 30 );
		// if ( 'local' === wp_get_environment_type() ) {
			// add_action( 'wp_default_scripts', array( __CLASS__, 'remove_jquery_migrate' ) );
		// }
	}
	/**
	 * Registers all assets with WordPress
	 *
	 * @return void
	 */
	public static function register() {
		// Bring externals online
		self::externals();
		// Internal hooks helper
		self::registerHooks();
		// Bring webpack assets online
		self::requireWebpackAssets();
	}

	/**
	 * Admin global enqueue
	 *
	 * @param string $hook - the hook
	 * @return void
	 */
	public static function admin_global_enqueue( $hook ) {
		\wp_enqueue_style( 'bluehost-admin-global' );
		if ( 'local' === wp_get_environment_type() ) {
			\wp_dequeue_style( 'jquery-migrate' );
		}
	}

	/**
	 * Load externals
	 *
	 * @return void
	 */
	public static function externals() {
		$url  = trailingslashit( BLUEHOST_PLUGIN_URL );
		$min  = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) || 'local' === \wp_get_environment_type() ? '' : '.min';
		$rand = time();

		wp_register_script(
			'shepherd.js',
			$url . 'static/shepherd' . $min . '.js',
			array( 'wp-element' ),
			empty( $min ) ? $rand : '5.2.0',
			true
		);

		wp_register_style(
			'wpadmin-brand-bluehost',
			$url . 'static/wpadmin-brand-bluehost.css',
			array(),
			empty( $min ) ? $rand : BLUEHOST_PLUGIN_VERSION
		);

		wp_register_style(
			'bluehost-admin-global',
			$url . 'static/admin-global.css',
			array(),
			empty( $min ) ? $rand : '1.0'
		);
	}

	/**
	 * Enqueues all assets for a webpack build entry.
	 *
	 * @param string $entry - asset
	 * @param string $type - defaults to all
	 * @return void
	 */
	public static function enqueue( $entry, $type = 'all' ) {
		\do_action( self::$hook_prefix . $entry . '_pre_enqueue' );
		if ( 'style' !== $type ) {
			\wp_enqueue_script( self::$asset_handle_prefix . $entry );
		}
		if ( 'script' !== $type ) {
			\wp_enqueue_style( self::$asset_handle_prefix . $entry );
		}
		\do_action( self::$hook_prefix . $entry . '_post_enqueue' );
	}

	/**
	 * Run during register() to aid dependency setup.
	 *
	 * @return void
	 */
	public static function registerHooks() {
		// @wordpress/dependency-extraction-plugin doesn't know
		// about most of our CSS dependencies, so those
		// are manually managed in this file
		\add_filter(
			'bwp_app_css_deps',
			function( $data ) {
				return array_unique( array_merge( $data, self::$app_csc_dependencies ) );
			}
		);
	}

	/**
	 * Require the auto-generated asset registration file.
	 *
	 * This method fires during *_enqueue_scripts at priority 20 -- hook prior to filter dependencies/data, hook after to enqueue.
	 *
	 * @return void
	 */
	public static function requireWebpackAssets() {
		$file = BLUEHOST_PLUGIN_DIR . '/build/wp-dependency-registration.php';
		if ( is_readable( $file ) ) {
			require_once $file;
		}
	}

	/**
	 * Build Inline script for webpack
	 *
	 * @param string $handle - script handle
	 * @return void
	 */
	public static function inlineWebpackPublicPath( $handle ) {
		\wp_add_inline_script( $handle, 'window.bluehostPluginPublicPath="' . trailingslashit( BLUEHOST_PLUGIN_URL ) . 'build/";', 'before' );
	}

	/**
	 * Remove JQuery Migrate script
	 *
	 * @param Array $scripts - array of scripts
	 * @return void
	 */
	public function remove_jquery_migrate( $scripts ) {

		if ( ! is_admin() && isset( $scripts->registered['jquery'] ) ) {

			$script = $scripts->registered['jquery'];

			if ( $script->deps ) {
				$script->deps = array_diff( $script->deps, array( 'jquery-migrate' ) );
			}
		}
	}
}
