<?php

namespace Bluehost\RestApi;

/**
 * Class SettingsController
 */
class SettingsController extends \WP_REST_Controller {

	/**
	 * The namespace of this controller's route.
	 *
	 * @var string
	 */
	protected $namespace = 'bluehost/v1';

	/**
	 * Registers the settings route
	 */
	public function register_routes() {

		register_rest_route(
			$this->namespace,
			'/settings',
			[
				[
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => [ $this, 'get_item' ],
					'permission_callback' => [ $this, 'check_permission' ],
				],
				[
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => [ $this, 'update_item' ],
					'permission_callback' => [ $this, 'check_permission' ],
				],
			]
		);

	}

	/**
	 * Retrieves the settings handled by the plugin.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 *
	 * @return \WP_REST_Response
	 */
	public function get_item( $request ) {
		return new \WP_REST_Response( $this->get_current_settings() );
	}

	/**
	 * Updates settings for the settings object.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 *
	 * @return \WP_REST_Response
	 */
	public function update_item( $request ) {
		$settings = $this->get_current_settings();
		$params   = $request->get_params();
		foreach ( $settings as $setting => $value ) {
			if ( ! array_key_exists( $setting, $params ) ) {
				continue;
			}
			if ( ! is_null( $params[ $setting ] ) ) {
				$new_value = $params[ $setting ];
				switch ( $setting ) {
					case 'comingSoon':
						$new_value = ( $new_value ) ? 'true' : 'false';
						update_option( 'mm_coming_soon', $new_value );
						break;
					case 'autoUpdatesMajorCore':
						$new_value = ( $new_value ) ? 'true' : 'false';
						update_option( 'allow_major_auto_core_updates', $new_value );
						break;
					case 'autoUpdatesMinorCore':
						update_option( 'allow_minor_auto_core_updates', $new_value );
						break;
					case 'autoUpdatesPlugins':
						$new_value = ( $new_value ) ? 'true' : 'false';
						update_option( 'auto_update_plugin', $new_value );
						break;
					case 'autoUpdatesThemes':
						$new_value = ( $new_value ) ? 'true' : 'false';
						update_option( 'auto_update_theme', $new_value );
						break;
					case 'autoUpdatesTranslations':
						$new_value = ( $new_value ) ? 'true' : 'false';
						update_option( 'auto_update_translation', $new_value );
						break;
					case 'disableCommentsOldPosts':
						update_option( 'close_comments_for_old_posts', $new_value );
						break;
					case 'closeCommentsDays':
						update_option( 'close_comments_days_old', $new_value );
						break;
					case 'commentsPerPage':
						update_option( 'comments_per_page', $new_value );
						break;
					case 'contentRevisions':
						$revisions = intval( $new_value );
						exec( "wp config set WP_POST_REVISIONS $revisions --type=constant --raw" ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.system_calls_exec
						break;
					case 'emptyTrashDays':
						$days = intval( $new_value );
						exec( "wp config set EMPTY_TRASH_DAYS $days --type=constant --raw" ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.system_calls_exec
						break;
					case 'cacheLevel':
						// Include misc.php because the cache level update requires save_mod_rewrite_rules()
						// This should probably be moved to the Endurance Page Cache plugin later
						include 'wp-admin/includes/misc.php';
						update_option( 'endurance_cache_level', $new_value );
						break;
				}
			}
		}

		return $this->get_item( $request );
	}

	/**
	 * Retrieve the existing saved array of settings
	 *
	 * @return array $settings List of the settings and their values
	 */
	public function get_current_settings() {

		// By default, we treat all auto updates as on
		$major        = ( 'true' === get_option( 'allow_major_auto_core_updates', 'true' ) );
		$minor        = ( 'true' === get_option( 'allow_minor_auto_core_updates', 'true' ) );
		$plugins      = ( 'true' === get_option( 'auto_update_plugin', 'true' ) );
		$themes       = ( 'true' === get_option( 'auto_update_theme', 'true' ) );
		$translations = ( 'true' === get_option( 'auto_update_translation', 'true' ) );

		// If the core update constant is falsey, then override core db values to force false
		if ( defined( 'WP_AUTO_UPDATE_CORE' ) && ! WP_AUTO_UPDATE_CORE ) {
			$major = false;
			$minor = false;
		}

		// If auto updates are disabled entirely, override everything to be false
		if ( defined( 'AUTOMATIC_UPDATER_DISABLED' ) && AUTOMATIC_UPDATER_DISABLED ) {
			$major        = false;
			$minor        = false;
			$plugins      = false;
			$themes       = false;
			$translations = false;
		}

		$settings = array(
			'comingSoon'              => ( 'true' === get_option( 'mm_coming_soon', 'false' ) ),
			'autoUpdatesMajorCore'    => $major,
			'autoUpdatesMinorCore'    => $minor,
			'autoUpdatesPlugins'      => $plugins,
			'autoUpdatesThemes'       => $themes,
			'autoUpdatesTranslations' => $translations,
			'disableCommentsOldPosts' => ( 1 === get_option( 'close_comments_for_old_posts', 0 ) ),
			'closeCommentsDays'       => intval( get_option( 'close_comments_days_old', 14 ) ),
			'commentsPerPage'         => intval( get_option( 'comments_per_page', 50 ) ),
			'contentRevisions'        => intval( defined( 'WP_POST_REVISIONS' ) ? WP_POST_REVISIONS : 5 ),
			'emptyTrashDays'          => intval( defined( 'EMPTY_TRASH_DAYS' ) ? EMPTY_TRASH_DAYS : 30 ),
			'cacheLevel'              => intval( get_option( 'endurance_cache_level', 2 ) ),
		);

		return $settings;

	}

	/**
	 * Check permissions for routes.
	 *
	 * @return bool|\WP_Error
	 */
	public function check_permission() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error( 'rest_forbidden_context', __( 'Sorry, you are not allowed to access this endpoint.', 'bluehost-wordpress-plugin' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

}
