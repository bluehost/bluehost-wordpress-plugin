/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';

/**
 * Internal Dependencies
 */
import SettingsGroup from '../settings-group';
import SettingsToggle from '../settings-toggle';
import SettingsSelect from '../settings-select';

export default class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			closeCommentsOnOldPosts: true,
			commentsCloseInterval: 28,
			commentsPerPage: 20,
		};
		this.toggleCloseComments = this.toggleCloseComments.bind( this );
		this.changeCloseInterval = this.changeCloseInterval.bind( this );
		this.changePerPage = this.changePerPage.bind( this );
	}
	toggleCloseComments() {
		const { closeCommentsOnOldPosts } = this.state;
		this.setState({ closeCommentsOnOldPosts: ! closeCommentsOnOldPosts });
	}
	changeCloseInterval( commentsCloseInterval ) {
		this.setState({ commentsCloseInterval });
	}
	changePerPage( commentsPerPage ) {
		this.setState({ commentsPerPage });
	}
	render() {
		const { closeCommentsOnOldPosts, commentsCloseInterval, commentsPerPage } = this.state;
		const commentsLabel = (<span>Close comments after <strong>{commentsCloseInterval}</strong> days</span>);
		const commentsPageLabel = (<span>Display <strong>{commentsPerPage}</strong> comments per page</span>);
		return (
			<div className="settings-section comments pure-u-1 pure-u-lg-3-8">
				<h2>Comments</h2>
				<SettingsGroup>
					<SettingsToggle label="Disable comments for old posts" checked={closeCommentsOnOldPosts} onChange={this.toggleCloseComments}/>
					<SettingsSelect
						label={commentsLabel}
						value={commentsCloseInterval}
						onChange={this.changeCloseInterval}
						options={ [
							{ label: '1', value: '1' },
							{ label: '3', value: '3' },
							{ label: '5', value: '5' },
							{ label: '7', value: '7' },
							{ label: '10', value: '10' },
							{ label: '14', value: '14' },
							{ label: '20', value: '20' },
							{ label: '28', value: '28' },
							{ label: '30', value: '30' },
							{ label: '50', value: '50' },
							{ label: '100', value: '100' },
						] } />
					<SettingsSelect
						label={commentsPageLabel}
						value={commentsPerPage}
						onChange={this.changePerPage}
						options={ [
							{ label: '10', value: '10' },
							{ label: '15', value: '15' },
							{ label: '20', value: '20' },
							{ label: '30', value: '30' },
							{ label: '50', value: '50' },
						] } />
				</SettingsGroup>
			</div>
		);
	}
}
