import { Container, Page } from '@newfold/ui-component-library';
import ProductsTable from './ProductsTable';

const Products = () => {
	return (
		<Page className="wppbh-products" title="Active Products">
			<Container className="wppbh-products-section">
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
						<ProductsTable />
				</Container.Block>
			</Container>
		</Page>
	);
};

export default Products;
