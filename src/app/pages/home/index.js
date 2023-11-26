import './stylesheet.scss';
import { Page } from 'App/components/page';
import { SectionContainer, SectionContent } from 'App/components/section';
import WebinarsBanner from 'App/components/webinars-banner';
import AccountCard from './accountCard';
import HelpCard from './helpCard';
import WelcomeSection from './welcomeSection';

const Home = () => {
	return (
		<Page className="wppbh-home">
			<WelcomeSection />
			<WebinarsBanner />
			<SectionContainer className="wppbh-account-help-section">
				<SectionContent>
					<div className="nfd-grid nfd-grid-cols-2 nfd-gap-6">
						<AccountCard />
						<HelpCard />
					</div>
				</SectionContent>
			</SectionContainer>
		</Page>
	);
};

export default Home;
