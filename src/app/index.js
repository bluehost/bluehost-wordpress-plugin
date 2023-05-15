import './stylesheet.scss';
import './tailwind.pcss';

import AppStore, { AppStoreProvider } from './data/store';
import { useLocation, HashRouter as Router } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import { SnackbarList, Spinner } from '@wordpress/components';
import classnames from 'classnames';
import Header from './components/header';
import AppRoutes from './data/routes';
import ErrorCard from './components/errorCard';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { store as noticesStore } from '@wordpress/notices';
import { setActiveSubnav } from './util/helpers';
import { kebabCase, filter } from 'lodash';
import { Root, Alert } from "@yoast/ui-library";

// component sourced from module
import { default as NewfoldNotifications } from '../../vendor/newfold-labs/wp-module-notifications/assets/js/components/notifications/';
// to pass to notifications module
import apiFetch from '@wordpress/api-fetch';
import { useState } from '@wordpress/element';
import { SideNav } from './components/side-nav';
import { SiteInfoBar } from './components/site-info';

const Notices = () => {
	if ( 'undefined' === typeof noticesStore ) {
		return null;
	}
	const notices = useSelect(
		( select ) =>
			select( noticesStore )
				.getNotices()
				.filter( ( notice ) => notice.type === 'snackbar' ),
		[]
	);
	const { removeNotice } = useDispatch( noticesStore );
	return (
		<SnackbarList
			className="edit-site-notices"
			notices={ notices }
			onRemove={ removeNotice }
		/>
	);
};

const handlePageLoad = () => {
	const location = useLocation();
	const routeContents = document.querySelector( '.wppb-app-body-inner' );
	useEffect( () => {
		setActiveSubnav( location.pathname );
		window.scrollTo( 0, 0 );
		if ( routeContents ) {
			routeContents.focus( { preventScroll: true } );
		}
	}, [ location.pathname ] );
};

const AppBody = ( props ) => {
	const location = useLocation();
	const hashedPath = '#' + location.pathname;
	const { booted, hasError } = useContext( AppStore );

	handlePageLoad();

	return (
		<main
			id="wppb-app-rendered"
			className={ classnames(
				'wpadmin-brand-blueprint',
				`wppb-wp-${ WPPB.wpversion }`,
				`wppb-page-${ kebabCase( location.pathname ) }`,
				props.className,
				'yst-w-full'
			) }
		>
			{/* <Header /> */}
			<NewfoldNotifications
				constants={{
					context: 'blueprint-plugin',
					page: hashedPath,
					resturl: window.WPPB.resturl
				}}
				methods={{
					apiFetch,
					classnames,
					filter,
					useState,
					useEffect
				}}
			/>
			<div className="wppb-app-body">
				<div className="wppb-app-body-inner">
					<ErrorBoundary FallbackComponent={ <ErrorCard /> }>
						{ hasError && <ErrorCard error={ hasError } /> }
						<SiteInfoBar />
						{ ( true === booted && <AppRoutes /> ) ||
							( ! hasError && <Spinner /> ) }
					</ErrorBoundary>
				</div>
			</div>

			<div className="wppb-app-snackbar">
				<Notices />
			</div>
		</main>
	);
};

export const App = () => (
	<AppStoreProvider>
		<Root context={ { isRtl: false } }>
			<Router>
				<div className="wppb-app-container yst-p-4 min-[783px]:yst-p-8 yst-flex yst-gap-6 yst-max-w-full xl:yst-max-w-screen-xl 2xl:yst-max-w-screen-2xl yst-my-0 yst-mx-auto">
					<SideNav />
					<AppBody />
				</div>
			</Router>
		</Root>
	</AppStoreProvider>
);

export default App;
