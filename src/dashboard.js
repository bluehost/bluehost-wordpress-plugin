/**
 * Set Webpack Public Path var 
 *  __webpack_public_path__
 */
import './set-public-path';

import Widget from './dashboard/index.js';
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

/**
 * DOM ID of root element to initialize app
 *
 * @see ../inc/admin/class-page.php
 */
const WIDGET_ROOT_ID = 'bluehost-widget';


/**
 * When DOM is ready, load widget on mount element.
 */
domReady( () => {
	render(
		<Widget />,
		document.getElementById( WIDGET_ROOT_ID )
	);
} );
