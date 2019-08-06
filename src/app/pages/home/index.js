/**
 * External dependencies
 */
import AppPage from '@/components/app-page';

/**
 * Internal dependencies
 */
import ContentSection from './content/';
import DesignBuildSection from './design-build/';
import HostingSection from './hosting/';
import PerformanceSection from './performance/';

const HomePage = () => (
	<AppPage>
		<ContentSection />
		<DesignBuildSection />
		<PerformanceSection />
		<HostingSection />
	</AppPage>
);

export default HomePage;
