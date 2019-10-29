/**
 * WordPress dependencies
 */
import { sprintf, __, _n } from '@wordpress/i18n';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

/**
 * Internal Dependencies
 */
import SettingsGroup from '../settings-group';
import SettingsSelect from '../settings-select';

const Content = ({ revisions, trashInterval, updateSetting }) => {
	const trashWeeks = Math.floor( trashInterval / 7 );
	const trashLabel = ( <span>{sprintf( _n( 'Empty my trash every %d week', 'Empty my trash every %d weeks', trashWeeks,'bluehost-wordpress-plugin' ), trashWeeks )}</span> );
	return (
		<div className="settings-section site-controls pure-u-1 pure-u-lg-3-8">
			<h2>{__('Content', 'bluehost-wordpress-plugin')}</h2>
			<SettingsGroup>
				<SettingsSelect
					label={__( 'Content revisions', 'bluehost-wordpress-plugin' )}
					value={revisions}
					onChange={value => updateSetting( 'contentRevisions', value )}
					options={ [
						{ label: '5', value: '5' },
						{ label: '10', value: '10' },
						{ label: '20', value: '20' },
						{ label: '40', value: '40' },
					] } />
				<SettingsSelect
					label={trashLabel}
					value={trashInterval}
					onChange={value => updateSetting( 'emptyTrashDays', value )}
					options={ [
						{ label: '1', value: '7' },
						{ label: '2', value: '14' },
						{ label: '3', value: '21' },
						{ label: '4', value: '30' },
					] } />
			</SettingsGroup>
		</div>
	);
}

export default compose(
	withSelect( select => ({
		revisions: select( 'bluehost/plugin' ).getSetting( 'contentRevisions' ),
		trashInterval: select( 'bluehost/plugin' ).getSetting( 'emptyTrashDays' ),
	})),
	withDispatch( dispatch => ({
		updateSetting: dispatch( 'bluehost/plugin' ).updateSetting,
	}))
)(Content);
