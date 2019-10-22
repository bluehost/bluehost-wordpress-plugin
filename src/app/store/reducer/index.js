/**
 * WordPress dependencies
 */
import { combineReducers } from '@wordpress/data';
/**
 *
 * @param {*} state
 * @param {*} action
 */
// import DEFAULT_STATE from '@/store/defaults'

const DEFAULT_STATE = {
    app: {},
    env: {},
    settings: {},
    wp: {},
};

const app = ( state = DEFAULT_STATE.app, action ) => {
	switch( action.type ) {
		case 'FETCH_WINDOW_DATA':
			return {
				...action.bluehost.app,
				colors: { ...action.adminColors }
			};
		case 'SET_ACTIVE_PAGE':
			return {
				...state,
				activePage: action.activePage
			};
		case 'SET_TOP_LEVEL':
			return {
				...state,
				isTopLevel: action.isTopLevel
			};
		case 'AUGMENT_WP_ADMIN_MENU':
			return {
				...state,
				isWPMenuAugmented: true
			};
	}

	return state;
}

const env = ( state = DEFAULT_STATE.env, action ) => {
	switch( action.type ) {
		case 'FETCH_WINDOW_DATA':
			return {
				...action.bluehost.env
			}
	}

	return state;
}

const settings = ( state = DEFAULT_STATE.settings, action ) => {
	switch( action.type ) {
		case 'FETCH_WINDOW_DATA':
			return {
				...action.bluehost.settings
			}
		case 'TOGGLE_COMING_SOON':
			return {
				...state,
				comingSoon: ! state.comingSoon,
			}
		case 'TOGGLE_SSO':
			return {
				...state,
				sso: ! state.sso,
			}
		case 'TOGGLE_CORE_UPDATES':
			return {
				...state,
				autoUpdates: {
					...state.autoUpdates,
					core: ! state.autoUpdates.core
				}
			}
		case 'TOGGLE_PLUGIN_UPDATES':
			return {
				...state,
				autoUpdates: {
					...state.autoUpdates,
					plugins: ! state.autoUpdates.plugins
				}
			}
		case 'TOGGLE_THEME_UPDATES':
			return {
				...state,
				autoUpdates: {
					...state.autoUpdates,
					themes: ! state.autoUpdates.themes
				}
			}
		case 'TOGGLE_OLD_POST_COMMENTS':
			return {
				...state,
				disableCommentsOldPosts: ! state.disableCommentsOldPosts
			}
		case 'SET_COMMENT_CLOSE_INTERVAL':
			return {
				...state,
				closeCommentsDays: action.days
			}
		case 'SET_COMMENTS_PER_PAGE':
			return {
				...state,
				commentsPerPage: action.perPage
			}
		case 'SET_REVISION_COUNT':
			return {
				...state,
				contentRevisions: action.revisions
			}
		case 'SET_TRASH_INTERVAL':
			return {
				...state,
				emptyTrashDays: action.days
			}
		case 'SET_CACHE_LEVEL':
			return {
				...state,
				cacheLevel: action.level
			}
	}

	return state;
}

const wp = ( state = DEFAULT_STATE.wp, action ) => {
	switch( action.type ) {
		case 'FETCH_WINDOW_DATA':
			return {
				...action.bluehost.wordpress,
				userId: action.userId
			}
	}

	return state;
}

/**
 * Export store state.
 */
export default combineReducers( {
	app,
	env,
	settings,
	wp
} );
