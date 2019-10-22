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
export function isComingSoon( state ) {
	return state.settings.comingSoon;
}
export function isSSOActive( state ) {
	return state.settings.sso;
}
export function getOldPostCommentStatus( state ) {
	return state.settings.disableCommentsOldPosts;
}
export function getCommentCloseInterval( state ) {
	return state.settings.closeCommentsDays;
}
export function getCommentsPerPage( state ) {
	return state.settings.commentsPerPage;
}
export function getAutoUpdateStatus( state ) {
	return state.settings.autoUpdates;
}
export function getRevisionCount( state ) {
	return state.settings.contentRevisions;
}
export function getTrashInterval( state ) {
	// empty trash interval is stored as days, but we display weeks
	return Math.round( state.settings.emptyTrashDays / 7 );
}
export function getCacheLevel( state ) {
	return state.settings.cacheLevel;
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
