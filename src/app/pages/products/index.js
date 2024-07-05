import { Container, Page } from '@newfold/ui-component-library';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import { NewfoldRuntime } from '@newfold-labs/wp-module-runtime';
import { default as NewfoldProducts } from '@newfold-labs/wp-module-my-products/components/product';
import { isJarvis } from '../../util/helpers';

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

const Products = () => {
	return (
		<Page className="wppbh-products" title="Active Products">
			<Container className="wppbh-products-section">
				<Container.Header
					title={ __( 'My Products', 'bluehost-wordpress-plugin' ) }
				>
					<p>
						{ __(
							'A list of products associated with your Bluehost hosting package. For more information, check out the ',
							'bluehost-wordpress-plugin'
						) }

						<a href="https://www.bluehost.com/my-account/renewal-center">
							{ __(
								'Bluehost Account Manager',
								'bluehost-wordpress-plugin'
							) }
						</a>
					</p>
				</Container.Header>
				<NewfoldProducts
					methods={ moduleMethods }
					constants={ moduleConstants }
				/>
			</Container>
		</Page>
	);
};

export default Products;
