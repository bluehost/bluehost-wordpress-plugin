
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

/**
 * Project Dependencies
 */
import {
	AppButton,
	AppHeading
} from '@/components/atoms';

import {
	AppNotice as Notice,
} from '@/components/molecules';

import './style.scss';

let siteLaunchedByUser = false;

const ComingSoonNotice = ( { isComingSoon, toggleSetting } ) => {
	const userLaunchedSite = () => {
		siteLaunchedByUser = true;
		toggleSetting( 'comingSoon' );
	};
	if ( ! isComingSoon && ! siteLaunchedByUser ) {
		return null;
	}
	const comingSoonLabels = {
		title: __( 'Your site says “Coming Soon.”', 'bluehost-wordpress-plugin' ),
		desc: __( 'Right now, your site is displaying a “coming soon” message. This gives you time to work on your site before you unveil it to the public.', 'bluehost-wordpress-plugin' ),
		button: __( 'Launch Your Site', 'bluehost-wordpress-plugin' ),
	};
	const publishedLabels = {
		title: __( 'Awesome! Your site is live.', 'bluehost-wordpress-plugin' ),
		desc: __( 'We removed the "coming soon" banner. Your website is now available for public visitors.', 'bluehost-wordpress-plugin' ),
		button: __( 'Restore Coming Soon', 'bluehost-wordpress-plugin' ),
	};
	const noticeTitle = isComingSoon ? comingSoonLabels.title : publishedLabels.title;
	const noticeDesc = isComingSoon ? comingSoonLabels.desc : publishedLabels.desc;
	const buttonText = isComingSoon ? comingSoonLabels.button : publishedLabels.button;
	return (
		<Notice
			status={ isComingSoon ? 'warning' : 'success' }
			isDismissible={ false }
			className="coming-soon-notice"
		>
			<div className="pure-g">
				<div className="pure-u-1 pure-u-sm-1-2 details">
					<AppHeading level="h2" size={ 2 }>{ noticeTitle }</AppHeading>
					<p>{ noticeDesc }</p>
				</div>
				<div className="pure-u-1 pure-u-sm-1-2 action">
					<AppButton
						onClick={ () => ( userLaunchedSite() ) }
						isPrimary={ isComingSoon }
						isSecondary={ ! isComingSoon }
					>
						{ buttonText }
					</AppButton>
				</div>
			</div>
		</Notice>
	);
};
export default compose(
	withSelect( ( select ) => ( {
		isComingSoon: select( 'bluehost/plugin' ).getSetting( 'comingSoon' ),
	} ) ),
	withDispatch( ( dispatch ) => ( {
		toggleSetting: dispatch( 'bluehost/plugin' ).toggleSetting,
	} ) )
)( ComingSoonNotice );
