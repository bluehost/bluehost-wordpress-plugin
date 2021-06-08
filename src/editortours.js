/**
 * Set Webpack Public Path var 
 *  __webpack_public_path__
 */

import './set-public-path';

import EditorTours from './editortours/index.js';
import domReady from '@wordpress/dom-ready';
import { render } from '@wordpress/element';

domReady(() => {
    console.log('it root');
    render(
        <EditorTours />, 
        document.getElementById('newfold-editortours')
    );
});