/**
 * WordPress dependencies
 */
import { Speak } from '@wordpress/a11y';
import { Fragment } from '@wordpress/element';
/**
 * External dependencies
 */
import { useLocation } from 'react-router-dom';
import kebabCase from 'lodash/kebabCase';

/**
 * Internal dependencies
 */
import { BWABaseTemplate } from '@app/components/templates';
import './style.scss';

const BWACommonTemplate = ({ 
	type = 'common', 
	showHeader = true,
	showMainNav = true,
	children, 
	...props 
}) => {
	return (
		<Fragment>
			<BWABaseTemplate
				type={type}
				{...props}
			>
				{children}
			</BWABaseTemplate>
		</Fragment>
		
	);
}

export default BWACommonTemplate;
