/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

const i18n = 'bluehost-wordpress-plugin';

export default [
	{ slug: 'home', path: '/home', label: __( 'Home', i18n ) },
	{ slug: 'themes', path: '/marketplace/themes', label: __( 'Themes', i18n ) },
	{ slug: 'plugins', path: '/marketplace/plugins', label: __( 'Plugins', i18n ) },
	{ slug: 'services', path: '/marketplace/services', label: __( 'Services', i18n ) },
	{ slug: 'staging', path: '/tools/staging', label: __( 'Staging', i18n ) },
	{ slug: 'settings', path: '/settings', label: __( 'Settings', i18n ) },
];
