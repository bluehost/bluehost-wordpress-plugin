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

const AppButton = forwardRef( ( { className = '', ...props }, ref ) => {
	return (
		<Button
			{ ...props }
			className={ classNames( {
				bluehost: true,
				[ className ]: className.length,
			} ) }
			ref={ ref }
		/>
	);
} );

export default AppButton;
