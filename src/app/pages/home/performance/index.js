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

const CacheCard = () => (
	<HomeSectionRow
		isCentered
		icon="performance"
		title={ __( 'Page Cache', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Configure your caching to give you the best performance for your site’s needs.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ baseUrl + 'admin.php?page=bluehost#/tools' }
			isDefault
		>
			Configure
		</Button>
	</HomeSectionRow>
);

const PhotonCard = () => (
	<HomeSectionRow
		isCentered
		icon="visibility"
		title={ __( 'Photon', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Photon is an image acceleration service that will resize your images and serve them from a CDN.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ baseUrl + 'themes.php' }
			isDefault
		>
			Install Jetpack
		</Button>
	</HomeSectionRow>
);

const PerformanceSection = ( props ) => (
	<HomeSection title="Performance" className="performance">
		<CacheCard />
		<PhotonCard />
	</HomeSection>
);

export default PerformanceSection;
