
/**
 * Internal Dependencies
 */
import { AppNotice as Notice } from '@/components';

function ComingSoonNotice() {
	const comingSoon = window.bluehost.comingSoon;
	return (
		<div className="notices">
			{ comingSoon && (
			<Notice status="warning" isDismissible={false}>
				<h2>Your site says "Coming Soon."</h2>
				<p>Right now, your site is displaying a “coming soon” message. This gives you time to work on your site before you unveil it to the public. </p>
			</Notice> ) }
		</div>
		);
}

export default ComingSoonNotice;
