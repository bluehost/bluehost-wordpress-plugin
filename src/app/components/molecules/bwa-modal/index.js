import './style.scss';

import { Modal } from '@wordpress/components';
import classNames from 'classnames';

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
