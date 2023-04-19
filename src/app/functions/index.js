import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';
import handleWPMenuActiveHighlight from './highlightTopLevel';
import handleWPMenuAugmentation from './augmentWPMenu';
import sendPageviewEvent from './sendPageviewEvent';
import userTrigger from './userTrigger';

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
export function addUtmParams(url, params = {}) {
	params.utm_source = `wp-admin/admin.php?page=bluehost${ window.location.hash }`;
	params.utm_medium = 'bluehost_plugin';
	return addQueryArgs(url, params);
}

/**
 * Get a (potentially) nested value from an object.
 *
 * Example usage: get(['a', 'b'], {a: {b: 'c'}}, 'd');
 *
 * @param {Array} props An array containing the property names to fetch from each level.
 * @param {Object} object The object to fetch from.
 * @param {*} fallback What to return if no match is found (defaults to null).
 *
 * @return {*} The found value or the fallback value.
 */
export function get(props, object, fallback = null) {
	return props.reduce((accumulator, currentValue) => {
		return accumulator && accumulator[currentValue] ? accumulator[currentValue] : fallback;
	}, object);
}

/**
 * Check if a URL is an external URL.
 *
 * @param {string} url The URL to check.
 *
 * @return {boolean} True if URL is external, false otherwise.
 */
export function isExternalUrl(url) {
	return url && typeof url === 'string' && url.includes('http') && !url.includes(window.location.origin);
}

/**
 * Send events to the WP REST API
 *
 * @param {Object} event The event data to be tracked.
 */
export function sendEvent(event) {
	event.data = event.data || {};
	event.data.page = window.location.href;
	apiFetch({path: `/newfold-data/v1/events/`, method: 'POST', data: event});
}

/**
 * Get's Base Platform URL
 * @param {string} path The path to a resource within the platform, leave blank for root.
 * 
 * @return {string}
 */
export function getPlatformBaseUrl( path = '' ) {
	const brand = 'undefined' !== typeof window.nfdplugin.brandPlatform ? window.nfdplugin.brandPlatform : null;
	const isJarvis = 'undefined' !== typeof bluehost.env.isJarvis ? bluehost.env.isJarvis : false;

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
}

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
export function getPlatformPathUrl ( jarvisPath = '', legacyPath = '' ) {
	const isJarvis = 'undefined' !== typeof bluehost.env.isJarvis ? bluehost.env.isJarvis : false;

	if (isJarvis) {
		return getPlatformBaseUrl('/my-account/') + jarvisPath;
	}

	return getPlatformBaseUrl('/hosting/') + legacyPath;
}

export { 
	sendPageviewEvent,
	handleWPMenuAugmentation,
	handleWPMenuActiveHighlight,
	userTrigger
};
