import { Button, Card, Title } from '@newfold/ui-component-library';

const ProductsPages = () => {
	return (
		<Card
			className="hover:nfd-bg-[#FEFCEA] wppbh-app-products"
			style={ {
				borderRadius: 0,
			} }
		>
			<Card.Content>
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width="48" height="48" rx="8" fill="#FEFCEA" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M17.9508 14.6899C17.8182 14.2827 17.437 14 17 14H15L14.8834 14.0067C14.386 14.0645 14 14.4872 14 15L14.0067 15.1166C14.0645 15.614 14.4872 16 15 16H16.18L16.4158 17.1781C16.4181 17.1909 16.4207 17.2037 16.4235 17.2163L17.9145 24.6713L15.9999 26.5859L15.8943 26.6993C15.0637 27.6584 15.3668 29.0487 16.3082 29.6739C16.1109 30.0738 16 30.5239 16 31C16 32.6569 17.3431 34 19 34C20.6569 34 22 32.6569 22 31C22 30.6494 21.9398 30.3128 21.8293 30H26.1707C26.0602 30.3128 26 30.6494 26 31C26 32.6569 27.3431 34 29 34C30.6569 34 32 32.6569 32 31C32 29.3431 30.6569 28 29 28L19.0237 28.0001C19.0158 28 19.0079 28 19 28C18.9921 28 18.9841 28 18.9762 28.0001L17.4141 28.0001L19.4142 26H29L29.1249 25.9922C29.4535 25.9509 29.7439 25.7484 29.8944 25.4472L33.8944 17.4472L33.9402 17.3414C34.1753 16.7021 33.7043 16 33 16H18.2198L17.9806 14.8039L17.9508 14.6899ZM19 30C18.4477 30 18 30.4477 18 31C18 31.5523 18.4477 32 19 32C19.5523 32 20 31.5523 20 31C20 30.4477 19.5523 30 19 30ZM28 31C28 30.4477 28.4477 30 29 30C29.5523 30 30 30.4477 30 31C30 31.5523 29.5523 32 29 32C28.4477 32 28 31.5523 28 31ZM19.8198 24L18.6198 18H31.381L28.381 24H19.8198Z"
						fill="#986423"
					/>
				</svg>
				<Title size="4" className="nfd-leading-normal nfd-my-4">
					{ __( 'Products', 'wp-plugin-bluehost' ) }
				</Title>
				<p>
					{ __(
						'Showcase physical and digital goods, product variations, and custom configurations.',
						'wp-plugin-bluehost'
					) }
				</p>
			</Card.Content>
			<div className="nfd-flex nfd-justify-end nfd-gap-6 nfd-items-center">
				<a href="edit.php?post_type=product">
					{ __( 'View all', 'wp-plugin-bluehost' ) }
				</a>
				<a href="post-new.php?post_type=product">
					<Button>{ __( 'Add New', 'wp-plugin-bluehost' ) }</Button>
				</a>
			</div>
		</Card>
	);
};

export default ProductsPages;
