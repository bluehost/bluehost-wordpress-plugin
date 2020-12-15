import './style.scss';

/**
 * Project dependencies
 */
import { BWACommonTemplate } from '@app/components/templates';
import BWAContentList from './content';
import ComingSoonNotice from './coming-soon-notice';
import DesignBuildSection from './design-build';
import { Fragment } from '@wordpress/element';
import HostingSection from './hosting';
/**
 * Component dependencies
 */
import Onboarding from './onboarding';
import PerformanceSection from './performance';
import TrafficEngagementSection from './traffic-engagement';
import Welcome from './welcome';
import { update } from 'lodash';
/**
 * WordPress Dependencies
 */
import { useSelect } from '@wordpress/data';

const Home = () => {
	const daysSinceInstall = useSelect((select) => {
		return select('bluehost/plugin').getBluehostPluginDaysSinceInstall();
	}, []);

	const hasSiteLaunched = useSelect((select) => {
		return !select('bluehost/plugin').getSetting('comingSoon');
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
