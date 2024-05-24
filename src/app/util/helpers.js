import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';
import { dispatch } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';

let lastNoticeId;

/**
 * Wrapper method to dispatch snackbar notice
 *
 * @param {string} text text for notice
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
 * @param {Object}   data         object of data
 * @param {Function} passError    setter for the error in component
 * @param {Function} thenCallback method to call in promise then
 */
export const bluehostSettingsApiFetch = ( data, passError, thenCallback ) => {
	return apiFetch( {
		// path: 'bluehost/v1/settings', //  can't use path bacause it breaks on temp domains
		url: NewfoldRuntime.createApiUrl( '/bluehost/v1/settings' ),
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
 * Wrapper method for toggling a feature via the features API
 *
 * @param {string}   featureName  the name of the feature
 * @param {Function} thenCallback method to call in promise then
 * @return {Promise} Features API promise with attached then callback
 */
export const featureToggle = async ( featureName, thenCallback ) => {
	if ( true === window.NewfoldFeatures.features[ featureName ] ) {
		return window.NewfoldFeatures.disable( featureName ).then(
			( response ) => {
				thenCallback( response );
			}
		);
	}
	// else
	return window.NewfoldFeatures.enable( featureName ).then( ( response ) => {
		thenCallback( response );
	} );
};

/**
 * Wrapper method to post request to bluehost cache endpoint
 *
 * @param {Object}   data         object of data
 * @param {Function} passError    setter for the error in component
 * @param {Function} thenCallback method to call in promise then
 * @return {Promise} apiFetch promise with attached then and catch callbacks
 */
export const bluehostPurgeCacheApiFetch = async (
	data,
	passError,
	thenCallback
) => {
	return apiFetch( {
		url: NewfoldRuntime.createApiUrl( '/bluehost/v1/caching' ),
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
 * @param {boolean} comingSoon Whether or not the site is coming soon.
 */
export const comingSoonAdminbarToggle = ( comingSoon ) => {
	window.NewfoldRuntime.comingSoon.toggleAdminBarSiteStatus( comingSoon );
};

/**
 * Decorates an external link URL with UTM params.
 *
 * The utm_term, if passed, should be the link anchor text.
 * The utm_content should be the unique identifier for the link.
 * The utm_campaign is optional and reserved for special occasions.
 *
 * @param {string} url    The original URL.
 * @param {Object} params The URL parameters to add.
 *
 * @return {string} The new URL.
 */
export const addUtmParams = ( url, params = {} ) => {
	params.utm_source = `wp-admin/admin.php?page=bluehost${ window.location.hash }`;
	params.utm_medium = 'bluehost_plugin';
	return addQueryArgs( url, params );
};

/**
 * Get's Base Platform URL
 * @param {string} path The path to a resource within the platform, leave blank for root.
 *
 * @return {string} The base URL for the platform.
 */
export const getPlatformBaseUrl = ( path = '' ) => {
	const brand = NewfoldRuntime.plugin.brand;

	const baseUrl = () => {
		if ( brand === 'Bluehost_India' ) {
			return 'https://my.bluehost.in';
		}

		if ( isJarvis() ) {
			return 'https://www.bluehost.com';
		}

		return 'https://my.bluehost.com';
	};

	return baseUrl() + path;
};

/**
 * Gets Platform URL
 *
 * @param {string} jarvisPath The path to the hosting resource for Jarvis accounts, leave blank for the main page.
 * @param {string} legacyPath The path to the hosting resource for Legacy accounts, leave blank for the main page.
 *
 * @return {string} The URL for the platform.
 *
 * @example
 * getPlatformPathUrl('home', 'app#home')
 * // returns https://www.bluehost.com/my-account/home if Jarvis or https://my.bluehost.com/hosting/app#home if legacy
 */
export const getPlatformPathUrl = ( jarvisPath = '', legacyPath = '' ) => {
	if ( isJarvis() ) {
		return getPlatformBaseUrl( '/my-account/' ) + jarvisPath;
	}

	return getPlatformBaseUrl( '/hosting/' ) + legacyPath;
};

/**
 * Handles help center links click, will open help center slide if user has access
 * or navigate to help page if user doesn't have access
 */
export const handleHelpLinksClick = () => {
	if (
		NewfoldRuntime.hasCapability( 'canAccessHelpCenter' ) &&
		window.newfoldEmbeddedHelp &&
		! window.newfoldEmbeddedHelp.hasListeners
	) {
		const helpLinks = document.querySelectorAll( '[href*="#/help"]' );
		if ( helpLinks ) {
			helpLinks.forEach( ( el ) =>
				el.addEventListener( 'click', ( e ) => {
					e.preventDefault();
					window.newfoldEmbeddedHelp.toggleNFDLaunchedEmbeddedHelp();
				} )
			);
			window.newfoldEmbeddedHelp.hasListeners = true;
		}
	}
};

/**
 * Check if this is a jarvis site or not.
 * Defaults to true in cases where the capabilites are not set such as
 * in local and test environments that do not receive capabilities.
 *
 * @return {boolean} Whether or not this is a jarvis site.
 */
export const isJarvis = () => {
	if ( NewfoldRuntime.hasCapability( 'isJarvis' ) ) {
		return window.NewfoldRuntime.capabilities.isJarvis;
	}
	return true;
};
