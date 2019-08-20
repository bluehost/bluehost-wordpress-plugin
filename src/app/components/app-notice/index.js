/**
 * WordPress dependencies
 */
import { Notice } from '@wordpress/components';
/**
 * Component dependencies
 */
/**
 * Internal dependencies
 */
import './style.scss';

const AppNotice = ( props ) => {
	return (
		<Notice { ...props } className="bluehost bordered-box" />
	);
};

export default AppNotice;
