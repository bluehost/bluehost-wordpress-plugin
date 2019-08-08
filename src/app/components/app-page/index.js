/**
 * WordPress dependencies
 */
import { Speak } from '@wordpress/a11y';
import { Component } from '@wordpress/element';
/**
 * External dependencies
 */
import { withRouter } from 'react-router-dom';

/**
 * Internal dependencies
 */
import './style.scss';

class BluehostPage extends Component {
	componentDidMount() {
		const { location } = this.props;
		if ( location.state && location.state.setFocus ) {
			this.container.focus( { preventScroll: true } );
		}
		this.maybeAssignMenuSelectors( location );
		this.handleWordPressMenuActive( location );
	}

	maybeAssignMenuSelectors( location ) {
		if ( 'object' !== typeof window.bluehost ) {
			window.bluehost = new Object();
		}
		if ( this.isEmpty( window.bluehost.activePage ) ) {
			let menuNodes = document.querySelectorAll('#toplevel_page_bluehost > ul > li');
			let menuItems = Array.from(menuNodes);
			menuItems.splice(0,2);
			menuItems.forEach( function( li ) {
				const slug = li.innerText.toLowerCase();
				li.classList.add( 'bluehost-wp-menu-item', slug );
			});
		}
	}

	/**
	 * Unset Active Class On Menu And Re-Highlight
	 * @param object location 
	 */
	handleWordPressMenuActive( location ) {
		let pathname = location.pathname || '';
		let activePageSlug = this.trimLocationPathname(pathname);
		let liToActivate = document.querySelector( '.bluehost-wp-menu-item.' + activePageSlug );
		if ( liToActivate ) {
			this.removeActivePageClasses();
			liToActivate.classList.add( 'current' );
			window.bluehost.activePage = activePageSlug;
		}
	}

	removeActivePageClasses() {
		let bluehostWpMenuNodes = document.querySelectorAll('#toplevel_page_bluehost .bluehost-wp-menu-item');
		let bluehostWpMenuItems = Array.from(bluehostWpMenuNodes);
		bluehostWpMenuItems.forEach( function( li ) {
			li.classList.remove( 'current' );
		});
	}

	trimLocationPathname( rawPathname ) {
		let trimMarketplace = rawPathname.replace( '/marketplace', '' );
		let trimSlash = trimMarketplace.replace( '/', '' );
		return trimSlash;
	}

	isEmpty( mixedVar ) {
		var undef;
		var key;
		var i;
		var len;
		var emptyValues = [undef, null, false, 0, '', '0']

		for (i = 0, len = emptyValues.length; i < len; i++) {
			if (mixedVar === emptyValues[i]) {
			return true
			}
		}

		if (typeof mixedVar === 'object') {
			for (key in mixedVar) {
			if (mixedVar.hasOwnProperty(key)) {
				return false
			}
			}
			return true
		}

		return false
	}

	render() {
		return (
			<section
				tabIndex="-1"
				ref={ ( container ) => ( this.container = container ) }
				className="app-page">
				{ this.props.children }
			</section>
		);
	}
}

export default withRouter( BluehostPage );
