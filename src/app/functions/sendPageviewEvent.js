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

    payload.data.page = window.nfdplugin.bluehostWpAdminUrl + 'admin.php?page=bluehost#' + location.pathname; // full url
    if ( title ) {
        payload.data['page_title']  = title;
    }
    if ( 'object' === typeof location && location?.state?.redirect ) {
        payload.data.redirect = location.state.redirect;
    }

    apiFetch({
        path: `/newfold-data/v1/events/`, 
        method: 'POST', 
        data: payload
    });
};

export default sendPageviewEvent;