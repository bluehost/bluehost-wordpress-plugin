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
import { 
	AppCard,
	AppButton as Button 
} from '@/components';

import { ButtonGroup } from '@wordpress/components';

const baseUrl = location.origin + '/wp-admin/';

const CustomizerCard = () => (
	<AppCard
		icon="admin-customizer"
		title={ __( 'Customizer', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Customize your theme from the front end and view your changes before updating them.', 'endurance-wp-module-admin-app' ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'customize.php' }
				isPrimary
			>
                Customize Theme
			</Button>
		</ButtonGroup>
	</AppCard>
);

const ThemesCard = () => (
	<AppCard
		icon="admin-appearance"
		title={ __( 'WordPress Themes', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Easily browse and find a theme that inspires you!', 'endurance-wp-module-admin-app' ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'themes.php' }
				isPrimary
			>
                Premium Themes
			</Button>
			<Button
				href={ baseUrl + 'themes.php' }
				isDefault
			>
                Free Themes
			</Button>
		</ButtonGroup>
	</AppCard>
);

const StagingCard = () => (
	<AppCard
		isCentered
		icon="screenoptions"
		title={ __( 'Staging', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Staging allows you to create a seperate copy of your site that only you can see. You can test new ideas there before going live.', 'endurance-wp-module-admin-app' ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'themes.php' }
				isDefault
			>
                Get Started
			</Button>
		</ButtonGroup>
	</AppCard>
);

const DesignBuildSection = ( props ) => (
	<section id="content" className={ 'pure-g' }>
		<div className={ 'pure-u-1' }>
			<h3>{ __( 'Design & Build', 'endurance-wp-module-admin-app' ) }</h3>
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<CustomizerCard />
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<ThemesCard />
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1' }>
			<StagingCard />
		</div>
	</section>
);

export default DesignBuildSection;
