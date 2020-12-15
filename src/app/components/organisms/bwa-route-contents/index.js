import './style.scss';

/**
 * WordPress dependencies
 */
/**
 * External dependencies
 */
import { Fragment, Suspense, lazy } from '@wordpress/element';
import { Redirect, Route, Switch } from 'react-router-dom';

/**
 * Internal dependencies
 */
import { BWAHeader } from '@app/components/organisms';
import { BWAPageSpinner } from '@app/components/molecules';

const HomeRoute = lazy(() => import( '@app/pages/home' ));
const ThemesRoute = lazy(() => import( '@app/pages/marketplace/themes' ));
const PluginsRoute = lazy(() => import( '@app/pages/marketplace/plugins' ));
const ProductRoute = lazy(() => import( '@app/pages/marketplace/product-details' ));
const ServicesRoute = lazy(() => import( '@app/pages/marketplace/services' ));
const ToolsRoute = lazy(() => import( '@app/pages/tools' ));
const StagingRoute = lazy(() => import( '@app/pages/tools/staging' ));
const SettingsRoute = lazy(() => import( '@app/pages/settings' ));
const HelpRoute = lazy(() => import( '@app/pages/help' ));
const BlueSkyRoute = lazy(() => import('@app/pages/blue-sky'));

const BWARouteContents = ({ desktopNavRef, ...props}) => (
	<Fragment>
		<section { ...props } tabIndex="-1" className="bwa-page-contents">
			<Suspense fallback={ <BWAPageSpinner /> }>
				<Switch>
					<Route path="/home" render={ () => <HomeRoute /> } />
					<Route path="/marketplace/themes" exact render={ () => <ThemesRoute /> } />
					<Route path="/marketplace/plugins" exact render={ () => <PluginsRoute /> } />
					<Route path="/marketplace/services" exact render={ () => <ServicesRoute /> } />
					<Route path="/marketplace/services/blue-sky" render={ () => <BlueSkyRoute /> } />
					<Route
						path="/marketplace/product/:id"
						exact
						render={ ({match: {params: {id}}}) => <ProductRoute id={ id } /> }
					/>
					<Route path="/tools" exact render={ () => <ToolsRoute /> } />
					<Route path="/tools/staging" exact render={ () => <StagingRoute /> } />
					<Route path="/settings" render={ () => <SettingsRoute /> } />
					<Route path="/help" render={ () => <HelpRoute /> } />
					<Redirect from="/staging" to="/tools/staging" />
					<Redirect from="/blue-sky" to="/marketplace/services/blue-sky" />
					<Redirect to="/home" />
				</Switch>
			</Suspense>
		</section>
	</Fragment>
);

export default BWARouteContents;
