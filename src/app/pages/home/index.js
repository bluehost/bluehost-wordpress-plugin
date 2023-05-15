import './stylesheet.scss';
import ComingSoonSection from './comingSoonSection';
import WebContentSection from './webContentSection';
import WebHostingSection from './webHostingSection';
import SettingsSection from './settingsSection';
import { useEffect } from 'react';

const Home = () => {
	return (
		<div className="wppb-home">
			<ComingSoonSection />
			<WebContentSection />
			<SettingsSection />
			<WebHostingSection />
		</div>
	);
};

export default Home;
