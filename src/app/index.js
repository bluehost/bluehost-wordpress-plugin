/**
 * WordPress dependencies
 */
import { Component, createRef, forwardRef } from '@wordpress/element';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * External dependencies
 */
import { HashRouter as Router, useLocation } from 'react-router-dom';
import kebabCase from 'lodash/kebabCase';

/**
 * Internal dependencies
 */
import { 
	BWAHeader,
	BWAMain
} from '@app/components/organisms';

import './store';
import './app.scss';

import {
	BWAError,
} from '@app/components/molecules';

const SkipLink = ( { onClick, onKeyPress, children } ) => (
	<a className="screen-reader-shortcut bluehost-spa-skip" href="#" onClick={ onClick } onKeyPress={ onKeyPress }>
		{ children }
	</a>
);

const BWABody = () => {
	let location = useLocation();
	let navRef 	= createRef();
	let pageRef = createRef();
	const handleNavFocus = ( event ) => {
		event.preventDefault();
		navRef.current.focus({ preventScroll: true });
	}
	const handleContentFocus = ( event ) => {
		event.preventDefault();
		pageRef.current.focus({ preventScroll: true });
	}
	return (
		<main 
			id="bluehost-app-wrap" 
			className={ classnames( 'bluehost-app-wrap', 'body-' + kebabCase( location.pathname ) ) }
		>
			<SkipLink 
				onClick={ handleNavFocus } 
				onKeyPress={ handleNavFocus }
			>
				{ __( 'Skip to Navigation', 'bluehost-wordpress-plugin' ) }
			</SkipLink>
			<SkipLink 
				onClick={ handleContentFocus } 
				onKeyPress={ handleContentFocus }
			>
				{ __( 'Skip to Content', 'bluehost-wordpress-plugin' ) }
			</SkipLink>
			<BWAHeader ref={navRef} />
			<BWAMain ref={pageRef} />
		</main>
	)
}

/**
 * componentDidCatch is still the most consistiently reliable way to 
 * capture errors, so the <main /> render is wrapped in a class component.
 */
class BluehostWordPressApp extends Component {
	constructor( props ) {
		super( props );

		this.componentDidCatch = this.componentDidCatch.bind( this );

		this.state = {
			hasError: false,
			BWAError: null,
		};

		dispatch( 'bluehost/plugin' ).fetchWindowData();
	}

	componentDidCatch( error, info ) {
		this.setState( { hasError: true, BWAError: { error: {...error}, info:{...info} } } );
	}

	render() {
		if ( this.state.hasError ) {
			return (
				<div>
					<BWAError error={ this.state.BWAError } />
				</div>
			);
		}
		return (
			<Router>
				<BWABody />
			</Router>
		);
	}
}

export default BluehostWordPressApp;
