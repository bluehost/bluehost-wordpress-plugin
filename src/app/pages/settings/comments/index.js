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
import SettingsSelect from '../settings-select';

const Comments = ( { oldPostComments, closeInterval, perPage, toggleOldPostComments, setCommentCloseInterval, setCommentsPerPage } ) => {
	const commentsLabel = (<span>Close comments after <strong>{closeInterval}</strong> days</span>);
	const commentsPageLabel = (<span>Display <strong>{perPage}</strong> comments per page</span>);
	return (
		<div className="settings-section site-controls pure-u-1 pure-u-lg-3-8">
			<h2>Comments</h2>
			<SettingsGroup>
				<SettingsToggle label="Disable comments for old posts" checked={oldPostComments} onChange={toggleOldPostComments}/>
				<SettingsSelect
					label={commentsLabel}
					value={closeInterval}
					onChange={(value) => setCommentCloseInterval(value)}
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
					value={perPage}
					onChange={(value) => setCommentsPerPage(value)}
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

export default compose(
	withSelect( select => ({
		oldPostComments: select('bluehost/plugin').getOldPostCommentStatus(),
		closeInterval: select('bluehost/plugin').getCommentCloseInterval(),
		perPage: select('bluehost/plugin').getCommentsPerPage(),
	})),
	withDispatch( dispatch => ({
		toggleOldPostComments: dispatch('bluehost/plugin').toggleOldPostComments,
		setCommentCloseInterval: dispatch('bluehost/plugin').setCommentCloseInterval,
		setCommentsPerPage: dispatch('bluehost/plugin').setCommentsPerPage
	}))
)(Comments);
