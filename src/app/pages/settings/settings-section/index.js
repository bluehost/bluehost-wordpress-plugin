import './style.scss';

import {
	BWAHeading,
} from '@app/components/atoms';

const SettingsSection = ( { name, children, className = '', ...props } ) => {
	return (
		<div className={ 'settings-section pure-u-1 pure-u-lg-3-8 ' + className } { ...props }>
			<BWAHeading level="h3" size={ 1 } className="settings-section__title">{ name }</BWAHeading>
			{ children }
		</div>
	);
};

export default SettingsSection;
