import { dispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

let lastNoticeId;
const W_NAV = document.querySelector( '#toplevel_page_blueprint .wp-submenu' );
/**
 * Set active nav in wp admin sub pages.
 *
 * @param  path
 */
export const setActiveSubnav = ( path ) => {
	if ( W_NAV ) {
		const W_NAV_LIS = W_NAV.children;
		if ( W_NAV_LIS ) {
			for ( let i = 0; i < W_NAV_LIS.length; i++ ) {
				// get all children li elements
				const link = W_NAV_LIS[ i ].children[ 0 ];
				if ( link ) {
					const href = link.getAttribute( 'href' );
					// check each child a href for match with path
					if (
						href.endsWith( path ) || // match
						( path.includes( '/marketplace/' ) &&
							href.endsWith( 'marketplace' ) ) ||
						( path === '/' && href.endsWith( 'home' ) )
					) {
						// highlight home subnav for root page
						// update li class when match
						W_NAV_LIS[ i ].classList.add( 'current' );
					} else {
						W_NAV_LIS[ i ].classList.remove( 'current' );
					}
					// highlight our home nav for root level access
					const W_HOME_NAV = document.querySelector(
						'.wppb-nav a[href="#/home"]'
					);
					if ( W_HOME_NAV ) {
						if ( path === '/' || path === '/home' ) {
							W_HOME_NAV.classList.add( 'active' );
						} else {
							W_HOME_NAV.classList.remove( 'active' );
						}
					}
				}
			}
		}
	}
};

/**
 * Wrapper method to dispatch snackbar notice
 *
 * @param  string text text for notice
 * @param  text
 */
export const dispatchUpdateSnackbar = ( text = 'Settings Saved' ) => {
	//clear previous notice so they don't stack up when quickly saving multiple settings
	dispatch( 'core/notices' ).removeNotice( lastNoticeId );

	//make new
	dispatch( 'core/notices' )
		.createNotice( 'info', text, {
			type: 'snackbar',
			isDismissible: true,
		} )
		.then( ( result ) => {
			// save as notice to dismiss later
			lastNoticeId = result.notice.id;
		} );
};

/**
 * Wrapper method to post setting to blueprint endpoint
 *
 * @param {*} data object of data
 * @param passError setter for the error in component
 * @param thenCallback method to call in promise then
 * @return apiFetch promise
 */
export const blueprintSettingsApiFetch = ( data, passError, thenCallback ) => {
	return apiFetch( {
		// path: 'blueprint/v1/settings', //  can't use path bacause it breaks on temp domains
		url: window.WPPB.resturl + '/blueprint/v1/settings',
		method: 'POST',
		data,
	} )
		.then( ( response ) => {
			thenCallback( response );
		} )
		.catch( ( error ) => {
			passError( error );
		} );
};

/**
 * Wrapper method to post request to blueprint cache endpoint
 *
 * @param {*} data object of data
 * @param passError setter for the error in component
 * @param thenCallback method to call in promise then
 * @return apiFetch promise
 */
export const blueprintPurgeCacheApiFetch = ( data, passError, thenCallback ) => {
	return apiFetch( {
		url: window.WPPB.resturl + '/blueprint/v1/caching',
		method: 'DELETE',
		data,
	} )
		.then( ( response ) => {
			thenCallback( response );
		} )
		.catch( ( error ) => {
			passError( error );
		} );
};

/**
 * Coming soon admin bar
 */
export const comingSoonAdminbarToggle = ( comingSoon ) => {
	const comingsoonadminbar = document.getElementById(
		'wp-admin-bar-blueprint-coming_soon'
	);
	if ( ! comingsoonadminbar ) {
		return;
	}
	if ( ! comingSoon ) {
		comingsoonadminbar.classList.add( 'hideme' );
	} else {
		comingsoonadminbar.classList.remove( 'hideme' );
	}
};
