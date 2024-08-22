import { Container, Page } from '@newfold/ui-component-library';
import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';
import WebinarsBanner from 'App/components/webinars-banner';
import AccountCard from './accountCard';
import HelpCard from './helpCard';
import WelcomeSection from './welcomeSection';
import MyProductSection from './myProductsSection';

const abTestShowMyProducts = NewfoldRuntime.hasCapability(
	'abTestShowMyProducts'
);

const Home = () => {
	return (
		<Page className="wppbh-home">
			<WelcomeSection />
			<WebinarsBanner />
			<Container className="wppbh-account-help-section">
				<Container.Block>
					<div className="nfd-grid nfd-grid-cols-2 nfd-gap-6">
						<AccountCard />
						<HelpCard />
					</div>
				</Container.Block>
			</Container>
			{ abTestShowMyProducts && <MyProductSection /> }
		</Page>
	);
};

export default Home;
