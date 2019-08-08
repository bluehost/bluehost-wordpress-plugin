/**
 * External dependencies
 */
import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const HomeRoute = lazy( () => import( '@/pages/home' ) );
const MktRoute = lazy( () => import( '@/pages/marketplace' ) );
const ThemesRoute = lazy( () => import( '@/pages/marketplace/themes' ) );
const PluginsRoute = lazy( () => import( '@/pages/marketplace/plugins' ) );
const ServicesRoute = lazy( () => import( '@/pages/marketplace/services' ) );
const ToolsRoute = lazy( () => import( '@/pages/tools' ) );
const SettingsRoute = lazy( () => import( '@/pages/settings' ) );
const HelpRoute = lazy( () => import( '@/pages/help' ) );

import { AppSpinner } from '@/components';

const AppMain = () => (
	<main>
		<Suspense fallback={ <AppSpinner /> }>
			<Switch>
				<Route path="/home" render={ () => ( <HomeRoute /> ) } />
				<Route path="/marketplace" exact render={ () => ( <MktRoute /> ) } />
				<Route path="/marketplace/themes" exact render={ () => ( <ThemesRoute /> ) } />
				<Route path="/marketplace/plugins" exact render={ () => ( <PluginsRoute /> ) } />
				<Route path="/marketplace/services" exact render={ () => ( <ServicesRoute /> ) } />
				<Route path="/tools" render={ () => ( <ToolsRoute /> ) } />
				<Route path="/settings" render={ () => ( <SettingsRoute /> ) } />
				<Route path="/help" render={ () => ( <HelpRoute /> ) } />
				<Redirect to="/home" />
			</Switch>
		</Suspense>
	</main>
);

export default AppMain;
