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
import { AppButton as Button } from '@/components';
import HomeSection from '../home-section';
import HomeSectionRow from '../home-section-row';
import { JetpackLogo } from '@/assets';

const baseUrl = location.origin + '/wp-admin/';

const CacheCard = () => (
	<HomeSectionRow
		isCentered
		icon="performance"
		title={ __( 'Page Cache', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Configure your caching to give you the best performance for your site’s needs.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ baseUrl + 'admin.php?page=bluehost#/settings' }
			isDefault
		>
			Configure Caching
		</Button>
	</HomeSectionRow>
);

const SiteAcceleratorCard = () => {
	if ( ! window.bluehost.wordpress.isJetpackActive || ( ( 0 !== window.bluehost.wordpress.jetpackActiveModules ) && ! window.bluehost.wordpress.jetpackActiveModules.includes( 'photon' ) ) ) {
		// return null;
	}
	return (
		<HomeSectionRow
			isCentered
			icon={ (<JetpackLogo />) }
			title={ __( 'Site Accelerator', 'endurance-wp-module-admin-app' ) }
			desc={ __( 'Site acceleration service will resize your images and serve them from a CDN.', 'endurance-wp-module-admin-app' ) }>
			<Button
				href={ baseUrl + 'admin.php?page=jetpack#/performance' }
				isDefault
			>
				Configure Site Accelerator
			</Button>
		</HomeSectionRow>
	);
}

const PerformanceSection = () => (
	<HomeSection title="Performance" className="performance">
		<>
			<CacheCard />
			<SiteAcceleratorCard />
		</>
	</HomeSection>
);

export default PerformanceSection;
