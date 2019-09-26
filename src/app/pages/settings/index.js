/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { AppPage } from '@/components';
import AutomaticUpdates from './automatic-updates';
import SiteControls from './site-controls';
import Comments from './comments';
import Content from './content';
import SettingsPerformance from './performance';

import './style.scss';

const SettingsPage = () => (
	<AppPage className="settings">
		<div className="pure-g">
			<div className="pure-u-1 pure-sm-3-5">
				<AutomaticUpdates />
				<SiteControls />
				<Comments />
				<Content />
				<SettingsPerformance />
			</div>
		</div>
	</AppPage>
);

export default SettingsPage;
