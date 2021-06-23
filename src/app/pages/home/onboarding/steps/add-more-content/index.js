import { __ } from '@wordpress/i18n';
import BaseStep from '../base';
import { BWAButton } from '@app/components/atoms';
import contentUrl from '@app/assets/illustrations/content.svg';

export const AddMoreContentStep = () => {
    return(
        <BaseStep>
            <img className="illustration" src={contentUrl} alt={__("Person on laptop surrounded by gears and leaves with growing ideas.", 'bluehost-wordpress-plugin')}/>
            <p>{__("Content is important - it’s how you communicate with your visitors and it’s also what search engines use to help people find your site.", 'bluehost-wordpress-plugin')}</p>
            <p>{__("There are two main types of content - pages and posts. Use a page for content that won't change too often (about page, contact page, portfolio, restaurant menu, etc) and use posts for information that's timely (blog posts, updates).", 'bluehost-wordpress-plugin')}</p>
            <BWAButton isPrimary href="post-new.php?post_type=page">{__('Add page', 'bluehost-wordpress-plugin')}</BWAButton>
            <BWAButton isSecondary href="post-new.php">{__('Add post', 'bluehost-wordpress-plugin')}</BWAButton>
        </BaseStep>
    );
}

export default AddMoreContentStep;