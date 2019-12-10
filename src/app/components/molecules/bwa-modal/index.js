/**
 * External dependencies
 */
import classNames from 'classnames';
/**
 * WordPress dependencies
 */
import { Modal } from '@wordpress/components';
/**
 * Internal dependencies
 */
import './style.scss';

const BWAModal = ( {
	actionsComponent,
	children,
	className = '',
	...props
} ) => (
	<Modal
		className={ classNames( {
			'bluehost-modal': true,
			[ className ]: className.length,
		} ) }
		shouldCloseOnClickOutside={ false }
		{ ...props }
	>
		<div className="bluehost-modal__content">
			{ children }
		</div>
		{ actionsComponent && (
			<div className="bluehost-modal__actions">
				{ actionsComponent }
			</div>
		) }
	</Modal>
);

export default BWAModal;
