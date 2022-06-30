<?php

use \WP_CLI\Utils;

/**
 * Class BH_WP_CLI_Cache
 *
 * This class is instantiated in /inc/cli-init.php
 */
class BH_WP_CLI_Cache extends BH_WP_CLI_Command {

	/**
	 * Organization Raw Content URL Base.
	 *
	 * @var string - orl URL
	 */
	protected static $org_url = 'https://raw.githubusercontent.com/bluehost';

	/**
	 * Types of caching available.
	 *
	 * @var array - types of caching
	 */
	protected static $cache_types = array(
		'page',
		'browser',
		'object',
	);

	/**
	 * Actions taken with all caching types.
	 *
	 * @var array - cache actions
	 */
	protected static $cache_actions = array(
		'add',
		'remove',
		'status',
	);

	/**
	 * GitHub Repo + Branch Slug.
	 *
	 * @var string - repo/branch
	 */
	protected static $page_repo_branch = 'endurance-page-cache/production';

	/**
	 * Page Cache Filename.
	 *
	 * @var string - page filename
	 */
	protected static $page_filename = 'endurance-page-cache.php';

	/**
	 * GitHub Repo + Brand Slug.
	 *
	 * @var string - repo/branch
	 */
	protected static $browser_repo_branch = 'endurance-browser-cache/production';

	/**
	 * Browser Cache Filename.
	 *
	 * @var string - browser filename
	 */
	protected static $browser_filename = 'endurance-browser-cache.php';

	/**
	 * MU (/wp-content/mu) path on server.
	 *
	 * @var string - mu path
	 */
	protected static $mu_plugin_dir = WP_CONTENT_DIR . '/mu-plugins';

	/**
	 * User-provided provided action.
	 *
	 * @var string|null - current action
	 */
	protected $current_action;

	/**
	 * User-provided caching type.
	 *
	 * @var string|null - current cache type
	 */
	protected $current_type;

	/**
	 * Determined filename based on caching type.
	 *
	 * @var string|null - current filename
	 */
	protected $current_filename;

	/**
	 * Current path for mu plugin file.
	 *
	 * @var string|null - current plugin path
	 */
	protected $current_plugin_path;

	/**
	 * Current url for remote copy of plugin file.
	 *
	 * @var string|null - current remote url
	 */
	protected $current_remote;

	/**
	 * Manage Full-Page Caching, Browser Caching and Object Caching.
	 *
	 * @param Array $args - args
	 * @param Array $assoc_args - more args
	 */
	public function __invoke( $args, $assoc_args ) {
		if ( ! isset( $args[0] ) || ! isset( $args[1] ) ) {
			$this->error( 'Arguments didn\'t have first two params set' );
			WP_CLI::halt( 400 );
		}

		$this->current_type   = $args[0];
		$this->current_action = $args[1];

		if ( ! in_array( $this->current_type, static::$cache_types ) ) {
			$this->error( 'Cache type bad.' );
			WP_CLI::halt( 400 );

		}

		if ( ! in_array( $this->current_action, static::$cache_actions ) ) {
			$this->error( 'Cache action bad.' );
			WP_CLI::halt( 400 );
		}

		switch ( $this->current_action ) {
			case 'add':
				$this->add();
				break;
			case 'remove':
				$this->remove();
				break;
		}
	}

	/**
	 * WP {alias} cache {$this->current_type} add
	 */
	private function add() {
		switch ( $this->current_type ) {
			case 'page':
				$this->current_plugin_path = trailingslashit( static::$mu_plugin_dir ) . static::$page_filename;
				$this->current_remote      = $this->build_url(
					static::$org_url,
					static::$page_repo_branch,
					static::$page_filename
				);
				$this->current_filename    = static::$page_filename;
				$this->handle_remote_mu_plugin_load();
				break;
			case 'browser':
				$this->current_plugin_path = trailingslashit( static::$mu_plugin_dir ) . static::$browser_filename;
				$this->current_remote      = $this->build_url(
					static::$org_url,
					static::$browser_repo_branch,
					static::$browser_filename
				);
				$this->current_filename    = static::$browser_filename;
				$this->handle_remote_mu_plugin_load();
				break;
			case 'object':
				$this->colorize_log( 'Object caching isn\'t available right now.' );
				break;
		}
	}

	/**
	 * WP {alias} cache {$this->current_type} remove
	 */
	private function remove() {
		switch ( $this->current_type ) {
			case 'page':
				$this->current_plugin_path = Utils\trailingslashit( static::$mu_plugin_dir ) . static::$page_filename;
				$this->remove_mu_plugin();
				break;
			case 'browser':
				$this->current_plugin_path = Utils\trailingslashit( static::$mu_plugin_dir ) . static::$browser_filename;
				$this->remove_mu_plugin();
				break;
			case 'object':
				$this->colorize_log( 'Object caching isn\'t available right now.' );
				break;
		}
	}

