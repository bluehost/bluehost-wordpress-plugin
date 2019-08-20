/**
 * WordPress dependencies
 */
import { Animate } from '@wordpress/components';
import { Component, createRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import { HashRouter as Router } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import browser from 'browser-detect';
/**
 * Internal dependencies
 */
import './app.scss';

import {
	AppError,
	AppHeader,
	AppPrimaryNav
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
		this.componentDidCatch = this.componentDidCatch.bind( this );
		this.state = {
			hasError: false,
			errorLogged: false
		};
	}

	handleNavFocus(event) {
		event.preventDefault(); // no anchor jumps that done bork hash-routing
		this.navFocus.current.focus( { preventScroll: true } );
	}

	handleContentFocus(event) {
		event.preventDefault(); // no anchor jumps that done bork hash-routing
		this.contentFocus.current.focus( { preventScroll: true } );
	}

	componentDidCatch(error,info) {
		this.setState({ hasError: true });
		axios.post( 
			location.origin + '/wp-json/bluehost/v1/error/track', 
			qs.stringify({
				date: new Date(), 
				message: error.message,
				browser: browser(),
				wpUser: window.userSettings.uid ? window.userSettings.uid : 'Unknown'
			})
		);
	}

	render() {
		if (true === this.state.hasError) {
			return (
				<div>
					<AppError errorLogged={this.state.errorLogged} />
				</div>
			);
		}
		return (
			<div>
				<Animate type="appear" options={{ origin: 'center'}}>
					<Router>
						{/* <main id="bluehost-app-wrap" className="bluehost-app-wrap animated fadeIn fast"> */}
						<main id="bluehost-app-wrap" className="bluehost-app-wrap">
							<a className="screen-reader-shortcut bluehost-spa-skip" href="#" onClick={ this.handleNavFocus } onKeyPress={ this.handleNavFocus }>
								{ __( 'Skip to Navigation', bluehost_i18n ) }
							</a>
							<a className="screen-reader-shortcut bluehost-spa-skip" href="#" onClick={ this.handleContentFocus } onKeyPress={ this.handleContentFocus }>
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
				</Animate>
			</div>
		);
	}
}

export default App;
