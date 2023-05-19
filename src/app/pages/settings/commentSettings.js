import { useState } from '@wordpress/element';
import { SelectField, ToggleField } from "@yoast/ui-library";
import { SectionSettings } from "../../components/section";

const CommentSettings = () => {
	const [disableCommentsOldPosts, setDisableCommentsOldPosts] = useState(false);
	const [closeCommentsDays, setCloseCommentsDays] = useState(28);
	const [commentsPerPage, setCommentsPerPage] = useState(20);
	return (
		<SectionSettings
			title="Comments"
			description="Comments allow visitors to provide feedback and respond to your posts or pages."
		>
			<div className="yst-flex yst-flex-col yst-gap-4">
				<ToggleField
					id="disable-comments-toggle"
					label={__(
						'Disable comments for older posts',
						'wp-plugin-blueprint'
					)}
					checked={disableCommentsOldPosts}
					onChange={ () => {
						setDisableCommentsOldPosts( ( value ) => ! value );
					} }
					className="yst-mb-2"
				/>

				<SelectField 
					id="close-comments-days-select"
					value={ closeCommentsDays }
					label={ __( 'Close comments after ', 'wp-plugin-blueprint' ) }
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
						setCloseCommentsDays( value )
					}
					className="yst-select-field__spaced"
				/>

				<SelectField 
					id="comments-per-page-select"
					value={ commentsPerPage }
					label={ __( 'Display ', 'wp-plugin-blueprint' ) + _n(
						' comment per page.',
						' comments per page.',
						commentsPerPage,
						'wp-plugin-blueprint'
					) }
					options={ [
						{ label: '10', value: '10' },
						{ label: '15', value: '15' },
						{ label: '20', value: '20' },
						{ label: '30', value: '30' },
						{ label: '50', value: '50' },
					] }
					onChange={ ( value ) =>
						setCommentsPerPage( value )
					}
					className="yst-select-field__spaced"
				/>
			</div>
		</SectionSettings >
	);
};

export default CommentSettings;
