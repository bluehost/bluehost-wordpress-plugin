import {
	BWAContentList,
	BWAContentListRow,
} from '@app/components/molecules';

import { BWAButton as Button } from '@app/components/atoms';
import { JetpackLogo } from '@app/assets';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';

const baseUrl = select('bluehost/plugin').getAdminUrl();

const CacheCard = () => (
	<BWAContentListRow
		isCentered
		icon="performance"
		title={ __( 'Page Cache', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Configure your caching to give you the best performance for your site’s needs.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ baseUrl + 'admin.php?page=bluehost#/settings' }
			isSecondary
		>
			{ __( 'Configure Caching', 'bluehost-wordpress-plugin' ) }
		</Button>
	</BWAContentListRow>
);

const SiteAcceleratorCard = () => {
	if ( ! select( 'bluehost/plugin' ).isJetpackActive() ) {
		return null;
	}
	return (
		<BWAContentListRow
			isCentered
			icon={ ( <JetpackLogo /> ) }
			title={ __( 'Site Accelerator', 'bluehost-wordpress-plugin' ) }
			desc={ __( 'Site acceleration service will resize your images and serve them from Jetpack\'s CDN.', 'bluehost-wordpress-plugin' ) }>
			<Button
				href={ baseUrl + 'admin.php?page=jetpack#/performance' }
				isSecondary
			>
				{ __( 'Configure Site Accelerator', 'bluehost-wordpress-plugin' ) }
			</Button>
		</BWAContentListRow>
	);
};

const PerformanceSection = () => (
	<BWAContentList title="Performance" className="performance">
		<>
			<CacheCard />
			<SiteAcceleratorCard />
		</>
	</BWAContentList>
);

export default PerformanceSection;
