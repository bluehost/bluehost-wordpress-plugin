/**
 * WordPress dependencies
 */
import { TAB } from '@wordpress/keycodes';
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';
/**
 * Internal dependencies
 */
import App from './app';

/**
 * DOM ID of root element to initialize app
 * @see ../inc/class-eig-wp-module-admin-app-page.php
 */
const WP_PAGE_ROOT_ELEMENT = 'bluehost-app';

function bhHandleFirstTab( e ) {
	if ( e.keyCode === TAB ) {
		document.body.classList.add( 'bh-spa-keynav' );
		window.removeEventListener( 'keydown', bhHandleFirstTab );
	}
}
window.addEventListener( 'keydown', bhHandleFirstTab );

/**
 * When DOM is ready, load app on root element, replacing #app-loader markup.
 */
domReady( function() {
	render( <App />, document.getElementById( WP_PAGE_ROOT_ELEMENT ) );
} );
