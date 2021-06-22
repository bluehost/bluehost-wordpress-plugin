import { __ } from '@wordpress/i18n';
import BaseStep from '../base';
import { BWAButton } from '@app/components/atoms';
import aboutUrl from '@app/assets/illustrations/about.svg';

export const AddAboutStep = () => {
    return(
        <BaseStep>
            <img src={aboutUrl} />
            <p>{__('An about page lets you tell your visitors about you, your team, or your company - everything from what you do to what sets you apart.', 'bluehost-wordpress-plugin')}</p>
            <p>{__('Not sure where to start? We give you some content to get you going and help walk you through customizing it!', 'bluehost-wordpress-plugin')}</p>
            <BWAButton isPrimary href="post-new.php?dcpage=about&dcsrc=plugin">{__('Add about page', 'bluehost-wordpress-plugin')}</BWAButton>
        </BaseStep>
    );
}

export default AddAboutStep;