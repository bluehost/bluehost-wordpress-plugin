/* Use PHP-provided URL to current version's build directory instead of root */
import './webpack-public-path';

import App from './app';
import domReady from '@wordpress/dom-ready';
import {createRoot, render} from '@wordpress/element';
import {NewfoldRuntime} from "@newfold-labs/wp-module-runtime";
import semver from 'semver';

const WP_ADM_PAGE_ROOT_ELEMENT = 'wppbh-app';
const W_ASCI = `
        Welcome to Bluehost!
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@(((((((((@@((((((((((@@(((((((((@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
`;
console.log(W_ASCI);

const WPPBHRender = () => {
    const DOM_ELEMENT = document.getElementById(WP_ADM_PAGE_ROOT_ELEMENT);
    const wpVersion = NewfoldRuntime?.sdk?.wpversion;
    const WP_VERSION = wpVersion.split('.').length !== 3 ? `${wpVersion}.0` : wpVersion;
    if (null !== DOM_ELEMENT) {
        if ('undefined' !== typeof render && semver.lt(WP_VERSION, '6.2.0')) {
            console.log('render');
            render(
                <App/>,
                DOM_ELEMENT
            );
        }
        if ('undefined' !== typeof createRoot && semver.gte(WP_VERSION, '6.2.0')) {
            console.log('createRoot');
            createRoot(DOM_ELEMENT).render(<App/>);
        }
    }
};

domReady(WPPBHRender);
