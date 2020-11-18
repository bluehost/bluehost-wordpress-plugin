/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export default [
	{ slug: 'home', path: '/home', label: __( 'Home', 'bluehost-wordpress-plugin' ) },
	{ slug: 'themes', path: '/marketplace/themes', label: __( 'Themes', 'bluehost-wordpress-plugin' ) },
	{ slug: 'plugins', path: '/marketplace/plugins', label: __( 'Plugins', 'bluehost-wordpress-plugin' ) },
	{ slug: 'services', path: '/marketplace/services', label: __( 'Services', 'bluehost-wordpress-plugin' ) },
	{ slug: 'staging', path: '/tools/staging', label: __( 'Staging', 'bluehost-wordpress-plugin' ) },
	{ slug: 'settings', path: '/settings', label: __( 'Settings', 'bluehost-wordpress-plugin' ) },
	{ slug: 'help', path: '/help', label: __( 'Help', 'bluehost-wordpress-plugin' ) },
];
