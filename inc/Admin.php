<?php
/**
 * Register Admin page and features.
 *
 * @package WPPluginBlueprint
 */

namespace Blueprint;

/**
 * \Blueprint\Admin
 */
final class Admin {

	/**
	 * Register functionality using WordPress Actions.
	 */
	public function __construct() {
		/* Add Page to WordPress Admin Menu. */
		\add_action( 'admin_menu', array( __CLASS__, 'page' ) );
		/* Load Page Scripts & Styles. */
		\add_action( 'load-toplevel_page_blueprint', array( __CLASS__, 'assets' ) );
		/* Load i18 files */
		\add_action( 'init', array( __CLASS__, 'load_text_domain' ), 100 );
		/* Add Links to WordPress Plugins list item. */
		\add_filter( 'plugin_action_links_wp-plugin-blueprint/wp-plugin-blueprint.php', array( __CLASS__, 'actions' ) );
		/* Add inline style to hide subnav link */
		\add_action( 'admin_head', array( __CLASS__, 'admin_nav_style' ) );

		if ( isset( $_GET['page'] ) && strpos( filter_input( INPUT_GET, 'page', FILTER_SANITIZE_STRING ), 'blueprint' ) >= 0 ) { // phpcs:ignore
			\add_action( 'admin_footer_text', array( __CLASS__, 'add_brand_to_admin_footer' ) );
		}
	}

	/**
	 * Subpages to register with add_submenu_page().
	 *
	 * Order or array items determines menu order.
	 *
	 * @return array
	 */
	public static function subpages() {
		return array(
			'blueprint#/home'        => __( 'Home', 'wp-plugin-blueprint' ),
			'blueprint#/marketplace' => __( 'Marketplace', 'wp-plugin-blueprint' ),
			'blueprint#/performance' => __( 'Performance', 'wp-plugin-blueprint' ),
			'blueprint#/settings'    => __( 'Settings', 'wp-plugin-blueprint' ),
			'blueprint#/help'        => __( 'Help', 'wp-plugin-blueprint' ),
		);
	}

	/**
	 * Add inline script to admin screens
	 *  - hide extra link in subnav
	 */
	public static function admin_nav_style() {
		echo '<style>';
		echo 'ul#adminmenu a.toplevel_page_blueprint.wp-has-current-submenu:after, ul#adminmenu>li#toplevel_page_blueprint.current>a.current:after { border-right-color: #fff !important; }';
		echo 'li#toplevel_page_blueprint > ul > li.wp-first-item { display: none !important; }';
		echo '#wp-toolbar #wp-admin-bar-blueprint-coming_soon .ab-item { padding: 0; }';
		echo '</style>';
	}

	/**
	 * Add WordPress Page to Appearance submenu.
	 *
	 * @return void
	 */
	public static function page() {
		// get the blueprint-logo.svg and encode for base64 at https://base64.guru/converter/encode/image/svg
		$blueprint_icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDBDNy43NjE0IDAgMTAgMi4yMzg1NyAxMCA1VjBIMTVDMTcuNzYxNCAwIDIwIDIuMjM4NTcgMjAgNUMyMCA3Ljc2MTQgMTcuNzYxNCAxMCAxNSAxMEMxNy43NjE0IDEwIDIwIDEyLjIzODYgMjAgMTVDMjAgMTYuMzcxMiAxOS40NDgxIDE3LjYxMzQgMTguNTU0MyAxOC41MTY3TDE4LjUzNTUgMTguNTM1NUwxOC41MTg5IDE4LjU1MkMxNy42MTU0IDE5LjQ0NzEgMTYuMzcyMyAyMCAxNSAyMEMxMy42MzcxIDIwIDEyLjQwMTUgMTkuNDU0NiAxMS40OTk1IDE4LjU3MDJDMTEuNDg3OCAxOC41NTg3IDExLjQ3NjEgMTguNTQ3MSAxMS40NjQ0IDE4LjUzNTVDMTEuNDUzNSAxOC41MjQ2IDExLjQ0MjYgMTguNTEzNiAxMS40MzE4IDE4LjUwMjZDMTAuNTQ2MiAxNy42MDA1IDEwIDE2LjM2NCAxMCAxNUMxMCAxNy43NjE0IDcuNzYxNCAyMCA1IDIwQzIuMjM4NTcgMjAgMCAxNy43NjE0IDAgMTVWMTBINUMyLjIzODU3IDEwIDAgNy43NjE0IDAgNUMwIDIuMjM4NTcgMi4yMzg1NyAwIDUgMFpNOSA1QzkgNy4yMDkxNSA3LjIwOTE1IDkgNSA5VjFDNy4yMDkxNSAxIDkgMi43OTA4NiA5IDVaTTE5IDE1QzE5IDEyLjc5MDggMTcuMjA5MiAxMSAxNSAxMUMxMi43OTA4IDExIDExIDEyLjc5MDggMTEgMTVIMTlaTTEgMTFWMTVDMSAxNy4yMDkyIDIuNzkwODYgMTkgNSAxOUM3LjIwOTE1IDE5IDkgMTcuMjA5MiA5IDE1VjExSDFaTTExIDlWMUgxNUMxNy4yMDkyIDEgMTkgMi43OTA4NiAxOSA1QzE5IDcuMjA5MTUgMTcuMjA5MiA5IDE1IDlIMTFaIiBmaWxsPSIjOUNBMkE3Ii8+Cjwvc3ZnPgo=';

		\add_menu_page(
			__( 'Blueprint', 'wp-plugin-blueprint' ),
			__( 'Blueprint', 'wp-plugin-blueprint' ),
			'manage_options',
			'blueprint',
			array( __CLASS__, 'render' ),
			$blueprint_icon,
			0
		);

		foreach ( self::subpages() as $route => $title ) {
			\add_submenu_page(
				'blueprint',
				$title,
				$title,
				'manage_options',
				$route,
				array( __CLASS__, 'render' )
			);
		}
	}

