/**
 * WordPress dependencies
 */
import { BWAHeading } from '@/components/atoms';

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
			<div className="content-list__box">
				{ children }
			</div>
		</section>
	);
};

export default BWAContentList;
