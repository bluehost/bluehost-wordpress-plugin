import { Page } from '../../components/page';
import { SectionContainer, SectionContent } from '../../components/section';
import { AccountCard } from './accountCard';
import { FreeAddonsSection } from './freeAddonsSection';
import { HelpCard } from './helpCard';
import './stylesheet.scss';
import { WelcomeSection } from './welcomeSection';

const Home = () => {
	return (
		<Page className="wppbh-home">
			<WelcomeSection />
			<FreeAddonsSection />
			<SectionContainer className="wppbh-account-help-section">
				<SectionContent >
					<div className="yst-grid yst-grid-cols-2 yst-gap-6">
						<AccountCard />
						<HelpCard />
					</div>
				</SectionContent>
			</SectionContainer>
		</Page>
	);
};

export default Home;
