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
	return (
		<HomeSectionRow
			icon="share"
			title={ __( 'Social', 'bluehost-wordpress-plugin' ) }
			desc={ __( 'Add social sharing buttons so site visitors can share your content and help grow your traffic.', 'bluehost-wordpress-plugin' ) }>
			<Button
				href={ baseUrl + 'admin.php?page=jetpack#/sharing' }
				isDefault
			>
				{ __( 'Manage Social', 'bluehost-wordpress-plugin' ) }
			</Button>
		</HomeSectionRow>
	);
}

function PublicizeCard() {
	return (
		<HomeSectionRow
			icon="megaphone"
			title={ __( 'Publicize', 'bluehost-wordpress-plugin' ) }
			desc={ __( 'Set your site to automatically share new content with your social networks.', 'bluehost-wordpress-plugin' ) }>
			<Button
				href={ baseUrl + 'admin.php?page=jetpack#/sharing' }
				isDefault
			>
				{ __( 'Set Sharing', 'bluehost-wordpress-plugin' ) }
			</Button>
		</HomeSectionRow>
	);
}

function StatsCard() {
	return (
		<HomeSectionRow
			isCentered
			icon="chart-bar"
			title={ __( 'Stats', 'bluehost-wordpress-plugin' ) }
			desc={ __( 'Learn which posts are the most popular and stay informed when your traffic surges.', 'bluehost-wordpress-plugin' ) }>
			<Button
				href={ baseUrl + 'admin.php?page=stats' }
				isDefault
			>
				{ __( 'View Stats', 'bluehost-wordpress-plugin' ) }
			</Button>
		</HomeSectionRow>
	);
}

const TrafficEngagementSection = () => {
	if ( ! select( 'bluehost/plugin' ).isJetpackActive() ) {
		return null;
	}
	return (
		<HomeSection title={ __( 'Traffic & Engagement', 'bluehost-wordpress-plugin' ) } className="traffic">
			<SocialCard />
			<PublicizeCard />
			<StatsCard />
		</HomeSection>
	);
};

export default TrafficEngagementSection;
