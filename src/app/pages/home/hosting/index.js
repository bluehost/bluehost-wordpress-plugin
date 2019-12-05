/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
import { AppButton as Button } from '@/components/atoms';
import {
	ContentList,
	ContentListRow,
} from '@/components/molecules';

const ManageMySitesCard = () => (
	<ContentListRow
		icon="desktop"
		title={ __( 'Manage My Sites', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Manage your site from Bluehost\'s control panel. You can create backups, set security, and improve performance.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/app?lil=1#/sites' }
			isDefault
		>
			{ __( 'Manage', 'bluehost-wordpress-plugin' ) }
		</Button>
	</ContentListRow>
);

const EmailCard = () => (
	<ContentListRow
		icon="email"
		title={ __( 'Email', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Create email accounts, compose, send, and receive your email from your Bluehost control panel.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/app?lil=1#/email-office' }
			isDefault
		>
			{ __( 'Manage', 'bluehost-wordpress-plugin' ) }
		</Button>
	</ContentListRow>
);

const DomainsCard = () => (
	<ContentListRow
		icon="admin-site"
		title={ __( 'Domains', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Find a new domain and assign it to your site or start a new site with a fresh domain.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/app?lil=1#/domains' }
			isDefault
		>
			{ __( 'Find a Domain', 'bluehost-wordpress-plugin' ) }
		</Button>
	</ContentListRow>
);

const HelpCard = () => (
	<ContentListRow
		icon="editor-help"
		title={ __( 'Help', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Get help from Bluehost’s U.S.-based award-winning support team. It’s available 24/7 through phone and chat.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/help' }
			isDefault
		>
			{ __( 'Help Me', 'bluehost-wordpress-plugin' ) }
		</Button>
	</ContentListRow>
);

const HostingSection = ( props ) => (
	<ContentList title={ __( 'Hosting', 'bluehost-wordpress-plugin' ) } className="hosting">
		<ManageMySitesCard />
		<EmailCard />
		<DomainsCard />
		<HelpCard />
	</ContentList>
);

export default HostingSection;
