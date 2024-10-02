<?php
/**
 * Handle updates for version 3.1.1
 *
 * @package Bluehost
 */

// Enable Yoast AI on existing Yoast SEO installs
if ( function_exists( 'yoastseo' ) ) {
	// Only enable the enable_ai_generator setting if we have a stored value.
	if ( yoastseo()->helpers->options->get( 'enable_ai_generator', null ) !== null ) {
		yoastseo()->helpers->options->set( 'enable_ai_generator', true );
	}
}
