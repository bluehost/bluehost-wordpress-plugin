import './style.scss';

import { BWABox, BWAHeading, BWAButton as Button } from '@app/components/atoms';
import { BlueSkyLogo, Call, CallCenter, ChatIcon, Computer, SEO } from '@app/assets';

import { BWABaseTemplate as Page } from '@app/components/templates';
import ReactPlayer from "react-player";
import Search from './search';
import { __ } from '@wordpress/i18n';
import { addUtmParams } from '@app/functions';
import blueSkyGroup from '@app/assets/blue-sky-group.png';

const Help = () => {
	return (
		<Page className="page-help">
			<BWAHeading level="h2" size={0}>{ __( 'Help', 'bluehost-wordpress-plugin' ) }</BWAHeading>
			<div className="clouds">
				<div className="section-intro">
					<div style={{ maxWidth: '1600px', margin: '0 auto' }}>
						<div className="chat-button-container">
							<Button
								className="chat-button"
								href={
									addUtmParams(
										'https://helpchat.bluehost.com/',
										{
											utm_content: 'help_chat_button',
											utm_term: 'Chat with us',
										}
									)
								}
								isPrimary
								rel="noopener noreferrer"
								target="_blank"
							>
								{ __('Chat with us', 'bluehost-wordpress-plugin') } <ChatIcon className="chat-icon" />
							</Button>
						</div>
					</div>
					<h3 className="section-title">
						{ __('From DIY to full-service help', 'bluehost-wordpress-plugin') }
					</h3>
					<p className="section-description">
						{ __('Feeling stuck? Choose how much help you\'d like, from how-to articles to your own website concierge.', 'bluehost-wordpress-plugin') }
					</p>
				</div>
				<div className="section-blue-sky">
					<div className="section-title">
						<BlueSkyLogo />
						<span className="screen-reader-text">{ __('Blue Sky', 'bluehost-wordpress-plugin') }</span>
					</div>
					<div className="media-block">
						<div className="media-block__media">
							<div className="react-player-container">
								<ReactPlayer
									className="react-player"
									height="100%"
									light={ blueSkyGroup }
									playIcon={ <span /> }
									url="https://www.youtube.com/embed/LSjFdLec7mM"
									width="100%"
								/>
							</div>
						</div>
						<div className="media-block__details">
							<div
								className="media-block__title">{ __('Get your own website guide', 'bluehost-wordpress-plugin') }</div>
							<div className="media-block__description">
								{ __('Our WordPress experts can jump in wherever you need help, teaching you how to build, grow, and maintain your website.', 'bluehost-wordpress-plugin') }
							</div>
							<Button
								className="media-block__button"
								data-action="load-nfd-ctb"
								data-ctb-id="7ddf596a-4388-43bd-94b5-095ad6da3418"
								href="https://my.bluehost.com/hosting/app/#/marketplace/product/i/bluesky?utm_source=wp-marketplace&utm_medium=brand-plugin"
								isSecondary
								onClick={
									() => {
										window.scrollTo(0, 0);
									}
								}
							>
								{ __('Get Blue Sky', 'bluehost-wordpress-plugin') }
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="section-featured-services">
				<div className="section-title">{ __('Let us do it for you', 'bluehost-wordpress-plugin') }</div>
				<p
					className="section-description">{ __('What can we help you achieve today?', 'bluehost-wordpress-plugin') }</p>
				<div className="featured-services">
					<div className="featured-services-list">
						<div className="featured-service">
							<div className="featured-service__image"><Computer /></div>
							<div className="featured-service__title">{ __('Full-Service Website', 'bluehost-wordpress-plugin') }</div>
							<div
								className="featured-service__description">{ __('Ongoing marketing assistance and design', 'bluehost-wordpress-plugin') }</div>
							<Button
								className="featured-service__button"
								data-testid="full-service"
								href="https://www.bluehost.com/solutions/full-service#full-service"
								isSecondary
								utmContent="help_full_service"
							>
								{ __('Learn more', 'bluehost-wordpress-plugin') }
							</Button>
						</div>
						<div className="featured-service">
							<div className="featured-service__image"><SEO /></div>
							<div className="featured-service__title">
								{ __('SEO Services', 'bluehost-wordpress-plugin') }
							</div>
							<div className="featured-service__description">
								{ __('Fine tune your website for better visibility', 'bluehost-wordpress-plugin') }
							</div>
							<Button
								className="featured-service__button"
								data-testid="seo-services"
								href="https://www.bluehost.com/solutions/full-service#seo-services"
								isSecondary
								utmContent="help_seo_services"
							>
								{ __('Learn more', 'bluehost-wordpress-plugin') }
							</Button>
						</div>
						<div className="featured-service">
							<div className="featured-service__image"><CallCenter /></div>
							<div className="featured-service__title">
								{ __('Our experts can help', 'bluehost-wordpress-plugin') }
							</div>
							<div className="featured-service__description">
								{ __('Consult with an expert to figure out the best next steps.', 'bluehost-wordpress-plugin') }
							</div>
							<Button
								className="featured-service__button"
								href="https://www.bluehost.com/solutions/full-service#request-form"
								isSecondary
								utmContent="help_request_consultation"
							>
								{ __('Request a consultation', 'bluehost-wordpress-plugin') }
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="section-resources">
				<div className="section-title">
					{ __('DIY', 'bluehost-wordpress-plugin') }
				</div>
				<p className="section-description">
					{ __('Checkout our resource center for helpful how-to articles and guides.', 'bluehost-wordpress-plugin') }
				</p>
				<div className="resources-search">
					<Search />
					<BWABox className="button-container">
						<Button
							href="https://www.bluehost.com/resources/"
							isSecondary
							utmContent="help_visit_resource_center"
						>
							{ __('Visit resource center', 'bluehost-wordpress-plugin') }
						</Button>
					</BWABox>
				</div>
			</div>
			<footer className="help-footer">
				<a className="call-to-action" href="tel:8884014678">
					<Call className="footer-icon" />
					<span>{ __('888-401-4678', 'bluehost-wordpress-plugin') }</span>
				</a>
				<a
					className="call-to-action"
					href={
						addUtmParams(
							'https://helpchat.bluehost.com/',
							{
								utm_content: 'help_chat_link',
								utm_term: 'Chat with us',
							}
						)
					}
				>
					<ChatIcon className="footer-icon" />
					<span>{ __('Chat with us', 'bluehost-wordpress-plugin') }</span>
				</a>
			</footer>
		</Page>
	);
};

export default Help;
