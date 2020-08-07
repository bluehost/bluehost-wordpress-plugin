/**
 * Internal dependencies
 */
import './style.scss';

let sizeClass = 'normal';

const BWASpinner = ( props ) => {
	if ( props.micro ) {
		sizeClass = 'micro';
	}
	if ( props.small ) {
		sizeClass = 'small';
	}
	if ( props.large ) {
		sizeClass = 'large';
	}
	return (
		<span className="app-spinner__wrap">
			<div className={ 'bluehost-app__loader ' + sizeClass } />
		</span>
	);
};

export default BWASpinner;
