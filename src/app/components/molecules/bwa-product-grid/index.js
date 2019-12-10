import { Children } from '@wordpress/element';

import './style.scss';

export default function BWAProductGrid( { children, className = '' } ) {
	return (
		<div className={ `grid ${ className }` }>
			<div className="pure-g">
				{ Children.map( children, ( item ) => {
					return (
						<div className="pure-u-1 pure-u-md-1-2 pure-u-xl-1-3">
							<div className="grid__item">{ item }</div>
						</div>
					);
				} ) }
			</div>
		</div>
	);
}
