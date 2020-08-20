import {uniqueId} from 'lodash';

/**
 * Internal dependencies
 */
import './style.scss';

function BWAToggle({checked, label, onChange}) {

	const id = uniqueId('onoffswitch');

	return (
		<div className="onoffswitch">
			<input
				aria-label={ label }
				checked={ checked }
				className="onoffswitch__checkbox"
				id={ id }
				name="onoffswitch"
				onChange={ onChange }
				type="checkbox"
				value="value"
			/>
			<label className="onoffswitch__label" htmlFor={ id }>
				<span className="onoffswitch__inner" />
				<span className="onoffswitch__switch" />
			</label>
		</div>
	);
}

export default BWAToggle;
