import { Container, Page } from '@newfold/ui-component-library';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';
import { default as NewfoldProducts } from '@newfold-labs/wp-module-products/components/product';
import { isJarvis } from '../../util/helpers';

// constants to pass to module
const moduleConstants = {
	text: {
		title: __( 'My Products', 'bluehost-wordpress-plugin' ),
		subTitle: __(
			'Explore our featured collection of tools and services.',
			'bluehost-wordpress-plugin'
		),
		error: __(
			'Oops, there was an error loading products, please try again later.',
			'bluehost-wordpress-plugin'
		),
		noProducts: __(
			'Sorry, no products. Please, try again later.',
			'bluehost-wordpress-plugin'
		),
	},
};

// methods to pass to module
const moduleMethods = {
	apiFetch,
	classnames,
	useState,
	useEffect,
	useLocation,
	useMatch,
	useNavigate,
	NewfoldRuntime,
	isJarvis,
};

const Products = () => {
	return (
		<Page className="wppbh-products" title="Active Products">
			<Container className="wppbh-products-section">
				<NewfoldProducts
					methods={ moduleMethods }
					constants={ moduleConstants }
				/>
			</Container>
		</Page>
	);
};

export default Products;
