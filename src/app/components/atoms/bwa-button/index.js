/**
 * External dependencies
 */
import classNames from 'classnames';
/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { forwardRef } from '@wordpress/element';
/**
 * Internal dependencies
 */
import './style.scss';

const BWAButton = forwardRef((props, ref) => {
	const {className = ''} = props;
	return (
		<Button
			{ ...props }
			className={ classNames({
				bluehost: true,
				[className]: className.length,
			}) }
			ref={ ref }
		/>
	);
});

export default BWAButton;
