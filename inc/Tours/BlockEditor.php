<?php

namespace Newfold\Plugin\Tours;

use \Newfold\Plugin\DefaultContent\Pages;

/**
 * Undocumented class
 */
class BlockEditor {

	/**
	 * Class instance.
	 *
	 * @var stdClass
	 */
	protected static $instance;

	/**
	 * Tour context type set by &tour= query parameter.
	 *
	 * @return false|string
	 */
	protected $tour_context = false;

	/**
	 * Get class instance.
	 *
	 * @return \Newfold\Plugin\Tours\BlockEditor|stdClass
	 */
	public static function return_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof \Newfold\Plugin\Tours\BlockEditor ) ) {
			self::$instance = new \Newfold\Plugin\Tours\BlockEditor();
			self::$instance->primary_init();
		}

		return self::$instance;
	}

	/**
	 * Initialize class.
	 */
	protected function primary_init() {
		add_action( 'rest_api_init', array( $this, 'initialize_endpoint' ) );
		if ( $this->should_load_tours() ) {
			add_action( 'load-post-new.php', array( $this, 'conditional_load_block_editor_tour' ) );
			add_action( 'load-post.php', array( $this, 'conditional_load_block_editor_tour' ) );
		}
	}

	/**
	 * Undocumented function
	 *
	 * @return void
	 */
	public function initialize_endpoint() {
		$api = new BlockEditorRestController();
		$api->register_routes();
	}

	/**
	 * Undocumented function
	 *
	 * @return boolean
	 */
	protected function should_load_tours() {
		$this->tour_context = isset( $_GET['tour'] ) ? filter_input( INPUT_GET, 'tour', FILTER_SANITIZE_STRING ) : false;
		if ( is_string( $this->tour_context ) && in_array( $this->tour_context, Pages::$contexts ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Use safety checks and conditional checks to load Bluehost Tours of Block Editor.
	 *
	 * @return void
	 */
	public function conditional_load_block_editor_tour() {
		if ( ! \is_user_logged_in() || ! \current_user_can( 'edit_posts' ) ) {
			return;
		}
		add_action( 'in_admin_header', array( $this, 'tour_mount_element' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'load_runtime_assets' ), 20 );
	}

	/**
	 * Undocumented function
	 *
	 * @return void
	 */
	public function load_runtime_assets() {
		\Bluehost\BuildAssets::inlineWebpackPublicPath( 'wp-element' );
		\Bluehost\BuildAssets::enqueue( 'editortours' );
	}

	/**
	 * Undocumented function
	 *
	 * @return void
	 */
	public function tour_mount_element() {
		?>
		<div id="newfold-editortours-loading">
			<div class="inner">
				<p><?php \_e('Loading Default', 'bluehost-wordpress-plugin'); ?> <?php echo ucfirst( \esc_html( $this->tour_context ) ); ?> <?php \_e('Page', 'bluehost-wordpress-plugin'); ?>...</p>
			</div>
		</div>
		<div id="newfold-editortours"></div>
		<?php
	}
}
