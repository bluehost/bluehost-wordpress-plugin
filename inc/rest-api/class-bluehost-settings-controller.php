<?php
/**
 * REST API: WP_Settings_Controller class
 *
 * @package WordPress
 * @subpackage REST_API
 * @since 4.7.0
 */
/**
 * Class Bluehost Settings Controller
 */
class Bluehost_Settings_Controller extends WP_REST_Controller {

	/**
	 * The namespace of this controller's route.
	 *
	 * @var string
	 */
	protected $namespace = 'bluehost/v1';

	/**
	 * Prefixes of Bluehost-related database options
	 */
	public $prefixes = array(
		'bh_',
		'mm_',
	);

	public function register_routes() {

		register_rest_route(
			$this->namespace,
			'/settings',
			[
				[
					'methods'             => WP_REST_SERVER::READABLE,
					'callback'            => [ $this, 'get_item' ],
					'permission_callback' => [ $this, 'check_permission' ],
				],
				[
					'methods'             => WP_REST_SERVER::EDITABLE,
					'callback'            => [ $this, 'update_item' ],
					'permission_callback' => [ $this, 'check_permission' ],
				],
			]
		);

	}

	/**
	 * Retrieves the settings handled by the plugin.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return array|WP_Error Array on success, or WP_Error object on failure.
	 */
	public function get_item( $request ) {
		return new WP_REST_Response( $this->get_current_settings() );
	}

	/**
	 * Updates settings for the settings object.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return array|WP_Error Array on success, or error object on failure.
	 */
	public function update_item( $request ) {
		return $this->get_item( $request );
	}

	public function get_current_settings() {
		return array(
			'comingSoon'              => 'true' === get_option( 'mm_coming_soon', 0 ) ? 1 : 0,
			'autoUpdates'             => array(
				'majorCore'    => defined( 'WP_AUTO_UPDATE_CORE' ) ? WP_AUTO_UPDATE_CORE : true,
				'minorCore'    => get_option( 'allow_minor_auto_core_updates', true ),
				'plugins'      => get_option( 'auto_update_plugin', true ),
				'themes'       => get_option( 'auto_update_theme', true ),
				'translations' => get_option( 'auto_update_translation', true ),
			),
			'disableCommentsOldPosts' => get_option( 'close_comments_for_old_posts', false ),
			'closeCommentsDays'       => get_option( 'close_comments_days_old', 14 ),
			'commentsPerPage'         => get_option( 'comments_per_page', 50 ),
			'contentRevisions'        => defined( 'WP_POST_REVISIONS' ) ? WP_POST_REVISIONS : 40,
			'emptyTrashDays'          => defined( 'EMPTY_TRASH_DAYS' ) ? EMPTY_TRASH_DAYS : 30,
			'cacheLevel'              => get_option( 'endurance_cache_level', 2 ),
			'cachingEnabled'          => ( get_option( 'endurance_cache_level', 2 ) > 0 ) ? true : false,
		);
	}

	/**
	 * Check permissions for routes.
	 *
	 * @return bool
	 */
	public function check_permission() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return new WP_Error( 'rest_forbidden_context', __( 'Sorry, you are not allowed to access this endpoint.' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}

	/**
	 * Constructor.
	 *
	 * @since 4.7.0
	 */
	public function __construct() {}

}
