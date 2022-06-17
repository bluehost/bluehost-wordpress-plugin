<?php

namespace Newfold\Plugin\Tours;

/**
 * Undocumented class
 */
class Shared {

	/**
	 * Secondary Button property helper
	 *
	 * @param string $text - button text
	 * @param string $type - button type
	 * @return Array - button props
	 */
	public static function secondary_button( $text = 'Back', $type = 'back' ) {
		return array(
			'classes' => 'components-button is-secondary',
			'text'    => $text,
			'type'    => $type,
		);
	}

	/**
	 * Primary button property helper
	 *
	 * @param string $text - button text
	 * @param string $type - button type
	 * @return Array - button props
	 */
	public static function primary_button( $text = 'Next', $type = 'next' ) {
		return array(
			'classes' => 'components-button is-primary',
			'text'    => $text,
			'type'    => $type,
		);
	}

	/**
	 * Step helper
	 *
	 * @param string $contents - text for the step
	 * @return string - html for the step
	 */
	public static function step( $contents ) {
		$squares = '<div class="step-bluehost-squares"><img src="https://cdn.hiive.space/bluehost/mark.svg" alt="Bluehost Logo Mark" /></div>';
		return '<div class="wrap-std">' . $contents . $squares . '</div>';
	}

	/**
	 * Large step helper
	 *
	 * @param string $contents - text for the large step
	 * @return string - html for the step
	 */
	public static function large_step( $contents ) {
		$logo = '<div class="step-bluehost-logo"><img src="https://cdn.hiive.space/bluehost/logo.svg" alt="Bluehost Logo" /></div>';
		return '<div class="wrap-large">' . $contents . $logo . '</div>';
	}

	/**
	 * Two column helper
	 *
	 * @param string $col1 - content for column one
	 * @param string $col2 - content for column two
	 * @return string - html for the columns
	 */
	public static function two_col( $col1, $col2 ) {
		return '<div class="step-2col"><div>' . $col1 . '</div><div>' . $col2 . '</div></div>';
	}
}
