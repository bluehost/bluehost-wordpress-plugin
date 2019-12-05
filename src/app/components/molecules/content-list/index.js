/**
 * WordPress dependencies
 */
import { AppHeading } from '@/components/atoms';

import './style.scss';

const ContentSection = ( { title, className, children, ...props } ) => {
	if ( ! children ) {
		return null;
	}
	return (
		<section
			className={ 'content-list ' + className }
			{ ...props }
		>
			<AppHeading level="h2" size={ 1 }>{ title }</AppHeading>
			<div className="content-list__box">
				{ children }
			</div>
		</section>
	);
};

export default ContentSection;
