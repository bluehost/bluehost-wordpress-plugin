/**
 * WordPress dependencies
 */
import { ErrorBoundary } from 'react-error-boundary';
import { useRef } from '@wordpress/element';
import { ENTER } from '@wordpress/keycodes';
import { dispatch, useSelect } from '@wordpress/data';
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
	BWACommonHeader,
	BWAPageContents,
	BWACommonFooter
} from '@app/components/organisms';

import './store';
import './app.scss';

import {
	BWAError,
} from '@app/components/molecules';

const AppBody = ( props ) => {
	dispatch( 'bluehost/plugin' ).fetchWindowData();
	let location = useLocation();
	let desktopNavRef 	= useRef(null);
	let pageContainerRef = useRef(null);
	const kebabRoute = kebabCase( location.pathname );
	const handleNavFocus = ( event ) => {
		event.preventDefault();
		if ( event.keycode && ENTER !== event.keycode ) {
			return;
		}
		desktopNavRef.current.focus({ preventScroll: true });
	}
	const handleContentFocus = ( event ) => {
		event.preventDefault();
		if ( event.keycode && ENTER !== event.keycode ) {
			return;
		}
		pageContainerRef.current.focus({ preventScroll: true });
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
				'bwa-app', 
				'bwa-page-' + kebabRoute
			) }
			data-bwa-app-route={kebabRoute}
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
			<BWACommonHeader desktopNavRef={desktopNavRef} />
			<BWAPageContents ref={pageContainerRef} />
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
