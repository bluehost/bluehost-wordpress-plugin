import { __ } from '@wordpress/i18n';
import BaseStep from '../base';
import { BWAButton } from '@app/components/atoms';
import contactUrl from '@app/assets/illustrations/contact.svg';

export const AddContactStep = () => {
    return(
        <BaseStep>
            <img src={contactUrl} />
            <p>{__('It can be important for visitors to be able to get in touch with you. Adding a contact page to your site is easy and fast, and can both reduce visitor frustration as well as build confidence!', 'bluehost-wordpress-plugin')}</p>
            <BWAButton isPrimary>{__('Add contact page', 'bluehost-wordpress-plugin')}</BWAButton>
        </BaseStep>
    );
}

export default AddContactStep;