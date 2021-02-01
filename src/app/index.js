import './store';
import './app-main.scss';

import {
	BWACommonFooter,
	BWACommonHeader,
	BWARouteContents
} from '@app/components/organisms';
import { HashRouter as Router, useLocation } from 'react-router-dom';

import {
	BWAError,
} from '@app/components/molecules';
import { ENTER } from '@wordpress/keycodes';
import { ErrorBoundary } from 'react-error-boundary';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { dispatch } from '@wordpress/data';
import {kebabCase} from 'lodash';
import { useState } from '@wordpress/element';

const AppBody = ( props ) => {
	const [isAppBooted, setAppBooted] = useState(false);

	if ( ! isAppBooted ) {
		dispatch( 'bluehost/plugin' ).fetchWindowData();
		setAppBooted(true);
	}

	let location = useLocation();
	let kebabRoute = kebabCase( location.pathname );
	
	const handleNavFocus = ( event ) => {
		event.preventDefault();
		if ( event.keycode && ENTER !== event.keycode ) {
			return;
		}
		const desktopTabs = document.querySelector('.bwa-desktop-nav__items');
		if ( desktopTabs ) {
			desktopTabs.focus({ preventScroll: true })
		}
	}

	const handleContentFocus = ( event ) => {
		event.preventDefault();
		if ( event.keycode && ENTER !== event.keycode ) {
			return;
		}
		const routeContents = document.querySelector('.bwa-route-contents');
		if ( routeContents ) {
			routeContents.focus({ preventScroll: true })
		}
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
			data-pewpewpewz
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
	<ErrorBoundary FallbackComponent={BWAError}>
		<Router>
			<AppBody />
		</Router>
	</ErrorBoundary>
)

export default App;
