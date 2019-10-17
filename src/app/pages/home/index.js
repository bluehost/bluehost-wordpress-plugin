/**
 * Project dependencies
 */
import AppPage from '@/components/app-page';
/**
 * Component dependencies
 */
import './style.scss';
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
<<<<<<< Updated upstream
            <WelcomeSection/>
=======
            <WelcomeSection />
>>>>>>> Stashed changes
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
