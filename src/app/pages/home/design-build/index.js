/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import { BWAButton as Button } from '@/components/atoms';
import {
	BWAContentList,
	BWAContentListRow,
} from '@/components/molecules';

/**
 * External dependencies
 */
import { ButtonGroup } from '@wordpress/components';

const baseUrl = location.origin + '/wp-admin/';

const CustomizerCard = () => (
	<BWAContentListRow
		icon="admin-customizer"
		title={ __( 'Customizer', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Make edits and see changes before you update.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ baseUrl + 'customize.php' }
			isDefault
		>
			{ __( 'Customize Theme', 'bluehost-wordpress-plugin' ) }
		</Button>
	</BWAContentListRow>
);

const ThemesCard = () => (
	<BWAContentListRow
		icon="admin-appearance"
		title={ __( 'WordPress Themes', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Browse themes to find one that inspires you!', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ baseUrl + 'admin.php?page=bluehost#/marketplace/themes' }
			isDefault
		>
			{ __( 'Premium Themes', 'bluehost-wordpress-plugin' ) }
		</Button>
		<Button
			href={ baseUrl + 'themes.php' }
			isLink
		>
			{ __( 'Free Themes', 'bluehost-wordpress-plugin' ) }
		</Button>
	</BWAContentListRow>
);

const DesignBuildSection = ( props ) => (
	<BWAContentList title={ __( 'Design & Build', 'bluehost-wordpress-plugin' ) } className="design">
		<CustomizerCard />
		<ThemesCard />
	</BWAContentList>
);

export default DesignBuildSection;
