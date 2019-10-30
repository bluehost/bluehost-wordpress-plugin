<?php

namespace Bluehost;

/**
 * Class UpgradeHandler
 *
 * Responsible for managing upgrade routines.
 */
class UpgradeHandler {

	/**
	 * The previous version.
	 *
	 * @var string
	 */
	protected $old_version;

	/**
	 * The current version.
	 *
	 * @var string
	 */
	protected $new_version;

	/**
	 * The directory containing upgrade routines.
	 *
	 * @var string
	 */
	protected $upgrade_dir;

	/**
	 * Bluehost_Upgrade_Handler constructor.
	 *
	 * @param string $upgrade_dir The directory containing upgrade routines.
	 * @param string $old_version The previous version.
	 * @param string $new_version The current version.
	 */
	public function __construct( $upgrade_dir, $old_version, $new_version ) {
		$this->upgrade_dir = $upgrade_dir;
		$this->old_version = $old_version;
		$this->new_version = $new_version;
	}

	/**
	 * Detect when an upgrade is necessary and run the updates.
	 *
	 * @return bool Whether or not an upgrade routine ran.
	 */
	public function maybe_upgrade() {
		$should_upgrade = $this->should_upgrade();
		if ( $should_upgrade ) {
			$available_routines = $this->get_available_upgrade_routines();
			$required_routines  = $this->get_required_upgrade_routines( $available_routines );
			$this->run_upgrade_routines( $required_routines );
		}

		return $should_upgrade;
	}

	/**
	 * Check if we should upgrade.
	 *
	 * @return bool
	 */
	public function should_upgrade() {
		return $this->old_version !== $this->new_version;
	}

	/**
	 * Get a collection of available upgrade routines.
	 *
	 * @return array A collection of filepaths indexed by versions.
	 */
	public function get_available_upgrade_routines() {
		$routines  = array();
		$filepaths = glob( rtrim( $this->upgrade_dir, '/' ) . '/*.php' );
		if ( $filepaths ) {
			$versions = str_replace( '.php', '', array_map( 'basename', $filepaths ) );
			$routines = array_combine( $versions, $filepaths );
		}

		return $routines;
	}

	/**
	 * Get a collection of the required upgrade routines.
	 *
	 * @param array $available_routines A collection of available upgrade routines.
	 *
	 * @return array A collection of filepaths indexed by versions.
	 */
	public function get_required_upgrade_routines( array $available_routines ) {
		$routines = array();
		$required = array_filter( array_keys( $available_routines ), array( $this, 'filter_upgrade_routines' ) );
		if ( $required ) {
			$routines = array_intersect_key( $available_routines, array_combine( $required, $required ) );
		}

		return $routines;
	}

	/**
	 * Run an ordered set of upgrade routines.
	 *
	 * @param array $routines A collection of filepaths indexed by versions.
	 */
	public function run_upgrade_routines( array $routines ) {
		foreach ( $routines as $file ) {
			if ( file_exists( $file ) ) {
				require $file;
			}
		}
	}

	/**
	 * Filter to find the versions for which we need to run an upgrade routine.
	 *
	 * @param string $version The current version.
	 *
	 * @return bool Whether or not to keep the routine.
	 */
	protected function filter_upgrade_routines( $version ) {
		return version_compare( $this->old_version, $version, '<' ) && version_compare( $this->new_version, $version, '>=' );
	}

}
