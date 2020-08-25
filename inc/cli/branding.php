<?php

/**
 * Class BH_WP_CLI_Branding
 *
 * This class is instantiated in /inc/cli-init.php
 */
class BH_WP_CLI_Branding extends BH_WP_CLI_Command {

	/**
	 * @var string - Stores brand slug
	 * @see BH_WP_CLI_Loader->brand_aliases & BH_WP_CLI_Loader->must_use_aliases
	 */
	protected static $option_key = 'mm_brand';

	/**
	 * @var string - Stores SVG of current brand's icon in database.
	 */
	protected static $icon_transient_key = 'mm_icon_hash';

	/**
	 * @var string - Remote location of branding.json config file.
	 */
	protected static $api_branding_file = MOJO_ASSETS_URL . 'json/branding.json';

	/**
	 * @var string - User-provided action.
	 */
	protected $action;

	/**
	 * @var string - User-provided brand.
	 */
	protected $brand;

	/**
	 * Manage Endurance Branding and Conditional Connections
	 *
	 * @param array $args
	 * @param array $assoc_args
	 *
	 * @throws \WP_CLI\ExitException
	 */
	public function __invoke( $args, $assoc_args ) {
		/**
		 * Initialize $this->action & $this->brand
		 */
		$this->init_class_params( $args, $assoc_args );

		/**
		 * Route Sub-commands to Methods
		 */
		switch ( $this->action ) {
			case 'update':
				$this->update();
				break;
			case 'remove':
				$this->remove();
				break;
		}
	}

	/**
	 * Initialize $this->action, $this->brand and other class vars.
	 *
	 * @param array $args
	 * @param array $assoc_args
	 */
	protected function init_class_params( $args, $assoc_args ) {
		/**
		 * Validate & Decide $this->action + $this->brand
		 */
		if ( isset( $args[0] ) && 'update' === $args[0] ) {
			$this->action = $args[0];
			if ( ! empty( $args[1] ) ) {
				$this->brand = $args[1];
			} else {
				$this->error( 'No brand identified to update.' );
			}
		} elseif ( isset( $args[0] ) && 'remove' === $args[0] ) {
			$this->action = 'remove';
		} else {
			if ( ! empty( $assoc_args['update'] ) ) {
				$this->action = 'update';
				$this->brand  = $assoc_args['update'];
			} elseif ( isset( $assoc_args['remove'] ) ) {
				$this->action = 'remove';
			} else {
				$this->error( 'No valid action provided.' );
			}
		}
	}

	/**
	 * wp {alias} branding update {brand}
	 *       -- -- -- OR -- -- --
	 * wp {alias} branding --update={brand}
	 *
	 * @throws \WP_CLI\ExitException
	 */
	protected function update() {
		$valid_brands   = $this->get_brands();
		$existing_brand = get_option( static::$option_key, null );

		if ( in_array( $this->brand, $valid_brands ) ) {
			/**
			 * Check if passed brand param matches saved brand
			 */
			if ( $this->brand === $existing_brand ) {
				$this->success( 'Branding already set to "' . $this->brand . '", wiping transients...' );
				delete_transient( static::$icon_transient_key );
				\WP_CLI::halt( 200 );
			} elseif ( update_option( static::$option_key, $this->brand ) ) {
				delete_transient( static::$icon_transient_key );
				$this->success( 'Plugin branding updated to: ' . $this->brand );
			} else {
				$this->error( 'Failed to update plugin branding to: ' . $this->brand );
			}
		} else {
			if ( ! empty( $valid_brands ) ) {
				$lowercase = array_map( 'strtolower', $valid_brands );
				if ( in_array( $this->brand, $lowercase ) ) {
					$this->warning( 'WRONG CASE! Try that string again with the correct case.' );
				}
				$this->colorize_log( 'Valid brands: ' );
				$this->table( $valid_brands, array( '---', 'BRAND SLUG' ) );
			}
			$this->error( 'Didn\'t receive valid brand in subcommand or flag value.' );
		}
	}

	/**
	 * wp {alias} branding remove
	 *       -- -- -- OR -- -- --
	 * wp {alias} branding --remove
	 */
	protected function remove() {
		if ( delete_option( static::$option_key ) ) {
			delete_transient( static::$icon_transient_key );
			$this->success( 'Plugin branding removed successfully.' );
		} else {
			$this->warning( 'No plugin branding found. Try "wp {alias} branding update {brand}"' );
			if ( ! empty( $valid_brands = $this->get_brands() ) ) {
				$this->colorize_log( 'Valid brands: ' );
				$this->table( $valid_brands, array( '---', 'BRAND SLUG' ) );
			}
		}
	}

	/**
	 * Helper to hit Mojo API Cache for JSON Branding Map.
	 *
	 * @return array
	 */
	protected function get_brands() {
		$valid_brands = array();
		$brands       = bh_api_cache( static::$api_branding_file );
		if ( ! is_wp_error( $brands ) && $brands = json_decode( $brands['body'] ) ) {
			$brands = (array) $brands;
			while ( false !== ( $brand = array_search( 'default', $brands ) ) ) {
				unset( $brands[ $brand ] );
			}
			$valid_brands = array_keys( $brands );
		}

		return $valid_brands;
	}
}
