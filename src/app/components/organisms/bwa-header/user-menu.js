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
/**
 * Component Defaults
 */
const url = 'https://my.bluehost.com/hosting/';

export default [
	{
		icon: UserIcon,
		href: url + 'app',
		label: __( 'Bluehost Account', 'bluehost-wordpress-plugin' ),
		color: 'gray',
	},
	{
		icon: BillingIcon,
		href: url + 'account_center#billing',
		label: __( 'Billing', 'bluehost-wordpress-plugin' ),
		color: 'blue',
	},
	{
		icon: ProductsIcon,
		href: url + 'account_center#products',
		label: __( 'Products', 'bluehost-wordpress-plugin' ),
		color: 'dark-blue',
	},
	{
		icon: SecurityIcon,
		href: url + 'account_center#security',
		label: __( 'Security', 'bluehost-wordpress-plugin' ),
		color: 'green',
	},
	{
		icon: ValidationIcon,
		href: 'https://my.bluehost.com/cgi/token',
		label: __( 'Validation Token', 'bluehost-wordpress-plugin' ),
		color: 'orange',
	},
];
