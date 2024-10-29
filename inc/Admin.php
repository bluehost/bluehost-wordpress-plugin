<?php
/**
 * Register Admin page and features.
 *
 * @package WPPluginBluehost
 */

namespace Bluehost;

use NewfoldLabs\WP\Module\Data\SiteCapabilities;
use function NewfoldLabs\WP\Context\getContext;
use function NewfoldLabs\WP\Module\Features\isEnabled;

/**
 * \Bluehost\Admin
 */
final class Admin {

	/**
	 * Register functionality using WordPress Actions.
	 */
	public function __construct() {
		/* Add Page to WordPress Admin Menu. */
		\add_action( 'admin_menu', array( __CLASS__, 'page' ) );
		/* Load Page Scripts & Styles. */
		\add_action( 'admin_enqueue_scripts', array( __CLASS__, 'assets' ) );
		/* Load i18 files */
		\add_action( 'init', array( __CLASS__, 'load_text_domain' ), 100 );
		/* Add Links to WordPress Plugins list item. */
		$plugin_basename = defined( 'BLUEHOST_PLUGIN_FILE' )
			? plugin_basename( constant( 'BLUEHOST_PLUGIN_FILE' ) )
			: 'bluehost-wordpress-plugin/bluehost-wordpress-plugin.php';
		\add_filter( "plugin_action_links_{$plugin_basename}", array( __CLASS__, 'actions' ) );
		/* Add inline style to hide subnav link */
		\add_action( 'admin_head', array( __CLASS__, 'admin_nav_style' ) );

		\add_filter( 'newfold-runtime', array( __CLASS__, 'add_to_runtime' ) );
		\add_filter( 'newfold_runtime', array( __CLASS__, 'add_to_runtime' ) );

		if ( isset( $_GET['page'] ) && strpos( filter_input( INPUT_GET, 'page', FILTER_UNSAFE_RAW ), 'bluehost' ) >= 0 ) { // phpcs:ignore
			\add_action( 'admin_footer_text', array( __CLASS__, 'add_brand_to_admin_footer' ) );
			/* Disable admin notices on App pages */
			\add_action( 'admin_init', array( __CLASS__, 'disable_admin_notices' ) );
		}
	}

	/**
	 * Add to runtime
	 *
	 * @param Array $sdk - The runtime array
	 *
	 * @return array
	 */
	public static function add_to_runtime( $sdk ) {
		include_once BLUEHOST_PLUGIN_DIR . '/inc/Data.php';

		return array_merge( $sdk, Data::runtime() );
	}

	/**
	 * Subpages to register with add_submenu_page().
	 *
	 * Order or array items determines menu order.
	 *
	 * @return array
	 */
	public static function subpages() {
		global $bluehost_module_container;
		$capability = new SiteCapabilities();

		$home          = array(
			'bluehost#/home' => __( 'Home', 'wp-plugin-bluehost' ),
		);
		$pagesAndPosts = array(
			'bluehost#/pages-and-posts' => __( 'Pages & Posts', 'wp-plugin-bluehost' ),
		);
		$store         = array(
			'bluehost#/store' => __( 'Store', 'wp-plugin-bluehost' ),
		);
		$marketplace   = array(
			'bluehost#/marketplace' => __( 'Marketplace', 'wp-plugin-bluehost' ),
		);
		// add plugins and tools if has solution
		$mypluginsandtools = $capability->get( 'hasSolution' )
			? array(
				'bluehost#/my_plugins_and_tools' => __( 'My Plugins & Tools', 'wp-plugin-bluehost' ),
			)
			: array();
		// add performance if enabled
		$performance = isEnabled( 'performance' )
			? array(
				'bluehost#/performance' => __( 'Performance', 'wp-plugin-bluehost' ),
			)
			: array();
		$settings    = array(
			'bluehost#/settings' => __( 'Settings', 'wp-plugin-bluehost' ),
		);
		// add staging if enabled
		$staging = isEnabled( 'staging' )
			? array(
				'bluehost#/staging' => __( 'Staging', 'wp-plugin-bluehost' ),
			)
			: array();
		$help    = array(
			'bluehost#/help' => __( 'Help', 'wp-plugin-bluehost' ),
		);

		return array_merge(
			$home,
			$pagesAndPosts,
			$store,
			$marketplace,
			$mypluginsandtools,
			$performance,
			$settings,
			$staging,
			$help
		);
	}

