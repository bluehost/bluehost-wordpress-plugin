<?php

if ( ! class_exists( 'WP_CLI' ) ) {
	return;
}

/**
 * Load WP-CLI Commands, checking if environment supports commands.
 *
 * @see /cli/README.md for instructions on registering new commands.
 *
 * Class EIG_WP_CLI_Loader
 */
class EIG_WP_CLI_Loader {
	/**
	 * Main variable containing all WP-CLI commands and callbacks.
	 *
	 * @var array
	 */
	protected $commands = array(
		array(
			'cmd'   => 'branding',
			'class' => 'EIG_WP_CLI_Branding',
		),
		array(
			'cmd'   => 'cache',
			'class' => 'EIG_WP_CLI_Cache',
		),
		array(
			'cmd'   => 'digest',
			'class' => 'EIG_WP_CLI_Digest',
		),
		array(
			'cmd'   => 'secrets',
			'class' => 'EIG_WP_CLI_Secrets',
		),
		array(
			'cmd'   => 'remove_orphan_post_meta',
			'class' => 'EIG_WP_CLI_Remove_Orphan_Post_Meta',
		),
		array(
			'cmd'   => 'sso',
			'class' => 'EIG_WP_CLI_SSO',
		),
		array(
			'cmd'   => 'staging',
			'class' => 'EIG_WP_CLI_Staging',
		),
		array(
			'cmd'   => 'module',
			'class' => 'EIG_WP_CLI_Module',
		),
	);

	/**
	 * These aliases are always available on every install.
	 *
	 * @var array
	 */
	protected $must_use_aliases = array(
		'mojo',
		'eig',
	);

	/**
	 * Only one of these aliases are available, determined by current active branding.
	 *
	 * @var array
	 */
	protected $brand_aliases = array(
		'bluehost',
		'hostmonster',
		'justhost',
		'hostgator',
		'ipage',
		'ipower',
		'fatcow',
		'domain',
		'site5',
	);

	/**
	 * @var string - Current alias from $this->brand_aliases.
	 */
	protected $current_brand_alias;

	/**
	 * @var array - Current aliases including $this->current_brand_alias & $this->must_use_aliases.
	 */
	protected $current_aliases;

	/**
	 * @var stdClass - Instance of EIG_WP_CLI_Loader.
	 */
	protected static $instance;

	/**
	 * Return Class instance
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof EIG_WP_CLI_Loader ) ) {
			self::$instance = new EIG_WP_CLI_Loader();

			self::$instance->initialize();
		}

		do_action( 'eig_wp_cli_commands_init', self::$instance );

		return self::$instance;
	}

	/**
	 * Main initialization method -- run upon new instance or on instance access.
	 */
	protected function initialize() {
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
	 * Establish which aliases are supported
	 */
	protected function establish_aliases() {
		$this->current_aliases = array_merge( $this->must_use_aliases, array( $this->current_brand_alias ) );
	}

	/**
	 * Map registration function onto each alias.
	 */
	protected function register_cmds_with_wpcli() {
		$this->establish_aliases();
		array_map(
			array( $this, 'register_commands_with_single_alias' ),
			$this->current_aliases
		);
	}

	/**
	 * Register commands with WP_CLI under alias, checking if alias supports the command.
	 *
	 * @param string $alias ( from $this->current_aliases )
	 */
	protected function register_commands_with_single_alias( $alias ) {
		foreach ( $this->commands as $cmd ) {
			if ( ! $this->command_is_supported( $cmd, $alias )
			     || empty( $cmd['cmd'] )
			     || empty( $cmd['class'] )
			) {
				continue;
			}

			\WP_CLI::add_command( $alias . ' ' . $cmd['cmd'], $cmd['class'] );
		}
	}

	/**
	 * Check if the current $alias supports the $command.
	 *
	 * @param array $cmd
	 * @param string $alias
	 *
	 * @return bool
	 */
	protected function command_is_supported( $cmd, $alias ) {
		if ( ! empty( $cmd['supports'] ) ) {
			$supports = is_array( $cmd['supports'] ) ? $cmd['supports'] : array( $cmd['supports'] );
			if ( isset( $supports['all'] ) || isset( $supports[ $alias ] ) ) {
				return true;
			}

			return false;
		} else {
			return true; // assume all are supported unless scoped
		}
	}
}

/**
 * load/create instance of loader class
 *
 * @see EIG_WP_CLI_Loader->initialize()
 */
EIG_WP_CLI_Loader::instance();
