<?php
/**
 * Class Bluehost_Admin_App_Page
 */
class Bluehost_Admin_App_Page {
	/**
	 * @var stdClass
	 */
	protected static $instance;
	/**
	 * Subpage Titles (get lowercased for slugs)
	 *
	 * @var array
	 */
	public static $subpages = array(
		'Home',
		'Themes',
		'Plugins',
		'Services',
		'Staging',
		'Settings',
	);
	/**
	 *
	 * @return Bluehost_Admin_App_Page|stdClass
	 */
	public static function return_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Bluehost_Admin_App_Page ) ) {
			self::$instance = new Bluehost_Admin_App_Page();
			self::$instance->primary_init();
		}
		return self::$instance;
	}
	/**
	 *
	 */
	protected function primary_init() {
		add_action( 'admin_menu', array( $this, 'add_menu_page' ) );
		add_action( 'admin_menu', array( $this, 'add_sub_pages' ) );
	}
	/**
	 * Register WordPress Admin Page for Admin App
	 *
	 * @return void
	 */
	public function add_menu_page() {
		$bubble_count = apply_filter( 'bluehost_menu_bubble_count', 0 );

		if ( $bubble_count > 0 ) {
			$menu_label = sprintf( 'Bluehost v2 <span class="awaiting-mod">%d</span>', $bubble_count );
		} else {
			$menu_label = 'Bluehost v2';
		}
		add_menu_page(
			'Bluehost',
			$menu_label,
			'manage_options',
			'bluehost',
			array( $this, 'menu_page_output' ),
			'dashicons-screenoptions',
			1
		);
	}
	/**
	 * The React-powered Single-Page Applications initializes on #bluehost-app, replacing all inner elements.
	 * However, until initialization begins, #app-loader is shown so user knows something is happening.
	 *
	 * @return void
	 */
	public function menu_page_output() {
		?>
		<div id="bluehost-app">
			<main id="app-loader">
				<div class="spinner-wrap">
					<span class="components-spinner"></span>
				</div>
			</main>
		</div>
		<?php
	}

	/**
	 * Add Submenu Pages to WordPress
	 *
	 * @return void
	 */
	public function add_sub_pages() {
		foreach( self::$subpages as $subpage ) {
			$slug = strtolower( $subpage );
			$subpage_slugs = array_map( 'strtolower', self::$subpages );
			/**
			 * Add /marketplace prefix for Marketplace routes
			 */
			if ( 'themes' === $slug || 'plugins' === $slug || 'services' === $slug ) {
				$slug = 'marketplace/' . $slug;
			}
			if ( 'staging' === $slug ) {
				$slug = 'tools/' . $slug;
			}
			add_submenu_page(
				'bluehost',
				$subpage,
				$subpage,
				'manage_options',
				'bluehost#/' . $slug,
				array( $this, 'handle_subpage_redirect' )
			);
		}
	}

	public function handle_subpage_redirect() {
		// TODO: Add button to go to Plugin Home
	}
}
