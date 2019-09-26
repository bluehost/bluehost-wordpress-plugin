/**
 * WordPress Dependencies
 */
import { SelectControl } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import SettingsControl from '../settings-control';

const SettingsSelect = ( { label, options, value, onChange } ) => (
	<SettingsControl>
		<div className="label pure-u-3-4">
			<label>{label}</label>
		</div>
		<div className="toggle pure-u-1-4">
			<SelectControl value={value} options={options} onChange={onChange} />
		</div>
	</SettingsControl>
);

export default SettingsSelect;
