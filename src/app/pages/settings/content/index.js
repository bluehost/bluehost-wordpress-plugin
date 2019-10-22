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
import SettingsSelect from '../settings-select';

const Content = ({ revisions, trashInterval, setRevisionCount, setTrashInterval }) => {
	const trashLabel = (<span>Empty my trash every <strong>{trashInterval}</strong> week(s)</span>);
	return (
		<div className="settings-section site-controls pure-u-1 pure-u-lg-3-8">
			<h2>Content</h2>
			<SettingsGroup>
				<SettingsSelect
					label='Content revisions'
					value={revisions}
					onChange={value => setRevisionCount(value)}
					options={ [
						{ label: '5', value: '5' },
						{ label: '10', value: '10' },
						{ label: '20', value: '20' },
						{ label: '40', value: '40' },
					] } />
				<SettingsSelect
					label={trashLabel}
					value={trashInterval}
					onChange={value => setTrashInterval(value)}
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

export default compose(
	withSelect( select => ({
		revisions: select('bluehost/plugin').getRevisionCount(),
		trashInterval: select('bluehost/plugin').getTrashInterval(),
	})),
	withDispatch( dispatch => ({
		setRevisionCount: dispatch('bluehost/plugin').setRevisionCount,
		setTrashInterval: dispatch('bluehost/plugin').setTrashInterval,
	}))
)(Content);
