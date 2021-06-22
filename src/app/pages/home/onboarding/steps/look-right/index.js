import { __ } from '@wordpress/i18n';
import BaseStep from '../base';
import { BWAButton } from '@app/components/atoms';
import designUrl from '@app/assets/illustrations/design.svg';

export const LookRightStep = () => {
    return(
        <BaseStep>
            <img src={designUrl} />
            <p>{__("You want your site to look just right - maybe you want it to match your company colors, to be serious or fun, simple or bold—whatever's you. Customize the look of your site, or", 'bluehost-wordpress-plugin')} <a href='#/home/onboarding/premium-themes'>{__('browse our premium themes', 'bluehost-wordpress-plugin')}</a> {__(" to find something that fits you just right.", 'bluehost-wordpress-plugin')}</p>
            <BWAButton isPrimary href="customize.php">{__('Customize your site', 'bluehost-wordpress-plugin')}</BWAButton>
        </BaseStep>
    );
}

export default LookRightStep;