	/**
	 * Add inline script to admin screens
	 *  - hide extra link in subnav
	 */
	public static function admin_nav_style() {
		echo '<style>';
		echo 'ul#adminmenu a.toplevel_page_bluehost.wp-has-current-submenu:after, ul#adminmenu>li#toplevel_page_bluehost.current>a.current:after { border-right-color: #fff !important; }';
		echo 'li#toplevel_page_bluehost > ul > li.wp-first-item { display: none !important; }';
		echo '#wp-toolbar #wp-admin-bar-bluehost-coming_soon .ab-item { padding: 0; }';
		echo 'body.folded #adminmenu .toplevel_page_bluehost div.wp-menu-image { width: 36px; height: 34px; }';
		echo '</style>';
	}

	/**
	 * Add WordPress Page to Appearance submenu.
	 *
	 * @return void
	 */
	public static function page() {
		$bluehost_icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+CiAgICA8cGF0aCBmaWxsPSIjYTdhYWFkIiBkPSJNNCA0aDguOTMzdjguOTIzSDRWNFptMTEuNTMgMGg4Ljk0djguOTIzaC04Ljk0VjRabTExLjUzMSAwSDM2djguOTIzaC04LjkzOVY0Wk00IDE1LjUzOGg4LjkzM3Y4LjkyNEg0di04LjkyNFptMTEuNTMgMGg4Ljk0djguOTI0aC04Ljk0di04LjkyNFptMTEuNTMxIDBIMzZ2OC45MjRoLTguOTM5di04LjkyNFpNNCAyNy4wNzdoOC45MzNWMzZINHYtOC45MjNabTExLjUzIDBoOC45NFYzNmgtOC45NHYtOC45MjNabTExLjUzMSAwSDM2VjM2aC04LjkzOXYtOC45MjNaIi8+Cjwvc3ZnPg==';

		\add_menu_page(
			__( 'Bluehost', 'wp-plugin-bluehost' ),
			__( 'Bluehost', 'wp-plugin-bluehost' ),
			'manage_options',
			'bluehost',
			array( __CLASS__, 'render' ),
			$bluehost_icon,
			0
		);

		// If we're outside of Bluehost, add subpages to Bluehost menu
		if ( false === ( isset( $_GET['page'] ) && strpos( filter_input( INPUT_GET, 'page', FILTER_UNSAFE_RAW ), 'bluehost' ) >= 0 ) ) { // phpcs:ignore
			foreach ( self::subpages() as $route => $title ) {
				\add_submenu_page(
					'bluehost',
					$title,
					$title,
					'manage_options',
					$route,
					array( __CLASS__, 'render' )
				);
			}
		}
	}

	/**
	 * Render DOM element for React to load onto.
	 *
	 * @return void
	 */
	public static function render() {
		global $wp_version;

		echo '<!-- Bluehost -->' . PHP_EOL;

		if ( version_compare( $wp_version, '5.4', '>=' ) ) {
			echo '<div id="wppbh-app" class="wppbh wppbh_app"></div>' . PHP_EOL;
		} else {
			// fallback messaging for WordPress older than 5.4
			echo '<div id="wppbh-app" class="wppbh wppbh_app">' . PHP_EOL;
			echo '<header class="wppbh-header" style="min-height: 90px; padding: 1rem; margin-bottom: 1.5rem;"><div class="wppbh-header-inner"><div class="wppbh-logo-wrap">' . PHP_EOL;
			echo '<img src="' . esc_url( BLUEHOST_PLUGIN_URL . 'assets/svg/bluehost-logo.svg' ) . '" alt="Bluehost logo" />' . PHP_EOL;
			echo '</div></div></header>' . PHP_EOL;
			echo '<div class="wrap">' . PHP_EOL;
			echo '<div class="card" style="margin-left: 20px;"><h2 class="title">' . esc_html__( 'Please update to a newer WordPress version.', 'wp-plugin-bluehost' ) . '</h2>' . PHP_EOL;
			echo '<p>' . esc_html__( 'There are new WordPress components which this plugin requires in order to render the interface.', 'wp-plugin-bluehost' ) . '</p>' . PHP_EOL;
			echo '<p><a href="' . esc_url( admin_url( 'update-core.php' ) ) . '" class="button component-button is-primary button-primary" variant="primary">' . esc_html__( 'Please update now', 'wp-plugin-bluehost' ) . '</a></p>' . PHP_EOL;
			echo '</div></div></div>' . PHP_EOL;
		}

		echo '<!-- /Bluehost -->' . PHP_EOL;
	}

