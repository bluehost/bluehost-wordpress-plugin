/**
 * Internal Dependencies
 */
import { SETTINGS_ENDPOINT, STORE_KEY } from './constants.js';

import { apiFetch } from './controls.js';
/**
 * WordPress Dependencies
 */
import { select } from '@wordpress/data';

export function openMobileSidebar() {
	return {
		type: 'MOBILE_SIDEBAR_ACTIVE',
	};
}

export function closeMobileSidebar() {
	return {
		type: 'MOBILE_SIDEBAR_INACTIVE',
	};
}

export function setActivePage( activePage, isTopLevel ) {
	return {
		type: 'SET_ACTIVE_PAGE',
		activePage,
		isTopLevel,
	};
}

export function augmentWPAdminMenu() {
	return {
		type: 'AUGMENT_WP_ADMIN_MENU',
	};
}

export function fetchWindowData() {
	const data = {
		type: 'FETCH_WINDOW_DATA',
		bluehost: window.bluehost,
		adminColors: window._wpColorScheme.icons,
		userId: window.userSettings.uid,
	};
	window.bluehost = { movedToStore: true };
	return data;
}

export function* toggleSetting( setting ) {
	const oldValue = yield select( STORE_KEY ).getSetting( setting );
	const newValue = ! Boolean( oldValue );
	yield updateSetting( setting, newValue );
}

export function* updateSetting( setting, newValue ) {
	const settings = {};
	settings[ setting ] = newValue;
	yield apiFetch( { path: SETTINGS_ENDPOINT, method: 'POST', data: settings } );
	return {
		type: 'UPDATE_SETTING',
		setting,
		newValue,
	};
}

export function* dismissNotification( id ) {
	yield apiFetch({path: `/bluehost/v1/notifications/${ id }`, method: 'DELETE'});
	return {
		type: 'DISMISS_NOTIFICATION',
		id,
	}
}
