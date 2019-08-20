/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { dispatch, select } from '@wordpress/data';
import { Component, createRef, Fragment } from '@wordpress/element';
/**
 * External dependencies
 */
import { HashRouter as Router } from 'react-router-dom';
/**
 * App dependencies
 */
import store from'@/store';
import '@/app.scss';
import {
	Header,
	Main,
} from '@/parts';

import {
	AppPrimaryNavigation,
} from '@/components';

const bluehost_i18n = 'bluehost-wordpress-plugin';

class App extends Component {
	constructor( props ) {
		super( props );
		// create refs for skip focus links
		this.navFocus = createRef();
		this.contentFocus = createRef();
		// make refs/this available in
		this.handleNavFocus = this.handleNavFocus.bind( this );
		this.handleContentFocus = this.handleContentFocus.bind( this );
		dispatch('bluehost/plugin').fetchWindowData();
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
			<Fragment>
				<Router>
					<main id="bluehost-app-wrap" className="bluehost-app-wrap animated fadeIn fast">
						<a className="screen-reader-shortcut bluehost-spa-skip" href="#" onClick={ this.handleNavFocus } onKeyPress={ this.handleNavFocus }>
							{ __( 'Skip to Navigation', bluehost_i18n ) }
						</a>
						<a className="screen-reader-shortcut bluehost-spa-skip" href="#" onClick={ this.handleContentFocus } onKeyPress={ this.handleContentFocus }>
							{ __( 'Skip to Content', bluehost_i18n ) }
						</a>
						<Fragment>
							<Header />
						</Fragment>
						<Fragment tabIndex="-1" ref={ this.navFocus }>
							<AppPrimaryNavigation />
						</Fragment>
						<Fragment tabIndex="-1" ref={ this.contentFocus }>
							<Main />
						</Fragment>
					</main>
				</Router>
			</Fragment>
		);
	}
}

export default App;
