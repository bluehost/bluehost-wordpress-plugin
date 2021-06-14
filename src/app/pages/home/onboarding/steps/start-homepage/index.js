import { __ } from '@wordpress/i18n';
import BaseStep from '../base';
import { BWAButton } from '@app/components/atoms';
import homepageUrl from '@app/assets/illustrations/homepage.svg';

export const StartHomepageStep = () => {
    return(
        <BaseStep>
            <img src={homepageUrl} />
            <p>{__('The homepage of your site is what visitors will see when they visit {siteURL} and is often the first contact your visitors have with your site.', 'bluehost-wordpress-plugin')}</p>
            <p>{__('By default this page shows the most recent posts you have made, and you can customize it to offer a better first experience for your visitors!', 'bluehost-wordpress-plugin')}</p>
            <BWAButton isPrimary>{__('Customize your homepage', 'bluehost-wordpress-plugin')}</BWAButton>
        </BaseStep>
    );
}

export default StartHomepageStep;