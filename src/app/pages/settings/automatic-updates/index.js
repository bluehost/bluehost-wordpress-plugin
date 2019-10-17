/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

/**
 * Internal dependencies
 */
import SettingsGroup from '../settings-group';
import SettingsToggle from '../settings-toggle';

const i18n = 'bluehost-wordpress-plugin';

export default class AutomaticUpdates extends Component {
	constructor(props) {
		super(props);
		this.state = {
			coreUpdates: true,
			themeUpdates: true,
			pluginUpdates: true,
		};
		this.toggleCoreUpdates = this.toggleCoreUpdates.bind( this );
		this.toggleThemeUpdates = this.toggleThemeUpdates.bind( this );
		this.togglePluginUpdates = this.togglePluginUpdates.bind( this );
	}
	toggleCoreUpdates() {
		this.setState( ( state ) => {
			return { coreUpdates: !state.coreUpdates };
		})
	};
	toggleThemeUpdates() {
		this.setState( ( state ) => {
			return { themeUpdates: !state.themeUpdates };
		})
	};
	togglePluginUpdates() {
		this.setState( ( state ) => {
			return { pluginUpdates: !state.pluginUpdates };
		})
	};

	render() {
		const { coreUpdates, themeUpdates, pluginUpdates } = this.state;
		return (
			<div className="settings-section automatic-updates pure-u-1 pure-u-lg-3-8">
				<h2>{__('Automatic Updates', i18n)}</h2>
				<SettingsGroup>
					<SettingsToggle label={__('WordPress Core', i18n)} checked={coreUpdates} onChange={this.toggleCoreUpdates} />
					<SettingsToggle label={__('Themes', i18n)} checked={themeUpdates} onChange={this.toggleThemeUpdates} />
					<SettingsToggle label={__('Plugins', i18n)} checked={pluginUpdates} onChange={this.togglePluginUpdates} />
				</SettingsGroup>
			</div>
		);
	}
}
