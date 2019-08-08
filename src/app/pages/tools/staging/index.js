/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import { AppPage } from '@/components';

const StagingPage = () => (
	<AppPage>
		{ __( 'Staging Page', 'eig-wp-admin-ui' ) }
	</AppPage>
);

export default StagingPage;
