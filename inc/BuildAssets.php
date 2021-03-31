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
    private static $assetHandlePrefix = 'bwp-';

    /**
     * WordPress Hooks prefix
     *
     * @var string
     */
    private static $hookPrefix = 'bwp_';

    /**
     * CSS dependencies required by @app.
     *
     * @var array
     */
    private static $appCssDependencies = array( 'wp-components', 'bluehost-font' );

    /**
     * Run asset registration globally. Use self::enqueue() in scoped contexts.
     *
     * @return void
     */
    public static function init() {
        add_action( 'wp_enqueue_scripts', array( __CLASS__, 'register' ), 20 );
        add_action( 'admin_enqueue_scripts', array( __CLASS__, 'register' ), 20 );
        add_action( 'admin_enqueue_scripts', array( __CLASS__, 'admin_global_enqueue' ), 30 );
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

    public static function admin_global_enqueue( $hook ) {
        \wp_enqueue_style( 'bluehost-admin-global' );
    }

    public static function externals() {
        $url  = trailingslashit( BLUEHOST_PLUGIN_URL );
        $min  = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) || 'local' === \wp_get_environment_type() ? '' : '.min';
        $rand = time();
        
        wp_register_script(
			'react-router-dom',
			$url . 'static/react-router-dom' . $min . '.js',
			array( 'wp-element' ),
			empty( $min ) ? $rand : '5.2.0',
			true
		);

		wp_register_style(
			'bluehost-font',
			'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600',
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
     * @param string $entry
     * @return void
     */
    public static function enqueue( $entry, $type = 'all' ) {
        \do_action( self::$hookPrefix . $entry . '_pre_enqueue' );
        if ( 'style' !== $type ) {
            \wp_enqueue_script( self::$assetHandlePrefix . $entry );
        }
        if ( 'script' !== $type ) {
            \wp_enqueue_style( self::$assetHandlePrefix . $entry );
        }
        \do_action( self::$hookPrefix . $entry . '_post_enqueue' );
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
        \add_filter( 'bwp_app_css_deps', function( $data ) {
            return array_unique( array_merge( $data, self::$appCssDependencies ) );
        });
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

    public static function inlineWebpackPublicPath( $handle ) {
        \wp_add_inline_script( $handle, 'window.bluehostPluginPublicPath="'. trailingslashit( BLUEHOST_PLUGIN_URL ) .'build/";', 'before');
    }
}
