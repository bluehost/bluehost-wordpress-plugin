import './style.scss';

import { CloseIcon, SuccessIcon, WarningIcon } from '@app/assets';

import { Notice } from '@wordpress/components';
import classNames from 'classnames';
import { createPortal } from '@wordpress/element';

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
