import {
  HomeIcon,
  ShoppingBagIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  AdjustmentsHorizontalIcon,
  BuildingStorefrontIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';
import { Route, Routes } from 'react-router-dom';
import { __ } from '@wordpress/i18n';
import Home from '../pages/home';
import Store from '../pages/ecommerce/page';
import Marketplace from '../pages/marketplace';
import Performance from '../pages/performance';
import Settings from '../pages/settings';
import Staging from '../pages/staging';
import Help from '../pages/help';
import { getMarketplaceSubnavRoutes } from '@modules/wp-module-marketplace/components/marketplaceSubnav';
import { ReactComponent as HelpIcon } from '../components/icons/HelpIcon.svg';
import PagesAndPosts from '../pages/pagesAndPosts';

const addPartialMatch = (prefix, path) =>
  prefix === path ? `${prefix}/*` : path;

const HelpCenterAI = (e) => {
  e.preventDefault();
  window.newfoldEmbeddedHelp.toggleNFDLaunchedEmbeddedHelp();
};

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map(
        (page) =>
          true === page.condition && (
            <Route
              end
              key={page.name}
              path={addPartialMatch(
                '/marketplace',
                addPartialMatch('/store', page.name)
              )}
              element={<page.Component />}
            />
          )
      )}
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>{__("There's nothing here!", 'wp-plugin-bluehost')}</p>
          </main>
        }
      />
    </Routes>
  );
};

const topRoutePaths = [
  '/home',
  '/pages&posts',
  '/store',
  '/marketplace',
  '/performance',
  '/settings',
  '/staging',
];
const utilityRoutePaths = ['/help'];

export const routes = [
  {
    name: '/home',
    title: __('Home', 'wp-plugin-bluehost'),
    Component: Home,
    Icon: HomeIcon,
    condition: true,
  },
  {
    name: '/pages&posts',
    title: __('Pages & Posts', 'wp-plugin-bluehost'),
    Component: PagesAndPosts,
    Icon: DocumentDuplicateIcon,
    condition: true,
  },
  {
    name: '/store',
    title: __('Store', 'wp-plugin-bluehost'),
    Component: Store,
    Icon: BuildingStorefrontIcon,
    subRoutes: [
      {
        name: '/store/products',
        title: __('Products & Services', 'wp-plugin-bluehost'),
      },
      NewfoldRuntime.hasCapability('hasYithExtended') ||
      NewfoldRuntime.hasCapability('canAccessGlobalCTB')
        ? {
            name: '/store/sales_discounts',
            title: __('Sales & Discounts', 'wp-plugin-bluehost'),
          }
        : null,
      NewfoldRuntime.isWoo
        ? {
            name: '/store/payments',
            title: __('Payments', 'wp-plugin-bluehost'),
          }
        : null,
      {
        name: '/store/details',
        title: __('Store Details', 'wp-plugin-bluehost'),
      },
    ].filter(Boolean),
    condition: true,
  },
  {
    name: '/marketplace',
    title: __('Marketplace', 'wp-plugin-bluehost'),
    Component: Marketplace,
    Icon: ShoppingBagIcon,
    subRoutes: await getMarketplaceSubnavRoutes(),
    condition: true,
  },
  {
    name: '/performance',
    title: __('Performance', 'wp-plugin-bluehost'),
    Component: Performance,
    Icon: BoltIcon,
    condition: 'atomic' !== window.NewfoldRuntime.context.platform,
  },
  {
    name: '/settings',
    title: __('Settings', 'wp-plugin-bluehost'),
    Component: Settings,
    Icon: AdjustmentsHorizontalIcon,
    condition: true,
  },
  {
    name: '/staging',
    title: __('Staging', 'wp-plugin-bluehost'),
    Component: Staging,
    Icon: WrenchScrewdriverIcon,
    condition: 'atomic' !== window.NewfoldRuntime.context.platform,
  },
  {
    name: '/help',
    title: __('Help', 'wp-plugin-bluehost'),
    Component: Help,
    Icon: HelpIcon,
    condition: true,
    action: NewfoldRuntime.hasCapability('canAccessHelpCenter')
      ? HelpCenterAI
      : false,
  },
];

export const topRoutes = _filter(routes, (route) =>
  topRoutePaths.includes(route.name)
);

export const utilityRoutes = _filter(routes, (route) =>
  utilityRoutePaths.includes(route.name)
);

export default AppRoutes;
