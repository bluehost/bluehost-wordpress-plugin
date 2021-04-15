import './style.scss';

import { Redirect, useLocation } from 'react-router-dom';

import { BWACommonTemplate } from '@app/components/templates';
import BWAContentList from './content';
import { BWARedirect } from '@app/components/atoms';
import DesignBuildSection from './design-build';
import HostingSection from './hosting';
import PerformanceSection from './performance';
import TrafficEngagementSection from './traffic-engagement';
import Welcome from './welcome';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

const Home = () => {
	const location = useLocation();

	const daysSinceInstall = useSelect((select) => {
		return select('bluehost/plugin').getBluehostPluginDaysSinceInstall();
	}, []);

	const hasSiteLaunched = useSelect((select) => {
		return ! select('bluehost/plugin').getSetting('comingSoon');
	}, []);

	let showOnboarding = !hasSiteLaunched || daysSinceInstall <= 30;
	
	if(location.state && 'undefined' !== typeof location.state.redirect && 'override' === location.state.redirect ) {
		showOnboarding = false;
	}

	return showOnboarding 
			? <BWARedirect to="/home/onboarding" currentLocation={location} /> 
			: (
				<BWACommonTemplate descriptivePageTitle={__('Home', 'bluehost-wordpress-plugin')}>
					<div className="page-home__container">
						<Welcome />
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
