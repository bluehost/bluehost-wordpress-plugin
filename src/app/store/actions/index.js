import { dispatch } from "@wordpress/data";

export function openMobileSidebar() {
	return {
		type: 'MOBILE_SIDEBAR_ACTIVE',
	};
};

dispatch('bluehost/plugin').openMobileSidebar();

export function closeMobileSidebar() {
	return {
		type: 'MOBILE_SIDEBAR_INACTIVE',
	};
};

export function setActivePage( activePage, isTopLevel ) {
	return {
		type: 'SET_ACTIVE_PAGE',
		activePage,
		isTopLevel
	}
};

export function augmentWPAdminMenu() {
	return {
		type: 'AUGMENT_WP_ADMIN_MENU'
	}
};

export function fetchWindowData() {
	let data = {
		type: 'FETCH_WINDOW_DATA',
		bluehost: window.bluehost,
		adminColors: window._wpColorScheme.icons,
		userId: window.userSettings.uid
	};
	window.bluehost = { movedToStore: true };
	return data;
};

export function fetchFromAPI( path ) {
	return {
		type: 'FETCH_FROM_API',
		path
	}
};