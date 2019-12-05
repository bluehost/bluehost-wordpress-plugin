import './style.scss';

import {
	AppHeading,
} from '@/components/atoms';

const SettingsSection = ( { name, children, className = '', ...props } ) => {
	return (
		<div className={ 'settings-section pure-u-1 pure-u-lg-3-8 ' + className } { ...props }>
			<AppHeading level="h3" size={ 1 } className="settings-section__title">{ name }</AppHeading>
			{ children }
		</div>
	);
};

export default SettingsSection;
