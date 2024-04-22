import { Button, Card, Title } from '@newfold/ui-component-library';

const SitePages = () => {
	return (
		<Card
			className="wppbh-app-site-page nfd-border-0 nfd-border-r-0 md:nfd-border-r nfd-border-b nfd-shadow-none hover:nfd-bg-[#F2FDFA]"
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
					<rect width="48" height="48" rx="8" fill="#F2FDFA" />
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M24.586 14H19C17.3431 14 16 15.3431 16 17V31C16 32.6569 17.3431 34 19 34H29C30.6569 34 32 32.6569 32 31V21.414C32 20.8835 31.7891 20.3748 31.414 19.9998L26.0001 14.5859C25.6252 14.2109 25.1165 14 24.586 14ZM19 16H24.586L30 21.414V31C30 31.5523 29.5523 32 29 32H19C18.4477 32 18 31.5523 18 31V17C18 16.4477 18.4477 16 19 16ZM27 23C27.5523 23 28 23.4477 28 24C28 24.5128 27.614 24.9355 27.1166 24.9933L27 25H21C20.4477 25 20 24.5523 20 24C20 23.4872 20.386 23.0645 20.8834 23.0067L21 23H27ZM27 27C27.5523 27 28 27.4477 28 28C28 28.5128 27.614 28.9355 27.1166 28.9933L27 29H21C20.4477 29 20 28.5523 20 28C20 27.4872 20.386 27.0645 20.8834 27.0067L21 27H27Z"
						fill="#417C77"
					/>
				</svg>
				<Title size="4" className="nfd-leading-normal nfd-my-4">
					{ __( 'Site Pages', 'wp-plugin-bluehost' ) }
				</Title>
				<p>
					{ __(
						'Edit your homepage and other existing pages or add new pages to your site.',
						'wp-plugin-bluehost'
					) }
				</p>
			</Card.Content>
			<div className="nfd-flex nfd-justify-end nfd-gap-6 nfd-items-center">
				<a href="edit.php?post_type=page">
					{ __( 'View all', 'wp-plugin-bluehost' ) }
				</a>
				<a href="post-new.php?post_type=page">
					<Button onClick>
						{ __( 'Add New', 'wp-plugin-bluehost' ) }
					</Button>
				</a>
			</div>
		</Card>
	);
};

export default SitePages;
