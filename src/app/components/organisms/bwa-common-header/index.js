import './style.scss';

import { BluehostLogo, HelpIcon } from '@app/assets';

import {
	BWAHeading,
} from '@app/components/atoms';
import DesktopDropdown from './desktop-dropdown';
import DesktopTabs from './desktop-tabs';
import MobileSidebar from './mobile-sidebar';
import { __ } from '@wordpress/i18n';
import { Tooltip } from '@wordpress/components';
import { addUtmParams, getPlatformBaseUrl } from "@app/functions";

const HeaderLogo = () => (
	<div id="bluehost-logo-wrap">
		<Tooltip text={__('Go to your Bluehost Control Panel', 'bluehost-wordpress-plugin')} position="bottom center">
			<a
				href={
					addUtmParams(
						getPlatformBaseUrl('/hosting/app'),
						{
							utm_content: 'bluehost_header_logo',
							utm_term: 'Bluehost Logo linking to the Bluehost Control Panel'
						}
					)
				}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Bluehost Logo linking to the Bluehost Control Panel"
			>
				<BWAHeading level="h1" size={ 0 }>{ __('Bluehost', 'bluehost-wordpress-plugin') }</BWAHeading>
					<BluehostLogo title="Bluehost Logo" />
			</a>
		</Tooltip>
	</div>
);

const HeaderIcons = () => (
	<div id="bluehost-nav-wrap">
		<div className="bluehost-nav-wrap-element help">
			<Tooltip text={__('Help, support & learning resources', 'bluehost-wordpress-plugin')}>
				<a
					className="components-button"
					aria-label="Help"
					data-testid="help-icon"
					onClick={() => {
						window.newfoldEmbeddedHelp.toggleNFDLaunchedEmbeddedHelp();
					}}
					rel="noreferrer noopener"
				>
					<HelpIcon />
				</a>
			</Tooltip>
		</div>
		<DesktopDropdown />
		<MobileSidebar />
	</div>
);

const BWACommonHeader = ({ ...props}) => (
	<header tabIndex="-1" className="bwa-common-header">
		<div className="bwa-common-header__brand">
			<div className="col" style={{ maxWidth: '1600px', margin: '0 auto' }}>
				<HeaderLogo />
				{/* <HeaderIcons /> */}
			</div>
		</div>
		<div className="bwa-desktop-nav" tabIndex="-1" data-testid="desktop-nav">
			<DesktopTabs />
		</div>
	</header>
);

export default BWACommonHeader;
