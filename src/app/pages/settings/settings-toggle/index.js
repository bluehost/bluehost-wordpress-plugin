import { BWAToggle } from '@app/components/atoms';
import SettingsControl from '../settings-control';

const SettingsToggle = ( { label, checked, onChange } ) => (
	<SettingsControl>
		<div className="label pure-u-3-4">
			<label>{ label }</label>
		</div>
		<div className="toggle pure-u-1-4">
			<BWAToggle checked={ checked } label={ label } onChange={ onChange } />
		</div>
	</SettingsControl>
);

export default SettingsToggle;
