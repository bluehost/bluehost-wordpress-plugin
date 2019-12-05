/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './style.scss';

function AppToggle( { checked, onChange } ) {
	return (
		<div className="onoffswitch">
			<input
				type="checkbox"
				name="onoffswitch"
				className="onoffswitch__checkbox"
				id="myonoffswitch"
				value="value"
				checked={ checked }
				onChange={ onChange }
			/>
			<label className="onoffswitch__label" htmlFor="myonoffswitch">
				<span className="onoffswitch__inner"></span>
				<span className="onoffswitch__switch"></span>
			</label>
		</div>
	);
}

export default AppToggle;
