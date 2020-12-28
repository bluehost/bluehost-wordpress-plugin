import { handleWPMenuActiveHighlight, handleWPMenuAugmentation, sendPageviewEvent } from '@app/functions';

import { BWAPageNotices } from '@app/components/molecules';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import keyBy from 'lodash/keyBy';
import { speak } from '@wordpress/a11y';
import { useEffect } from '@wordpress/element';
import { useLocation } from 'react-router-dom';
import { useSelect } from '@wordpress/data';

// import './style.scss';

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

	const getDescriptivePageTitle = () => {
		const defaultTitle = __( 'Bluehost WordPress Plugin', 'bluehost-wordpress-plugin');
		const pageTitle = document.querySelector('h2');
		if ( false !== descriptivePageTitle ) {
			return descriptivePageTitle
		} else if ( null !== pageTitle ) {
			return pageTitle.innerText;
		} else {
			return defaultTitle;
		}
	}

	useEffect(() => {
		handleWPMenuAugmentation(topLevelPages);
		handleWPMenuActiveHighlight( getTopLevelActiveHighlightSlug() );
		pageContainer.focus({ preventScroll: true });
		if ( routerLocation.state && routerLocation.state.redirect !== 'unspecified-or-root' ) {
			speak( getDescriptivePageTitle(), 'assertive' );
		}
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
			<BWAPageNotices />
			{props.children}
		</section>
	);
}

export default BWABaseTemplate;
