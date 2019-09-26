/**
 * Internal Dependencies
 */
import SettingsControl from '../settings-control';
import { AppToggle } from '@/components';

const SettingsToggle = ( { label,checked, onChange }) => (
	<SettingsControl>
		<div className="label pure-u-3-4">
			<label>{label}</label>
		</div>
		<div className="toggle pure-u-1-4">
			<AppToggle checked={checked} onChange={onChange} />
		</div>
	</SettingsControl>
);

export default SettingsToggle;
