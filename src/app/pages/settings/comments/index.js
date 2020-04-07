/**
 * WordPress dependencies
 */
import { sprintf, __, _n } from '@wordpress/i18n';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

/**
 * Internal Dependencies
 */
import SettingsSection from '../settings-section';
import SettingsGroup from '../settings-group';
import SettingsToggle from '../settings-toggle';
import SettingsSelect from '../settings-select';

const Comments = ( { oldPostComments, closeInterval, perPage, toggleSetting, updateSetting } ) => {
	const commentsLabel = ( <span>{ __( 'Close comments after ', 'bluehost-wordpress-plugin' ) } <strong>{ closeInterval }</strong>{ _n( ' day', ' days', closeInterval, 'bluehost-wordpress-plugin' ) }</span> );
	const commentsPageLabel = ( <span>{ __( 'Display ', 'bluehost-wordpress-plugin' ) } <strong>{ perPage }</strong> { _n( 'comment per page', 'comments per page', perPage, 'bluehost-wordpress-plugin' ) }</span> );
	return (
		<SettingsSection name={ __( 'Comments', 'bluehost-wordpress-plugin' ) }>
			<SettingsGroup>
				<SettingsToggle
					label={ __( 'Disable comments for old posts', 'bluehost-wordpress-plugin' ) }
					checked={ oldPostComments }
					onChange={ () => toggleSetting( 'disableCommentsOldPosts' ) }
				/>
				<SettingsSelect
					label={ commentsLabel }
					value={ closeInterval }
					onChange={ ( value ) => updateSetting( 'closeCommentsDays', value ) }
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
					] }
				/>
				<SettingsSelect
					label={ commentsPageLabel }
					value={ perPage }
					onChange={ ( value ) => updateSetting( 'commentsPerPage', value ) }
					options={ [
						{ label: '10', value: 10 },
						{ label: '15', value: 15 },
						{ label: '30', value: 30 },
						{ label: '20', value: 20 },
						{ label: '50', value: 50 },
					] }
				/>
			</SettingsGroup>
		</SettingsSection>
	);
};

export default compose(
	withSelect( ( select ) => ( {
		oldPostComments: select( 'bluehost/plugin' ).getSetting( 'disableCommentsOldPosts' ),
		closeInterval: select( 'bluehost/plugin' ).getSetting( 'closeCommentsDays' ),
		perPage: select( 'bluehost/plugin' ).getSetting( 'commentsPerPage' ),
	} ) ),
	withDispatch( ( dispatch ) => ( {
		toggleSetting: dispatch( 'bluehost/plugin' ).toggleSetting,
		updateSetting: dispatch( 'bluehost/plugin' ).updateSetting,
	} ) )
)( Comments );
