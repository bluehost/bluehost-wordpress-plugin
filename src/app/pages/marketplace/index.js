/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import { AppPage } from '@/components';

const MarketplacePage = () => (
	<AppPage>
		{ __( 'Marketplace Page', 'eig-wp-admin-ui' ) }
	</AppPage>
);

export default MarketplacePage;
