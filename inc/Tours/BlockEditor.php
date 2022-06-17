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
	 * @var false|string
	 */
	protected $tour_context = false;

	/**
	 * Trigger context is query parameter [ (int) 1 ] or post meta [ (int) 2 ]
	 *
	 * @var boolean|int
	 */
	protected $trigger_context = false;

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
		$this->trigger_context = $this->should_load_tours();
		if ( $this->trigger_context ) {
			add_action( 'load-post.php', array( $this, 'conditional_load_block_editor_tour' ) );
		}

		// register nf_dc_placeholders meta to expose it to rest api
		register_meta(
			'post',
			'nf_dc_placeholders',
			array(
				'type'         => 'string',
				'description'  => 'Save initial placeholder id and text values for default content.',
				'show_in_rest' => true,
				'single'       => true,
			)
		);
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
	 * @return false|int
	 */
	protected function should_load_tours() {
		$this->tour_context = isset( $_GET['tour'] ) ? filter_input( INPUT_GET, 'tour', FILTER_SANITIZE_STRING ) : false;
		// With tour parameter, always load
		if ( is_string( $this->tour_context ) && in_array( $this->tour_context, Pages::$contexts ) ) {
			return 1;
		}

		$post_id = isset( $_GET['post'] ) ? filter_input( INPUT_GET, 'post', FILTER_SANITIZE_NUMBER_INT ) : false;

		// With post meta always load assets but script will look for tour parameter to auto-start
		// so this mostly just initializes stylesheet, validation and scrubbing logic
		$this->tour_context = \get_post_meta( $post_id, 'nf_dc_page', true );
		if ( $post_id && ! empty( $this->tour_context ) ) {
			$status = \get_post_status( $post_id );
			if ( $status ) {
				return 2;
			}
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

		$windowprops = 'window.nfTourContext="' . $this->tour_context . '";';
		// save initial placeholder text for all future comparisons
		$post_id            = isset( $_GET['post'] ) ? filter_input( INPUT_GET, 'post', FILTER_SANITIZE_NUMBER_INT ) : false;
		$nf_dc_placeholders = \get_post_meta( $post_id, 'nf_dc_placeholders', true );
		if ( $post_id && ! empty( $nf_dc_placeholders ) ) {
				$windowprops .= 'window.nfPlaceholders=' . $nf_dc_placeholders . ';';
		}

		\Bluehost\BuildAssets::inlineWebpackPublicPath( 'wp-element' );
		\wp_add_inline_script(
			\Bluehost\BuildAssets::$asset_handle_prefix . 'editortours',
			$windowprops,
			'before'
		);
		\Bluehost\BuildAssets::enqueue( 'editortours' );
	}

	/**
	 * Undocumented function
	 *
	 * @return void
	 */
	public function tour_mount_element() {
		if ( false === $this->trigger_context ) {
			return;
		}
		?>
			<div id="newfold-editortours-loading">
				<div class="inner">
					<div class="bwa-loader"></div>
					<p>
						<?php \esc_html_e( 'Loading', 'bluehost-wordpress-plugin' ); ?>
						<span style="text-transform: capitalize;"><?php echo \esc_html( $this->tour_context ); ?></span>
						<?php \esc_html_e( 'Page', 'bluehost-wordpress-plugin' ); ?>...
					</p>
				</div>
			</div>
			<div id="newfold-editortours"></div>
		<?php
	}
}
