import './style.scss';

const SettingsSection = ( { name, children, className = '' } ) => {
	return (
		<div className={ "settings-section pure-u-1 " + className }>
			<h2>{ name }</h2>
			{ children }
		</div>
	);
}

export default SettingsSection;
