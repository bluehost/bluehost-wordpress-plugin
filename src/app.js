/**
 * Set Webpack Public Path var 
 *  __webpack_public_path__
 */
if ( 'bluehostPluginPublicPath' in window ) {
    __webpack_public_path__ = window.bluehostPluginPublicPath;
}

import App from './app/index.js';
import domReady from '@wordpress/dom-ready';
import domReadyInit from './app/init';
import { render } from '@wordpress/element';

/**
 * DOM ID of root element to initialize app
 *
 * @see ../inc/admin/class-page.php
 */
const WP_ADM_PAGE_ROOT_ELEMENT = 'bwa-root';


/**
 * When DOM is ready, load app on root element, replacing #bwa-centered-loader markup.
 */
domReady( () => {
	{ domReadyInit(); }
	render(
		<App />,
		document.getElementById( WP_ADM_PAGE_ROOT_ELEMENT )
	);
} );
