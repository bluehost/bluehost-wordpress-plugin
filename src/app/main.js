/**
 * External dependencies
 */
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const HomeRoute = lazy( () => import( '@/pages/home' ) );
const MktRoute = lazy( () => import( '@/pages/marketplace' ) );
const ToolsRoute = lazy( () => import( '@/pages/tools' ) );
const SettingsRoute = lazy( () => import( '@/pages/settings' ) );
const HelpRoute = lazy( () => import( '@/pages/help' ) );

import { AppSpinner } from '@/components';

const AppMain = () => (
	<main>
		<Suspense fallback={ <div>Loading...</div> }>
			<Switch>
				{ /* <Route path="/spinner" component={ AppSpinner } /> */ }
				<Route path="/home" render={ () => ( <HomeRoute /> ) } />
				<Route path="/marketplace" render={ () => ( <MktRoute /> ) } />
				<Route path="/tools" render={ () => ( <ToolsRoute /> ) } />
				<Route path="/settings" render={ () => ( <SettingsRoute /> ) } />
				<Route path="/help" render={ () => ( <HelpRoute /> ) } />
				<Redirect to="/home" />
			</Switch>
		</Suspense>
	</main>
);

export default AppMain;
