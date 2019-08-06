/**
 * WordPress dependencies
 */
import { Spinner } from '@wordpress/components';
/**
 * Internal dependencies
 */
import './style.scss';

const wrapperClass = '';

const AppSpinner = ( props ) => {
	// if (props.brand) {
	//     wrapperClass += 'brand';
	// }
	// if (props.large) {
	//     wrapperClass += ' size-large';
	// }
	// if('overlay' === props.position) {
	//     wrapperClass += ' overlay'
	// }
	return (
		<span className="loader-wrap">
			<Spinner />
		</span>
	);
};

export default AppSpinner;
