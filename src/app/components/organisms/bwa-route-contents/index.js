import './style.scss';
import pageToBodyAttribute from './pageToBodyAttribute';

import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from '@wordpress/element';

import { BWAPageSpinner } from '@app/components/molecules';

const HomeRoute 		= lazy(() => import( '@app/pages/home' ));
const OnboardingRoute 	= lazy(() => import( '@app/pages/home/onboarding' ));
const ThemesRoute 		= lazy(() => import( '@app/pages/marketplace/themes' ));
const PluginsRoute 		= lazy(() => import( '@app/pages/marketplace/plugins' ));
const ProductRoute 		= lazy(() => import( '@app/pages/marketplace/product-details' ));
const ServicesRoute 	= lazy(() => import( '@app/pages/marketplace/services' ));
const ToolsRoute 		= lazy(() => import( '@app/pages/tools' ));
const StagingRoute 		= lazy(() => import( '@app/pages/tools/staging' ));
const SettingsRoute 	= lazy(() => import( '@app/pages/settings' ));
const HelpRoute 		= lazy(() => import( '@app/pages/help' ));
const BlueSkyRoute 		= lazy(() => import( '@app/pages/blue-sky' ));
const YoastSEORoute		= lazy(() => import( '@app/pages/yoast-seo-premium' ));
const YoastWooSEORoute  = lazy(() => import( '@app/pages/yoast-woocommerce-seo' ));

/**
 * !!! Analytics only happen automatically when @app/templates/base-template is used !!!
 * Implement sendPageviewEvent in @app/functions if you're getting fancy!
 */
const BWARouteContents = ({ ...props}) => {
	let location = useLocation();
	// append route class to body for document-wide CSS selector
	useEffect(() => {
		if ( 'object' === typeof location && 'undefined' !== typeof location.pathname ) {
			pageToBodyAttribute(location.pathname);
		}
	}, [location]);
	return (
		<section tabIndex="-1" className="bwa-route-contents">
			<Suspense fallback={ <BWAPageSpinner /> }>
				<Switch>
					<Route path="/home" exact render={ () => <HomeRoute /> } />
					<Route path="/home/onboarding" exact render={ () => <OnboardingRoute /> } />
					<Route path="/marketplace/themes" exact render={ () => <ThemesRoute /> } />
					<Route path="/marketplace/themes/:id" exact render={({match:{params:{id}}}) => <ProductRoute id={id} />} />
					<Route path="/marketplace/plugins" exact render={ () => <PluginsRoute /> } />
					<Route path="/marketplace/plugins/yoast-seo-premium" exact render={ () => <YoastSEORoute />} />
					<Route path="/marketplace/plugins/yoast-woocommerce-seo" exact render={ () => <YoastWooSEORoute />} />
					<Route path="/marketplace/plugins/:id" exact render={({match:{params:{id}}}) => <ProductRoute id={id} />} />
					<Route path="/marketplace/services" exact render={ () => <ServicesRoute /> } />
					<Route path="/marketplace/services/blue-sky" render={ () => <BlueSkyRoute /> } />
					<Route path="/marketplace/services/:id" exact render={({match:{params:{id}}}) => <ProductRoute id={id} />} />
					<Route
						path="/marketplace/product/:id"
						exact
						render={ ({match: {params: {id}}}) => <ProductRoute id={ id } redirect={true} /> }
					/>
					<Route path="/tools" exact render={ () => <ToolsRoute /> } />
					<Route path="/tools/staging" exact render={ () => <StagingRoute /> } />
					<Route path="/settings" render={ () => <SettingsRoute /> } />
					<Route path="/help" render={ () => <HelpRoute /> } />
					<Redirect 
						from="/card/help"
						to={{
							pathname: "/help",
							state: { redirect: 'card-help' }
						}}
					/>
					<Redirect 
						from="/home/onboarding/premium-themes"
						to={{
							pathname: "/marketplace/themes",
							state: { redirect: 'onboarding-theme-step' }
						}}
					/>
					<Redirect 
						from="/staging" 
						to={{
							pathname: "/tools/staging",
							state: { redirect: 'shortlink-staging' }
						}}
					/>
					<Redirect 
						from="/blue-sky" 
						to={{
							pathname: "/marketplace/services/blue-sky",
							state: { redirect: 'shortlink-blue-sky' }
						}}
					/>
					<Redirect
						from="/yoast"
						to={{
							pathname: "/marketplace/plugins/yoast-seo-premium",
							state: { redirect: 'shortlink-yoast-seo-premium' }
						}}
					/>
					<Redirect
						from="/yoast-woo"
						to={{
							pathname: "/marketplace/plugins/yoast-woocommerce-seo",
							state: { redirect: 'shortlink-yoast-woocommerce-seo' }
						}}
					/>
					<Redirect
						exact
						from="/"
						to={{
							pathname: "/home",
							state: { redirect: 'unspecified-or-root' }
						}} 
					/>
					<Redirect
						exact
						from="/home/page"
						to={{
							pathname: "/home",
							state: { redirect: 'override' }
						}}
					/>
					<Redirect
						to={{
							pathname: "/home",
							state: { redirect: 'invalid-route' }
						}} 
					/>
				</Switch>
			</Suspense>
		</section>
	)
};

export default BWARouteContents;
