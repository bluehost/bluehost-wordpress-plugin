<?php

namespace Bluehost;

/**
 * Class Themes
 *
 * themes.php and theme-install.php related customizations.
 *
 * @package Bluehost
 */
class Themes {

	/**
	 * List of block themes to show on top of the themes popula tab results.
	 * Must be a valid "theme-slug"
	 *
	 * @var array
	 */
	public static $priority_themes = array(
		'yith-wonder',
	);

	/**
	 * Initialize themes.php and theme-install.php related customizations.
	 */
	public static function init() {
		add_action( 'admin_menu', array( __CLASS__, 'add_premuim_themes_menu_link' ) );
		add_action( 'admin_head-themes.php', array( __CLASS__, 'add_premuim_themes_button' ) );
		add_action( 'admin_head-themes.php', array( __CLASS__, 'add_upload_theme_button' ) );
		add_action( 'admin_head-theme-install.php', array( __CLASS__, 'upload_theme_page' ) );
		add_action( 'admin_head-theme-install.php', array( __CLASS__, 'add_premuim_themes_tab' ) );
		add_filter( 'themes_api_args', array( __CLASS__, 'query_block_themes_args' ), 10, 2 );
		add_filter( 'themes_api_result', array( __CLASS__, 'sort_query_themes_results' ), 10, 3 );
		// add_action( 'admin_head-theme-install.php', array( __CLASS__, 'recommended_theme_ribbon' ) );
	}

	/**
	 * Adds sub-menu links to Appearnce > Themes
	 */
	public static function add_premuim_themes_menu_link() {
		add_submenu_page(
			'themes.php',
			'Premium Themes',
			'Premium Themes',
			'manage_options',
			admin_url( 'admin.php?page=bluehost#/marketplace/themes' ),
			'',
			1
		);

		add_submenu_page(
			'themes.php',
			'Upload Theme',
			'Upload Theme',
			'install_themes',
			'upload-theme',
			array( __CLASS__, 'upload_theme_page' )
		);
	}

	/**
	 * Renames WordPress "Add Theme" Button to "WordPress.org Themes"
	 * Adds "Premium Themes" Button (link to marketplace) to themes.php header
	 */
	public static function add_premuim_themes_button() {
		?>

		<script type="text/javascript">
		window.addEventListener('DOMContentLoaded', () => {
			const themesPageWrap = document.querySelector('.wrap');
			const addNewThemeBtn = themesPageWrap.querySelector('a.page-title-action');
			addNewThemeBtn.innerText = "WordPress.org Themes";

			const premiumThemesBtn = document.createElement('a');
			premiumThemesBtn.href = "<?php echo esc_url( admin_url( 'admin.php?page=bluehost#/marketplace/themes' ) ); ?>";
			premiumThemesBtn.classList.add("hide-if-no-js", "page-title-action");
			premiumThemesBtn.innerText = "Premium Themes";

			themesPageWrap.insertBefore(premiumThemesBtn, addNewThemeBtn);
		});
		</script>

		<?php
	}

	/**
	 * Adds "Upload Theme" Button (link to upload_theme_page) to themes.php header
	 */
	public static function add_upload_theme_button() {
		?>

		<script type="text/javascript">
		window.addEventListener('DOMContentLoaded', () => {
			const themesPageWrap = document.querySelector('.wrap');
			const addNewThemeBtn = themesPageWrap.querySelector('a.page-title-action:last-of-type');

			const uploadThemeBtn = document.createElement('a');
			uploadThemeBtn.href = "<?php echo esc_url( admin_url( 'themes.php?page=upload-theme' ) ); ?>";
			uploadThemeBtn.classList.add("hide-if-no-js", "page-title-action");
			uploadThemeBtn.innerText = "Upload";

			themesPageWrap.insertBefore(uploadThemeBtn, addNewThemeBtn.nextSibling);
		});
		</script>

		<?php
	}

	/**
	 * Adds Upload Theme page to WordPress
	 */
	public static function upload_theme_page() {
		if ( ! isset( $_GET['page'] ) || 'upload-theme' !== $_GET['page'] ) {
			return;
		}

		require ABSPATH . 'wp-admin/includes/theme-install.php';
		global $title;

		?>

		<div class="wrap">
			<h1 class="wp-heading-inline"><?php echo esc_html( $title ); ?></h1>
			<a href="<?php echo esc_url( admin_url( 'themes.php' ) ); ?>" class="hide-if-no-js page-title-action">Manage Themes</a>

			<hr class="wp-header-end">

			<div class="show-upload-view">
				<div class="upload-theme">
				<?php install_themes_upload(); ?>
				</div>
			</div>

		<?php
	}

