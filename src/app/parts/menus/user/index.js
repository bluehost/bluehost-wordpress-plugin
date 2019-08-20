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
} from '@/assets';
/**
 * Component Defaults
 */
const url = 'https://my.bluehost.com/hosting/';
const i18n = 'bluehost-wordpress-plugin';

export default [
	{
		icon: UserIcon,
		href: url + 'app',
		label: __( 'Bluehost Account', i18n ),
		color: 'gray',
	},
	{
		icon: BillingIcon,
		href: url + 'account_center#billing',
		label: __( 'Billing', i18n ),
		color: 'blue',
	},
	{
		icon: ProductsIcon,
		href: url + 'account_center#products',
		label: __( 'Products', i18n ),
		color: 'dark-blue',
	},
	{
		icon: SecurityIcon,
		href: url + 'account_center#security',
		label: __( 'Security', i18n ),
		color: 'green',
	},
	{
		icon: ValidationIcon,
		href: '#',
		label: __( 'Validation Token', i18n ),
		color: 'orange',
	},
];
