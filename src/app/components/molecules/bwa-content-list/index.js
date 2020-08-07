/**
 * WordPress dependencies
 */
import classnames from 'classnames';
import { BWAHeading } from '@app/components/atoms';

import './style.scss';

const BWAContentList = ( { title, className, children, ...props } ) => {
	if ( ! children ) {
		return null;
	}
	return (
		<section
			className={ 'content-list ' + className }
			{ ...props }
		>
			<BWAHeading level="h2" size={ 1 }>{ title }</BWAHeading>
			<div className={ classnames( "content-list__box", className ) }>
				{ children }
			</div>
		</section>
	);
};

export default BWAContentList;
