import './style.scss';

import AutomaticUpdates from './automatic-updates';
import { BWACommonTemplate } from '@app/components/templates';
import { BWAHeading } from '@app/components/atoms';
import Comments from './comments';
import Content from './content';
import SettingsPerformance from './performance';
import SiteControls from './site-controls';
import { __ } from '@wordpress/i18n';

const SettingsPage = () => (
	<BWACommonTemplate className="page-settings">
		{/* <Notification /> */}
		<BWAHeading level="h2" size={ 0 }>{ __('Settings', 'bluehost-wordpress-plugin') }</BWAHeading>
		<div className="settings-wrap">
			<div className="page-settings__grid1">
				<AutomaticUpdates />
				<SiteControls />
				<Comments />
				<Content />
			</div>
			<div className="page-settings__grid2">
				<SettingsPerformance />
			</div>
		</div>
	</BWACommonTemplate>
);

export default SettingsPage;
