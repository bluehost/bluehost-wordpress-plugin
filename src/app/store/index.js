/**
 * WordPress dependencies
 */
import { registerStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import reducer from './reducer.js';
import * as selectors from './selectors.js';
import * as actions from './actions.js';
import controls from './controls.js';
import { STORE_KEY } from './constants.js';

export const storeConfig = {
	reducer,
	selectors,
	actions,
	controls,
	persist: [ 'preferences' ],
};

const store = registerStore(
	STORE_KEY,
	{
		...storeConfig,
		persist: [ 'preferences' ],
	}
);

export default store;
