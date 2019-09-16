/**
 * External dependencies
 */
import {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

/**
 * Internal dependencies
 */
import {AppSpinner} from '@/components';

const HomeRoute = lazy(() => import( '@/pages/home' ));
const MktRoute = lazy(() => import( '@/pages/marketplace' ));
const ThemesRoute = lazy(() => import( '@/pages/marketplace/themes' ));
const PluginsRoute = lazy(() => import( '@/pages/marketplace/plugins' ));
const ProductRoute = lazy(() => import( '@/pages/marketplace/product-details' ));
const ServicesRoute = lazy(() => import( '@/pages/marketplace/services' ));
const ToolsRoute = lazy(() => import( '@/pages/tools' ));
const StagingRoute = lazy(() => import( '@/pages/tools/staging' ));
const SettingsRoute = lazy(() => import( '@/pages/settings' ));
const HelpRoute = lazy(() => import( '@/pages/help' ));

const AppMain = () => (
    <main>
        <Suspense fallback={<AppSpinner/>}>
            <Switch>
                <Route path="/home" render={() => <HomeRoute/>}/>
                <Route path="/marketplace" exact render={() => <MktRoute/>}/>
                <Route path="/marketplace/themes" exact render={({history}) => <ThemesRoute history={history}/>}/>
                <Route path="/marketplace/plugins" exact render={({history}) => <PluginsRoute history={history}/>}/>
                <Route
                    path="/marketplace/product/:id"
                    exact
                    render={({match: {params: {id}}}) => <ProductRoute id={id}/>}
                />
                <Route path="/marketplace/services" exact render={({history}) => <ServicesRoute history={history}/>}/>
                <Route path="/tools" exact render={() => <ToolsRoute/>}/>
                <Route path="/tools/staging" exact render={() => <StagingRoute/>}/>
                <Route path="/settings" render={() => <SettingsRoute/>}/>
                <Route path="/help" render={() => <HelpRoute/>}/>
                <Redirect to="/home"/>
            </Switch>
        </Suspense>
    </main>
);

export default AppMain;
