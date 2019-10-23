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
import { chain, isString, replace, kebabCase, isEmpty } from 'lodash';

/**
 * Internal dependencies
 */
import './style.scss';

class AppPage extends Component {
	componentDidMount() {
		// recieve this.props.state.setFocus
		this.handleContainerFocus();	
		const currentLocation = this.getCurrentLocation();
		this.maybeAugmentWPMenu();
		// if ( ! isEmpty( select('bluehost/plugin').getAppPages() ) && currentLocation.isTopLevel ) {
			this.handleWordPressMenuActive( currentLocation );
		// } else {
		// 	this.removeActivePageClasses();
		// 	this.hideSubPages();
		// }
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
			pathnameKebab: kebabCase(location.pathname),
			// isTopLevel: select('bluehost/plugin').getAppPages().includes(this.getSlug(location)),
			isTopLevel: true,
			slug: this.getSlug(location),
			slugKebab: this.getSlug(location)
		}
	}

	maybeAugmentWPMenu() {		
		const menuNodes = window.document.querySelectorAll( '#toplevel_page_bluehost > ul > li' );
		const menuItems = Array.from( menuNodes );
		menuItems.splice( 0, 2 );
		menuItems.forEach( function( li ) {
			let className = kebabCase( li.innerText );
			li.classList.add( 'bluehost-wp-menu-item',  className);
		} );
		
		try {
			const elem = window.document.querySelector( 'a.toplevel_page_bluehost' );
			if ( elem.href.includes('admin.php?page=bluehost') ) {
				elem.href = location.origin + '/wp-admin/admin.php?page=bluehost#/home';
			}
		} catch ( e ) {
			console.log( 'Couldn\'t find Bluehost Menu Element to swap href' );
		}
	}

	handleWordPressMenuActive( location ) {
		try{
			const liToActivate = document.querySelector( '.bluehost-wp-menu-item.' + location.slug );
			const bluehostWpSubMenuNode = document.querySelector( '#toplevel_page_bluehost ul' );
			if ( liToActivate && bluehostWpSubMenuNode ) {
				// dispatch('bluehost/plugin').setActivePage( location.slug, location.isTopLevel );
				this.removeActivePageClasses();
				liToActivate.classList.add( 'current' );
				bluehostWpSubMenuNode.style = 'display: block;';
			}
		} catch(e) {
			console.error(e.message);
		}
	};

	removeActivePageClasses() {
			const bluehostWpMenuNodes = document.querySelectorAll( '#toplevel_page_bluehost .bluehost-wp-menu-item' );
			const bluehostWpMenuItems = Array.from( bluehostWpMenuNodes );
			bluehostWpMenuItems.forEach( function( li ) {
				li.classList.remove( 'current' );
			} );
	};

	getSlug(location) {
		let raw = isString(location) ? location : location.pathname;
		return replace( replace( replace(raw, '/marketplace', ''), '/tools', ''), '/', '');
	};



	render() {
		return (
			<section
				tabIndex="-1"
				ref={ ( container ) => ( this.container = container ) }
				className={ 'app-page animated fadeIn page-fade-speed ' + this.props.className }>
				{ this.props.children }
			</section>
		);
	
	}
}

export default withRouter( AppPage );
