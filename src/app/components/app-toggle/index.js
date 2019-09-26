/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';

function AppToggle ( {checked, onChange} ) {
	return (
		<div className="onoffswitch">
			<input
				type="checkbox"
				name="onoffswitch"
				className="onoffswitch-checkbox"
				id="myonoffswitch"
				value="value"
				checked={checked}
				onChange={onChange}
				/>
			<label className="onoffswitch-label" for="myonoffswitch">
				<span className="onoffswitch-inner"></span>
				<span className="onoffswitch-switch"></span>
			</label>
		</div>
	);
};

export default AppToggle;
