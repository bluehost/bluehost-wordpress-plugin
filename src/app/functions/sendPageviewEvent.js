import apiFetch from '@wordpress/api-fetch';

/**
 * You must provide ReactRouterDOM location object (or equivalent) from a React function component where you can useLocation.
 * 
 * @param {object} location - ReactRouterDOM location object 
 */
const sendPageviewEvent = (location, title = false) => {
    
    let payload = {
        category: 'Admin', // to mirror Endurance\WP\Module\Data\Listeners\Admin()
        action: 'pageview',
        data: {}
    };

    payload.data.page           = window.bluehostWpAdminUrl + '?page=bluehost#' + location.pathname; // full url
    if ( title ) {
        payload.data['page_title']  = title;
    }
    if ( ('undefined' !== typeof location.state) && ('undefined' !== typeof location.state.redirect ) ) {
        payload.data.redirect = location.state.redirect;
    }

    apiFetch({
        path: `/bluehost/v1/data/events/`, 
        method: 'POST', 
        data: payload
    });
};

export default sendPageviewEvent;