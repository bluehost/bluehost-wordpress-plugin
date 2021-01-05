import {
	BWAContentList,
	BWAContentListRow,
} from '@app/components/molecules';

import { BWAButton as Button } from '@app/components/atoms';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';

const baseUrl = select('bluehost/plugin').getAdminUrl();

const CustomizerCard = () => (
	<BWAContentListRow
		icon="admin-customizer"
		title={ __( 'Customizer', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Make edits and see changes before you update.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ baseUrl + 'customize.php' }
			isSecondary
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
			isSecondary
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