	/**
	 * Add premium Marketplace themes link (as a tab) to the themes browser.
	 */
	public static function add_premuim_themes_tab() {
		?>

		<script type="text/javascript">
		window.addEventListener('DOMContentLoaded', () => {
			const themesFilterContainer = document.querySelector('.wp-filter .filter-links');
			const bluehostPremiumThemesLink = document.createElement('li');

			bluehostPremiumThemesLink.innerHTML = '<a style="text-decoration: none;" onclick="location.href=\'admin.php?page=bluehost#/marketplace/themes\'"><?php esc_html_e( 'Premium', 'bluehost-wordpress-plugin' ); ?></a>';
			themesFilterContainer.appendChild(bluehostPremiumThemesLink);
		});
		</script>

		<?php
	}

	/**
	 * Filters query arguments to only retrieve block themes (full-site-editing) from the WordPress.org Themes API.
	 *
	 *  @since 2.8.0
	 *
	 * @param object $args   Arguments used to query for installer pages from the WordPress.org Themes API.
	 * @param string $action Requested action. Likely values are 'theme_information',
	 *                       'feature_list', or 'query_themes'.
	 *
	 * @return object updated $args for this request.
	 */
	public static function query_block_themes_args( $args, $action ) {

		if ( 'query_themes' === $action && 'popular' === $args->browse ) {
			if ( isset( $args->page ) ) {
				$page = $args->page;
			}

			$args = (object) array(
				'tag'      => 'full-site-editing',
				'per_page' => 30,
				'page'     => $page,
				'browse'   => 'popular',
			);
		}

		return $args;
	}

	/**
	 * Sorts the returned WordPress.org Themes API response to show self::$priority_themes on top.
	 *
	 * @since 2.8.0
	 *
	 * @param array|stdClass|WP_Error $res    WordPress.org Themes API response.
	 * @param string                  $action Requested action. Likely values are 'theme_information',
	 *                                        'feature_list', or 'query_themes'.
	 * @param stdClass                $args   Arguments used to query for installer pages from the WordPress.org Themes API.
	 *
	 * @return stdClass $res sorted themes with self::$priority_themes on top.
	 */
	public static function sort_query_themes_results( $res, $action, $args ) {

		if ( 'query_themes' === $action && 'popular' === $args->browse ) {

			$themes_to_show_first = array();

			foreach ( $res->themes as $key => $theme ) {
				if ( in_array( $theme->slug, self::$priority_themes, true ) ) {
					$themes_to_show_first[] = $theme;

					unset( $res->themes[ $key ] );
				}
			}

			$sorted_themes_res = array_merge( $themes_to_show_first, $res->themes );
			$res->themes       = $sorted_themes_res;
		}

		return $res;
	}

	/**
	 * Renders "Recommended" ribbon on the Yith Wonder theme card.
	 */
	public static function recommended_theme_ribbon() {
		?>

		<style>
			.bluehost-recommended-theme {
				box-shadow: 0 0 0 3px #a4acb9;
			}

			.bluehost-recommended-theme::after {
				content: "Recommended";
				position: absolute;
				top: -15px;
				right: 5%;
				background-color: #355ed3;
				color: white;
				padding: 5px 10px;
				border-radius: 1.5px;
			}
		</style>

		<script type="text/javascript">
			window.addEventListener('DOMContentLoaded', () => {

				const recommendedThemeSlug = 'yith-wonder';
				const themesContainer = document.querySelector('.theme-browser');

				const themesHaveRendered = (mutationList, observer) => {
					for (const mutation of mutationList) {
						if (mutation.type === 'childList') {
							const themes = document.querySelector('.theme-browser .themes');
							const yithTheme = themesContainer.querySelector('.theme[data-slug="' + recommendedThemeSlug + '"]');
							if (yithTheme) {
								yithTheme.classList.add('bluehost-recommended-theme');
							}
						}
					}
				}

				const observer = new MutationObserver(themesHaveRendered);
				observer.observe(themesContainer, {
					childList: true,
					subtree: true
				});

			});
		</script>

		<?php
	}
}
