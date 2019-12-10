/**
 * External dependencies
 */
import classnames from 'classnames';

import './style.scss';

const validLevels = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];
const validSizes = [ 0, 1, 2, 3, 4, 'welcome', 'product', 'setting', '' ];

const BWAHeading = ( { level, size = 1, className = '', children, ...props } ) => {
	const levelElement = level ? level.toLowerCase() : '';
	const HTMLHeading = validLevels.includes( levelElement ) ? levelElement : 'p';
	let sizeClass	= validSizes.includes( size ) ? 'is-title-' + size.toString() : 'is-size-3';
	if ( '' === size ) {
		sizeClass = null;
	}
	className = classnames(
		'app-heading',
		{ [ sizeClass ]: sizeClass.length },
		{ [ className ]: className.length }
	);

	return (
		<HTMLHeading
			className={ className }
			{ ...props }
		>
			{ children }
		</HTMLHeading>
	);
};

export default BWAHeading;
