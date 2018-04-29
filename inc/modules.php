<?php

function mm_is_module_active( $module ) {
	$default_modules = array();
	$active_modules = get_option( 'mm_active_modules' );
	return in_array( $module, $active_modules );
}

function mm_module_activate( $module ) {
	$active_modules = get_option( 'mm_active_modules', array() );
	$active_modules[] = $module;
	$active_modules = array_unique( $active_modules );
	update_option( 'mm_active_modules', $active_modules );
}

function mm_module_deactivate( $module ) {
	$active_modules = get_option( 'mm_active_modules', array() );
	$active_modules = array_diff( $active_modules, array( $module ) );
	update_option( 'mm_active_modules', $active_modules );
}
