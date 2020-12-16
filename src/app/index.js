import './store';
import './app.scss';

/**
 * Internal dependencies
 */
import {
	BWACommonFooter,
	BWACommonHeader,
	BWARouteContents
} from '@app/components/organisms';
/**
 * External dependencies
 */
import { HashRouter as Router, useLocation } from 'react-router-dom';

import {
	BWAError,
} from '@app/components/molecules';
import { ENTER } from '@wordpress/keycodes';
/**
 * WordPress dependencies
 */
import { ErrorBoundary } from 'react-error-boundary';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { dispatch } from '@wordpress/data';
import kebabCase from 'lodash/kebabCase';
import { useRef } from '@wordpress/element';

const AppBody = ( props ) => {
	// 1. Import PHP-generated data to store for SOT.
	dispatch( 'bluehost/plugin' ).fetchWindowData();
	// 2. Tap location object from react-router-dom.
	let location = useLocation();
	const kebabRoute = kebabCase( location.pathname );
	// 3. Create Focus Refs
	// let desktopNavRef 	= useRef(null);
	// let pageContainerRef = useRef(null);
	
	const handleNavFocus = ( event ) => {
		event.preventDefault();
		if ( event.keycode && ENTER !== event.keycode ) {
			return;
		}
		// desktopNavRef.current.focus({ preventScroll: true });
	}

	const handleContentFocus = ( event ) => {
		event.preventDefault();
		if ( event.keycode && ENTER !== event.keycode ) {
			return;
		}
		// pageContainerRef.current.focus({ preventScroll: true });
	}

	const SkipLink = ( { href = '#', onClick, onKeyDown, children } ) => (
		<a 
			className="screen-reader-shortcut bwa-skip-link" 
			href={href} 
			onClick={onClick} 
			onKeyDown={onKeyDown}
		>
			{ children }
		</a>
	);
	
	return (
		<main 
			id="bwa-app" 
			className={ classnames( 
				'bwa-page-' + kebabRoute,
				props.className
			) }
			data-bwa-app-route={location.pathname}
		>
			<SkipLink 
				onClick={ handleNavFocus } 
				onKeyDown={ handleNavFocus }
			>
				{ __( 'Skip to Navigation', 'bluehost-wordpress-plugin' ) }
			</SkipLink>
			<SkipLink 
				onClick={ handleContentFocus } 
				onKeyDown={ handleContentFocus }
			>
				{ __( 'Skip to Content', 'bluehost-wordpress-plugin' ) }
			</SkipLink>
			<BWACommonHeader />
			<BWARouteContents />
			<BWACommonFooter />
		</main>
	)
}

export const App = () => (
	<ErrorBoundary
		FallbackComponent={BWAError}
	>
		<Router>
			<AppBody />
		</Router>
	</ErrorBoundary>
)

export default App;
