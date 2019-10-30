const SettingsGroup = ( { children, className = '' } ) => {
	return (
		<div className={ "settings-group bordered-box " + className }>
			{ children }
		</div>
	);
}

export default SettingsGroup;
