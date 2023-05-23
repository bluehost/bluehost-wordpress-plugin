import { Page } from '../../components/page';
import { FreeAddonsSection } from './freeAddonsSection';
import './stylesheet.scss';
import { WelcomeSection } from './welcomeSection';

const Home = () => {
	return (
		<Page className="wppb-home">
			<WelcomeSection />
			<FreeAddonsSection />
		</Page>
	);
};

export default Home;
