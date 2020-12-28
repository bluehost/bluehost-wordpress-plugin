import { Fragment, useEffect, useState } from '@wordpress/element';

import { BWANotice } from '@app/components/atoms';
import filter from 'lodash/filter';
import { useLocation } from 'react-router-dom';
import { useSelect } from '@wordpress/data';

const BWAPageNotices = () => {
	const [pageNotices, setPageNotices] = useState(null);
	const location 						= useLocation();
	const hashedPath 					= '#' + location.pathname;
	const allPluginNotices 				= useSelect((select) => {
		return select('bluehost/plugin').getNotifications();
	}, [location]);
	// TODO: Implement deny-list logic
	const allNoticeDenyPaths			= useSelect((select) => {
		const state = select('bluehost/plugin').getBluehostData();
		return state.app.noticesPathsDenyList;
	}, [location]);

	useEffect(() => {
		const noticesForLocation = filter(allPluginNotices, (notice) => {
			let displayNotice = false;
			// reduce notice locations to objects where 'context': 'bluehost-plugin' and step into object
			const context = filter( notice.locations, [ 'context', 'bluehost-plugin' ] )[0];

			if( 'string' === typeof context.pages && 'all' === context.pages ) {
				displayNotice = true; // display on all pages
			}

			if ( Array.isArray(context.pages) ) {
				if ( context.pages.includes(hashedPath) ) {
					displayNotice = true; // display top-page path exact match
				}
				context.pages.forEach((page) => {
					if( 'string' === typeof page && hashedPath.includes(page)) {
						displayNotice = true; // display sub-page partial path match
					}
				});
			}
	
			return displayNotice;
		});
		if ( noticesForLocation.length > 0 ) {
			setPageNotices(noticesForLocation);
		}
	}, [hashedPath]);

	if (null === pageNotices) {
		return false;
	}
	
	return (
		<Fragment>
			{pageNotices.map(notice => (<BWANotice {...notice} key={notice.id} />))}
		</Fragment>
	)
};

export default BWAPageNotices;
