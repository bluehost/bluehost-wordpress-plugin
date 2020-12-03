/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { forwardRef } from '@wordpress/element';
/**
 * Project dependencies
 */
import {
	BWAHeading,
} from '@app/components/atoms';
/**
 * External dependencies
 */
import { BluehostLogo, HelpIcon } from '@app/assets';
/**
 * Internal dependencies
 */
import { addUtmParams } from "@app/functions";
import './style.scss';
import DesktopTabs from './desktop-tabs';
import DesktopDropdown from './desktop-dropdown';
import MobileSidebar from './mobile-sidebar';

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
				href={
					addUtmParams(
						'https://my.bluehost.com/hosting/help',
						{
							utm_content: 'header_help_icon',
							utm_term: 'Help'
						}
					)
				}
				rel="noreferrer noopener"
				target="_blank"
			>
				<HelpIcon />
			</a>
		</div>
		<DesktopDropdown />
		<MobileSidebar />
	</div>
);

const BWACommonHeader = ({ desktopNavRef, showMainNav = true, ...props}) => (
	<header tabIndex="-1">
		<div className="bwa-common-header__brand">
			<div className="col">
				<HeaderLogo />
				<HeaderIcons />
			</div>
		</div>
		{ showMainNav && (
			<div className="bwa-desktop-nav" tabIndex="-1" data-testid="desktop-nav">
				<DesktopTabs />
			</div>
		)}
	</header>
);

export default BWACommonHeader;
