import './style.scss';

import { Redirect, useLocation } from 'react-router-dom';

import { BWACommonTemplate } from '@app/components/templates';
import BWAContentList from './content';
/**
 * Project dependencies
 */
import { BWARedirect } from '@app/components/atoms';
import ComingSoonNotice from './coming-soon-notice';
import DesignBuildSection from './design-build';
import { Fragment } from '@wordpress/element';
import HostingSection from './hosting';
/**
 * Component dependencies
 */
import PerformanceSection from './performance';
import TrafficEngagementSection from './traffic-engagement';
import Welcome from './welcome';
import { __ } from '@wordpress/i18n';
import { update } from 'lodash';
/**
 * WordPress Dependencies
 */
import { useSelect } from '@wordpress/data';

const Home = () => {
	const location = useLocation();
	const daysSinceInstall = useSelect((select) => {
		return select('bluehost/plugin').getBluehostPluginDaysSinceInstall();
	}, []);

	const hasSiteLaunched = useSelect((select) => {
		return !select('bluehost/plugin').getSetting('comingSoon');
	}, []);

	const showOnboarding = !hasSiteLaunched || daysSinceInstall <= 30;

	return showOnboarding 
			? <BWARedirect to="/home/onboarding" currentLocation={location} /> 
			: (
				<BWACommonTemplate descriptivePageTitle={__('Home', 'bluehost-wordpress-plugin')}>
					<div className="page-home__container">
						<Welcome />
						<ComingSoonNotice />
						<BWAContentList />
						<DesignBuildSection />
						<TrafficEngagementSection />
						<PerformanceSection />
						<HostingSection />
					</div>
				</BWACommonTemplate>
			);
};

export default Home;
