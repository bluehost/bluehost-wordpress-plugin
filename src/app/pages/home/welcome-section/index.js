import { __ } from '@wordpress/i18n';

const WelcomeSection = () => (
    <div className="welcome-section">
        <h1>{__('Welcome to your WordPress site!')}</h1>
        <p>{__('From here, you can quickly add content to your site, manage for-sale products, work on your site\’s design and performance, manage hosting, and access tools to increase your traffic.')}</p>
    </div>
);

export default WelcomeSection;