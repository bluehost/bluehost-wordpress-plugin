/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { Notice } from '@wordpress/components';
import { createPortal } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { ReactComponent as CloseIcon } from './node_modules/@/assets/close.svg';
import { ReactComponent as WarningIcon } from './node_modules/@/assets/warning.svg';
import { ReactComponent as SuccessIcon } from './node_modules/@/assets/success.svg';
import './style.scss';

const BWASnackbar = ( { children, className = '', isDismissible = false, onRemove, status, title = '', ...props } ) => {
	return createPortal(
		(
			<Notice
				className={ classNames( {
					'bluehost-snackbar': true,
					[ className ]: className.length,
				} ) }
				{ ...props }
				status={ status }
				onRemove={ onRemove }
				isDismissible={ false }
			>
				<div className="bluehost-snackbar__icon">{ ( () => {
					switch ( status ) {
						case 'error':
							return <WarningIcon />;
						case 'success':
							return <SuccessIcon />;
					}
				} )() }</div>
				<div className="bluehost-snackbar__content">
					{ title && title.length && (
						<div className="bluehost-snackbar__title">{ title }</div>
					) }
					<div className="bluehost-snackbar__message">{ children }</div>
				</div>
				{ isDismissible && onRemove && (
					<button className="bluehost-snackbar__close" onClick={ onRemove }>
						<CloseIcon />
					</button>
				) }
			</Notice>
		),
		document.body
	);
};

export default BWASnackbar;
