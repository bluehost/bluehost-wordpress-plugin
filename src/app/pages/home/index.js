/**
 * External dependencies
 */
import AppPage from '@/components/app-page';

import './style.scss';

/**
 * Internal dependencies
 */
import ContentSection from './content/';
import DesignBuildSection from './design-build/';
import HostingSection from './hosting/';
import PerformanceSection from './performance/';

const HomePage = () => (
	<AppPage>
		<h3 class="welcome-title">Welcome to Your WordPress Site!</h3>
		<ContentSection />
		<DesignBuildSection />
		<PerformanceSection />
		<HostingSection />
	</AppPage>
);

export default HomePage;
