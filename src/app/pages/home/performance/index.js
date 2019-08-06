/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { 
	AppCard,
	AppButton as Button 
} from '@/components';

import { ButtonGroup } from '@wordpress/components';

const baseUrl = location.origin + '/wp-admin/';

const CacheCard = () => (
	<AppCard
		isCentered
		icon="performance"
		title={ __( 'Page Cache', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Page caching allows your server to keep a copy of a page for a short time to dramatically improve speed.', 'endurance-wp-module-admin-app' ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'themes.php' }
				isDefault
			>
                Configure
			</Button>
		</ButtonGroup>
	</AppCard>
);

const PhotonCard = () => (
	<AppCard
		isCentered
		icon="visibility"
		title={ __( 'Photon', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Photon is an image acceleration service that will resize your images and serve them from a CDN.', 'endurance-wp-module-admin-app' ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'themes.php' }
				isDefault
			>
                Install Jetpack
			</Button>
		</ButtonGroup>
	</AppCard>
);

const PerformanceSection = ( props ) => (
	<section id="content" className={ 'pure-g' }>
		<div className={ 'pure-u-1' }>
			<h3>{ __( 'Performance', 'endurance-wp-module-admin-app' ) }</h3>
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<CacheCard />
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<PhotonCard />
		</div>
	</section>
);

export default PerformanceSection;
