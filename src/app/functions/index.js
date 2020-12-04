import apiFetch from '@wordpress/api-fetch';

/**
 * Add query params to a URL.
 *
 * @param {string} url The original URL.
 * @param {Object} params The query params to be added.
 *
 * @return {string} The updated URL.
 */
export function addQueryParams(url, params = {}) {
	const Url = new URL(url);
	for (const [name, value] of Object.entries(params)) {
		if (value && typeof value === 'string') {
			Url.searchParams.append(name, value);
		}
	}
	return Url.href;
}

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
	return addQueryParams(url, params);
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
	apiFetch({path: `/bluehost/v1/data/events/`, method: 'POST', data: event});
	console.log(event);
}
