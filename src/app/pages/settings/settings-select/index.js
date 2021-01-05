import { SelectControl } from '@wordpress/components';
import SettingsControl from '../settings-control';

const SettingsSelect = ( { label, options, value, onChange, ...props }) => (
	<SettingsControl>
		<div className="label pure-u-3-4">
			<label>{ label }</label>
		</div>
		<div className="toggle pure-u-1-4">
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
