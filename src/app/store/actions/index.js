export function openMobileSidebar() {
	return {
		type: 'MOBILE_SIDEBAR_ACTIVE',
	};
};

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

export function toggleUpdates( updateType ) {
	switch( updateType ) {
		case 'core':
			return {
				type: 'TOGGLE_CORE_UPDATES'
			}
		case 'plugins':
			return {
				type: 'TOGGLE_PLUGIN_UPDATES'
			}
		case 'themes':
			return {
				type: 'TOGGLE_THEME_UPDATES'
			}
	}
}

export function toggleComingSoon() {
	return {
		type: 'TOGGLE_COMING_SOON',
	}
}

export function toggleSSO() {
	return {
		type: 'TOGGLE_SSO',
	}
}

export function toggleOldPostComments() {
	return {
		type: 'TOGGLE_OLD_POST_COMMENTS',
	}
}

export function setCommentCloseInterval( days ) {
	return {
		type: 'SET_COMMENT_CLOSE_INTERVAL',
		days
	}
}

export function setCommentsPerPage( perPage ) {
	return {
		type: 'SET_COMMENTS_PER_PAGE',
		perPage
	}
}

export function setRevisionCount( revisions ) {
	return {
		type: 'SET_REVISION_COUNT',
		revisions
	}
}

export function setTrashInterval( weeks ) {
	const days = weeks * 7;
	return {
		type: 'SET_TRASH_INTERVAL',
		days
	}
}

export function setCacheLevel( level ) {
	return {
		type: 'SET_CACHE_LEVEL',
		level
	}
}
