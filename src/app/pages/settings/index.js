/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { BWACommonTemplate } from '@app/components/templates';

import { BWAHeading } from '@app/components/atoms';
import AutomaticUpdates from './automatic-updates';
import SiteControls from './site-controls';
import Comments from './comments';
import Content from './content';
import SettingsPerformance from './performance';

import './style.scss';

const SettingsPage = () => (
	<BWACommonTemplate className="page-settings">
		<BWAHeading level="h2" size={ 0 }>Settings</BWAHeading>
		<div className="pure-g">
			<div className="pure-u-1 pure-sm-3-5 page-settings__grid1">
				<AutomaticUpdates />
				<SiteControls />
				<Comments />
				<Content />
			</div>
			<div className="pure-u-1 pure-sm-3-5 page-settings__grid2">
				<SettingsPerformance />
			</div>
		</div>
	</BWACommonTemplate>
);

export default SettingsPage;
