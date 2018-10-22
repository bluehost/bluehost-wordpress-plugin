<?php

/**
 * Class EIG_WP_CLI_Remove_Orphan_Post_Meta
 *
 * This class is instantiated in /inc/cli-init.php
 */
class EIG_WP_CLI_Remove_Orphan_Post_Meta extends EIG_WP_CLI_Command {
	/**
	 * Remove Orphaned Postmeta.
	 *
	 * @param  null  $args        Unused.
	 * @param  array $assoc_args  Unused.
	 * @throws \WP_CLI\ExitException
	 */
	public function __invoke( $args, $assoc_args ) {
		global $wpdb;
		$sql = 'DELETE pm
			FROM ' . $wpdb->base_prefix . 'postmeta pm
			LEFT JOIN ' . $wpdb->base_prefix . 'posts wp ON wp.ID = pm.post_id
			WHERE wp.ID IS NULL';
		$result = $wpdb->query( $sql );
		if ( false === $result ) {
			$this->error('Failed to remove orphaned postmeta.');
		} elseif ( 0 === $result ) {
			$this->info( 'No orphaned postmeta found.' );
		} else {
			$this->success( 'Successfully removed ' . $result . ' orphaned postmeta records.' );
		}
	}
}
