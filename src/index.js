/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
/**
 * Internal dependencies
 */
import App from './app';

/**
 * DOM ID of root element to initialize app
 * @see ../inc/admin/class-page.php
 */
const WP_PAGE_ROOT_ELEMENT = 'bluehost-app';
/**
 *
 */
import helpers from './helpers';
/**
 * When DOM is ready, load app on root element, replacing #app-loader markup.
 */
domReady( () => {
	/* Run Helpers */
	{helpers();}
	/* Render <App /> */
	render (
		<App />,
		document.getElementById( WP_PAGE_ROOT_ELEMENT )
	);
} );
