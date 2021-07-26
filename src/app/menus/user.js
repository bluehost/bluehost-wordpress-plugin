/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Project dependencies
 */
import {
	BillingIcon,
	MailIcon,
	ProductsIcon,
	SecurityIcon,
	UserIcon,
	ValidationIcon,
} from '@app/assets';
import { addUtmParams, getPlatformBaseUrl } from '@app/functions';

/**
 * Component Defaults
 */
const url = getPlatformBaseUrl('/hosting/');

let base = [
	{
		icon: UserIcon,
		id: 'account_link',
		href: url + 'app',
		label: __('Bluehost Account', 'bluehost-wordpress-plugin'),
		color: 'gray',
	},
	{
		icon: BillingIcon,
		id: 'billing_link',
		href: url + 'account_center#billing',
		label: __('Billing', 'bluehost-wordpress-plugin'),
		color: 'blue',
	},
	{
		icon: ProductsIcon,
		id: 'products_link',
		href: url + 'account_center#products',
		label: __('Products', 'bluehost-wordpress-plugin'),
		color: 'dark-blue',
	},
	{
		icon: MailIcon,
		id: 'mail_link',
		href: url + 'app#/email-office',
		label: __('Mail & Office', 'bluehost-wordpress-plugin'),
		color: 'black',
	},
	{
		icon: SecurityIcon,
		id: 'security_link',
		href: url + 'account_center#security',
		label: __('Security', 'bluehost-wordpress-plugin'),
		color: 'green',
	},
	{
		icon: ValidationIcon,
		id: 'validation_token_link',
		href: getPlatformBaseUrl('/cgi/token'),
		label: __('Validation Token', 'bluehost-wordpress-plugin'),
		color: 'orange',
	},
];

const userMenu = ( location ) => {
	return base.map( item => {
		return {
			...item, 
			href: addUtmParams(
				item.href, 
				{
					utm_content: location + '_' + item.id,
					utm_term: item.label
				}
			)
		}
	})
}

export default userMenu;
