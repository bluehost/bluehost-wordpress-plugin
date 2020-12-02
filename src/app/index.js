/**
 * WordPress dependencies
 */
import { Component, createRef } from '@wordpress/element';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import { HashRouter as Router } from 'react-router-dom';

import {
	BWAHeader,
	BWAMain
} from '@app/components/organisms';

import './store';
import './app.scss';

import {
	BWAError,
} from '@app/components/molecules';

const SkipLink = ({onClick, onKeyPress, children}) => (
	<a className="screen-reader-shortcut bluehost-spa-skip" href="#" onClick={ onClick } onKeyPress={ onKeyPress }>
		{ children }
	</a>
);

class BluehostWordPressApp extends Component {
	constructor(props) {
		super(props);
		// create refs for skip focus links
		this.navFocus = createRef();
		this.contentFocus = createRef();
		// make refs/this available in
		this.handleNavFocus = this.handleNavFocus.bind(this);
		this.handleContentFocus = this.handleContentFocus.bind(this);
		this.componentDidCatch = this.componentDidCatch.bind(this);
		this.state = {
			hasError: false,
			BWAError: null,
		};

		dispatch('bluehost/plugin').fetchWindowData();
	}

	handleNavFocus(event) {
		event.preventDefault(); // no anchor jumps that done bork hash-routing
		this.navFocus.current.focus({preventScroll: true});
	}

	handleContentFocus(event) {
		event.preventDefault(); // no anchor jumps that done bork hash-routing
		this.contentFocus.current.focus({preventScroll: true});
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true, BWAError: error});
	}

	render() {
		if (true === this.state.hasError) {
			return (
				<div>
					<BWAError error={ this.state.BWAError } />
				</div>
			);
		}
		return (
			<Router>
				<main id="bluehost-app-wrap" className={ 'bluehost-app-wrap' }>
					<SkipLink onClick={ this.handleNavFocus } onKeyPress={ this.handleNavFocus }>
						{ __('Skip to Navigation', 'bluehost-wordpress-plugin') }
					</SkipLink>
					<SkipLink onClick={ this.handleContentFocus } onKeyPress={ this.handleContentFocus }>
						{ __('Skip to Content', 'bluehost-wordpress-plugin') }
					</SkipLink>
					<BWAHeader ref={ this.navFocus } />
					<BWAMain ref={ this.contentFocus } />
				</main>
			</Router>
		);
	}
}

export default BluehostWordPressApp;
