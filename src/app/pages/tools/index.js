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
		{ __( 'Tools Page', 'bluehost-wordpress-plugin' ) }
	</AppPage>
);

export default ToolsPage;
