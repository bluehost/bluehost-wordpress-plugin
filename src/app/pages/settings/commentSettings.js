import AppStore from '../../data/store';
import { Heading, ErrorCard } from '../../components';
import {
	blueprintSettingsApiFetch,
	dispatchUpdateSnackbar,
} from '../../util/helpers';
import { _n } from '@wordpress/i18n';
import {
	Card,
	CardBody,
	CardHeader,
	CardDivider,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';

const CommentSettings = () => {
	const { store, setStore } = useContext( AppStore );
	const [ disableCommentsOldPosts, setDisableCommentsOldPosts ] = useState(
		store.disableCommentsOldPosts
	);
	const [ closeCommentsDays, setNumCloseCommentsDays ] = useState(
		store.closeCommentsDays
	);
	const [ commentsPerPage, setNumCommentsPerPage ] = useState(
		store.commentsPerPage
	);
	const [ isError, setError ] = useState( false );

	const disableCommentsHelpText = () => {
		return disableCommentsOldPosts
			? __( 'Comments on old posts are disabled.', 'wp-plugin-blueprint' )
			: __( 'Comments are allowed on old posts.', 'wp-plugin-blueprint' );
	};
	const disableCommentsNoticeText = () => {
		return disableCommentsOldPosts
			? __( 'Old post comments disabled.', 'wp-plugin-blueprint' )
			: __( 'Old post comments enabled.', 'wp-plugin-blueprint' );
	};
	const closeCommentsLabelText = () => {
		// `Close comments after ${closeCommentsDays} day(s)`
		return (
			<span>
				{ __( 'Close comments after ', 'wp-plugin-blueprint' ) }
				<strong>{ closeCommentsDays }</strong>
				{ _n( ' day.', ' days.', closeCommentsDays, 'wp-plugin-blueprint' ) }
			</span>
		);
	};
	const closeCommentsHelpText = () => {
		//`Comments on posts are disabled after ${closeCommentsDays} days.`
		return (
			<span>
				{ __(
					'Comments on posts are disabled after ',
					'wp-plugin-blueprint'
				) }
				<strong>{ closeCommentsDays }</strong>
				{ _n( ' day.', ' days.', closeCommentsDays, 'wp-plugin-blueprint' ) }
			</span>
		);
	};
	const closeCommentsNoticeText = () => {
		return (
			__( 'Disabled comments on posts older than ', 'wp-plugin-blueprint' ) +
			closeCommentsDays +
			_n( ' day.', ' days.', closeCommentsDays, 'wp-plugin-blueprint' )
		);
	};
	const commentsPerPageLabelText = () => {
		// `Display ${commentsPerPage} comment(s) per page`
		return (
			<span>
				{ __( 'Display ', 'wp-plugin-blueprint' ) }
				<strong>{ commentsPerPage }</strong>
				{ _n(
					' comment per page.',
					' comments per page.',
					commentsPerPage,
					'wp-plugin-blueprint'
				) }
			</span>
		);
	};
	const commentsPerPageHelpText = () => {
		//`Posts will display ${commentsPerPage} comments at a time.`
		return (
			<span>
				{ __( 'Posts will display ', 'wp-plugin-blueprint' ) }
				<strong>{ commentsPerPage }</strong>
				{ _n(
					' comment at a time.',
					' comments at a time.',
					commentsPerPage,
					'wp-plugin-blueprint'
				) }
			</span>
		);
	};
	const commentsPerPageNoticeText = () => {
		return __( 'Comments per page setting saved.', 'wp-plugin-blueprint' );
	};
	useUpdateEffect( () => {
		blueprintSettingsApiFetch(
			{
				disableCommentsOldPosts: disableCommentsOldPosts
					? 'true'
					: 'false',
			},
			setError,
			( response ) => {
				setStore( {
					...store,
					disableCommentsOldPosts,
				} );
				dispatchUpdateSnackbar( disableCommentsNoticeText() );
			}
		);
	}, [ disableCommentsOldPosts ] );

	useUpdateEffect( () => {
		blueprintSettingsApiFetch( { closeCommentsDays }, setError, ( response ) => {
			setStore( {
				...store,
				closeCommentsDays,
			} );
			dispatchUpdateSnackbar( closeCommentsNoticeText() );
		} );
	}, [ closeCommentsDays ] );

	useUpdateEffect( () => {
		blueprintSettingsApiFetch( { commentsPerPage }, setError, ( response ) => {
			setStore( {
				...store,
				commentsPerPage,
			} );
			dispatchUpdateSnackbar( commentsPerPageNoticeText() );
		} );
	}, [ commentsPerPage ] );

	if ( isError ) {
		return <ErrorCard error={ isError } />;
	}
	return (
		<Card className="card-comment-settings">
			<CardHeader>
				<Heading level="3">
					{ __( 'Comments', 'wp-plugin-blueprint' ) }
				</Heading>
			</CardHeader>
			<CardBody>
				{ __(
					'Make blog post comments disabled on older posts and control how many to display.',
					'wp-plugin-blueprint'
				) }
			</CardBody>
			<CardBody className="disable-comments-setting">
				<ToggleControl
					checked={ disableCommentsOldPosts }
					className="disable-comments-toggle"
					label={ __(
						'Disable comments for older posts',
						'wp-plugin-blueprint'
					) }
					help={ disableCommentsHelpText() }
					onChange={ () => {
						setDisableCommentsOldPosts( ( value ) => ! value );
					} }
				/>
			</CardBody>
			{ disableCommentsOldPosts && (
				<Fragment>
					<CardDivider />
					<CardBody
						className={ `close-comments-days-setting ${
							disableCommentsOldPosts ? '' : 'disabled'
						}` }
					>
						<SelectControl
							className="close-comments-days-select"
							label={ closeCommentsLabelText() }
							value={ closeCommentsDays }
							help={ closeCommentsHelpText() }
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
							onChange={ ( value ) =>
								setNumCloseCommentsDays( value )
							}
						/>
					</CardBody>
				</Fragment>
			) }
			<CardDivider />
			<CardBody className="comments-per-page-setting">
				<SelectControl
					label={ commentsPerPageLabelText() }
					className="comments-per-page-select"
					value={ commentsPerPage }
					help={ commentsPerPageHelpText() }
					options={ [
						{ label: '10', value: '10' },
						{ label: '15', value: '15' },
						{ label: '20', value: '20' },
						{ label: '30', value: '30' },
						{ label: '50', value: '50' },
					] }
					onChange={ ( value ) => setNumCommentsPerPage( value ) }
				/>
			</CardBody>
		</Card>
	);
};

export default CommentSettings;
