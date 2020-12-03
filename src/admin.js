/**
 * Set Webpack Public Path var 
 *  __webpack_public_path__
 */
import './set-public-path';

/**
 * WordPress dependencies
 */
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

/**
 * Import App
 */
import App from './app/index.js';

/**
 * DOM ID of root element to initialize app
 *
 * @see ../inc/admin/class-page.php
 */
const WP_ADM_PAGE_ROOT_ELEMENT = 'bwa-root';

/**
 *
 */
import domReadyInit from './app/init';

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
