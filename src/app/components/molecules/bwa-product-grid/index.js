import './style.scss';

import { Children } from '@wordpress/element';

export default function BWAProductGrid( { children, className = '' } ) {
	return (
		<div className={ `grid ${ className }` }>
			<div className="grid__wrap">
				{ Children.map( children, ( item ) => {
					return (
						<div className="grid__column">
							<div className="grid__item">{ item }</div>
						</div>
					);
				} ) }
			</div>
		</div>
	);
}
