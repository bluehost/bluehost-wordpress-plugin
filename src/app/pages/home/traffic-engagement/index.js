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

const SocialCard = () => (
	<HomeSectionRow
		icon="share"
		title={ __( 'Social', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Add social sharing buttons so site visitors can share your content and help grow your traffic.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ baseUrl + 'customize.php' }
			isDefault
		>
			Manage Social
		</Button>
	</HomeSectionRow>
);

const PublicizeCard = () => (
	<HomeSectionRow
		icon="megaphone"
		title={ __( 'Publicize', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Set your site to automatically share new content with your social networks.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ baseUrl + 'themes.php' }
			isDefault
		>
			Set Sharing
		</Button>
	</HomeSectionRow>
);

const StatsCard = () => (
	<HomeSectionRow
		isCentered
		icon="chart-bar"
		title={ __( 'Stats', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Learn which posts are the most popular and stay informed when your traffic surges.', 'endurance-wp-module-admin-app' ) }>
		<Button
			href={ baseUrl + 'themes.php' }
			isDefault
		>
			View Stats
		</Button>
	</HomeSectionRow>
);

const TrafficEngagementSection = () => (
	<HomeSection title="Traffic & Engagement" className="traffic">
		<SocialCard />
		<PublicizeCard />
		<StatsCard />
	</HomeSection>
);

export default TrafficEngagementSection;
