import { handleWPMenuActiveHighlight, handleWPMenuAugmentation, sendPageviewEvent } from '@app/functions';

import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import {keyBy} from 'lodash';
import { speak } from '@wordpress/a11y';
import { useEffect } from '@wordpress/element';
import { useLocation } from 'react-router-dom';
import { useSelect } from '@wordpress/data';

const BWABaseTemplate = ({
	type = "base",
	descriptivePageTitle = false,
	...props 
}) => {
	const pageContainer = document.querySelector('.bwa-route-contents');
	const routerLocation = useLocation();
	const topLevelPages = useSelect((select) => {
		return select('bluehost/plugin').getTopLevelPages();
	}, []);

	if ( null === topLevelPages || 'undefined' === typeof topLevelPages ) {
		return false;
	}

	/**
	 * Use router location to figure out top-level page to highlight, if any.
	 */
	const getTopLevelActiveHighlightSlug = () => {
		let slug 			= false;
		let currentPath 	= routerLocation.pathname;
		let topLevelPaths 	= keyBy(topLevelPages, 'path');

		if ( topLevelPaths[ currentPath ] ) {
			slug = topLevelPaths[ currentPath ].slug;
		} else {
			topLevelPages.forEach( ( pageData ) => {
				if ( currentPath.includes( pageData.path ) ) {
					slug = pageData.slug;
				}
			})
		}

		return slug;
	}

	/**
	 * Determine short, unique title used for analytics and a11y announcements.
	 */
	const getDescriptivePageTitle = () => {
		const defaultTitle = __( 'Bluehost WordPress Plugin', 'bluehost-wordpress-plugin');
		const pageTitle = document.querySelector('h2');
		if ( false !== descriptivePageTitle ) {
			return descriptivePageTitle;
		} else if ( null !== pageTitle ) {
			return pageTitle.innerText;
		} else {
			return defaultTitle;
		}
	}

	const speakRouteTitle = ( location, title ) => {
		if (
			'object' === typeof location
			&& location.hasOwnProperty('state')
			&& 'unspecified-or-root' === location?.state?.redirect 
		) {
			return; // don't speak Home title on load (rely on browser behavior), but speak on subsequent navigation to Home
		}

		speak( title, 'assertive' );
	}

	useEffect(() => {
		handleWPMenuAugmentation(topLevelPages);
		handleWPMenuActiveHighlight( getTopLevelActiveHighlightSlug() );
		pageContainer.focus({ preventScroll: true });
		speakRouteTitle( routerLocation, getDescriptivePageTitle() );
		sendPageviewEvent(routerLocation, getDescriptivePageTitle() );
	}, [routerLocation.pathname]);

	return (
		<section 
			className={ 
				classnames([
					'component-template-' + type,
					'base-template',
					'animated',
					'fadeIn',
					'page-fade-speed',
					props.className ? props.className : null
				]) 
			}>
			{props.children}
		</section>
	);
}

export default BWABaseTemplate;