	/**
	 * Render DOM element for React to load onto.
	 *
	 * @return void
	 */
	public static function render() {
		global $wp_version;

		echo '<!-- Blueprint -->' . PHP_EOL;

		if ( version_compare( $wp_version, '5.4', '>=' ) ) {
			echo '<div id="wppb-app" class="wppb wppb_app"></div>' . PHP_EOL;
		} else {
			// fallback messaging for WordPress older than 5.4
			echo '<div id="wppb-app" class="wppb wppb_app">' . PHP_EOL;
			echo '<header class="wppb-header" style="min-height: 90px; padding: 1rem; margin-bottom: 1.5rem;"><div class="wppb-header-inner"><div class="wppb-logo-wrap">' . PHP_EOL;
			echo '<img src="' . esc_url( BLUEPRINT_PLUGIN_URL . 'assets/svg/blueprint-logo.svg' ) . '" alt="Blueprint logo" />' . PHP_EOL;
			echo '</div></div></header>' . PHP_EOL;
			echo '<div class="wrap">' . PHP_EOL;
			echo '<div class="card" style="margin-left: 20px;"><h2 class="title">' . esc_html__( 'Please update to a newer WordPress version.', 'wp-plugin-blueprint' ) . '</h2>' . PHP_EOL;
			echo '<p>' . esc_html__( 'There are new WordPress components which this plugin requires in order to render the interface.', 'wp-plugin-blueprint' ) . '</p>' . PHP_EOL;
			echo '<p><a href="' . esc_url( admin_url( 'update-core.php' ) ) . '" class="button component-button is-primary button-primary" variant="primary">' . esc_html__( 'Please update now', 'wp-plugin-blueprint' ) . '</a></p>' . PHP_EOL;
			echo '</div></div></div>' . PHP_EOL;
		}

		echo '<!-- /Blueprint -->' . PHP_EOL;
	}

	/**
	 * Load Page Scripts & Styles.
	 *
	 * @return void
	 */
	public static function assets() {
		$asset_file = BLUEPRINT_BUILD_DIR . '/index.asset.php';

		if ( is_readable( $asset_file ) ) {
			$asset = include_once $asset_file;
		} else {
			return;
		}

		\wp_register_script(
			'blueprint-script',
			BLUEPRINT_BUILD_URL . '/index.js',
			array_merge( $asset['dependencies'] ),
			$asset['version'],
			true
		);

		\wp_set_script_translations(
			'blueprint-script',
			'wp-plugin-blueprint',
			BLUEPRINT_PLUGIN_DIR . '/languages'
		);

		include BLUEPRINT_PLUGIN_DIR . '/inc/Data.php';
		\wp_add_inline_script(
			'blueprint-script',
			'var WPPB =' . \wp_json_encode( Data::runtime() ) . ';',
			'before'
		);

		\wp_register_style(
			'blueprint-style',
			BLUEPRINT_BUILD_URL . '/index.css',
			array( 'wp-components' ),
			$asset['version']
		);

		$screen = get_current_screen();
		if ( false !== strpos( $screen->id, 'blueprint' ) ) {
			\wp_enqueue_script( 'blueprint-script' );
			\wp_enqueue_style( 'blueprint-style' );
		}
	}

	/**
	 * Load text domain for plugin
	 *
	 * @return void
	 */
	public static function load_text_domain() {

		\load_plugin_textdomain(
			'wp-plugin-blueprint',
			false,
			BLUEPRINT_PLUGIN_DIR . '/languages'
		);

		\load_script_textdomain(
			'blueprint-script',
			'wp-plugin-blueprint',
			BLUEPRINT_PLUGIN_DIR . '/languages'
		);
	}

	/**
	 * Add Links to WordPress Plugins list item for Blueprint.
	 *
	 * @param  array $actions - array of action links for Plugin row item.
	 * @return array
	 */
	public static function actions( $actions ) {
		return array_merge(
			array(
				'overview' => '<a href="' . \admin_url( 'admin.php?page=blueprint#/home' ) . '">' . __( 'Home', 'wp-plugin-blueprint' ) . '</a>',
				'settings' => '<a href="' . \admin_url( 'admin.php?page=blueprint#/settings' ) . '">' . __( 'Settings', 'wp-plugin-blueprint' ) . '</a>',
			),
			$actions
		);
	}

	/**
	 * Filter WordPress Admin Footer Text "Thank you for creating with..."
	 *
	 * @param string $footer_text footer text
	 * @return string
	 */
	public static function add_brand_to_admin_footer( $footer_text ) {
		$footer_text = \sprintf( \__( 'Thank you for creating with <a href="https://wordpress.org/">WordPress</a> and <a href="https://blueprint.com/about-us">Blueprint</a>.', 'wp-plugin-blueprint' ) );
		return $footer_text;
	}
} // END \Blueprint\Admin
