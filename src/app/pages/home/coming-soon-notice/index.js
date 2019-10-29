
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

/**
 * Project Dependencies
 */
import { AppButton, AppNotice as Notice } from '@/components';

const ComingSoonNotice = ( { isComingSoon, toggleSetting } ) => {
	if ( ! isComingSoon ) {
		return null;
	}
	return (
		<Notice status="warning" isDismissible={ false }>
			<div className="pure-g">
				<div className="pure-u-1 pure-u-sm-1-2 details">
					<h2>{__('Your site says “Coming Soon.”', 'bluehost-wordpress-plugin' )}</h2>
					<p>{__('Right now, your site is displaying a “coming soon” message. This gives you time to work on your site before you unveil it to the public.', 'bluehost-wordpress-plugin')}</p>
				</div>
				<div className="pure-u-1 pure-u-sm-1-2 action">
					<AppButton
						onClick={() => (toggleSetting('comingSoon'))}
						isPrimary
					>
						{__('Launch Your Site', 'bluehost-wordpress-plugin')}
					</AppButton>
				</div>
			</div>
		</Notice>
	);
};
export default compose(
	withSelect( select => ({
		isComingSoon: select('bluehost/plugin').getSetting('comingSoon')
	})),
	withDispatch( dispatch => ({
		toggleSetting: dispatch('bluehost/plugin').toggleSetting
	}))
)(ComingSoonNotice);
