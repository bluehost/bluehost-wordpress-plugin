/**
 * WordPress dependencies
 */
import { Speak } from '@wordpress/a11y';
import { select, dispatch } from '@wordpress/data';
import { Component } from '@wordpress/element';
/**
 * External dependencies
 */
import { withRouter } from 'react-router-dom';
import isString from 'lodash/isString';
import replace from 'lodash/replace';
import kebabCase from 'lodash/kebabCase';

/**
 * Internal dependencies
 */
import './style.scss';

class BWABaseTemplate extends Component {
	componentDidMount() {
		// recieve this.props.state.setFocus
		this.handleContainerFocus();
		const augmentedLocation = this.getCurrentLocation();
		this.maybeAugmentWPMenu();
		this.handleWordPressMenuActive( augmentedLocation );
	}

	handleContainerFocus() {
		const { location } = this.props;
		if ( location.state && location.state.setFocus ) {
			this.container.focus( { preventScroll: true } );
		}
	}

	getCurrentLocation() {
		const { location } = this.props;
		
		return {
			...location,
			pathnameKebab: kebabCase( location.pathname ),
			slug: this.getSlug( location ),
			highlightSlug: this.getSlug(location),
		};		
	}

	maybeAugmentWPMenu() {
		const primaryNode = window.document.querySelector( '#toplevel_page_bluehost' );
		
		if ( 'undefined' !== typeof primaryNode.dataset && primaryNode.dataset.augmented ) {
			return;
		}

		this.augmentWPMenu();

		primaryNode.setAttribute( 'data-augmented', 1 );
	}

	augmentWPMenu() {
		const menuItems = Array.from( window.document.querySelectorAll( '#toplevel_page_bluehost > ul > li' ) );
		menuItems.splice( 0, 2 );
		menuItems.forEach( function( li ) {
			const className = kebabCase( li.innerText );
			li.classList.add( 'bluehost-wp-menu-item', className );
			li.setAttribute( 'data-bh-top-level', className );
		} );

		try {
			const elem = window.document.querySelector( 'a.toplevel_page_bluehost' );
			if ( ! elem.href.includes('#/home') ) {
				elem.href = elem.href + '#/home';
			}
		} catch ( e ) {
			console.log( 'Couldn\'t find Bluehost Menu Element to swap href' );
		}
	}

	handleWordPressMenuActive( augmentedLocation ) {
		this.removeActivePageClasses();
		try {
			let slug = augmentedLocation.highlightSlug;
			const liToActivate = document.querySelector( '.bluehost-wp-menu-item.' + slug );
			const bluehostWpSubMenuNode = document.querySelector( '#toplevel_page_bluehost ul' );
			if ( liToActivate && bluehostWpSubMenuNode ) {
				liToActivate.classList.add( 'current' );
				bluehostWpSubMenuNode.style = 'display: block;';
			}
		} catch ( e ) {
			console.error( e.message );
		}
	}

	removeActivePageClasses() {
		const bluehostWpMenuItems = Array.from( document.querySelectorAll( '#toplevel_page_bluehost .bluehost-wp-menu-item' ) );
		bluehostWpMenuItems.forEach( function( li ) {
			li.classList.remove( 'current' );
		} );
	}

	/**
	 * TODO: Augment for any top-level page highlighting.
	 * @param {*} location 
	 */
	getSlug( location ) {
		let raw = isString( location ) ? location : location.pathname;
		let removePartials = [ '/marketplace', '/tools', '/blue-sky', '/' ];

		removePartials.forEach( (partial) => {
			raw = replace( raw, partial, '' );
		})

		return raw;
	}

	render() {
		return (
			<section
				ref={ ( container ) => ( this.container = container ) }
				className={ 'base-template animated fadeIn page-fade-speed ' + this.props.className }
            >
				{ this.props.children }
			</section>
		);
	}
}

export default withRouter( BWABaseTemplate );
