import { withDispatch, withSelect } from '@wordpress/data';

import SettingsGroup from '../settings-group';
import SettingsSection from '../settings-section';
import SettingsToggle from '../settings-toggle';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';

const SiteControls = ( { isComingSoon, toggleSetting } ) => {
	return (
		<SettingsSection
			name={ __( 'Site Controls', 'bluehost-wordpress-plugin' ) }
		>
			<SettingsGroup>
				<SettingsToggle
					label={ __( 'Coming Soon Page', 'bluehost-wordpress-plugin' ) }
					checked={ isComingSoon }
					onChange={ () => toggleSetting( 'comingSoon' ) }
				/>
			</SettingsGroup>
		</SettingsSection>
	);
};

export default compose(
	withSelect( ( select ) => ( {
		isComingSoon: Boolean( select( 'bluehost/plugin' ).getSetting( 'comingSoon' ) ),
	} ) ),
	withDispatch( ( dispatch ) => ( {
		toggleSetting: dispatch( 'bluehost/plugin' ).toggleSetting,
	} ) )
)( SiteControls );
