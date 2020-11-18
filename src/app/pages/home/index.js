/**
 * WordPress Dependencies
 */
import { useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

/**
 * Project dependencies
 */

import { BWACommonTemplate } from '@app/components/templates';

/**
 * Component dependencies
 */
import Onboarding from './onboarding';
import Welcome from './welcome';
import ComingSoonNotice from './coming-soon-notice';
import BWAContentList from './content';
import DesignBuildSection from './design-build';
import TrafficEngagementSection from './traffic-engagement';
import PerformanceSection from './performance';
import HostingSection from './hosting';

import './style.scss';
import { update } from 'lodash';

const Home = () => {
	const daysSinceInstall = useSelect((select) => {
		return select('bluehost/plugin').getBluehostPluginDaysSinceInstall();
	}, []);

	const hasSiteLaunched = useSelect((select) => {
		return ! select('bluehost/plugin').getSetting('comingSoon');
	}, []);

	const showOnboarding = !hasSiteLaunched || daysSinceInstall <= 30;

	return (
		<BWACommonTemplate>
			<div className="page-home__container">
				{
					showOnboarding ?
						(
							<Onboarding />
						) :
						(
							<Fragment>
								<Welcome />
								<ComingSoonNotice />
								<BWAContentList />
								<DesignBuildSection />
								<TrafficEngagementSection />
								<PerformanceSection />
								<HostingSection />
							</Fragment>
						)
				}
			</div>
		</BWACommonTemplate>
	);
};

export default Home;
