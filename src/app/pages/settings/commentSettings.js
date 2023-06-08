import AppStore from '../../data/store';
import { bluehostSettingsApiFetch } from '../../util/helpers';
import { useUpdateEffect } from 'react-use';
import { useState } from '@wordpress/element';
import { Alert, SelectField, ToggleField } from "@yoast/ui-library";
import { SectionSettings } from "../../components/section";
import { useNotification } from '../../components/notifications/feed';

const OldPostsComments = ({ setError, notify }) => {
	const { store, setStore } = useContext(AppStore);
	const [disableCommentsOldPosts, setDisableCommentsOldPosts] = useState(
		store.disableCommentsOldPosts
	);

	const disableCommentsNoticeTitle = () => {
		return disableCommentsOldPosts
			? __('Disabled old post comments', 'wp-plugin-bluehost')
			: __('Enabled old post comments', 'wp-plugin-bluehost');
	};

	const disableCommentsNoticeText = () => {
		return disableCommentsOldPosts
			? __('Comments on old posts are disabled.', 'wp-plugin-bluehost')
			: __('Comments are allowed on old posts.', 'wp-plugin-bluehost');
	};

	const toggleDisableCommentsOldPosts = () => {
		bluehostSettingsApiFetch({ disableCommentsOldPosts: !disableCommentsOldPosts }, setError, (response) => {
			setDisableCommentsOldPosts(!disableCommentsOldPosts);
		});
	};

	const notifySuccess = () => {
		notify.push("disable-old-posts-comments-notice", {
			title: disableCommentsNoticeTitle(),
			description: (
				<span>
					{disableCommentsNoticeText()}
				</span>
			),
			variant: "success",
			autoDismiss: 5000,
		});
	};

	useUpdateEffect(() => {
		setStore({
			...store,
			disableCommentsOldPosts,
		});

		notifySuccess();
	}, [disableCommentsOldPosts]);

	return (
		<ToggleField
			id="disable-comments-toggle"
			label={__(
				'Disable comments for older posts',
				'wp-plugin-bluehost'
			)}
			checked={disableCommentsOldPosts}
			onChange={toggleDisableCommentsOldPosts}
			className="yst-mb-2"
		/>
	);
}

const CloseCommentsDays = ({ setError, notify }) => {
	const { store, setStore } = useContext(AppStore);
	const [closeCommentsDays, setNumCloseCommentsDays] = useState(
		store.closeCommentsDays
	);

	const closeCommentsDaysNoticeTitle = () => {
		return (
			__('Comments setting saved ', 'wp-plugin-bluehost')
		);
	};

	const closeCommentsDaysNoticeText = () => {
		//`Comments on posts are disabled after ${closeCommentsDays} days.`
		return (
			__('Comments on posts are disabled after ', 'wp-plugin-bluehost') +
			closeCommentsDays +
			_n(' day.', ' days.', parseInt(closeCommentsDays), 'wp-plugin-bluehost')
		);
	};

	const closeCommentsDaysLabelText = () => {
		//`Close comments after ${closeCommentsDays} days.`
		return (
			__('Close comments after ', 'wp-plugin-bluehost') +
			closeCommentsDays +
			_n(' day.', ' days.', parseInt(closeCommentsDays), 'wp-plugin-bluehost')
		);
	};

	const handleCloseCommentsDaysChange = (value) => {
		bluehostSettingsApiFetch({ closeCommentsDays: value }, setError, (response) => {
			setNumCloseCommentsDays(value);
		});
	};

	const notifySuccess = () => {
		notify.push("close-comments-days-notice", {
			title: closeCommentsDaysNoticeTitle(),
			description: (
				<span>
					{closeCommentsDaysNoticeText()}
				</span>
			),
			variant: "success",
			autoDismiss: 5000,
		});
	};

	useUpdateEffect(() => {
		setStore({
			...store,
			closeCommentsDays,
		});

		notifySuccess();
	}, [closeCommentsDays]);

	return (
		<SelectField
			id="close-comments-days-select"
			label={closeCommentsDaysLabelText}
			value={closeCommentsDays}
			disabled={store.disableCommentsOldPosts?false:true}
			selectedLabel={closeCommentsDays}
			options={[
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
			]}
			onChange={handleCloseCommentsDaysChange}
			className="yst-select-field__spaced"
		/>
	);
}

const CommentsPerPage = ({ setError, notify }) => {
	const { store, setStore } = useContext(AppStore);
	const [commentsPerPage, setNumCommentsPerPage] = useState(
		store.commentsPerPage
	);

	const commentsPerPageNoticeTitle = () => {
		return __('Comments setting saved.', 'wp-plugin-bluehost');
	};

	const commentsPerPageNoticeText = () => {
		//`Posts will display ${commentsPerPage} comments at a time.`
		return (
			__('Posts will display ', 'wp-plugin-bluehost') +
			commentsPerPage +
			_n(
				' comment at a time.',
				' comments at a time.',
				parseInt(commentsPerPage),
				'wp-plugin-bluehost'
			)
		);
	};

	const handleCommentsPerPageChange = (value) => {
		bluehostSettingsApiFetch({ commentsPerPage: value }, setError, (response) => {
			setNumCommentsPerPage(value);
		});
	};

	const notifySuccess = () => {
		notify.push("comments-per-page-notice", {
			title: commentsPerPageNoticeTitle(),
			description: (
				<span>
					{commentsPerPageNoticeText()}
				</span>
			),
			variant: "success",
			autoDismiss: 5000,
		});
	};

	useUpdateEffect(() => {
		setStore({
			...store,
			commentsPerPage,
		});

		notifySuccess();
	}, [commentsPerPage]);

	return (
		<SelectField
			id="comments-per-page-select"
			label={__('Display ', 'wp-plugin-bluehost') + commentsPerPage +
				__(' comments per page.', 'wp-plugin-bluehost')}
			value={commentsPerPage}
			selectedLabel={commentsPerPage}
			options={[
				{ label: '10', value: '10' },
				{ label: '15', value: '15' },
				{ label: '20', value: '20' },
				{ label: '30', value: '30' },
				{ label: '50', value: '50' },
			]}
			onChange={handleCommentsPerPageChange}
			className="yst-select-field__spaced"
		/>
	);
}

const CommentSettings = () => {
	const [isError, setError] = useState(false);

	let notify = useNotification();
	return (
		<SectionSettings
			title={__('Comments', 'wp-plugin-bluehost')}
			description={__('Comments allow visitors to provide feedback and respond to your posts or pages.', 'wp-plugin-bluehost')}
		>
			<div className="yst-flex yst-flex-col yst-gap-4">
				<OldPostsComments setError={setError} notify={notify} />
				<CloseCommentsDays setError={setError} notify={notify} />
				<CommentsPerPage setError={setError} notify={notify} />
				{isError &&
					<Alert variant="error">
						{__('Oops! Something went wrong. Please try again.', 'wp-plugin-bluehost')}
					</Alert>
				}
			</div>
		</SectionSettings >
	);
};

export default CommentSettings;
