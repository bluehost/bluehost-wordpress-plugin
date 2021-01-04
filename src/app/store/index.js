import * as actions from './actions.js';
import * as selectors from './selectors.js';

import { STORE_KEY } from './constants.js';
import controls from './controls.js';
/**
 * Internal dependencies
 */
import reducer from './reducer.js';
/**
 * WordPress dependencies
 */
import { registerStore } from '@wordpress/data';

export const storeConfig = {
	reducer,
	selectors,
	actions,
	controls,
	persist: ['preferences'],
};

const store = registerStore(
	STORE_KEY,
	{
		...storeConfig,
		persist: ['preferences'],
	}
);

if (global.Cypress) {
	global.store = store;
}

export default store;
