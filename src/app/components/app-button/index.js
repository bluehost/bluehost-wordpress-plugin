/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
/**
 * Component dependencies
 */
/**
 * Internal dependencies
 */
import './style.scss';
/**
 * Bluehost-branded Button Components.
 * @param {*} props
 */
const AppButton = ( props ) => {
	return (
		<Button { ...props } className="brand-bluehost" />
	);
};

export default AppButton;
