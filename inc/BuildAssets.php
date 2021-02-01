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
    private static $assetHandlePrefix = 'bluehost-wordpress-plugin-';

    /**
     * WordPress Hooks prefix
     *
     * @var string
     */
    private static $hookPrefix = 'bluehost_plugin_';

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
        $build_url = trailingslashit( BLUEHOST_PLUGIN_URL ) . 'build/';
        $data  = self::getManifest();

        if ( is_array( $data ) && ! empty( $data['manifest'] ) ) {
            foreach( $data['manifest'] as $entry => $entryData ) {
                // Build JavaScript Registration
                array_map(
                    function($script) use( $build_url ) {
                        $hook = str_ireplace('-', '_', $script['handle']);
                        \wp_register_script(
                            $script['handle'],
                            $build_url . $script['filename'],
                            apply_filters( $hook . '_script_dependencies', $script['dependencies'] ),
                            false, // chunkhash burned into filename on each build
                            true
                        );
                        $assetData = apply_filters( $hook . '_data', array() );
                        if ( ! empty( $assetData ) ) {
                            \wp_localize_script(
                                $script['handle'],
                                str_replace( '-', '', lcfirst( ucwords( $script['handle'] ) ) ),
                                $assetData
                            );
                        }
                    },
                    $entryData['assets']['js']
                );
                array_map(
                    function( $style ) use( $build_url ) {
                        $hook = str_replace('-', '_', $style['handle'] );
                        \wp_register_style(
                            $style['handle'],
                            $build_url . $style['filename'],
                            apply_filters( $hook . '_css_dependencies', $style['dependencies'] ),
                            false
                        );
                    },
                    $entryData['assets']['css']
                );
            }
        }
    }

    public static function externals() {
        $url  = trailingslashit( BLUEHOST_PLUGIN_URL );
        $min  = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) || 'local' === \wp_get_environment_type() ? '' : '.min';
        $rand = time();
        
        wp_register_script(
			'react-router-dom',
			$url . 'static/react-router-dom' . $min . '.js',
			array( 'wp-element' ),
			empty( $min ) ? $rand : '5.0.0',
			true
		);

		wp_register_style(
			'bluehost-font',
			'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600',
			array(),
			empty( $min ) ? $rand : BLUEHOST_PLUGIN_VERSION
		);
		
		wp_register_style(
			'animatecss',
			$url . 'static/animate' . $min . '.css',
			array(),
			empty( $min ) ? $rand : '3.7.1'
		);

		wp_register_style(
			'bluehost-brand',
			$url . 'static/bluehost.css',
			array(),
			empty( $min ) ? $rand : '0.1.0'
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
    public static function enqueue( $entry ) {
        \do_action( self::$hookPrefix . $entry . '_pre_enqueue' );
        \wp_enqueue_script( self::$assetHandlePrefix . $entry );
        \wp_enqueue_style( self::$assetHandlePrefix . $entry );
        \do_action( self::$hookPrefix . $entry . '_post_enqueue' );
    }

    /**
     * Run during register() to aid dependency setup.
     *
     * @return void
     */
    public static function registerHooks() {
        // @wordpress/dependency-extraction-plugin doesn't know
        // about most of our CSS dependencies in BWA, so those
        // are manually managed in this file
        add_filter( 'bluehost_wordpress_plugin_app_css_dependencies', function( $data ) {
            return array_unique( array_merge( $data, self::$appCssDependencies ) );
        });
    }

    /**
     * Get unified manifest generated by custom webpack plugin.
     * 
     * Debug
     * 1 - File not readable
     * 2 - Contents not valid php array
     *
     * @return int|array
     */
    public static function getManifest() {
        $build_dir = trailingslashit( BLUEHOST_PLUGIN_DIR ) . 'build/';
        $data_file = $build_dir . 'wp-dependency.php';
        
        if ( is_readable( $data_file ) ) {
            $data = @file_get_contents( $data_file );
            if ( $data && is_array( $data ) ) {
                return $data;
            } else {
                return 2;
            }
        }

        return 1;
    }
}
