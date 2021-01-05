import {
	BWAContentList,
	BWAContentListRow,
} from '@app/components/molecules';

import { BWAButton as Button } from '@app/components/atoms';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';

const baseUrl = select('bluehost/plugin').getAdminUrl();

function SocialCard() {
	return (
		<BWAContentListRow
			icon="share"
			title={ __( 'Social', 'bluehost-wordpress-plugin' ) }
			desc={ __( 'Add social sharing buttons so site visitors can share your content and help grow your traffic.', 'bluehost-wordpress-plugin' ) }>
			<Button
				href={ baseUrl + 'admin.php?page=jetpack#/sharing' }
				isSecondary
			>
				{ __( 'Manage Social', 'bluehost-wordpress-plugin' ) }
			</Button>
		</BWAContentListRow>
	);
}

function PublicizeCard() {
	return (
		<BWAContentListRow
			icon="megaphone"
			title={ __( 'Publicize', 'bluehost-wordpress-plugin' ) }
			desc={ __( 'Set your site to automatically share new content with your social networks.', 'bluehost-wordpress-plugin' ) }>
			<Button
				href={ baseUrl + 'admin.php?page=jetpack#/sharing' }
				isSecondary
			>
				{ __( 'Set Sharing', 'bluehost-wordpress-plugin' ) }
			</Button>
		</BWAContentListRow>
	);
}

function StatsCard() {
	return (
		<BWAContentListRow
			isCentered
			icon="chart-bar"
			title={ __( 'Stats', 'bluehost-wordpress-plugin' ) }
			desc={ __( 'Learn which posts are the most popular and stay informed when your traffic surges.', 'bluehost-wordpress-plugin' ) }>
			<Button
				href={ baseUrl + 'admin.php?page=stats' }
				isSecondary
			>
				{ __( 'View Stats', 'bluehost-wordpress-plugin' ) }
			</Button>
		</BWAContentListRow>
	);
}

const TrafficEngagementSection = () => {
	if ( ! select( 'bluehost/plugin' ).isJetpackActive() ) {
		return null;
	}
	return (
		<BWAContentList title={ __( 'Traffic & Engagement', 'bluehost-wordpress-plugin' ) } className="traffic">
			<SocialCard />
			<PublicizeCard />
			<StatsCard />
		</BWAContentList>
	);
};

export default TrafficEngagementSection;
