/* eslint-disable @wordpress/i18n-no-flanking-whitespace */
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';
import { isJarvis } from '../../util/helpers';
import { default as NewfoldMyProducts } from '@modules/wp-module-my-products/components/myProducts';

// constants to pass to module
const moduleConstants = {
	text: {
		error: __(
			'Oops, there was an error loading products, please try again later.',
			'bluehost-wordpress-plugin'
		),
		noProducts: __(
			'Sorry, no products. Please, try again later.',
			'bluehost-wordpress-plugin'
		),
		jarvisText: __(
			'Please login to your account manager to see products.',
			'bluehost-wordpress-plugin'
		),
		title: __( 'My Products', 'bluehost-wordpress-plugin' ),
		subTitle: __(
			'A list of products associated with your Bluehost hosting package. For more information, check out the ',
			'bluehost-wordpress-plugin'
		),
		renewalText: __(
			'Bluehost Account Manager',
			'bluehost-wordpress-plugin'
		),
		renewalCenterUrl: 'https://www.bluehost.com/my-account/renewal-center',
	},
};

// methods to pass to module
const moduleMethods = {
	apiFetch,
	useState,
	useEffect,
	NewfoldRuntime,
	isJarvis,
};

const MyProductsSection = () => {
	return (
		<NewfoldMyProducts
			methods={ moduleMethods }
			constants={ moduleConstants }
		/>
	);
};

export default MyProductsSection;
