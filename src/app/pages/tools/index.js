/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import { AppPage } from '@/components';

const ToolsPage = () => (
	<AppPage>
		{ __( 'Tools Page', 'eig-wp-admin-ui' ) }
	</AppPage>
);

export default ToolsPage;
