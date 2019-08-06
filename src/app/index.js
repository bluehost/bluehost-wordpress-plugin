/**
 * WordPress dependencies
 */
import { Component, createRef } from '@wordpress/element';
/**
 * External dependencies
 */
import { HashRouter as Router } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import './app.scss';

import {
	AppHeader,
	AppPrimaryNav,
	AppFooter,
} from '@/components';

import AppMain from './main';

const bluehost_i18n = 'bluehost-wp-admin-app';

class App extends Component {
	constructor( props ) {
		super( props );
		// create refs for skip focus links
		this.navFocus = createRef();
		this.contentFocus = createRef();
		// make refs/this available in
		this.handleNavFocus = this.handleNavFocus.bind( this );
		this.handleContentFocus = this.handleContentFocus.bind( this );
	}

	handleNavFocus( event ) {
		event.preventDefault(); // no anchor jumps that done bork hash-routing
		this.navFocus.current.focus( { preventScroll: true } );
	}

	handleContentFocus( event ) {
		event.preventDefault(); // no anchor jumps that done bork hash-routing
		this.contentFocus.current.focus( { preventScroll: true } );
	}

	render() {
		return (
			<div>
				<Router>
					<main id="bluehost-app-wrap" className="animated fadeIn fast">
						<a className="screen-reader-shortcut bh-spa-skip" href="#" onClick={ this.handleNavFocus } onKeyPress={ this.handleNavFocus }>
							{ __( 'Skip to Navigation', bluehost_i18n ) }
						</a>
						<a className="screen-reader-shortcut bh-spa-skip" href="#" onClick={ this.handleContentFocus } onKeyPress={ this.handleContentFocus }>
							{ __( 'Skip to Content', bluehost_i18n ) }
						</a>
						<div>
							<AppHeader />
						</div>
						<div id="navigation" tabIndex="-1" ref={ this.navFocus }>
							<AppPrimaryNav />
						</div>
						<div tabIndex="-1" ref={ this.contentFocus }>
							<AppMain />
						</div>
					</main>
				</Router>
			</div>

		);
	}
}

export default App;
