import { select } from "@wordpress/data";

/**
 * Returns whether or not tips are globally enabled.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether tips are globally enabled.
 */
export function getActivePage(state) {
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
export function getAllSettings( state ) {
	return state.settings;
}
export function getSetting( state, setting ) {
	return state.settings[setting];
}
export function isWooActive( state ) {
	return state.wp.isWooActive;
}
export function isJetpackActive( state ) {
	return state.wp.isJetpackActive;
}
export function getBluehostData( state ) {
	return state;
}
