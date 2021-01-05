import { BWABaseTemplate } from '@app/components/templates';
import { __ } from '@wordpress/i18n';

const ToolsPage = () => (
	<BWABaseTemplate>
		{ __( 'Tools Page', 'bluehost-wordpress-plugin' ) }
	</BWABaseTemplate>
);

export default ToolsPage;
