<?php

/**
 * Class EIG_WP_CLI_Module
 */
class EIG_WP_CLI_Module extends EIG_WP_CLI_Command {
	/**
	 * @var string - action for module, default is 'list'.
	 */
	protected $action;
	/**
	 * @var string - selected module to modify (not used in list/details), default is empty string.
	 */
	protected $module;
	/**
	 * @var string - type of response to return (human or JSON)
	 */
	protected $response_type = 'human';
	/**
	 * @var bool - whether or not to bypass reset confirmation.
	 */
	protected $no_confirm = false;
	/**
	 * @var string - key for option persisted in DB
	 */
	protected static $module_option = 'eig_active_modules';
	/**
	 * Module command switchboard.
	 *
	 * @param  null  $args
	 * @param  array $assoc_args
	 */
	public function __invoke( $args, $assoc_args ) {
		// Setup class parameters
		$this->init_class_variables( $args, $assoc_args );

		switch ( $this->action ) {
			case 'reset':
				$this->reset();
				break;
			case 'activate':
			case 'enable':
				$this->activate();
				$this->module_status();
				break;
			case 'deactivate':
			case 'disable':
				$this->deactivate();
				$this->module_status();
				break;
			case 'get':
			case 'status':
				$this->module_status();
				break;
			case 'details':
			case 'list':
			default:
				$this->module_list();
				break;
		}
	}

	/**
	 * @param array $args - passthrough $args from class invocation.
	 * @param array $assoc_args - passthrough $assoc_args from class invocation.
	 */
	protected function init_class_variables( $args, $assoc_args ) {
		$this->action = ( ! empty( $args[0] ) && is_string( $args[0] ) ) ? $args[0] : 'list';
		$this->module = ( ! empty( $args[1] ) && is_string( $args[1] ) ) ? $args[1] : '';
		if ( ! empty( $assoc_args['response'] )
			 && 'json' === strtolower( $assoc_args['response'] )
		) {
			$this->response_type = 'json';
		}
		if ( isset( $assoc_args['no_confirm'] ) ) {
			$this->no_confirm = true;
		}
	}

	/**
	 * wp {alias} module activate
	 *
	 * Run EIG module activation via Manager class
	 */
	protected function activate() {
		$this->colorize_log( 'Activating ' . $this->module . '...' );
		Endurance_ModuleManager::activate( $this->module );
		$this->colorize_log( 'Checking status...' );
	}

	/**
	 * wp {alias} module deactivate
	 *
	 * Run EIG module deactivation via Manager class
	 */
	protected function deactivate() {
		$this->colorize_log( 'Activating ' . $this->module . '...' );
		Endurance_ModuleManager::deactivate( $this->module );
		$this->colorize_log( 'Checking status...' );
	}

	/**
	 * wp {alias} module status (optional --response=json)
	 *
	 * Get module status. Runs after Activate or Deactivate.
	 */
	protected function module_status() {
		if ( 'json' === $this->response_type ) {
			$this->machine_module_status();
		} else {
			$this->human_module_status();
		}
	}

	/**
	 * Check module state and log human-readable status to terminal
	 */
	protected function human_module_status() {
		$data = Endurance_ModuleRegistry::get( $this->module );
		if ( ! empty( $data ) && isset( $data['isActive'] ) ) {
			if ( $data['isActive'] ) {
				$this->colorize_log( $data['label'] . ' is currently active.' );
			} else {
				$this->colorize_log( $data['label'] . ' is not currently active.' );
			}
		} else {
			$this->error( $this->module . ' was not found.' );
		}
	}

	/**
	 * Check module state and return JSON
	 */
	protected function machine_module_status() {
		$data = Endurance_ModuleRegistry::get( $this->module );
		if ( ! empty( $data ) ) {
			$this->log_to_json( $data );
		} else {
			$this->log_to_json( array( $this->module => 'not_found' ) );
		}
	}

	/**
	 *
	 */
	protected function module_list() {
		if ( 'json' === $this->response_type ) {
			$this->machine_module_list();
		} else {
			$this->human_module_list();
		}
	}

	/**
	 * Check all module states and return human-readable table to terminal
	 */
	protected function human_module_list() {
		$raw = Endurance_ModuleRegistry::collection()->all();
		foreach ( $raw as $module ) {
			unset( $module['callback'] );
			$this->table( array_reverse( $module ) );
		}
	}

	/**
	 * Check all module states and return JSON
	 */
	protected function machine_module_list() {
		$data = Endurance_ModuleRegistry::collection()->all();
		$this->log_to_json( $data );
	}

	/**
	 * Reset all EIG modules to their default isActive state.
	 */
	protected function reset() {
		if ( ! $this->no_confirm ) {
			$this->confirm( 'Are you sure you want to reset all modules to their default active state?' );
		}
		$deleted = delete_option( self::$module_option );
		if ( $deleted ) {
			$this->success( 'EIG modules reset.' );
		} else {
			$this->warning( 'Failed to reset EIG modules.' );
		}
	}
}
