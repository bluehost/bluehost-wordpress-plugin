/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
/**
 * Project dependencies
 */
import {
	BillingIcon,
	ProductsIcon,
	SecurityIcon,
	UserIcon,
	ValidationIcon,
} from '@app/assets';
import { addUtmParams } from '@app/functions';

/**
 * Component Defaults
 */
const url = 'https://my.bluehost.com/hosting/';

export default [
	{
		icon: UserIcon,
		href: addUtmParams(
			url + 'app',
			{
				utm_content: 'header_account_link',
				utm_term: 'Bluehost Account',
			}
		),
		label: __('Bluehost Account', 'bluehost-wordpress-plugin'),
		color: 'gray',
	},
	{
		icon: BillingIcon,
		href: addUtmParams(
			url + 'account_center#billing',
			{
				utm_content: 'header_billing_link',
				utm_term: 'Billing',
			}
		),
		label: __('Billing', 'bluehost-wordpress-plugin'),
		color: 'blue',
	},
	{
		icon: ProductsIcon,
		href: addUtmParams(
			url + 'account_center#products',
			{
				utm_content: 'header_products_link',
				utm_term: 'Products',
			}
		),
		label: __('Products', 'bluehost-wordpress-plugin'),
		color: 'dark-blue',
	},
	{
		icon: SecurityIcon,
		href: addUtmParams(
			url + 'account_center#security',
			{
				utm_content: 'header_security_link',
				utm_term: 'Security',
			}
		),
		label: __('Security', 'bluehost-wordpress-plugin'),
		color: 'green',
	},
	{
		icon: ValidationIcon,
		href: addUtmParams(
			'https://my.bluehost.com/cgi/token',
			{
				utm_content: 'header_validation_token_link',
				utm_term: 'Validation Token',
			}
		),
		label: __('Validation Token', 'bluehost-wordpress-plugin'),
		color: 'orange',
	},
];
