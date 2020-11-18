/**
 * WordPress dependencies
 */
import { Speak } from '@wordpress/a11y';
import { Component, createRef, useEffect } from '@wordpress/element';
/**
 * External dependencies
 */
import { useLocation } from 'react-router-dom';
import kebabCase from 'lodash/kebabCase';
import without from 'lodash/without';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import './style.scss';

const BWABaseTemplate = ({
	type = "base",
	...props 
}) => {
	const topLevelPage 	= 'toplevel_page_bluehost';
	const menuItemClass = 'bluehost-wp-menu-item';
	const pageContainer = document.querySelector('.bwa-page-contents');

	const handleContainerFocus = () => {
		let location = useLocation();
		if ( location.state && location.state.setFocus ) {
			pageContainer.focus( { preventScroll: true } );
		}
	}
	
	const handleWPMenuAugmentation = () => {
		const primaryNode = window.document.querySelector( '#' + topLevelPage );
			
		if ( 'undefined' !== typeof primaryNode.dataset && primaryNode.dataset.augmented ) {
			return;
		}
	
		augmentWPMenu();
	
		primaryNode.setAttribute( 'data-augmented', 1 );
	}
	
	const handleWPMenuActiveHighlight = () => {
		removeWPMenuActiveHighlight();
		try {
			let slug = getTopLevelActiveHighlightSlug();
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
		menuItems.splice( 0, 2 );
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
	
	const removeWPMenuActiveHighlight = () => {
		const bluehostWpMenuItems = Array.from( document.querySelectorAll( '#' + topLevelPage + ' .' + menuItemClass ) );
		bluehostWpMenuItems.forEach( function( menuItem ) {
			menuItem.classList.remove( 'current' );
		} );
	}

	/**
	*/
	const getTopLevelActiveHighlightSlug = () => {
		let location = useLocation();
		let raw = location.pathname;
		let topLevelPages = window.bluehost.app.pages;

		topLevelPages.forEach( page => {
			if ( raw.includes( '/' + page ) ) {
				raw = page;
			}
		})

		if ( raw === location.pathname ) {
			return false;
		}

		return raw;
	}
	// const handleAppContainerClass = () => {
	// 	const appContainer = document.getElementById( 'bwa-app' );
	// 	let appContainerClasses = [...appContainer.classList];
	// 	console.log( 'before:' );
	// 	console.dir([...appContainer.classList]);
	// 	appContainerClasses.forEach( ( className ) => {
	// 		if(className.includes('route-template-')) {
	// 			appContainer.classList.remove = className;
	// 		}
	// 	})
	// 	appContainer.classList.add( 'route-template-' + type );
	// }
	// grab location from react-router-dom
	handleContainerFocus();
	handleWPMenuAugmentation();
	handleWPMenuActiveHighlight();

	// useEffect(() => {
	// 	handleAppContainerClass();
	// }, [type]);

	return (
		<section 
			ref={ ( container ) => ( pageContainer => container ) }
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
