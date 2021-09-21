import './style.scss';

import { BWAHeading, BWAButton as Button } from '@app/components/atoms';
import { __, sprintf } from '@wordpress/i18n';

import { BWACommonTemplate as Page } from '@app/components/templates';
import ReactPlayer from "react-player";
import { addUtmParams, getPlatformBaseUrl } from '@app/functions';

const YoastWooCommerceSEO = () => {
	return (
		<Page className="page-yoast-woocommerce-seo">
			<BWAHeading level="h2" size={ 0 }>{ __('Yoast SEO Premium', 'bluehost-wordpress-plugin') }</BWAHeading>
			<div className="section-logo">
				<a href={addUtmParams('https://yoast.com')} aria-label={__('Blue Sky service logo', 'bluehost-wordpress-plugin')}>
					<img src="https://cdn.hiive.space/bluehost/plugin/yoast-logo.svg" width="320px" height="auto" alt="Yoast SEO Logo" />
				</a>
			</div>
			<div className="section-intro">
				<div className="media-block">
					<div className="media-block__details">
						<div className="media-block__title">
							{ __('Yoast WooCommerce SEO plugin', 'bluehost-wordpress-plugin') }
						</div>
						<div className="media-block__description">
							<ul class="yoast-list">
									<li>{ __('Make your products stand out in the search results', 'bluehost-wordpress-plugin')}</li>
									<li>{ __('Add extra SEO features to your WooCommerce store', 'bluehost-wordpress-plugin')}</li>
									<li>{ __('Get best practice technical SEO for ecommerce, automatically', 'bluehost-wordpress-plugin')}</li>
									<li>{ __('Includes access to the brand-new Ecommerce SEO training', 'bluehost-wordpress-plugin')}</li>
							</ul>
						</div>
						<Button
							className="media-block__button"
							href={addUtmParams('https://yoa.st/bh-woo-seo')}
							utmContent="yoastwooseo"
							isLink
							isPrimary
						>
							{ __('Get Yoast WooCommerce SEO', 'bluehost-wordpress-plugin') }
						</Button>
					</div>
					<div className="media-block__media">
						<div className="react-player-container">
							<ReactPlayer
								className="react-player"
								height="100%"
								playIcon={ <span /> }
								url="https://www.youtube.com/watch?v=Jl9S1CB4XHM"
								width="100%"
							/>
						</div>
					</div>
					
				</div>
			</div>
			<br /><br />
			<div className="section-features">
				<div className="feature-list">
					<div className="feature-card">
						<div className="feature-card__image"><span class="dashicons dashicons-search"></span></div>
						<div className="feature-card__title">
							{ __('Show off your products in the search results', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('We automatically output all the data you need to get rich snippets for your products, prices, and reviews.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><span class="dashicons dashicons-welcome-widgets-menus"></span></div>
						<div className="feature-card__title">
							{ __('Upgrade your social media cards', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Yoast WooCommerce SEO is able to use details like your product\’s price and stock and present them in attention-grabbing formats that stand out from your competition!', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><span class="dashicons dashicons-welcome-learn-more"></span></div>
						<div className="feature-card__title">
							{ __('NEW: Includes access to Ecommerce SEO training', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('In this new course, you’ll learn how to set up a top-notch ecommerce SEO strategy. This will help you increase the visibility of your webshop on search engines and turn more visitors into customers.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
				</div>
			</div>
			<div className="section-call-to-action">
				<div className="section-title">
					{ __('Learn vital SEO skills that you can apply at once with Yoast Academy!', 'bluehost-wordpress-plugin') }
				</div>
				<div className="call-to-action">
					<div className="video">
						<ReactPlayer
							className="react-player"
							height="100%"
							playIcon={ <span /> }
							url="https://youtu.be/DA19_EcEkbw"
							width="100%"
						/>
					</div>
						<Button
							className="media-block__button"
							href={addUtmParams('https://yoa.st/bh-woo-seo')}
							utmContent="yoastwooseoacademy"
							isLink
							isPrimary
						>
							{ __('Get full access to Yoast Academy', 'bluehost-wordpress-plugin') }
						</Button>
						<br />
						<Button
							className="media-block__button"
							href={addUtmParams('https://yoast.com/wordpress/plugins/')}
							utmContent="yoastwooseoallplug"
							isLink
						>
							{ __('See all Yoast Plugins', 'bluehost-wordpress-plugin') }
						</Button>
				</div>
			</div>
		</Page>
	);
};

export default YoastWooCommerceSEO;
