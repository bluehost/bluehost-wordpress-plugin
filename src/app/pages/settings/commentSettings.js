/* global sprintf */
import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';
import {
	Alert,
	Container,
	SelectField,
	ToggleField,
} from '@newfold/ui-component-library';
import AppStore from '../../data/store';
import { bluehostSettingsApiFetch } from '../../util/helpers';
import { useNotification } from 'App/components/notifications';
const OldPostsComments = ( { setError, notify } ) => {
	const { store, setStore } = useContext( AppStore );
	const [ disableCommentsOldPosts, setDisableCommentsOldPosts ] = useState(
		store.disableCommentsOldPosts
	);

	const disableCommentsNoticeTitle = () => {
		return disableCommentsOldPosts
			? __( 'Disabled old post comments', 'wp-plugin-bluehost' )
			: __( 'Enabled old post comments', 'wp-plugin-bluehost' );
	};

	const disableCommentsNoticeText = () => {
		return disableCommentsOldPosts
			? __( 'Comments on old posts are disabled.', 'wp-plugin-bluehost' )
			: __( 'Comments are allowed on old posts.', 'wp-plugin-bluehost' );
	};

	const toggleDisableCommentsOldPosts = () => {
		bluehostSettingsApiFetch(
			{ disableCommentsOldPosts: ! disableCommentsOldPosts },
			setError,
			// eslint-disable-next-line no-unused-vars
			( response ) => {
				setDisableCommentsOldPosts( ! disableCommentsOldPosts );
			}
		);
	};

	const notifySuccess = () => {
		notify.push( 'disable-old-posts-comments-notice', {
			title: disableCommentsNoticeTitle(),
			description: <span>{ disableCommentsNoticeText() }</span>,
			variant: 'success',
			autoDismiss: 5000,
		} );
	};

	useUpdateEffect( () => {
		setStore( {
			...store,
			disableCommentsOldPosts,
		} );

		notifySuccess();
	}, [ disableCommentsOldPosts ] );

	return (
		<ToggleField
			id="disable-comments-toggle"
			label={ __(
				'Disable comments for older posts',
				'wp-plugin-bluehost'
			) }
			checked={ disableCommentsOldPosts }
			onChange={ toggleDisableCommentsOldPosts }
			className="nfd-mb-2"
		/>
	);
};

const CloseCommentsDays = ( { setError, notify } ) => {
	const { store, setStore } = useContext( AppStore );
	const [ closeCommentsDays, setNumCloseCommentsDays ] = useState(
		store.closeCommentsDays
	);

	const closeCommentsDaysNoticeTitle = () => {
		return __( 'Comments setting saved', 'wp-plugin-bluehost' );
	};

	const closeCommentsDaysNoticeText = () => {
		return sprintf(
			//translators: %s: number of days. `Comments on posts are disabled after ${closeCommentsDays} days.`
			_n(
				'Comments on posts are disabled after %s day.',
				'Comments on posts are disabled after %s days.',
				parseInt( closeCommentsDays ),
				'wp-plugin-bluehost'
			),
			closeCommentsDays
		);
	};

	const closeCommentsDaysLabelText = () => {
		return sprintf(
			//translators: %s: number of days. `Close comments after ${closeCommentsDays} days.`
			_n(
				'Close comments after %s day.',
				'Close comments after %s days.',
				parseInt( closeCommentsDays ),
				'wp-plugin-bluehost'
			),
			closeCommentsDays
		);
	};

	const handleCloseCommentsDaysChange = ( value ) => {
		bluehostSettingsApiFetch(
			{ closeCommentsDays: value },
			setError,
			// eslint-disable-next-line no-unused-vars
			( response ) => {
				setNumCloseCommentsDays( value );
			}
		);
	};

	const notifySuccess = () => {
		notify.push( 'close-comments-days-notice', {
			title: closeCommentsDaysNoticeTitle(),
			description: <span>{ closeCommentsDaysNoticeText() }</span>,
			variant: 'success',
			autoDismiss: 5000,
		} );
	};

	useUpdateEffect( () => {
		setStore( {
			...store,
			closeCommentsDays,
		} );

		notifySuccess();
	}, [ closeCommentsDays ] );

	return (
		<SelectField
			id="close-comments-days-select"
			label={ closeCommentsDaysLabelText }
			value={ closeCommentsDays }
			disabled={ store.disableCommentsOldPosts ? false : true }
			selectedLabel={ closeCommentsDays }
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
			onChange={ handleCloseCommentsDaysChange }
			className="nfd-select-field__spaced"
		/>
	);
};

const CommentsPerPage = ( { setError, notify } ) => {
	const { store, setStore } = useContext( AppStore );
	const [ commentsPerPage, setNumCommentsPerPage ] = useState(
		store.commentsPerPage
	);

	const commentsPerPageNoticeTitle = () => {
		return __( 'Comments setting saved.', 'wp-plugin-bluehost' );
	};

	const commentsPerPageNoticeText = () => {
		return sprintf(
			//translators: %s: number of comments. `Posts will display ${commentsPerPage} comments at a time.`
			_n(
				'Posts will display %s comment at a time.',
				'Posts will display %s comments at a time.',
				parseInt( commentsPerPage ),
				'wp-plugin-bluehost'
			),
			commentsPerPage
		);
	};

	const handleCommentsPerPageChange = ( value ) => {
		bluehostSettingsApiFetch(
			{ commentsPerPage: value },
			setError,
			// eslint-disable-next-line no-unused-vars
			( response ) => {
				setNumCommentsPerPage( value );
			}
		);
	};

	const notifySuccess = () => {
		notify.push( 'comments-per-page-notice', {
			title: commentsPerPageNoticeTitle(),
			description: <span>{ commentsPerPageNoticeText() }</span>,
			variant: 'success',
			autoDismiss: 5000,
		} );
	};

	useUpdateEffect( () => {
		setStore( {
			...store,
			commentsPerPage,
		} );

		notifySuccess();
	}, [ commentsPerPage ] );

	return (
		<SelectField
			id="comments-per-page-select"
			label={ __( 'Comments to display per page', 'wp-plugin-bluehost' ) }
			value={ commentsPerPage }
			selectedLabel={ commentsPerPage }
			options={ [
				{ label: '10', value: '10' },
				{ label: '15', value: '15' },
				{ label: '20', value: '20' },
				{ label: '30', value: '30' },
				{ label: '50', value: '50' },
			] }
			onChange={ handleCommentsPerPageChange }
			className="nfd-select-field__spaced"
		/>
	);
};

const CommentSettings = () => {
	const [ isError, setError ] = useState( false );

	const notify = useNotification();
	return (
		<Container.SettingsField
			title={ __( 'Comments', 'wp-plugin-bluehost' ) }
			description={ __(
				'Comments allow visitors to provide feedback and respond to your posts or pages.',
				'wp-plugin-bluehost'
			) }
		>
			<div className="nfd-flex nfd-flex-col nfd-gap-4">
				<OldPostsComments setError={ setError } notify={ notify } />
				<CloseCommentsDays setError={ setError } notify={ notify } />
				<CommentsPerPage setError={ setError } notify={ notify } />
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

export default CommentSettings;
