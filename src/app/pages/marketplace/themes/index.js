/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * External dependencies
 */
import { AppPage } from '@/components';

const ThemesPage = () => (
	<AppPage>
		{ __( 'Themes Page', 'bluehost-wordpress-plugin' ) }
	</AppPage>
);

export default ThemesPage;
