<?php

use \WP_CLI\Utils;

/**
 * Class BH_WP_CLI_Cache
 *
 * This class is instantiated in /inc/cli-init.php
 */
class BH_WP_CLI_Cache extends BH_WP_CLI_Command {

	/**
	 * @var string - Organization Raw Content URL Base.
	 */
	protected static $org_url = 'https://raw.githubusercontent.com/bluehost';

	/**
	 * @var array - Types of caching available.
	 */
	protected static $cache_types = array(
		'page',
		'browser',
		'object',
	);

	/**
	 * @var array - Actions taken with all caching types.
	 */
	protected static $cache_actions = array(
		'add',
		'remove',
		'status',
	);

	/**
	 * @var string - GitHub Repo + Brand Slug.
	 */
	protected static $page_repo_branch = 'endurance-page-cache/production';

	/**
	 * @var string - Page Cache Filename.
	 */
	protected static $page_filename = 'endurance-page-cache.php';

	/**
	 * @var string - GitHub Repo + Brand Slug.
	 */
	protected static $browser_repo_branch = 'endurance-browser-cache/production';

	/**
	 * @var string - Browser Cache Filename.
	 */
	protected static $browser_filename = 'endurance-browser-cache.php';

	/**
	 * @var string - /wp-content/mu path on server.
	 */
	protected static $mu_plugin_dir = WP_CONTENT_DIR . '/mu-plugins';

	/**
	 * @var string|null - user-provided provided action.
	 */
	protected $current_action;

	/**
	 * @var string|null - user-provided caching type.
	 */
	protected $current_type;

	/**
	 * @var string|null - determined filename based on caching type.
	 */
	protected $current_filename;

	/**
	 * @var string|null - current path for mu plugin file.
	 */
	protected $current_plugin_path;

	/**
	 * @var string|null - current url for remote copy of plugin file.
	 */
	protected $current_remote;

	/**
	 * Manage Full-Page Caching, Browser Caching and Object Caching.
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
			case 'remove';
				$this->remove();
				break;
		}
	}

	/**
	 * wp {alias} cache {$this->current_type} add
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
	 * wp {alias} cache {$this->current_type} remove
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
	 * @param $url
	 * @param $filename
	 * @param string   $dir
	 *
	 * @throws \WP_CLI\ExitException
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
	 * @param string $root
	 * @param string $repo_branch
	 * @param string $filename
	 *
	 * @return string
	 */
	private function build_url( $root, $repo_branch, $filename ) {
		return Utils\trailingslashit( $root ) . Utils\trailingslashit( $repo_branch ) . $filename;
	}
}
