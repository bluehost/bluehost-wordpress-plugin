import { select } from "@wordpress/data";

/**
 * Returns whether or not tips are globally enabled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether tips are globally enabled.
 */
export function getActivePage() {
	return state.app.activePage;
}
export function getAppPages(state) {
	return state.app.pages;
}
export function isMenuAugmented( state ) {
	return state.app.isWPMenuAugmented;
}
export function isSidebarOpen( state ) {
	return state.app.isSidebarOpen;
}
export function isTopLevel( state ) {
	return state.app.isTopLevel;
}
export function isComingSoon( state ) {
	return state.settings.comingSoon;
}
export function getBluehostData( state ) {
	return state;
}
