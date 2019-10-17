/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';

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
	if ( ! select('bluehost/plugin').isJetpackActive() ) {
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
				{__('Manage Social', 'bluehost-wordpress-plugin')}
			</Button>
		</HomeSectionRow>
	);
}

function PublicizeCard() {
	if ( ! select('bluehost/plugin').isJetpackActive() ) {
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
				{__('Set Sharing', 'bluehost-wordpress-plugin')}
			</Button>
		</HomeSectionRow>
	);
}

function StatsCard() {
	if ( ! select('bluehost/plugin').isJetpackActive() ) {
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
				{__('View Stats', 'bluehost-wordpress-plugin')}
			</Button>
		</HomeSectionRow>
	);
}

const TrafficEngagementSection = () => {
	if ( ! select('bluehost/plugin').isJetpackActive() ) {
		return null;
	}
	return (
		<HomeSection title={__('Traffic & Engagement', 'bluehost-wordpress-plugin')} className="traffic">
			<SocialCard />
			<PublicizeCard />
			<StatsCard />
		</HomeSection>
	);
}

export default TrafficEngagementSection;
