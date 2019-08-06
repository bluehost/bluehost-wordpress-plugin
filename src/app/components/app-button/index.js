/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
/**
 * Internal dependencies
 */
import './style.scss';

const AppButton = ( props ) => {
	return (
        <Button {...props} className="bluehost" />
	);
};

export default AppButton;
