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

const baseUrl = location.origin + '/wp-admin/';

function SocialCard() {
	if ( ( 0 !== window.bluehost.wordpress.jetpackActiveModules ) && ! window.bluehost.wordpress.jetpackActiveModules.includes( 'sharedaddy' ) ) {
		return null;
	}
	return (
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
}

function PublicizeCard() {
	if ( ( 0 !== window.bluehost.wordpress.jetpackActiveModules ) && ! window.bluehost.wordpress.jetpackActiveModules.includes( 'publicize' ) ) {
		return null;
	}
	return (
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
}

function StatsCard() {
	if ( ( 0 !== window.bluehost.wordpress.jetpackActiveModules ) && ! window.bluehost.wordpress.jetpackActiveModules.includes( 'stats' ) ) {
		return null;
	}
	return (
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
}

function TrafficEngagementSection() {
	// if ( ! window.bluehost.wordpress.isJetpackActive ) {
	// 	return null;
	// }
	return (
		<HomeSection title="Traffic & Engagement" className="traffic">
			<SocialCard />
			<PublicizeCard />
			<StatsCard />
		</HomeSection>
	);
}

export default TrafficEngagementSection;
