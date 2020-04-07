import { createPortal } from '@wordpress/element';

import './style.scss';

export default function BWAOverlay( { children, className = '' } ) {
	return createPortal(
		(
			<div className="bluehost-overlay">
				<div className={ `bluehost-overlay__contents ${ className }` }>
					{ children }
				</div>
			</div>
		),
		document.body
	);
}
