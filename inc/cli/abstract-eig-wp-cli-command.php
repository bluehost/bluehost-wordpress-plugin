<?php

use \WP_CLI\Utils;

/**
 * Class EIG_WP_CLI_Command
 *
 * Extend this class for all WP-CLI Commands to inherit updates to the \WP_CLI_Command class and helper utilities.
 */
abstract class EIG_WP_CLI_Command extends \WP_CLI_Command {

	/**
	 * Helper to format data into tables.
	 *
	 * By default, the method creates simple $key => $value tables.
	 * Set $type to 'adv' and the table inherits keys from $data. DATA MUST BE UNIFORM & MATCH FIRST ROW.
	 *
	 * 1. Provide $data as an array or object
	 * 2. Provide $keys as two strings -- by default 'DETAIL' and 'VALUE' are used.
	 * 3. Prints ASCII Table
	 *
	 * @param array $data
	 * @param array $keys
	 * @param string $type
	 */
	protected function table( $data, $keys = array( 'DETAIL', 'VALUE' ), $type = 'simple' ) {
		if ( empty( $data ) ) {
			return;
		}

		if ( 'adv' === $type ) {
			$items = $data;
			$keys  = array_keys( array_shift( $data ) );
		} else {
			$items = array();
			foreach ( $data as $detail => $value ) {
				$items[] = array(
					$keys[0] => $detail,
					$keys[1] => $value,
				);
			}
		}

		Utils\format_items( 'table', $items, $keys );
	}

	/**
	 * Creates Heading with Blue background and Grey text.
	 *
	 * @param string $message
	 * @param string $emoji
	 */
	protected function bold_heading( $message, $emoji = '' ) {
		$this->colorize_log( $message, '4', 'W', $emoji );
	}

	/**
	 * Formatted Success message.
	 *
	 * @param string $message
	 */
	protected function success( $message, $silent = false ) {
		$pre_ = $silent ? '' : 'Success: ';
		$this->colorize_log( $pre_ . $message, '2', 'k', '✅' );
	}

	/**
	 * Formatted Info message.
	 *
	 * @param string $message
	 */
	protected function info( $message ) {
		$this->colorize_log( $message, '4', 'W', 'ℹ️' );
	}

	/**
	 * Formatted Warning message.
	 *
	 * @param string $message
	 */
	protected function warning( $message ) {
		$this->colorize_log( $message, '3', 'k', '⚠️' );
	}

	/**
	 * Formatted Error message. Halts by default.
	 *
	 * @param string $message
	 * @param bool $silent
	 * @param bool $halt
	 * @param int $code
	 *
	 * @throws \WP_CLI\ExitException
	 */
	protected function error( $message, $silent = false, $halt = true, $code = 400 ) {
		$pre_ = $silent ? '' : 'Error: ';
		$this->colorize_log( $pre_ . $message, '1', 'W', '🛑️' );
		if ( $halt ) {
			WP_CLI::halt( $code );
		}
	}

	/**
	 * Formatting helper for colorized messages.
	 *
	 * @param string $message
	 * @param string $background
	 * @param string $text_color
	 * @param string $emoji_prefix
	 */
	protected function colorize_log( $message = '', $background = '', $text_color = '%_', $emoji_prefix = '' ) {
		if ( ! empty( $background ) ) {
			$background = '%' . $background;
		}

		if ( ! empty( $text_color ) && false === strpos( $text_color, '%' ) ) {
			$text_color = '%' . $text_color;
		}

		if ( ! empty( $emoji_prefix ) ) {
			$message = $emoji_prefix . '  ' . $message;
		}

		\WP_CLI::log( \WP_CLI::colorize( $background . $text_color . $message . '%n' ) );
	}

	/**
	 * Empty linebreak
	 */
	protected function new_line() {
		\WP_CLI::log( __return_empty_string() );
	}

	/**
	 * Helper function for returning clean JSON response.
	 *
	 * @param array|string $data - Provide well-formed array or existing JSON string.
	 */
	protected function log_to_json( $data ) {
		if ( is_array( $data ) ) {
			\WP_CLI::log( json_encode( $data ) );
		} elseif( is_array( json_decode( $data, true ) ) ) {
			\WP_CLI::log( $data );
		} else {
			$this->error( 'Provided $data wasn\'t valid array or JSON string.' );
		}
	}

	/**
	 * Formatted Confirm Dialog. A 'n' response breaks the thread.
	 *
	 * @param string $question
	 * @param string $type
	 *
	 * @throws \WP_CLI\ExitException
	 */
	protected function confirm( $question, $type = 'normal' ) {
		switch ( $type ) {
			case 'omg':
				\WP_CLI::confirm( $this->warning( '☢ 🙊 🙈 🙊 ☢️  ' . $question ) );
				break;
			case 'red':
				\WP_CLI::confirm( $this->error( $question, true ) );
				break;
			case 'yellow':
				\WP_CLI::confirm( $this->warning( $question ) );
				break;
			case 'green':
				\WP_CLI::confirm( $this->success( $question ) );
				break;
			case 'underline':
				\WP_CLI::confirm( $this->colorize_log( $question, '', 'U' ) );
				break;
			case 'normal':
			default:
				\WP_CLI::confirm( $question );
				break;
		}
	}
}
