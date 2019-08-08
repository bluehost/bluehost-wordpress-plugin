/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
import { AppButton as Button } from '@/components';
import HomeSection from '../home-section';
import HomeSectionRow from '../home-section-row';

const baseUrl = location.origin + '/wp-admin/';

const ManageMySitesCard = () => (
	<HomeSectionRow
		icon="desktop"
		title={ __( 'Manage My Sites', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Manage your site from Bluehost\'s control panel. You can create backups, set security, and improve performance.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/app?lil=1#/sites' }
			isDefault
		>
			Manage
		</Button>
	</HomeSectionRow>
);

const EmailCard = () => (
	<HomeSectionRow
		icon="email"
		title={ __( 'Email', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Create email accounts, compose, send, and receive your email from your Bluehost control panel.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/app?lil=1#/email-office' }
			isDefault
		>
			Manage
		</Button>
	</HomeSectionRow>
);

const DomainsCard = () => (
	<HomeSectionRow
		icon="admin-site"
		title={ __( 'Domains', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Find a new domain and assign it to your site or start a new site with a fresh domain.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/app?lil=1#/domains' }
			isDefault
		>
			Find a Domain
		</Button>
	</HomeSectionRow>
);

const HelpCard = () => (
	<HomeSectionRow
		icon="editor-help"
		title={ __( 'Help', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Get help from Bluehost’s U.S.-based award-winning support team. It’s available 24/7 through phone and chat.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ 'https://my.bluehost.com/hosting/help' }
			isDefault
		>
			Help Me
		</Button>
	</HomeSectionRow>
);

const HostingSection = ( props ) => (
	<HomeSection title="Hosting" className="hosting">
		<ManageMySitesCard />
		<EmailCard />
		<DomainsCard />
		<HelpCard />
	</HomeSection>
);

export default HostingSection;
