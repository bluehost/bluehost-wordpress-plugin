/**
 * External dependencies
 */
import AppPage from '@/components/app-page';
/**
 * Internal dependencies
 */
import './style.scss';

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
import ContentSection from './content/';
import DesignBuildSection from './design-build/';
import TrafficEngagementSection from './traffic-engagement/';
import PerformanceSection from './performance/';
import HostingSection from './hosting/';
import ComingSoonNotice from './coming-soon-notice/';
import WelcomeSection from './welcome-section';

const HomePage = () => (
    <AppPage className="home">
        <div className="restricted-width">
            <WelcomeSection />
            <ComingSoonNotice/>
            <ContentSection/>
            <DesignBuildSection/>
            <TrafficEngagementSection/>
            <PerformanceSection/>
            <HostingSection/>
        </div>
    </AppPage>
);

export default HomePage;
