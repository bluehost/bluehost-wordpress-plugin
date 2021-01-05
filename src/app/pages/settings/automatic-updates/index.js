import { withDispatch, withSelect } from '@wordpress/data';

import SettingsGroup from '../settings-group';
import SettingsSection from '../settings-section';
import SettingsToggle from '../settings-toggle';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';

const AutomaticUpdates = ( { core, themes, plugins, toggleSetting } ) => {
	return (
		<SettingsSection name={ __( 'Automatic Updates', 'bluehost-wordpress-plugin' ) }>
			<SettingsGroup>
				<SettingsToggle
					label={ __( 'WordPress Core', 'bluehost-wordpress-plugin' ) }
					checked={ core }
					onChange={ () => toggleSetting( 'autoUpdatesMajorCore' ) }
				/>
				<SettingsToggle
					label={ __( 'Themes', 'bluehost-wordpress-plugin' ) }
					checked={ themes }
					onChange={ () => toggleSetting( 'autoUpdatesThemes' ) }
				/>
				<SettingsToggle
					label={ __( 'Plugins', 'bluehost-wordpress-plugin' ) }
					checked={ plugins }
					onChange={ () => toggleSetting( 'autoUpdatesPlugins' ) }
				/>
			</SettingsGroup>
		</SettingsSection>
	);
};

export default compose(
	withSelect( ( select ) => ( {
		core: select( 'bluehost/plugin' ).getSetting( 'autoUpdatesMajorCore' ),
		themes: select( 'bluehost/plugin' ).getSetting( 'autoUpdatesThemes' ),
		plugins: select( 'bluehost/plugin' ).getSetting( 'autoUpdatesPlugins' ),
	} ) ),
	withDispatch( ( dispatch ) => ( {
		toggleSetting: dispatch( 'bluehost/plugin' ).toggleSetting,
	} ) )
)( AutomaticUpdates );
