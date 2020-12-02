import filter from 'lodash/filter';

/**
 * WordPress dependencies
 */
import { combineReducers } from '@wordpress/data';

/**
 *
 * @param {*} state
 * @param {*} action
 */
// import DEFAULT_STATE from '@app/store/defaults'

const DEFAULT_STATE = {
	app: {},
	env: {},
	notifications: [],
	settings: {},
	wp: {},
};

const app = (state = DEFAULT_STATE.app, action) => {
	switch (action.type) {
		case 'FETCH_WINDOW_DATA':
			return {
				...action.bluehost.app,
				colors: {...action.adminColors},
			};
		case 'SET_ACTIVE_PAGE':
			return {
				...state,
				activePage: action.activePage,
			};
		case 'SET_TOP_LEVEL':
			return {
				...state,
				isTopLevel: action.isTopLevel,
			};
		case 'AUGMENT_WP_ADMIN_MENU':
			return {
				...state,
				isWPMenuAugmented: true,
			};
	}

	return state;
};

const env = (state = DEFAULT_STATE.env, action) => {
	switch (action.type) {
		case 'FETCH_WINDOW_DATA':
			return {
				...action.bluehost.env,
			};
	}

	return state;
};

const notifications = (state = DEFAULT_STATE.notifications, action) => {
	switch (action.type) {
		case 'FETCH_WINDOW_DATA':
			return [
				...action.bluehost.notifications,
			];
		case 'DISMISS_NOTIFICATION':
			return filter(state, ({id}) => id !== action.id);
	}
	return state;
};

const settings = (state = DEFAULT_STATE.settings, action) => {
	switch (action.type) {
		case 'FETCH_WINDOW_DATA':
			return {
				...action.bluehost.settings,
			};
		case 'UPDATE_SETTING':
			const newState = {...state};
			newState[action.setting] = action.newValue;
			return newState;
	}

	return state;
};

const wp = (state = DEFAULT_STATE.wp, action) => {
	switch (action.type) {
		case 'FETCH_WINDOW_DATA':
			return {
				...action.bluehost.wordpress,
				userId: action.userId,
			};
	}

	return state;
};

/**
 * Export store state.
 */
export default combineReducers({
	app,
	env,
	notifications,
	settings,
	wp,
});
