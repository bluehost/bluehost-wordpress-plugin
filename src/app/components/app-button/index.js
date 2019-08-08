/**
 * WordPress dependencies
 */
import {Button} from '@wordpress/components';
/**
 * Internal dependencies
 */
import './style.scss';

const AppButton = ({className, ...props}) => {
    return (
        <Button {...props} className={`bluehost ${className}`}/>
    );
};

export default AppButton;
