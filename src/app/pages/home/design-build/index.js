/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import { AppButton as Button } from '@/components';
import HomeSection from '../home-section';
import HomeSectionRow from '../home-section-row';

/**
 * External dependencies
 */
import { ButtonGroup } from '@wordpress/components';

const baseUrl = location.origin + '/wp-admin/';

const CustomizerCard = () => (
	<HomeSectionRow
		icon="admin-customizer"
		title={ __( 'Customizer', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Make edits and see changes before you update.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ baseUrl + 'customize.php' }
			isDefault
		>
			{ __('Customize Theme', 'bluehost-wordpress-plugin') }
		</Button>
	</HomeSectionRow>
);

const ThemesCard = () => (
	<HomeSectionRow
		icon="admin-appearance"
		title={ __( 'WordPress Themes', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Browse themes to find one that inspires you!', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ baseUrl + '/wp-admin/admin.php?page=bluehost#/marketplace/themes' }
			isDefault
		>
			{__('Premium Themes', 'bluehost-wordpress-plugin')}
		</Button>
		<Button
			href={ baseUrl + 'themes.php' }
			isLink
		>
			{__('Free Themes', 'bluehost-wordpress-plugin')}
		</Button>
	</HomeSectionRow>
);

const DesignBuildSection = ( props ) => (
	<HomeSection title="Design & Build" className="design">
		<CustomizerCard />
		<ThemesCard />
	</HomeSection>
);

export default DesignBuildSection;
