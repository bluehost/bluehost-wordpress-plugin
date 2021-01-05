import './style.scss';

import { BWAHeading } from '@app/components/atoms';
import { __ } from '@wordpress/i18n';

const Welcome = () => (
	<div className="welcome-section">
		<BWAHeading level="h2" size="welcome">
			{ __( 'Welcome to your WordPress site!', 'bluehost-wordpress-plugin' ) }
		</BWAHeading>
		<p>{ __( 'From here, you can quickly add content to your site, manage for-sale products, work on your site\’s design and performance, manage hosting, and access tools to increase your traffic.', 'bluehost-wordpress-plugin' ) }</p>
	</div>
);

export default Welcome;
