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
	 * Register Bluehost Page & Subpages with WordPress.
	 */
	protected function primary_init() {
		add_action( 'admin_menu', array( $this, 'add_menu_page' ) );
		add_action( 'admin_menu', array( $this, 'add_sub_pages' ) );
	}

	/**
	 * Register Primary WordPress Admin Page for Admin App
	 *
	 * @return void
	 */
	public function add_menu_page() {
		add_menu_page(
			'Bluehost',
			$this->primary_title_markup(),
			'manage_options',
			'bluehost',
			array( $this, 'menu_page_output' ),
			'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OC4wMyA1OC4xMyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5iaC13aGl0ZTwvdGl0bGU+PGcgaWQ9Il9Hcm91cF8iIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyI+PGcgaWQ9Il9Hcm91cF8yIiBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiPjxnIGlkPSJfR3JvdXBfMyIgZGF0YS1uYW1lPSImbHQ7R3JvdXAmZ3Q7Ij48cmVjdCBpZD0iX1BhdGhfIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMTYuMiIgaGVpZ2h0PSIxNi4yMSIvPjxyZWN0IGlkPSJfUGF0aF8yIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgY2xhc3M9ImNscy0xIiB4PSIyMC45MSIgd2lkdGg9IjE2LjIxIiBoZWlnaHQ9IjE2LjIxIi8+PHJlY3QgaWQ9Il9QYXRoXzMiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBjbGFzcz0iY2xzLTEiIHg9IjQxLjgyIiB3aWR0aD0iMTYuMjEiIGhlaWdodD0iMTYuMjEiLz48cmVjdCBpZD0iX1BhdGhfNCIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGNsYXNzPSJjbHMtMSIgeT0iMjAuOTYiIHdpZHRoPSIxNi4yIiBoZWlnaHQ9IjE2LjIxIi8+PHJlY3QgaWQ9Il9QYXRoXzUiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBjbGFzcz0iY2xzLTEiIHg9IjIwLjkxIiB5PSIyMC45NiIgd2lkdGg9IjE2LjIxIiBoZWlnaHQ9IjE2LjIxIi8+PHJlY3QgaWQ9Il9QYXRoXzYiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBjbGFzcz0iY2xzLTEiIHg9IjQxLjgyIiB5PSIyMC45NiIgd2lkdGg9IjE2LjIxIiBoZWlnaHQ9IjE2LjIxIi8+PHJlY3QgaWQ9Il9QYXRoXzciIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBjbGFzcz0iY2xzLTEiIHk9IjQxLjkyIiB3aWR0aD0iMTYuMiIgaGVpZ2h0PSIxNi4yMSIvPjxyZWN0IGlkPSJfUGF0aF84IiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgY2xhc3M9ImNscy0xIiB4PSIyMC45MSIgeT0iNDEuOTIiIHdpZHRoPSIxNi4yMSIgaGVpZ2h0PSIxNi4yMSIvPjxyZWN0IGlkPSJfUGF0aF85IiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgY2xhc3M9ImNscy0xIiB4PSI0MS44MiIgeT0iNDEuOTIiIHdpZHRoPSIxNi4yMSIgaGVpZ2h0PSIxNi4yMSIvPjwvZz48L2c+PC9nPjwvc3ZnPg==',
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
					<div class="bluehost-app__loader"></div>
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
		foreach ( self::$subpages as $subpage ) {
			$slug          = strtolower( $subpage );
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

	/**
	 * @return string
	 */
	public function primary_title_markup() {
		$bubble_count = apply_filters( 'bluehost_menu_bubble_count', 0 );

		if ( $bubble_count > 0 ) {
			$menu_label = sprintf( 'Bluehost <span class="awaiting-mod">%d</span>', $bubble_count );
		} else {
			$menu_label = 'Bluehost';
		}

		return $menu_label;
	}
}
