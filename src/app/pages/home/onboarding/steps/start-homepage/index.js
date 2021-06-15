import { __, sprintf } from '@wordpress/i18n';
import BaseStep from '../base';
import { BWAButton } from '@app/components/atoms';
import homepageUrl from '@app/assets/illustrations/homepage.svg';
import { replace } from 'lodash';
import { filterURLForDisplay } from '@wordpress/url';

export const StartHomepageStep = () => {
    const siteUrl = () => {
		const adminUrl = 'undefined' !== typeof window.bluehostWpAdminUrl ? window.bluehostWpAdminUrl : false;
		if ( adminUrl ) {
			return filterURLForDisplay( replace( adminUrl, '/wp-admin', '') );
		}
	}
    return(
        <BaseStep>
            <img src={homepageUrl} />
            <p>{sprintf(__('The homepage is what visitors will see when they visit %s and is often the first contact your visitors have with your site.', 'bluehost-wordpress-plugin'), siteUrl)}</p>
            <p>{__('By default this page shows the most recent posts you have made, and you can customize it to offer a better first experience for your visitors!', 'bluehost-wordpress-plugin')}</p>
            <BWAButton isPrimary>{__('Customize your homepage', 'bluehost-wordpress-plugin')}</BWAButton>
        </BaseStep>
    );
}

export default StartHomepageStep;