	/**
	 * Load Page Scripts & Styles.
	 *
	 * @param String $hook - The hook name
	 *
	 * @return void
	 */
	public static function assets( $hook ) {

		// These assets will be loaded in the bluehost app space only
		if ( false !== stripos( $hook, 'bluehost' ) ) {

			$asset_file = BLUEHOST_BUILD_DIR . '/index.asset.php';

			if ( is_readable( $asset_file ) ) {
				$asset = include_once $asset_file;
			} else {
				return;
			}

			// TODO: update this to a dependency script
			do_action( 'newfold/installer/enqueue_scripts' );

			\wp_register_script(
				'bluehost-script',
				BLUEHOST_BUILD_URL . '/index.js',
				array_merge( $asset['dependencies'], array( 'newfold-features', 'nfd-runtime' ) ),
				$asset['version'],
				true
			);

			\wp_set_script_translations(
				'bluehost-script',
				'wp-plugin-bluehost',
				BLUEHOST_PLUGIN_DIR . '/languages'
			);

			\wp_register_style(
				'bluehost-style',
				BLUEHOST_BUILD_URL . '/index.css',
				array( 'wp-components' ),
				$asset['version']
			);

			$screen = get_current_screen();
			if ( false !== strpos( $screen->id, 'bluehost' ) ) {
				\wp_enqueue_script( 'bluehost-script' );
				\wp_enqueue_style( 'bluehost-style' );
			}
		}

		// These assets are loaded in all wp-admin
		\wp_register_script( 'newfold-plugin', false, array(), BLUEHOST_PLUGIN_VERSION, true );
		\wp_localize_script(
			'newfold-plugin',
			'nfdplugin',
			array(
				'restApiUrl'   => \esc_url_raw( \get_home_url() . '/index.php?rest_route=' ),
				'restApiNonce' => \wp_create_nonce( 'wp_rest' ),
			)
		);
		\wp_enqueue_script( 'newfold-plugin' );
	}

	/**
	 * Load text domain for plugin
	 *
	 * @return void
	 */
	public static function load_text_domain() {

		\load_plugin_textdomain(
			'wp-plugin-bluehost',
			false,
			BLUEHOST_PLUGIN_DIR . '/languages'
		);

		\load_script_textdomain(
			'bluehost-script',
			'wp-plugin-bluehost',
			BLUEHOST_PLUGIN_DIR . '/languages'
		);
	}

	/**
	 * Add Links to WordPress Plugins list item for Bluehost.
	 *
	 * @param array $actions - array of action links for Plugin row item.
	 *
	 * @return array
	 */
	public static function actions( $actions ) {
		return array_merge(
			array(
				'overview' => '<a href="' . \admin_url( 'admin.php?page=bluehost#/home' ) . '">' . __( 'Home', 'wp-plugin-bluehost' ) . '</a>',
				'settings' => '<a href="' . \admin_url( 'admin.php?page=bluehost#/settings' ) . '">' . __( 'Settings', 'wp-plugin-bluehost' ) . '</a>',
			),
			$actions
		);
	}

	/**
	 * Disable admin notices on App pages
	 *
	 * @return void
	 */
	public static function disable_admin_notices() {
		remove_all_actions( 'admin_notices' );
		remove_all_actions( 'all_admin_notices' );
	}

	/**
	 * Filter WordPress Admin Footer Text "Thank you for creating with..."
	 *
	 * @param string $footer_text footer text
	 *
	 * @return string
	 */
	public static function add_brand_to_admin_footer( $footer_text ) {
		$footer_text = \sprintf( \__( 'Thank you for creating with <a href="https://wordpress.org/">WordPress</a> and <a href="https://bluehost.com/about">Bluehost</a>.', 'wp-plugin-bluehost' ) );

		return $footer_text;
	}
} // END \Bluehost\Admin
