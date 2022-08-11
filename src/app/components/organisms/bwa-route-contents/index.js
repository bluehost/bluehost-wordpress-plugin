import './style.scss';
import pageToBodyAttribute from './pageToBodyAttribute';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Suspense, lazy, useEffect } from '@wordpress/element';

import { BWAPageSpinner } from '@app/components/molecules';

import MarketplacePage from '../../../pages/marketplace';

const HomeRoute 		= lazy(() => import( '@app/pages/home' ));
const OnboardingRoute 	= lazy(() => import( '@app/pages/home/onboarding' ));
const MarketplaceRoute 	= lazy(() => import( '@app/pages/marketplace' ));
const ToolsRoute 		= lazy(() => import( '@app/pages/tools' ));
const StagingRoute 		= lazy(() => import( '@app/pages/tools/staging' ));
const SettingsRoute 	= lazy(() => import( '@app/pages/settings' ));
const HelpRoute 		= lazy(() => import( '@app/pages/help' ));
const BlueSkyRoute 		= lazy(() => import( '@app/pages/blue-sky' ));
const YoastSEORoute		= lazy(() => import( '@app/pages/yoast-seo-premium' ));
const YoastWooSEORoute  = lazy(() => import( '@app/pages/yoast-woocommerce-seo' ));

const topLevelRedirects = {
	'/': { pathname: '/home', state: { redirect: 'unspecified-or-root' } },
	'/home/onboarding/premium-themes': { pathname: '/marketplace/themes', state: { redirect: 'onboarding-theme-step' } },
	'/staging': { pathname: '/tools/staging', state: { redirect: 'shortlink-staging' } },
	'/blue-sky': { pathname: '/marketplace/services/blue-sky', state: { redirect: 'shortlink-bluesky' } },
	'/yoast': { pathname: '/marketplace/plugins/yoast-seo-premium', state: { redirect: 'shortlink-yoast-seo-premium' } },
	'/yoast-woo': { pathname: '/marketplace/plugins/yoast-woocommerce-seo', state: { redirect: 'shortlink-yoast-woocommerce-seo' } },
	'/card/help': { pathname: '/help', state: { redirect: 'card-help' } },
};

/**
 * !!! Analytics only happen automatically when @app/templates/base-template is used !!!
 * Implement sendPageviewEvent in @app/functions if you're getting fancy!
 */
const BWARouteContents = ({ ...props}) => {
	let location = useLocation();
	let navigate = useNavigate()
	// append route class to body for document-wide CSS selector
	useEffect(() => {
		if ( 'object' === typeof location && location?.pathname ) {
			if(topLevelRedirects.hasOwnProperty(location.pathname)) {
				navigate(
					topLevelRedirects[location.pathname].pathname,
					topLevelRedirects[location.pathname].state
				);
			}
			pageToBodyAttribute(location.pathname);
		}
	}, [location]);
	return (
		<section tabIndex="-1" className="bwa-route-contents">
			<Suspense fallback={ <BWAPageSpinner /> }>
				<Routes>
					<Route path="/home" end element={ <HomeRoute /> } />
					<Route path="/home/page" end element={ <HomeRoute /> } />
					<Route path="/home/onboarding" end element={ <OnboardingRoute /> } />
					<Route path="/marketplace" element={ <MarketplaceRoute /> } />
					<Route path="/marketplace/plugins/yoast-seo-premium" end element={ <YoastSEORoute />} />
					<Route path="/marketplace/plugins/yoast-woocommerce-seo" end element={ <YoastWooSEORoute />} />
					<Route path="/marketplace/services/blue-sky" end element={ <BlueSkyRoute /> } />
					<Route
						path="/marketplace/:id"
						end
						element={ <MarketplaceRoute /> }
					/>
					<Route path="/tools" end element={ <ToolsRoute /> } />
					<Route path="/tools/staging" end element={ <StagingRoute /> } />
					<Route path="/settings" element={ <SettingsRoute /> } />
					<Route path="/help" element={ <HelpRoute /> } />
				</Routes>
			</Suspense>
		</section>
	)
};

export default BWARouteContents;
