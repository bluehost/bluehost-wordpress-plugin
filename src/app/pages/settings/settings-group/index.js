import './style.scss';

const SettingsGroup = ( { children, className = '' } ) => {
	return (
		<div className={ 'settings-group ' + className }>
			{ children }
		</div>
	);
};

export default SettingsGroup;
