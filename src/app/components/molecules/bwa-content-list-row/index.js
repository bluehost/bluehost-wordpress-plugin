import './style.scss';

import {
	BWAHeading,
} from '@app/components/atoms';
import { Dashicon } from '@wordpress/components';
import classNames from 'classnames';

const RowIcon = ( { icon, iconSize } ) => {
	if ( 'string' === typeof icon ) {
		return (
			<Dashicon icon={ icon ? icon : '' } size={ iconSize } />
		);
	}

	return icon;
};

const BWABWAContentListRow = ( { icon, iconSize, title, desc, className = '', children, ...props } ) => {
	return (
		<div className={ classNames( {
			'content-list-row': true,
			'pure-g': true,
			}, {
				[ className ]: className.length
			}			
		) }>
			<div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-2 content-list-row__details">
				<div className="content-list-row__top">
					{ icon && ( <RowIcon icon={ icon } iconSize={ iconSize } /> ) }
					<BWAHeading level="h3" size={ 4 } className="content-list-row__title">{ title }</BWAHeading>
				</div>
				<p>{ desc }</p>
			</div>
			<div className="pure-u-1 pure-u-sm-1-2 pure-u-md-2-3 pure-u-lg-1-2 content-list-row__action">{ children }</div>
		</div>
	);
};

export default BWABWAContentListRow;
