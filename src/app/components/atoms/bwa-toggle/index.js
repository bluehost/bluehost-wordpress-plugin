import './style.scss';

import uniqueId from 'lodash/uniqueId';

function BWAToggle({checked, label, onChange}) {

	const id = uniqueId('onoffswitch');

	return (
		<div className="onoffswitch">
			<input
				aria-checked={ checked }
				aria-label={ label }
				checked={ checked }
				className="onoffswitch__checkbox"
				id={ id }
				name="onoffswitch"
				onChange={ onChange }
				type="checkbox"
				value="1"
			/>
			<label className="onoffswitch__label" htmlFor={ id }>
				<span className="onoffswitch__inner" />
				<span className="onoffswitch__switch" />
			</label>
		</div>
	);
}

export default BWAToggle;