	/**
	 * Handle remote mu plugin load
	 */
	private function handle_remote_mu_plugin_load() {
		$this->assure_mu_plugin_dir();
		if ( file_exists( $this->current_plugin_path ) ) {
			$this->confirm(
				ucfirst( $this->current_type ) . ' caching plugin already exists. Replace with fresh copy?',
				'underline'
			);
		}
		$this->get_plugin_from_githubraw( $this->current_remote, $this->current_filename );
	}

	/**
	 * Use WordPress HTTP Library to Retrieve Single-File Drop-In Plugin from GitHub Repository
	 *
	 * @param string $url - url
	 * @param string $filename - file
	 * @param string $dir - directory
	 *
	 * @throws \WP_CLI\ExitException - throws it.
	 */
	private function get_plugin_from_githubraw( $url, $filename, $dir = '' ) {
		$this->colorize_log( 'Downloading ' . ucfirst( $this->current_type ) . ' Cache from GitHub...' );
		$dir      = ! empty( $dir ) ? Utils\trailingslashit( $dir ) : Utils\trailingslashit( static::$mu_plugin_dir );
		$response = Utils\http_request( 'GET', $url );
		if (
			is_object( $response )
			&& isset( $response->status_code )
			&& isset( $response->body )
			&& 200 === $response->status_code
		) {
			$this->colorize_log( 'Adding timestamp to file...' );
			$file_contents = $response->body . '/**' . PHP_EOL . '* FILE CREATED VIA WP-CLI' . PHP_EOL . '* ' . current_time( 'mysql' ) . PHP_EOL . '*/' . PHP_EOL;
			file_put_contents( $dir . $filename, $file_contents );
			if ( file_exists( $dir . $filename ) ) {
				if ( ! function_exists( 'save_mod_rewrite_rules' ) ) {
					include ABSPATH . 'wp-admin/includes/misc.php';
				}
				save_mod_rewrite_rules();
				$this->success( ucfirst( $this->current_type ) . ' Cache placed in /mu-plugins/' . $filename . '. It\'s active!' );
			} else {
				$this->error( 'Couldn\'t write ' . $this->current_type . ' cache file to ' . $dir );
			}
		} else {
			$this->error( 'Couldn\'t download ' . $this->current_type . ' cache from ' . $url );
		}
	}

	/**
	 * Check for and create /wp-content/mu-plugins directory prior to writing to it.
	 */
	private function assure_mu_plugin_dir() {

		if ( is_dir( static::$mu_plugin_dir ) ) {

			$this->colorize_log( 'Found ' . static::$mu_plugin_dir, '', 'G' );

			return;
		} else {
			$tried_making_dir = true;
			$this->colorize_log( 'Creating ' . static::$mu_plugin_dir . '...' );

			mkdir( static::$mu_plugin_dir );
		}

		if ( $tried_making_dir && is_dir( static::$mu_plugin_dir ) ) {
			$this->success( 'Created ' . static::$mu_plugin_dir );
		} else {
			$this->error( 'Failed to create ' . static::$mu_plugin_dir . '. Update write permissions and try again.' );
		}
	}

	/**
	 * Remove $this->current_plugin_path from directory, report failure or if it wasn't there.
	 */
	private function remove_mu_plugin() {
		if ( file_exists( $this->current_plugin_path ) ) {
			if ( unlink( $this->current_plugin_path ) ) {
				if ( ! function_exists( 'save_mod_rewrite_rules' ) ) {
					include ABSPATH . 'wp-admin/includes/misc.php';
				}
				save_mod_rewrite_rules();
				$this->success( ucfirst( $this->current_type ) . ' caching disabled.' );
			} else {
				$this->error( 'Failed to remove ' . ucfirst( $this->current_type ) . ' cache file from ' . static::$mu_plugin_dir );
			}
		} else {
			$this->warning( ucfirst( $this->current_type ) . ' caching plugin file does not exist.' );
		}
	}

	/**
	 * Simple URL construction method from class constants
	 *
	 * @param string $root - url root
	 * @param string $repo_branch - repo branch
	 * @param string $filename - filename
	 *
	 * @return string
	 */
	private function build_url( $root, $repo_branch, $filename ) {
		return Utils\trailingslashit( $root ) . Utils\trailingslashit( $repo_branch ) . $filename;
	}
}
