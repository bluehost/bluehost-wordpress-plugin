import './style.scss';

import { Redirect, useLocation } from 'react-router-dom';

import { BWACommonTemplate } from '@app/components/templates';
import { BWARedirect } from '@app/components/atoms';
import {
	DesignBuildSection,
	HostingSection,
	PerformanceSection,
	TrafficEngagementSection,
	ContentSection,
	WelcomeSection
} from './sections'
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

const Home = () => {
	const location = useLocation();

	const daysSinceInstall = useSelect((select) => {
		const plugin = select('bluehost/plugin');
		return 'undefined' !== typeof plugin && plugin.hasOwnProperty('getBluehostPluginDaysSinceInstall') ? select('bluehost/plugin').getBluehostPluginDaysSinceInstall() : 31;
	}, []);

	const hasSiteLaunched = useSelect((select) => {
		const plugin = select('bluehost/plugin');
		return 'undefined' !== typeof plugin && plugin.hasOwnProperty('getSetting') ? ! select('bluehost/plugin').getSetting('comingSoon') : true;
	}, []);

	const isOnECommercePlan = useSelect((select) => {
		const plugin = select("bluehost/plugin");
		return (
			"undefined" !== typeof plugin &&
			plugin.hasOwnProperty("isOnECommercePlan") &&
			plugin.isOnECommercePlan()
		);
	}, []);

	if (isOnECommercePlan) {
		return <BWARedirect to="/home/store/general" currentLocation={location} />;
	}

	let showOnboarding = !hasSiteLaunched || daysSinceInstall <= 30;

	if(location.state && 'undefined' !== typeof location.state.redirect && 'override' === location.state.redirect ) {
		showOnboarding = false;
	}

	return showOnboarding 
			? <BWARedirect to="/home/onboarding" currentLocation={location} />
			: (
				<BWACommonTemplate descriptivePageTitle={__('Home', 'bluehost-wordpress-plugin')}>
					<div className="page-home__container">
						<WelcomeSection />
						<ContentSection />
						<DesignBuildSection />
						<TrafficEngagementSection />
						<PerformanceSection />
						<HostingSection />
					</div>
				</BWACommonTemplate>
			);
};

export default Home;
