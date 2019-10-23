/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

/**
 * Internal Dependencies
 */
import SettingsGroup from '../settings-group';
import SettingsSelect from '../settings-select';

export default class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			revisions: 5,
			trashInterval: 1,
			};
		this.changeRevisions = this.changeRevisions.bind( this );
		this.changeTrashInterval = this.changeTrashInterval.bind( this );
	}
	changeRevisions( revisions ) {
		this.setState( { revisions } );
	}
	changeTrashInterval( trashInterval ) {
		this.setState( { trashInterval } );
	}
	render() {
		const { revisions, trashInterval } = this.state;
		const trashLabel = (<span>Empty my trash every <strong>{trashInterval}</strong> week(s)</span>);
		return (
			<div className="settings-section content pure-u-1 pure-u-lg-3-8">
				<h2>Content</h2>
				<SettingsGroup>
					<SettingsSelect
						label='Content revisions'
						value={revisions}
						onChange={this.changeRevisions}
						options={ [
							{ label: '5', value: '5' },
							{ label: '10', value: '10' },
							{ label: '20', value: '20' },
							{ label: '40', value: '40' },
						] } />
					<SettingsSelect
						label={trashLabel}
						value={trashInterval}
						onChange={this.changeTrashInterval}
						options={ [
							{ label: '1', value: '1' },
							{ label: '2', value: '2' },
							{ label: '3', value: '3' },
							{ label: '4', value: '4' },
						] } />
				</SettingsGroup>
			</div>
		);
	}
}
