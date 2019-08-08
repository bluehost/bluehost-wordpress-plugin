/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import { AppPage } from '@/components';

const PluginsPage = () => (
	<AppPage>
		{ __( 'Plugins Page', 'bluehost-wordpress-plugin' ) }
	</AppPage>
);

export default PluginsPage;
