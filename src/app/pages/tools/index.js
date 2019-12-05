/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import { BaseTemplate } from '@/components/templates';

const ToolsPage = () => (
	<BaseTemplate>
		{ __( 'Tools Page', 'bluehost-wordpress-plugin' ) }
	</BaseTemplate>
);

export default ToolsPage;
