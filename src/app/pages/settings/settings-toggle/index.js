import { BWAToggle } from '@app/components/atoms';
import SettingsControl from '../settings-control';

const SettingsToggle = ( { label, checked, onChange } ) => (
	<SettingsControl>
		<div className="label">
			<label>{ label }</label>
		</div>
		<div className="toggle">
			<BWAToggle checked={ checked } label={ label } onChange={ onChange } />
		</div>
	</SettingsControl>
);

export default SettingsToggle;
