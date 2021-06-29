import { __ } from '@wordpress/i18n';
import BaseStep from '../base';
import { BWAButton } from '@app/components/atoms';
import contactUrl from '@app/assets/illustrations/contact.svg';

export const AddContactStep = () => {
    return(
        <BaseStep>
            <img className="illustration" src={contactUrl} alt={__("Person throwing paper airplanes.", 'bluehost-wordpress-plugin')}/>
            <p>{__('It can be important for visitors to be able to get in touch with you. Adding a contact page to your site is easy and fast, and can both reduce visitor frustration as well as build confidence!', 'bluehost-wordpress-plugin')}</p>
            <BWAButton isPrimary href="post-new.php?dcpage=contact&dcsrc=plugin">{__('Add contact page', 'bluehost-wordpress-plugin')}</BWAButton>
        </BaseStep>
    );
}

export default AddContactStep;