/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
import { BWAButton as Button } from '@/components/atoms';
import {
	BWAContentList,
	BWAContentListRow,
} from '@/components/molecules';
import { JetpackLogo } from '@/assets';

const baseUrl = location.origin + '/wp-admin/';

const CacheCard = () => (
	<BWAContentListRow
		isCentered
		icon="performance"
		title={ __( 'Page Cache', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Configure your caching to give you the best performance for your site’s needs.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ baseUrl + 'admin.php?page=bluehost#/settings' }
			isDefault
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
			desc={ __( 'Site acceleration service will resize your images and serve them from a CDN.', 'bluehost-wordpress-plugin' ) }>
			<Button
				href={ baseUrl + 'admin.php?page=jetpack#/performance' }
				isDefault
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
