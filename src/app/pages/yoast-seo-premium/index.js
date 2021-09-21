import './style.scss';

import { BWAHeading, BWAButton as Button } from '@app/components/atoms';
import { __ } from '@wordpress/i18n';

import { BWACommonTemplate as Page } from '@app/components/templates';
import ReactPlayer from "react-player";
import { addUtmParams } from '@app/functions';

const YoastSEOPremium = () => {
	return (
		<Page className="page-yoast-seo-premium">
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
							{ __('Yoast SEO: the #1 WordPress SEO plugin', 'bluehost-wordpress-plugin') }
						</div>
						<div className="media-block__description">
							<ul class="yoast-list">
									<li>{__('SEO made easy!', 'bluehost-wordpress-plugin')}</li>
									<li>{__('Get more visitors from Google, Bing and social media', 'bluehost-wordpress-plugin')}</li>
									<li>{__('Increase your readers\' engagement', 'bluehost-wordpress-plugin')}</li>
									<li>{__('Includes complimentary access to Yoast SEO academy', 'bluehost-wordpress-plugin')}</li>
							</ul>
						</div>
						<Button
							className="media-block__button"
							href={addUtmParams('https://yoa.st/bh-premium')}
							utmContent="yseopremium"
							isLink
							isPrimary
						>
							{ __('Get Yoast SEO Premium', 'bluehost-wordpress-plugin') }
						</Button>
					</div>
					<div className="media-block__media">
						<div className="react-player-container">
							<ReactPlayer
								id="yoast-seo"
								title="yoast-seo"
								className="react-player yoast-seo"
								height="100%"
								playIcon={ <span /> }
								url="https://www.youtube.com/watch?v=fqQFstQSv4M"
								width="100%"
								config={{
									title:"yoast-seo",
									youtube: {
										embedVars: {
											title:"yoast-seo",
											color: 'white',
											modestbranding: '1',
										}
									}
								}}
							/>
						</div>
					</div>
					
				</div>
			</div>
			<br /><br />
			<div className="section-features">
				<div className="feature-list">
					<div className="feature-card">
						<div className="feature-card__image"><span class="dashicons dashicons-media-document"></span></div>
						<div className="feature-card__title">
							{ __('Create SEO-friendly content', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Intelligent word forms recognition automatically takes different word forms into account. Add synonyms and related keyphrases to write totally natural content.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><span class="dashicons dashicons-google"></span></div>
						<div className="feature-card__title">
							{ __('Help Google understand your site', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Yoast SEO automatically adds the right structured data and comes with options for you to enrich your site with extra structured data.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><span class="dashicons dashicons-welcome-view-site"></span></div>
						<div className="feature-card__title">
							{ __('Preview your content for search results and social media', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('The Google & Social previews help you visualize and optimize what your posts will look like when shared online.', 'bluehost-wordpress-plugin') }
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
							id="yoast-academy"
							title="yoast-academy"
							className="react-player yoast-academy"
							height="100%"
							playIcon={ <span /> }
							url="https://youtu.be/DA19_EcEkbw"
							width="100%"
							config={{
								title:"yoast-academy",
								youtube: {
									title:"yoast-academy",
									color: 'white',
									modestbranding: '1',
								}
							}}
						/>
					</div>
						<Button
							className="media-block__button"
							href={addUtmParams('https://yoa.st/bh-premium')}
							utmContent="yoastseopremacademy"
							isLink
							isPrimary
						>
							{ __('Get full access to Yoast Academy', 'bluehost-wordpress-plugin') }
						</Button>
						<br />
						<Button
							className="media-block__button"
							href={addUtmParams('https://yoast.com/wordpress/plugins/')}
							utmContent="yoastseopremallplug"
							isLink
						>
							{ __('See all Yoast Plugins', 'bluehost-wordpress-plugin') }
						</Button>
				</div>
			</div>
		</Page>
	);
};

export default YoastSEOPremium;
