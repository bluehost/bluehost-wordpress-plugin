import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';
import { Alert, Container, SelectField } from '@newfold/ui-component-library';
import AppStore from 'App/data/store';
import { bluehostSettingsApiFetch } from 'App/util/helpers';
import { useNotification } from 'App/components/notifications';

const EmptyTrash = ( { setError, notify } ) => {
	const { store, setStore } = useContext( AppStore );
	const [ emptyTrashDays, setNumEmptyTrashDays ] = useState(
		store.emptyTrashDays
	);
	let numTrashWeeks = Math.floor( emptyTrashDays / 7 );

	const emptyTrashNoticeTitle = () => {
		return __( 'Trash setting saved ', 'wp-plugin-bluehost' );
	};

	const emptyTrashNoticeText = () => {
		return (
			__(
				'The trash will automatically empty every ',
				'wp-plugin-bluehost'
			) +
			numTrashWeeks +
			_n(
				' week.',
				' weeks.',
				parseInt( numTrashWeeks ),
				'wp-plugin-bluehost'
			)
		);
	};

	const handleEmptyTrashDaysChange = ( value ) => {
		bluehostSettingsApiFetch(
			{ emptyTrashDays: value },
			setError,
			// eslint-disable-next-line no-unused-vars
			( response ) => {
				setNumEmptyTrashDays( value );
			}
		);
	};

	const notifySuccess = () => {
		notify.push( 'empty-trash-notice', {
			title: emptyTrashNoticeTitle(),
			description: <span>{ emptyTrashNoticeText() }</span>,
			variant: 'success',
			autoDismiss: 5000,
		} );
	};

	useUpdateEffect( () => {
		setStore( {
			...store,
			emptyTrashDays,
		} );
		numTrashWeeks = Math.floor( emptyTrashDays / 7 );

		notifySuccess();
	}, [ emptyTrashDays ] );

	return (
		<SelectField
			id="empty-trash-select"
			label={ __(
				'Number of weeks in between emptying trash ',
				'wp-plugin-bluehost'
			) }
			description={
				__(
					'The trash will automatically empty every ',
					'wp-plugin-bluehost'
				) +
				numTrashWeeks +
				_n(
					' week.',
					' weeks.',
					parseInt( numTrashWeeks ),
					'wp-plugin-bluehost'
				)
			}
			value={ emptyTrashDays }
			selectedLabel={ numTrashWeeks }
			options={ [
				{ label: '1', value: '7' },
				{ label: '2', value: '14' },
				{ label: '3', value: '21' },
				{ label: '4', value: '30' },
			] }
			onChange={ handleEmptyTrashDaysChange }
			className="nfd-select-field__spaced"
		/>
	);
};

const ContentSettings = () => {
	const [ isError, setError ] = useState( false );

	const notify = useNotification();
	return (
		<Container.SettingsField
			title={ __( 'Content Options', 'wp-plugin-bluehost' ) }
			description={ __(
				'Controls for content revisions and how often to empty the trash.',
				'wp-plugin-bluehost'
			) }
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-4">
				<EmptyTrash setError={ setError } notify={ notify } />

				{ isError && (
					<Alert variant="error">
						{ __(
							'Oops! Something went wrong. Please try again.',
							'wp-plugin-bluehost'
						) }
					</Alert>
				) }
			</div>
		</Container.SettingsField>
	);
};

export default ContentSettings;
