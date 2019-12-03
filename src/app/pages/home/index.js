/**
 * Project dependencies
 */
import AppPage from '@/components/app-page';
/**
 * Component dependencies
 */
import './style.scss';
import ContentSection from './content';
import DesignBuildSection from './design-build';
import TrafficEngagementSection from './traffic-engagement';
import PerformanceSection from './performance';
import HostingSection from './hosting';
import ComingSoonNotice from './coming-soon-notice';
import Welcome from './welcome';

const HomePage = () => (
	<AppPage className="home">
		<div className="restricted-width">
			<Welcome />
			<ComingSoonNotice />
			<ContentSection />
			<DesignBuildSection />
			<TrafficEngagementSection />
			<PerformanceSection />
			<HostingSection />
		</div>
	</AppPage>
);

export default HomePage;
