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

const SiteControls = ( { isComingSoon, isSSOActive, toggleComingSoon, toggleSSO } ) => {
	return (
		<div className="settings-section site-controls pure-u-1 pure-u-lg-3-8">
			<h2>Site Controls</h2>
			<SettingsGroup>
				<SettingsToggle label="Coming soon page active" checked={isComingSoon} onChange={toggleComingSoon}/>
				<SettingsToggle label="Single Sign-on with Bluehost" checked={isSSOActive} onChange={toggleSSO}/>
			</SettingsGroup>
		</div>
	);
}

export default compose(
	withSelect( select => ({
		isComingSoon: select('bluehost/plugin').isComingSoon(),
		isSSOActive: select('bluehost/plugin').isSSOActive()
	})),
	withDispatch( dispatch => ({
		toggleComingSoon: dispatch('bluehost/plugin').toggleComingSoon,
		toggleSSO: dispatch('bluehost/plugin').toggleSSO,
	}))
)(SiteControls);
