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
import { 
	AppCard,
	AppButton as Button 
} from '@/components';

import { ButtonGroup } from '@wordpress/components';

const baseUrl = location.origin + '/wp-admin/';

const ManageMySitesCard = () => (
	<AppCard
		icon="desktop"
		title={ __( 'Manage My Sites', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Manage your site from Bluehost\'s control panel. You can take backups, keep things secure, and improve performance.', 'endurance-wp-module-admin-app' ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'customize.php' }
				isDefault
			>
                Manage
			</Button>
		</ButtonGroup>
	</AppCard>
);

const EmailCard = () => (
	<AppCard
		icon="email"
		title={ __( 'Email', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Create accounts, compose, send, and recieve all your email in your Bluehost control panel.', 'endurance-wp-module-admin-app' ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'customize.php' }
				isDefault
			>
                Manage
			</Button>
		</ButtonGroup>
	</AppCard>
);

const DomainsCard = () => (
	<AppCard
		icon="admin-site"
		title={ __( 'Domains', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Find a new domain and assign it to your site, or start a new site with a new domain.', 'endurance-wp-module-admin-app' ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'customize.php' }
				isDefault
			>
                Find a Domain
			</Button>
		</ButtonGroup>
	</AppCard>
);

const HelpCard = () => (
	<AppCard
		icon="editor-help"
		title={ __( 'Help', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Need help from the folks at Bluehost? We have 24/7 US-based phone and chat support waiting to help.', 'endurance-wp-module-admin-app' ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'customize.php' }
				isDefault
			>
                Help Me
			</Button>
		</ButtonGroup>
	</AppCard>
);

const HostingSection = ( props ) => (
	<section id="content" className={ 'pure-g' }>
		<div className={ 'pure-u-1' }>
			<h3>{ __( 'Hosting', 'endurance-wp-module-admin-app' ) }</h3>
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<ManageMySitesCard />
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<EmailCard />
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<DomainsCard />
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<HelpCard />
		</div>
	</section>
);

export default HostingSection;
