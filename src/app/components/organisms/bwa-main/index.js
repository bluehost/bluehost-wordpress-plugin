/**
 * WordPress dependencies
 */
/**
 * External dependencies
 */
import { lazy, Suspense, forwardRef } from '@wordpress/element';
import { Switch, Route, Redirect } from 'react-router-dom';

/**
 * Internal dependencies
 */
import { BWAPageSpinner } from '@/components/molecules';

const HomeRoute = lazy( () => import( '@/pages/home' ) );
const ThemesRoute = lazy( () => import( '@/pages/marketplace/themes' ) );
const PluginsRoute = lazy( () => import( '@/pages/marketplace/plugins' ) );
const ProductRoute = lazy( () => import( '@/pages/marketplace/product-details' ) );
const ServicesRoute = lazy( () => import( '@/pages/marketplace/services' ) );
const ToolsRoute = lazy( () => import( '@/pages/tools' ) );
const StagingRoute = lazy( () => import( '@/pages/tools/staging' ) );
const SettingsRoute = lazy( () => import( '@/pages/settings' ) );

const BWAMain = ( { props }, ref ) => (
	<section { ...props } ref={ ref } tabIndex="-1">
		<Suspense fallback={ <BWAPageSpinner /> }>
			<Switch>
				<Route path="/home" render={ () => <HomeRoute /> } />
				<Route path="/marketplace/themes" exact render={ () => <ThemesRoute /> } />
				<Route path="/marketplace/plugins" exact render={ () => <PluginsRoute /> } />
				<Route path="/marketplace/services" exact render={ () => <ServicesRoute /> } />
				<Route
					path="/marketplace/product/:id"
					exact
					render={ ( { match: { params: { id } } } ) => <ProductRoute id={ id } /> }
				/>
				<Route path="/tools" exact render={ () => <ToolsRoute /> } />
				<Route path="/tools/staging" exact render={ () => <StagingRoute /> } />
				<Route path="/settings" render={ () => <SettingsRoute /> } />
				<Redirect to="/home" />
			</Switch>
		</Suspense>
	</section>
);

export default forwardRef( BWAMain );
