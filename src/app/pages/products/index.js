import { Container, Page } from '@newfold/ui-component-library';
import WebinarsBanner from 'App/components/webinars-banner';
import ProductCard from './ProductCard';

const Products = () => {
	return (
		<Page className="wppbh-products" title="Active Products">
			<WebinarsBanner />
			<Container className="wppbh-account-help-section">
				<Container.Header
					title={ __( 'My Products', 'wp-plugin-bluehost' ) }
				>
					<p>
						{ __(
							'A list of products associated with your Bluehost hosting package. For more information, check out the ',
							'wp-plugin-bluehost'
						) }
						<a href="https://www.bluehost.com/my-account/renewal-center">
							{ __(
								'Bluehost Account Manager',
								'wp-plugin-bluehost'
							) }
						</a>
					</p>
				</Container.Header>
				<Container.Block>
					<div className="nfd-grid nfd-grid-cols-1 nfd-gap-6">
						<ProductCard />
					</div>
				</Container.Block>
			</Container>
		</Page>
	);
};

export default Products;
