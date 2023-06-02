import { dispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

let lastNoticeId;
const W_NAV = document.querySelector( '#toplevel_page_bluehost .wp-submenu' );
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
						'.wppbh-nav a[href="#/home"]'
					);
					if ( W_HOME_NAV ) {
						if ( path === '/' || path === '/home' ) {
							W_HOME_NAV.classList.add( 'active' );
						} else {
							W_HOME_NAV.classList.remove( 'active' );
						}
					}
					// handle help
					if ( path === '/help' ) {
						if ( window.WPPBH.capabilities.canAccessHelpCenter && !window.newfoldEmbeddedHelp.isDefaultOpen ) {
							window.newfoldEmbeddedHelp.toggleNFDLaunchedEmbeddedHelp();
							window.newfoldEmbeddedHelp.isDefaultOpen = true; // since this fires multiple times on load
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
 * Wrapper method to post setting to bluehost endpoint
 *
 * @param {*} data object of data
 * @param passError setter for the error in component
 * @param thenCallback method to call in promise then
 * @return apiFetch promise
 */
export const bluehostSettingsApiFetch = ( data, passError, thenCallback ) => {
	return apiFetch( {
		// path: 'bluehost/v1/settings', //  can't use path bacause it breaks on temp domains
		url: window.WPPBH.resturl + '/bluehost/v1/settings',
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
 * Wrapper method to post request to bluehost cache endpoint
 *
 * @param {*} data object of data
 * @param passError setter for the error in component
 * @param thenCallback method to call in promise then
 * @return apiFetch promise
 */
export const bluehostPurgeCacheApiFetch = ( data, passError, thenCallback ) => {
	return apiFetch( {
		url: window.WPPBH.resturl + '/bluehost/v1/caching',
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
		'nfd-site-status-text'
	);
	if ( ! comingsoonadminbar ) {
		return;
	}
	if ( ! comingSoon ) {
		comingsoonadminbar.style.color = "#048200";
		comingsoonadminbar.textContent = "Live";
	} else {
		comingsoonadminbar.style.color = "#E01C1C";
		comingsoonadminbar.textContent = "Coming Soon";
	}
};

/**
 * Decorates an external link URL with UTM params.
 *
 * The utm_term, if passed, should be the link anchor text.
 * The utm_content should be the unique identifier for the link.
 * The utm_campaign is optional and reserved for special occasions.
 *
 * @param {string} url The original URL.
 * @param {Object} params The URL parameters to add.
 *
 * @return {string} The new URL.
 */
export const addUtmParams = (url, params = {}) => {
	params.utm_source = `wp-admin/admin.php?page=bluehost${window.location.hash}`;
	params.utm_medium = 'bluehost_plugin';
	return addQueryArgs(url, params);
}

/**
 * Get's Base Platform URL
 * @param {string} path The path to a resource within the platform, leave blank for root.
 * 
 * @return {string}
 */
export const getPlatformBaseUrl = ( path = '' ) => {
	const brand = window.WPPBH.env.brand;
	const isJarvis = window.WPPBH.env.isJarvis;

	const baseUrl = () => {
		if (brand === 'Bluehost_India') {
			return 'https://my.bluehost.in';
		}

		if (isJarvis) {
			return 'https://www.bluehost.com';
		}

		return 'https://my.bluehost.com';
	}

	return baseUrl() + path;
};

/**
 * Gets Platform URL
 * 
 * @param {string} jarvisPath The path to the hosting resource for Jarvis accounts, leave blank for the main page.
 * @param {string} legacyPath The path to the hosting resource for Legacy accounts, leave blank for the main page.
 * 
 * @return {string}
 * 
 * @example
 * getPlatformPathUrl('home', 'app#home')
 * // returns https://www.bluehost.com/my-account/home if Jarvis or https://my.bluehost.com/hosting/app#home if legacy
 */
export const getPlatformPathUrl = ( jarvisPath = '', legacyPath = '' ) => {
	const isJarvis = window.WPPBH.env.isJarvis;

	if (isJarvis) {
		return getPlatformBaseUrl('/my-account/') + jarvisPath;
	}

	return getPlatformBaseUrl('/hosting/') + legacyPath;
};

/**
 * Handles help center links click, will open help center slide if user has access
 * or navigate to help page if user doesn't have access
 * 
 * @return void
 */
export const handleHelpLinksClick = () => {
	if (window.WPPBH.capabilities.canAccessHelpCenter && !window.newfoldEmbeddedHelp.hasListeners) {
		const helpLinks = document.querySelectorAll('[href*="#/help"]');
		if (helpLinks) {
			helpLinks.forEach(el => el.addEventListener('click', (e) => {
				e.preventDefault();
				window.newfoldEmbeddedHelp.toggleNFDLaunchedEmbeddedHelp();
			}));
			window.newfoldEmbeddedHelp.hasListeners = true;
		}
	}
}; 
