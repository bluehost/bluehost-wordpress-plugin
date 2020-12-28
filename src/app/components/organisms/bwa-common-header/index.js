import './style.scss';

/**
 * External dependencies
 */
import { BluehostLogo, HelpIcon } from '@app/assets';

/**
 * Project dependencies
 */
import {
	BWAHeading,
} from '@app/components/atoms';
import DesktopDropdown from './desktop-dropdown';
import DesktopTabs from './desktop-tabs';
import MobileSidebar from './mobile-sidebar';
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { addUtmParams } from "@app/functions";

const HeaderLogo = () => (
	<div id="bluehost-logo-wrap">
		<a
			href={
				addUtmParams(
					'https://my.bluehost.com/hosting/app',
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
	</div>
);

const HeaderIcons = () => (
	<div id="bluehost-nav-wrap">
		<div className="bluehost-nav-wrap-element help">
			<a
				aria-label="Help"
				data-testid="help-icon"
				href="#/help"
				rel="noreferrer noopener"
			>
				<HelpIcon />
			</a>
		</div>
		<DesktopDropdown />
		<MobileSidebar />
	</div>
);

const BWACommonHeader = ({ ...props}) => (
	<header tabIndex="-1" className="bwa-common-header">
		<div className="bwa-common-header__brand">
			<div className="col">
				<HeaderLogo />
				<HeaderIcons />
			</div>
		</div>
		<div className="bwa-desktop-nav" tabIndex="-1" data-testid="desktop-nav">
			<DesktopTabs />
		</div>
	</header>
);

export default BWACommonHeader;
