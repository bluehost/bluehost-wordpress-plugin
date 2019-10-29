/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

/**
 * Internal Dependencies
 */
import SettingsGroup from '../settings-group';
import SettingsToggle from '../settings-toggle';

const SiteControls = ({ isComingSoon, isSSOActive, toggleSetting }) => {
	return (
		<div className="settings-section site-controls pure-u-1 pure-u-lg-3-8">
			<h2>{__( 'Site Controls', 'bluehost-wordpress-plugin' )}</h2>
			<SettingsGroup>
				<SettingsToggle
					label={__( 'Coming soon page active', 'bluehost-wordpress-plugin' )}
					checked={isComingSoon}
					onChange={() => toggleSetting( 'comingSoon' )}
					/>
				<SettingsToggle
					label={__( 'Single Sign-on with Bluehost', 'bluehost-wordpress-plugin' )}
					checked={isSSOActive}
					onChange={() => toggleSetting( 'sso' )}
					/>
			</SettingsGroup>
		</div>
	);
}

export default compose(
	withSelect( select => ({
		isSSOActive: Boolean( select( 'bluehost/plugin' ).getSetting( 'sso' ) ),
		isComingSoon: Boolean( select( 'bluehost/plugin' ).getSetting( 'comingSoon' ) )
	})),
	withDispatch( dispatch => ({
		toggleSetting: dispatch( 'bluehost/plugin' ).toggleSetting,
	}))
)(SiteControls);
