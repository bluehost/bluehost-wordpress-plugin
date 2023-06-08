import AppStore from '../../data/store';
import { bluehostSettingsApiFetch } from '../../util/helpers';
import { useUpdateEffect } from 'react-use';
import { useState } from '@wordpress/element';
import { Alert, SelectField } from "@yoast/ui-library";
import { SectionSettings } from "../../components/section";
import { useNotification } from '../../components/notifications/feed';

const ContentRevisions = ({ setError, notify }) => {
	const { store, setStore } = useContext(AppStore);
	const [ contentRevisions, setNumContentRevisions ] = useState(
		store.contentRevisions
	);

	const contentRevisionsNoticeTitle = () => {
		return (
			__('Post revision setting saved ', 'wp-plugin-bluehost')
		);
	};

	const contentRevisionsNoticeText = () => {
		return (
			__('Posts will save  ', 'wp-plugin-bluehost') +
			contentRevisions +
			_n(' revision.', ' revisions.', parseInt(contentRevisions), 'wp-plugin-bluehost')
		);
	};

	const contentRevisionsDescriptionText = () => {
		return (
			__('Saving drafts and updating published content creates revisions. Make changes with confidence, knowing you can take ', 'wp-plugin-bluehost') +
			contentRevisions +
			_n(' step back.', ' steps back.', parseInt(contentRevisions), 'wp-plugin-bluehost')
		);
	};

	const handleContentRevisionsChange = (value) => {
		bluehostSettingsApiFetch({ contentRevisions: value }, setError, (response) => {
			setNumContentRevisions(value);
		});
	};

	const notifySuccess = () => {
		notify.push("content-revision-notice", {
			title: contentRevisionsNoticeTitle(),
			description: (
				<span>
					{contentRevisionsNoticeText()}
				</span>
			),
			variant: "success",
			autoDismiss: 5000,
		});
	};

	useUpdateEffect(() => {
		setStore({
			...store,
			contentRevisions,
		});

		notifySuccess();
	}, [contentRevisions]);

	return (
		<SelectField
			id="content-revisions-select"
			label={__('Number of revisions posts can save ', 'wp-plugin-bluehost')}
			description={contentRevisionsDescriptionText()}
			value={contentRevisions}
			selectedLabel={contentRevisions}
			options={[
				{ label: '1', value: '1' },
				{ label: '5', value: '5' },
				{ label: '10', value: '10' },
				{ label: '20', value: '20' },
				{ label: '40', value: '40' },
			]}
			onChange={handleContentRevisionsChange}
			className="yst-select-field__spaced"
		/>
	);
}

const EmptyTrash = ({ setError, notify }) => {
	const { store, setStore } = useContext(AppStore);
	const [ emptyTrashDays, setNumEmptyTrashDays ] = useState(
		store.emptyTrashDays
	);
	let numTrashWeeks = Math.floor( emptyTrashDays / 7 );

	const emptyTrashNoticeTitle = () => {
		return (
			__('Trash setting saved ', 'wp-plugin-bluehost')
		);
	};

	const emptyTrashNoticeText = () => {
		return (
			__('The trash will automatically empty every ', 'wp-plugin-bluehost') +
			numTrashWeeks +
			_n( ' week.', ' weeks.', parseInt(numTrashWeeks), 'wp-plugin-bluehost' )
		);
	};

	const handleEmptyTrashDaysChange = (value) => {
		bluehostSettingsApiFetch({ emptyTrashDays: value }, setError, (response) => {
			setNumEmptyTrashDays(value);
		});
	};

	const notifySuccess = () => {
		notify.push("empty-trash-notice", {
			title: emptyTrashNoticeTitle(),
			description: (
				<span>
					{emptyTrashNoticeText()}
				</span>
			),
			variant: "success",
			autoDismiss: 5000,
		});
	};

	useUpdateEffect(() => {
		setStore({
			...store,
			emptyTrashDays,
		});
		numTrashWeeks = Math.floor( emptyTrashDays / 7 );

		notifySuccess();
	}, [emptyTrashDays]);

	return (
		<SelectField
			id="empty-trash-select"
			label={__('Trash emptying frequency ', 'wp-plugin-bluehost')}
			description={
			__('The trash will automatically empty every ', 'wp-plugin-bluehost') +
			numTrashWeeks +
			 _n( ' week.', ' weeks.', parseInt(numTrashWeeks), 'wp-plugin-bluehost' )
			}
			value={emptyTrashDays}
			selectedLabel={numTrashWeeks}
			options={[
				{ label: '1', value: '7' },
				{ label: '2', value: '14' },
				{ label: '3', value: '21' },
				{ label: '4', value: '30' },
			]}
			onChange={handleEmptyTrashDaysChange}
			className="yst-select-field__spaced"
		/>
	);
}

const ContentSettings = () => {
	const [isError, setError] = useState(false);

	let notify = useNotification();
	return (
		<SectionSettings
			title={__('Content Options', 'wp-plugin-bluehost')}
			description={__('Controls for content revisions and how often to empty the trash.', 'wp-plugin-bluehost')}
		>
			<div className="yst-flex yst-flex-col yst-gap-4">
				<ContentRevisions setError={setError} notify={notify} />
				<EmptyTrash setError={setError} notify={notify} />
				
				{isError &&
					<Alert variant="error">
						{__('Oops! Something went wrong. Please try again.', 'wp-plugin-bluehost')}
					</Alert>
				}
			</div>
		</SectionSettings >
	);
}

export default ContentSettings;
