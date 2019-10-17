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
		title={ __( 'Customizer', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Make edits and see changes before you update.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ baseUrl + 'customize.php' }
			isDefault
		>
			{ __('Customize Theme', 'endurance-wp-module-admin-app') }
		</Button>
	</HomeSectionRow>
);

const ThemesCard = () => (
	<HomeSectionRow
		icon="admin-appearance"
		title={ __( 'WordPress Themes', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Browse themes to find one that inspires you!', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ baseUrl + 'themes.php' }
			isDefault
		>
			{__('Premium Themes', 'endurance-wp-module-admin-app')}
		</Button>
		<Button
			href={ baseUrl + 'themes.php' }
			isLink
		>
			{__('Free Themes', 'endurance-wp-module-admin-app')} 
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
