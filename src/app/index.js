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
import { userTrigger } from '@app/functions';
import { ErrorBoundary } from 'react-error-boundary';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { dispatch } from '@wordpress/data';
import {kebabCase} from 'lodash';
import { useEffect, useState } from '@wordpress/element';

// component sourced from module
import { default as NewfoldNotifications } from '../../vendor/newfold-labs/wp-module-notifications/assets/js/components/notifications/'; 
// to pass to notifications module
import apiFetch from '@wordpress/api-fetch';
import { filter } from 'lodash';

const AppBody = ( props ) => {
	const [isAppBooted, setAppBooted] = useState(false);

	if ( ! isAppBooted ) {
		dispatch( 'bluehost/plugin' ).fetchWindowData();
		document.body.classList.add( 'is-booted' );
		setAppBooted(true);
	}

	let location = useLocation();
	let kebabRoute = kebabCase( location.pathname );
	const hashedPath = '#' + location.pathname;
	
	const handleNavFocus = ( event ) => {
		userTrigger(event, () => { 
			const desktopTabs = document.querySelector('.bwa-desktop-nav__items');
			if ( desktopTabs ) {
				desktopTabs.focus({ preventScroll: true })
			}
		})
	}

	const handleContentFocus = ( event ) => {
		userTrigger(event, () => { 
			const routeContents = document.querySelector('.bwa-route-contents');
			if ( routeContents ) {
				routeContents.focus({ preventScroll: true })
			}
		})
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
				'wpadmin-brand-bluehost',
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
			<NewfoldNotifications
				apiFetch={apiFetch}
				classnames={classnames} 
				context='bluehost-plugin'
				filter={filter}
				page={hashedPath}
				resturl={window.nfdRestRoot}
				useState={useState}
				useEffect={useEffect}
			/>
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
