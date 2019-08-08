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
import { ReactComponent as JetpackLogo } from '@/assets/jetpack-icon.svg';

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

function SiteAcceleratorCard() {
	if ( ! window.bluehost.wordpress.isJetpackActive || ! window.bluehost.wordpress.jetpackActiveModules.includes( 'photon' ) ) {
		// return null;
	}
	const jetpackIcon = ( <JetpackLogo /> );
	return (
		<HomeSectionRow
			isCentered
			icon={jetpackIcon}
			title={ __( 'Site Accelerator', 'endurance-wp-module-admin-app' ) }
			desc={ __( 'Site Accelerator helps your pages load faster by allowing Jetpack to optimize your images and serve your images and static files from a CDN.', 'endurance-wp-module-admin-app' ) }>
			<Button
				href={ baseUrl + 'admin.php?page=jetpack#/performance' }
				isDefault
			>
				Configure Site Accelerator
			</Button>
		</HomeSectionRow>
	);
}

const PerformanceSection = ( props ) => (
	<HomeSection title="Performance" className="performance">
		<CacheCard />
		<SiteAcceleratorCard />
	</HomeSection>
);

export default PerformanceSection;
