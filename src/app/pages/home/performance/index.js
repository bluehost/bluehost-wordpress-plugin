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
import { AppButton as Button } from '@/components/atoms';
import {
	ContentList,
	ContentListRow,
} from '@/components/molecules';
import { JetpackLogo } from '@/assets';

const baseUrl = location.origin + '/wp-admin/';

const CacheCard = () => (
	<ContentListRow
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
	</ContentListRow>
);

const SiteAcceleratorCard = () => {
	if ( ! select( 'bluehost/plugin' ).isJetpackActive() ) {
		return null;
	}
	return (
		<ContentListRow
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
		</ContentListRow>
	);
};

const PerformanceSection = () => (
	<ContentList title="Performance" className="performance">
		<>
			<CacheCard />
			<SiteAcceleratorCard />
		</>
	</ContentList>
);

export default PerformanceSection;
