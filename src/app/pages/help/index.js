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
		{ __( 'Help Page', 'bluehost-wordpress-plugin' ) }
	</AppPage>
);

export default SettingsPage;
