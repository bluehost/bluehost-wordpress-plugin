/**
 * WordPress dependencies
 */
import { BluerockSpinner } from '@/assets';
/**
 * Internal dependencies
 */
import './style.scss';

let sizeClass = 'normal';

const AppSpinner = ( props ) => {
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
			<BluerockSpinner className={ sizeClass } />
		</span>
	);
};

export default AppSpinner;
