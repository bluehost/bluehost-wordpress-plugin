import { Alert, Container, Page } from '@newfold/ui-component-library';
import { useContext } from '@wordpress/element';

import SitePages from './sitePages';
import BlogPosts from './blogPosts';
import BookingAndAppointments from './bookingAndAppointments';
import ProductsPages from './ProductsPages';
import AppStore from '../../data/store';

const PagesAndPosts = () => {
	const { store } = useContext( AppStore );
	return (
		<Page
			title="Pages & Posts"
			className={ 'wppbh-app-pagesAndPosts-page' }
		>
			<Container>
				<Container.Header
					title={ __( 'Pages & Posts', 'wp-plugin-bluehost' ) }
					description={
						store?.comingSoon ? (
							<Alert
								variant="warning"
								className="nfd-text-sm nfd-bg-transparent nfd-p-0 "
							>
								<span className="nfd-text-red-700">
									{ __(
										'Your site is not live.',
										'wp-plugin-bluehost'
									) }
								</span>
							</Alert>
						) : (
							<Alert
								variant="success"
								className="nfd-text-sm nfd-bg-transparent nfd-p-0 "
							>
								<span className="nfd-font-semibold nfd-text-black">
									{ __(
										'Your site is live.',
										'wp-plugin-bluehost'
									) }
								</span>
							</Alert>
						)
					}
					className={ 'wppbh-app-settings-header' }
				>
					{ store?.comingSoon ? (
						<p>
							{ __(
								'Visitors to your site will see your "Coming Soon" page and not your actual site. Visit',
								'wp-plugin-bluehost'
							) }{ ' ' }
							<a href="#/settings">
								{ __( '"Settings"', 'wp-plugin-bluehost' ) }
							</a>{ ' ' }
							{ __(
								'to set your site live.',
								'wp-plugin-bluehost'
							) }
						</p>
					) : (
						<p>
							{ __(
								'Visitors to your site will see all your publicly published pages.',
								'wp-plugin-bluehost'
							) }
						</p>
					) }
				</Container.Header>

				<div className="nfd-grid md:nfd-grid-cols-2 nfd-gap-0 sm:nfd-grid-cols-1">
					<SitePages />
					<BlogPosts />
					{ window.NewfoldRuntime.isYithBookingActive &&
						window.NewfoldRuntime.isWoocommerceActive && (
							<BookingAndAppointments />
						) }
					{ window.NewfoldRuntime.isWoocommerceActive && (
						<ProductsPages />
					) }
				</div>
			</Container>
		</Page>
	);
};

export default PagesAndPosts;
