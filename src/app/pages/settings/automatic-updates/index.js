/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import SettingsGroup from '../settings-group';
import SettingsToggle from '../settings-toggle';

const i18n = 'bluehost-wordpress-plugin';

const AutomaticUpdates = ({ autoUpdates, toggleUpdates }) => {
	return (
		<div className="settings-section automatic-updates pure-u-1 pure-u-lg-3-8">
			<h2>{__('Automatic Updates', i18n)}</h2>
			<SettingsGroup>
				<SettingsToggle label={__('WordPress Core', i18n)} checked={autoUpdates.majorCore} onChange={() => toggleUpdates( 'core' )} />
				<SettingsToggle label={__('Themes', i18n)} checked={autoUpdates.themes} onChange={() => toggleUpdates( 'themes' )} />
				<SettingsToggle label={__('Plugins', i18n)} checked={autoUpdates.plugins} onChange={() => toggleUpdates( 'plugins' )} />
			</SettingsGroup>
		</div>
	);
}

export default compose(
	withSelect( select => ({
		autoUpdates: select('bluehost/plugin').getAutoUpdateStatus(),
	})),
	withDispatch( dispatch => ({
		toggleUpdates: dispatch('bluehost/plugin').toggleUpdates,
	}))
)(AutomaticUpdates);
