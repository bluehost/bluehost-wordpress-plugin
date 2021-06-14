import { __ } from '@wordpress/i18n';
import BaseStep from '../base';
import { BWAButton } from '@app/components/atoms';
import launchUrl from '@app/assets/illustrations/launch.svg';

export const LaunchStep = () => {
    return(
        <BaseStep>
            <img src={launchUrl} />
            <p>{__("Your site has a \"coming soon\" message, which lets people know you're working on it. Wondering if you’re ready to launch? Check out our website pre-publishing checklist and then launch with confidence!", 'bluehost-wordpress-plugin')}</p>
            <BWAButton isPrimary>{__('Launch your site', 'bluehost-wordpress-plugin')}</BWAButton>
        </BaseStep>
    );
}

export default LaunchStep;