import './style.scss';

import {
	BWAButton,
	BWAHeading
} from '@app/components/atoms';
import { withDispatch, withSelect } from '@wordpress/data';

import {
	BWANotice as Notice,
} from '@app/components/molecules';
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';

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
		desc: __( 'Right now, your site is displaying a “coming soon” message. Once you\'re ready, do your public reveal!', 'bluehost-wordpress-plugin' ),
		button: __( 'Launch Your Site', 'bluehost-wordpress-plugin' ),
	};
	const publishedLabels = {
		title: __( 'Awesome! Your site is live.', 'bluehost-wordpress-plugin' ),
		desc: __( 'We removed the "coming soon" banner. Your website is now available for public visitors. This can be always be changed on the Settings tab above.', 'bluehost-wordpress-plugin' ),
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
					<BWAHeading level="h2" size={ 2 }>{ noticeTitle }</BWAHeading>
					<p>{ noticeDesc }</p>
				</div>
				<div className="pure-u-1 pure-u-sm-1-2 action">
					<BWAButton
						onClick={ () => ( userLaunchedSite() ) }
						isPrimary={ isComingSoon }
						isSecondary={ ! isComingSoon }
					>
						{ buttonText }
					</BWAButton>
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
