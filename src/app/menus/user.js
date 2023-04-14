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
import { addUtmParams, getPlatformBaseUrl, getPlatformPathUrl } from '@app/functions';

/**
 * Component Defaults
 */
const isJarvis = 'undefined' !== typeof window.nfdplugin.isJarvis ? window.nfdplugin.isJarvis : false;

let base = [
	{
		icon: UserIcon,
		id: 'account_link',
		href: getPlatformPathUrl('home', 'app'),
		label: __('Bluehost Account', 'bluehost-wordpress-plugin'),
		color: 'gray',
	},
	{
		icon: BillingIcon,
		id: 'billing_link',
		href: getPlatformPathUrl('renewal-center', 'account_center#billing'),
		label: __('Billing', 'bluehost-wordpress-plugin'),
		color: 'blue',
	},
	{
		icon: ProductsIcon,
		id: 'products_link',
		href: getPlatformPathUrl('market-place', 'account_center#products'),
		label: __('Products', 'bluehost-wordpress-plugin'),
		color: 'dark-blue',
	},
	{
		icon: MailIcon,
		id: 'mail_link',
		href: getPlatformPathUrl('home', 'app#/email-office'),
		label: __('Mail & Office', 'bluehost-wordpress-plugin'),
		color: 'black',
	},
	{
		icon: SecurityIcon,
		id: 'security_link',
		href: getPlatformPathUrl('security', 'account_center#security'),
		label: __('Security', 'bluehost-wordpress-plugin'),
		color: 'green',
	},
	{
		icon: ValidationIcon,
		id: 'validation_token_link',
		href: isJarvis ? getPlatformPathUrl('account-center') : getPlatformBaseUrl('/cgi/token'),
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
