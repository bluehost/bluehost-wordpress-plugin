import { SelectControl } from '@wordpress/components';
import SettingsControl from '../settings-control';

const SettingsSelect = ( { label, options, value, onChange, ...props }) => (
	<SettingsControl>
		<div className="label">
			<label>{ label }</label>
		</div>
		<div className="toggle">
			<SelectControl
				{ ...props }
				onChange={ onChange }
				options={ options }
				value={ value }
			/>
		</div>
	</SettingsControl>
);

export default SettingsSelect;
