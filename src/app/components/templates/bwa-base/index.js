import { Component, createRef, useEffect } from '@wordpress/element';

/**
 * WordPress dependencies
 */
import { Speak } from '@wordpress/a11y';
import classnames from 'classnames';
import kebabCase from 'lodash/kebabCase';
/**
 * Internal dependencies
 */
import { sendPageview } from '@app/functions';
/**
 * External dependencies
 */
import { useLocation } from 'react-router-dom';
import without from 'lodash/without';

// import './style.scss';

const BWABaseTemplate = ({
	type = "base",
	...props 
}) => {
	const topLevelPage 	= 'toplevel_page_bluehost'; // wordpress-generated DOM ID
	const menuItemClass = 'bluehost-wp-menu-item'; // special classname for handling highlights
	const pageContainer = document.querySelector('.bwa-page-contents');
	const routerLocation = useLocation();

	const handleContainerFocus = () => {
		if ( routerLocation.state && routerLocation.state.setFocus ) {
			pageContainer.focus( { preventScroll: true } );
		}
	}
	
	const handleWPMenuAugmentation = () => {
		const primaryNode = window.document.querySelector( '#' + topLevelPage );
			
		if ( 'undefined' !== typeof primaryNode.dataset && primaryNode.dataset.augmented ) {
			return; // if data-augmented="1", don't re-augment
		}
	
		augmentWPMenu();
	
		primaryNode.setAttribute( 'data-augmented', 1 );
	}
	
	const handleWPMenuActiveHighlight = () => {
		removeWPMenuActiveHighlight();
		try {
			let slug = getTopLevelActiveHighlightSlug();
			console.log( '.' + menuItemClass + '.' + slug );
			const liToActivate = document.querySelector( '.' + menuItemClass + '.' + slug );
			const bluehostWpSubMenuNode = document.querySelector( '#' + topLevelPage + ' ul' );
			if ( liToActivate && bluehostWpSubMenuNode ) {
				liToActivate.classList.add( 'current' );
				bluehostWpSubMenuNode.style = 'display: block;';
			}
		} catch ( e ) {
			console.error( e.message );
		}
	}

	const augmentWPMenu = () => {
		const menuItems = Array.from( window.document.querySelectorAll( '#' + topLevelPage + ' > ul > li' ) );
		menuItems.splice( 0, 2 ); // skip first two line items to only include submenu lin items
		menuItems.forEach( function( li ) {
			const className = kebabCase( li.innerText );
			li.classList.add( menuItemClass, className );
			li.setAttribute( 'data-' + menuItemClass, className );
		} );
	
		try {
			const elem = window.document.querySelector( 'a.' + topLevelPage );
			if ( ! elem.href.includes('#/home') ) {
				elem.href = elem.href + '#/home';
			}
		} catch ( e ) {
			console.log( 'Couldn\'t find Bluehost Menu Element to swap href' );
		}
	}
	
	/**
	 * Loop over all .bluehost-wp-menu-item, remove .current
	 */
	const removeWPMenuActiveHighlight = () => {
		const bluehostWpMenuItems = Array.from( document.querySelectorAll( '#' + topLevelPage + ' .' + menuItemClass ) );
		bluehostWpMenuItems.forEach( function( menuItem ) {
			menuItem.classList.remove( 'current' );
		} );
	}

	/**
	 * Use router location to figure out top-level page to highlight, if any.
	 */
	const getTopLevelActiveHighlightSlug = () => {
		let slug 			= false;
		let currentPath 	= routerLocation.pathname;
		let topLevelLabels 	= Object.keys( window.bluehost.app.pages );

		if ( topLevelLabels.includes( currentPath.substring(1) ) ) {
			slug = currentPath.substring(1);
		}

		topLevelLabels.forEach( ( pageLabel ) => {
			let classnameToTarget = kebabCase( pageLabel );
			if ( currentPath.includes( '/' + classnameToTarget ) ) {
				slug = classnameToTarget;
			}
		})

		return slug;
	}

	useEffect(() => {
		handleContainerFocus();
		handleWPMenuAugmentation();
		handleWPMenuActiveHighlight();
		sendPageview(routerLocation);
	}, [routerLocation.pathname]);

	return (
		<section 
			// ref={ ( container ) => ( pageContainer => container ) }
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
