/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { select } from '@wordpress/data';

/**
 * Internal Dependencies
 */
import SettingsGroup from '../settings-group';
import SettingsToggle from '../settings-toggle';

export default class SiteControls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comingSoon: select('bluehost/plugin').isComingSoon(),
		};
		this.toggleComingSoon = this.toggleComingSoon.bind( this );
	}
	toggleComingSoon() {
		window.bluehost.settings.comingSoon = ! this.state.comingSoon;
		this.setState( ( state ) => {
			return { comingSoon: !state.comingSoon };
		})
	}
	render() {
		return (
			<div className="settings-section site-controls pure-u-1 pure-u-lg-3-8">
				<h2>Site Controls</h2>
				<SettingsGroup>
					<SettingsToggle label="Coming soon page active" checked={this.state.comingSoon} onChange={this.toggleComingSoon}/>
					<SettingsToggle label="Single Sign-on with Bluehost"/>
				</SettingsGroup>
			</div>
		);
	}
}
