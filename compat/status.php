<?php

/**
 * CRUD Operations for the Compatibility Scanner
 */
class Bluehost_Plugin_Compatibility_Status {

	/**
	 * Default Scan Status
	 *
	 * @var string
	 */
	public static $default = 'unscanned';

	/**
	 * WordPress Option Key
	 *
	 * @var string
	 */
	public static $option_key = 'bluehost_plugin_compatibility_results';

	/**
	 * Get Scan Status
	 *
	 * @param null|string $type Set to 'all' to return the data array
	 */
	public static function get( $type = null ) {
		$data = get_option( self::$option_key, self::$default );
		if ( 'all' === $type ) {
			return $data;
		}
		if ( is_array( $data ) && ! empty( $data['status'] ) ) {
			return $data['status'];
		}

		return self::$default;
	}

	/**
	 * Set Scan Status
	 *
	 * @param object $status - Scan object to set
	 */
	public static function set( $status ) {
		$data = array();
		if ( ! empty( $status ) && is_string( $status ) ) {
			$data['status']    = $status;
			$data['timestamp'] = current_time( 'mysql' );

			return update_option( self::$option_key, $data );
		} elseif ( ! empty( $status && is_object( $status ) ) ) {
			$data['status']    = $status->result;
			$data['timestamp'] = current_time( 'mysql' );
		}

		update_option( self::$option_key, $data );

		return false;
	}

	/**
	 * Reset/Delete the stored scan results
	 */
	public static function reset() {
		delete_option( self::$option_key );
	}

}
