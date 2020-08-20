<?php

if ( ! class_exists( 'WP_CLI' ) ) {
	return;
}

/**
 * Load WP-CLI Commands, checking if environment supports commands.
 *
 * @see /cli/README.md for instructions on registering new commands.
 *
 * Class BH_WP_CLI_Loader
 */
class BH_WP_CLI_Loader {

	/**
	 * Main variable containing all WP-CLI commands and callbacks.
	 *
	 * @var array
	 */
	protected $commands;

	/**
	 * @var stdClass - Instance of BH_WP_CLI_Loader.
	 */
	protected static $instance;

	/**
	 * Return Class instance
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof BH_WP_CLI_Loader ) ) {
			self::$instance = new BH_WP_CLI_Loader();

			self::$instance->initialize();
		}

		do_action( 'eig_wp_cli_commands_init', self::$instance );

		return self::$instance;
	}

	/**
	 * Main initialization method -- run upon new instance or on instance access.
	 */
	protected function initialize() {

		$this->commands = array(
			array(
				'cmd'       => 'branding',
				'class'     => 'BH_WP_CLI_Branding',
				'shortdesc' => 'Control hosting branding and UX.',
				'longdesc'  => 'Control the admin interface, default modules and UX for an Endurance hosting brand.' .
							   PHP_EOL . 'Subcommands: update, remove',
			),
			array(
				'cmd'       => 'cache',
				'class'     => 'BH_WP_CLI_Cache',
				'shortdesc' => 'Control all forms of caching.',
				'longdesc'  => 'Control how browser cache, page cache and browser caching are configured.' .
							   PHP_EOL . 'Cache Types: browser, page, object (not functional yet)' .
							   PHP_EOL . 'Subcommands: add, update, status',
			),
			array(
				'cmd'       => 'digest',
				'class'     => 'BH_WP_CLI_Digest',
				'shortdesc' => 'Analyze WordPress for this site.',
				'longdesc'  => 'Analyze WordPress content, configuration and server environment.' .
							   PHP_EOL . 'Associative Args: --full --noprompt',
			),
			array(
				'cmd'       => 'secrets',
				'class'     => 'BH_WP_CLI_Secrets',
				'shortdesc' => 'Control the WordPress Salts.',
				'longdesc'  => 'Read and update WordPress salts in the wp-config.php file.' .
							   PHP_EOL . 'Subcommands: update, age, list',
			),
			array(
				'cmd'       => 'remove_orphan_post_meta',
				'class'     => 'BH_WP_CLI_Remove_Orphan_Post_Meta',
				'shortdesc' => 'Legacy cmd for removing orphan meta.',
				'longdesc'  => 'Legacy WP-CLI command used for checking for orphaned postmeta.',
			),
			array(
				'cmd'       => 'sso',
				'class'     => 'BH_WP_CLI_SSO',
				'shortdesc' => 'Single sign-on from hosting platform.',
				'longdesc'  => 'Handle single sign-on from Endurance hosting platforms and get magic link.' .
							   PHP_EOL . 'Associative Args: --username --role --email --id --min=MINUTES_UNTIL_EXPIRE --url-only',
			),
			array(
				'cmd'       => 'staging',
				'class'     => 'BH_WP_CLI_Staging',
				'shortdesc' => 'CRUD operations for EIG staging.',
				'longdesc'  => 'Internal commands to handle staging environment.' .
							   PHP_EOL . 'Subcommands: create, clone, destroy, sso_staging, deploy, deploy_files,' .
							   ' deploy_db, deploy_files_db, save_state, restore_state, sso_production',
			),
			array(
				'cmd'       => 'module',
				'class'     => 'BH_WP_CLI_Module',
				'shortdesc' => 'Control hosting plugin modules.',
				'longdesc'  => 'Enable, disable and check status of internal modules in the hosting plugin.' .
							   PHP_EOL . 'Subcommands: enable, disable, status, list, reset',
			),
		);

		$this->load_files();
		$this->register_cmds_with_wpcli();
	}

	/**
	 * Loads Command Files.
	 */
	protected function load_files() {

		require_once 'cli/abstract-eig-wp-cli-command.php';

		foreach ( glob( dirname( __FILE__ ) . '/cli/*.php' ) as $file ) {
			if ( false !== stripos( $file, 'abstract-eig-wp-cli-command' ) ) {
				continue; // already req'd above for order of operations.
			}
			require_once $file;
		}
	}

	/**
	 * Map registration function onto each alias.
	 */
	protected function register_cmds_with_wpcli() {
		$this->register_commands_with_single_alias( 'bluehost' );
	}

	/**
	 * Register commands with WP_CLI under alias, checking if alias supports the command.
	 *
	 * @param string $alias ( from $this->current_aliases )
	 */
	protected function register_commands_with_single_alias( $alias ) {
		/**
		 * Loop commands to register on $alias.
		 */
		foreach ( $this->commands as $cmd ) {
			/**
			 * Validate command has required attributes and is executable.
			 */
			if ( empty( $cmd['cmd'] )
				 || empty( $cmd['class'] )
			) {
				continue;
			}

			/**
			 * Setup Command Arguments
			 */
			$args = array();

			if ( ! empty( $cmd['shortdesc'] ) ) {
				$args['shortdesc'] = $cmd['shortdesc'];
			}

			if ( ! empty( $cmd['longdesc'] ) ) {
				$args['longdesc'] = $cmd['longdesc'];
			}

			/**
			 * Register command with WP-CLI
			 */
			\WP_CLI::add_command(
				$alias . ' ' . $cmd['cmd'],
				$cmd['class'],
				$args
			);
		}
	}
}

/**
 * load/create instance of loader class
 *
 * @see BH_WP_CLI_Loader->initialize()
 */
BH_WP_CLI_Loader::instance();
