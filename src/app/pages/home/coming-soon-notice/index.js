
/**
 * External dependencies
 */
import { select } from '@wordpress/data';

/**
 * Project Dependencies
 */
import { AppButton, AppNotice as Notice } from '@/components';

/**
 * 
 */
const ComingSoonNotice = () => {
	return (
		<Notice status="warning" isDismissible={ false }>
			<div className="pure-g">
				<div className="pure-u-1 pure-u-sm-1-2 details">
					<h2>{__('Your site says “Coming Soon.”')}</h2>
					<p>{__('Right now, your site is displaying a “coming soon” message. This gives you time to work on your site before you unveil it to the public.')}</p>
				</div>
				<div className="pure-u-1 pure-u-sm-1-2 action">
					<AppButton
						href={ '' }
						isPrimary
					>
						{__('Launch Your Site')}
					</AppButton>
				</div>
			</div>
		</Notice>
	);
};

export default ComingSoonNotice;
