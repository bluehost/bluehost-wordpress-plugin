import apiFetch from '@wordpress/api-fetch';

/**
 * You must provide ReactRouterDOM location object (or equivalent) from a React function component where you can useLocation.
 * 
 * @param {object} location - ReactRouterDOM location object 
 */
const sendPageview = (location) => {
    let payload = {
        category: 'Admin',
        action: 'pageview',
        data: {}
    };
    payload.data.page           = 'that url'; // full url
    payload.data['page_title']  = 'dat title';
    if ( ('undefined' !== typeof location.state) && ('undefined' !== typeof location.state.redirect ) ) {
        payload.data.redirect = location.state.redirect;
    }
    let request = {
        path: `/bluehost/v1/data/events/`, 
        method: 'POST', 
        data: payload
    };
    apiFetch(request);
};

export default sendPageview;