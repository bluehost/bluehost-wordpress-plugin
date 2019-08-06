/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import { AppPage } from '@/components';

const SettingsPage = () => (
	<AppPage>
		{ __( 'Help Page', 'eig-wp-admin-ui' ) }
	</AppPage>
);

export default SettingsPage;
