<?php
namespace Bluehost\Plugin\CLI;

use \WP_CLI;

/**
 * We frequently use wp search-replace in a myriad of systems for replacing siteurl in the WordPress Options table.
 *
 * Some high-adoption WordPress products store JSON in metadata tables with slashed URLs.
 *
 * These enhancements are unfortunate-but-necessary code to create a reliable experience.
 */
class Enhanced_WP_Search_Replace {

	/**
	 * Constant written to wp-config.php as a filesystem-based lock.
	 *
	 * @var string
	 */
	protected $safety_lock_key = 'BLUEHOST_SEARCH_REPLACE_MOD_RUNNING';

	/**
	 * Hook into wp search-replace after it's invoked
	 */
	public function __construct() {
		WP_CLI::add_hook( 'after_invoke:search-replace', array( $this, 'enhancements' ) );
	}

	/**
	 * Method hooked to run after wp search-replace has been invoked.
	 *
	 * @return void
	 */
	public function enhancements() {

		/**
		 * Prevent recursive loop from infinite re-invocation.
		 */
		if ( $this->is_safety_locked() ) {
			return;
		}

		$siteurl    = get_option( 'siteurl' );
		$runner     = WP_CLI::get_runner();
		$args       = is_object( $runner ) && property_exists( $runner, 'arguments' ) ? $runner->arguments : array();
		$assoc_args = is_object( $runner ) && property_exists( $runner, 'assoc_args' ) ? $runner->assoc_args : array();
		$old        = ! empty( $args[1] ) ? $args[1] : null;
		$new        = ! empty( $args[2] ) ? $args[2] : null;

		/**
		 * Bail if something's gone terribly wrong, it isn't a siteurl replacement search-replace or one of the URLs isn't the siteurl.
		 *
		 * Notes:
		 * - This purposefully doesn't validate URLs are valid. We would have to check both and then this would bail if someone fudges a search-replace creating a mess.
		 * - Both arguments need to be checked incase of --dry-run, etc.
		 * - WP-CLI already validates $old !== $new.
		 */
		$truthy = false;
		if ( empty( $siteurl )
			|| empty( $positional_args )
			|| 'search-replace' !== $args[0]
			|| ( $siteurl !== $old && $siteurl !== $new )
		) {
			return;
		}

		/**
		 * Form new wp search-replace command pieces
		 */
		$slashed_arguments = array(
			'search-replace', // cmd
			$this->transform_to_slashed( $old ), // old
			$this->transform_to_slashed( $new ), // new
			$this->reform_assoc_args_string( $assoc_args ), // --flags
		);
		$slashed_command   = implode( ' ', $slashed_arguments );

		$this->enable_safety_lock();
		WP_CLI::runcommand( $slashed_command ); // run slashed wp search-replace [old] [new]
		$this->disable_safety_lock();
	}

	/**
	 * These str_replace *purposefully* double-slashed. When executed they're properly slashed.
	 *
	 * You can debug what they're parsed to inside the logic for the safety value constant above
	 * and checking the values in WP_CLI::get_runner()->arguments.
	 *
	 * @param string $url - Might not be a valid URL, not validated on-purpose.
	 * @return string
	 */
	private function transform_to_slashed( $url ) {
		return str_replace( '/', '\\\/', $url );
	}

	/**
	 * Take an associative array of key-value pairs and transform into WP-CLI flags.
	 *
	 * @param array $assoc_args - WP-CLI assoc args
	 * @return string
	 */
	private function reform_assoc_args_string( $assoc_args ) {
		$assoc_args_string = '';
		if ( ! empty( $assoc_args ) ) {
			foreach ( $assoc_args as $flag => $value ) {
				$flag = '--' . $flag;
				if ( is_string( $value ) ) {
					$flag = $flag . '=' . $value;
				}
				$assoc_args_string = trim( $assoc_args_string . ' ' . $flag );
			}
		}

		return $assoc_args_string;
	}

	/**
	 * Safety value to prevent recursive calls. Because this function is invoked after every wp search-replace
	 * and we hook into search-replace itself, we'd otherwise create loops. It's much better this gets stuck on than off.
	 *
	 * Filesystem might be slower, but is safer to validate than options which can theoretically get stuck in an object cache.
	 *
	 * @return boolean
	 */
	private function is_safety_locked() {
		return defined( $this->safety_lock_key ) && true === constant( $this->safety_lock_key );
	}

	/**
	 * Like all WP-CLI commands, error states will break subsequent execution.
	 *
	 * @return void
	 */
	private function enable_safety_lock() {
		WP_CLI::runcommand( 'config set ' . $this->safety_lock_key . ' true --raw --quiet' );
	}

	/**
	 * Removes safety valve from wp-config.php
	 *
	 * @return void
	 */
	private function disable_safety_lock() {
		WP_CLI::runcommand( 'config delete ' . $this->safety_lock_key . ' --quiet' );
	}
}

new Enhanced_WP_Search_Replace();
