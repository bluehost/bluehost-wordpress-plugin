<?php

namespace Bluehost\Tours;

class EditorTours {
	/**
	 * Class instance.
	 *
	 * @var stdClass
	 */
	protected static $instance;
	/**
	 * Tour type set by &tour=
	 *
	 * @return false|string
	 */
	protected $tour_type = false;
	/**
	 * Valid string values for a tour
	 *
	 * @var array
	 */
	protected $types = array( 'about', 'contact', 'general' );
	/**
	 * Get class instance.
	 *
	 * @return \Bluehost\Tours\EditorTours|stdClass
	 */
	public static function return_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof \Bluehost\Tours\EditorTours ) ) {
			self::$instance = new \Bluehost\Tours\EditorTours();
			self::$instance->primary_init();
		}

		return self::$instance;
	}
	/**
	 * Initialize class.
	 */
	protected function primary_init() {
		if ( $this->should_load_tours() ) {
			add_action( 'load-post-new.php', array( $this, 'conditional_load_block_editor_tour' ) );
			add_action( 'load-post.php', array( $this, 'conditional_load_block_editor_tour' ) );
		}
	}

	protected function should_load_tours() {
		$this->tour_type = isset( $_GET['tour'] ) ? filter_input( INPUT_GET, 'tour', FILTER_SANITIZE_STRING ) : false;
		if ( is_string( $this->tour_type ) && in_array( $this->tour_type, $this->types ) ) {
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
		if ( ! is_user_logged_in() || ! current_user_can( 'edit_posts' ) ) {
			return;
		}
		add_action( 'in_admin_header', array( $this, 'tour_mount_element' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'load_runtime_assets' ), 20 );
	}

	public function load_runtime_assets() {
		\Bluehost\BuildAssets::inlineWebpackPublicPath( 'wp-element' );
		\Bluehost\BuildAssets::enqueue( 'editortours' );
	}

	public function tour_mount_element() {
		?>
		<!-- <style type="text/css">
		#bluehost-tours {
			display:block !important;
			position: absolute;
			top: 0;
			left: 0;
			width: 200px;
			height: 200px;
			background-color: #cd1713;
			z-index: 99999;
		}
		</style> -->
		<div id="bluehost-tours">
			<svg class="shepherd-modal-is-visible shepherd-modal-overlay-container"><path d="M1687,948H0V0H1687V948ZM0,0a0,0,0,0,0-0,0V0a0,0,0,0,0,0,0H0a0,0,0,0,0,0-0V0a0,0,0,0,0-0-0Z"></path></svg>
		</div>
		<?php
	}
}
