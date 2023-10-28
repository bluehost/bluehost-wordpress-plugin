import { Page } from '../../components/page';
import { SectionContainer, SectionContent } from '../../components/section';
import WebinarsBanner from 'App/components/webinars-banner';
import { AccountCard } from './accountCard';
import { HelpCard } from './helpCard';
import './stylesheet.scss';
import { WelcomeSection } from './welcomeSection';

const Home = () => {
	return (
		<Page className="wppbh-home">
			<WelcomeSection />
			<WebinarsBanner />
			<SectionContainer className="wppbh-account-help-section">
				<SectionContent >
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
