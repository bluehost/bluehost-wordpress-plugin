import { 
	HomeIcon,
	ShoppingBagIcon,
	WrenchScrewdriverIcon, 
	AdjustmentsHorizontalIcon,
	BuildingStorefrontIcon,
	QuestionMarkCircleIcon } 
from '@heroicons/react/24/outline';
import { Route, Routes } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import Home from '../pages/home';
import Marketplace from '../pages/marketplace';
import Settings from '../pages/settings';
import Performance from '../pages/performance';
import Example from '../pages/example';
import Help from '../pages/help';
import Store from '../pages/ecommerce/page';

const addPartialMatch = (prefix, path) =>
  prefix === path ? `${prefix}/*` : path;

export const AppRoutes = () => {
	return (
		<Routes>
			{ routes.map( ( page ) => (
				<Route
					end
					key={ page.name }
					path={ addPartialMatch(
						'/marketplace',
						addPartialMatch( '/store', page.name )
					)}
					element={ <page.Component /> }
				/>
			) ) }
			<Route path="/" element={ <Home /> } />
			<Route
				path="*"
				element={
					<main style={ { padding: '1rem' } }>
						<p>
							{ __( "There's nothing here!", 'wp-plugin-blueprint' ) }
						</p>
					</main>
				}
			/>
		</Routes>
	);
};

const topRoutePaths = [
	'/home',
	'/marketplace',
	'/store',
	'/performance',
	'/settings',
	'/example',
];
const utilityRoutePaths = [ '/help' ];

export const routes = [
	{
		name: '/home',
		title: __( 'Home', 'wp-plugin-blueprint' ),
		Component: Home,
		Icon: HomeIcon,
	},
	{
		name: '/store',
		title: __( 'Store', 'wp-plugin-blueprint' ),
		Component: Store,
		Icon: BuildingStorefrontIcon,
		subRoutes: [
			{
				name: '/store/products',
				title: __( 'Products & Services', 'wp-plugin-blueprint' ),
			},
			{
				name: '/store/details',
				title: __( 'Store Details', 'wp-plugin-blueprint' ),
			},
		],
	},
	{
		name: '/marketplace',
		title: __( 'Marketplace', 'wp-plugin-blueprint' ),
		Component: Marketplace,
		Icon: ShoppingBagIcon,
		subRoutes: [
			{
				name: '/marketplace/featured',
				title: __( 'Featured', 'wp-plugin-blueprint' ),
			},
			{
				name: '/marketplace/services',
				title: __( 'Services', 'wp-plugin-blueprint' ),
			},
			{
				name: '/marketplace/ecommerce',
				title: __( 'eCommerce', 'wp-plugin-blueprint' ),
			},
			{
				name: '/marketplace/seo',
				title: __( 'SEO', 'wp-plugin-blueprint' ),
			},
			{
				name: '/marketplace/security',
				title: __( 'Security', 'wp-plugin-blueprint' ),
			},
			{
				name: '/marketplace/themes',
				title: __( 'Themes', 'wp-plugin-blueprint' ),
			},

		],
	},
	{
		name: '/performance',
		title: __( 'Performance', 'wp-plugin-blueprint' ),
		Component: Performance,
		Icon: WrenchScrewdriverIcon,
	},
	{
		name: '/settings',
		title: __( 'Settings', 'wp-plugin-blueprint' ),
		Component: Settings,
		Icon: AdjustmentsHorizontalIcon,
	},
	{
		name: '/example',
		title: __( 'Example', 'wp-plugin-blueprint' ),
		Component: Example,
		Icon: AdjustmentsHorizontalIcon,
	},
	{
		name: '/help',
		title: __( 'Help', 'wp-plugin-blueprint' ),
		Component: Help,
		Icon: QuestionMarkCircleIcon,
	},
];

export const topRoutes = _filter( routes, ( route ) =>
	topRoutePaths.includes( route.name )
);

export const utilityRoutes = _filter( routes, ( route ) =>
	utilityRoutePaths.includes( route.name )
);

export default AppRoutes;
