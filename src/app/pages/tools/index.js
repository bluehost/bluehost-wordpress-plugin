/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import { BWABaseTemplate } from '@/components/templates';

const ToolsPage = () => (
	<BWABaseTemplate>
		{ __( 'Tools Page', 'bluehost-wordpress-plugin' ) }
	</BWABaseTemplate>
);

export default ToolsPage;
