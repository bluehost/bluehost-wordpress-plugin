import './style.scss';

import {
	Analytics,
	Bathtub,
	BlueSkyLogo,
	Headset,
	Key,
	MagnifyingGlass,
	Multimedia,
	Paint,
	PaperPlane,
	Responsive,
	Rocket,
	Screenshare,
	Shop,
	SocialShare,
	Telescope,
	Tractor
} from '@app/assets';
import { BWAHeading, BWAButton as Button } from '@app/components/atoms';
import { __, sprintf } from '@wordpress/i18n';

import { BWACommonTemplate as Page } from '@app/components/templates';
import ReactPlayer from "react-player";
import blueSkyGroup from '@app/assets/blue-sky-group.png';

const BlueSky = () => {
	return (
		<Page className="page-blue-sky">
			<BWAHeading level="h2" size={ 0 }>{ __('Blue Sky', 'bluehost-wordpress-plugin') }</BWAHeading>
			<div className="section-logo">
				<BlueSkyLogo />
			</div>
			<div className="section-intro">
				<div className="media-block">
					<div className="media-block__media">
						<div className="react-player-container">
							<ReactPlayer
								className="react-player"
								height="100%"
								light={ blueSkyGroup }
								playIcon={ <span /> }
								url="https://www.youtube.com/embed/QEir4T7VweY"
								width="100%"
							/>
						</div>
					</div>
					<div className="media-block__details">
						<div className="media-block__title">
							{ __('Customized support from experts who care', 'bluehost-wordpress-plugin') }
						</div>
						<div className="media-block__description">
							<p>
								{ __('We understand that WordPress can be challenging, but with professional help in your pocket, you will learn how to build, grow, and maintain your new WordPress website with friendly and professional guidance every step of the way.', 'bluehost-wordpress-plugin') }
							</p>
						</div>
						<Button
							className="media-block__button"
							href="https://my.bluehost.com/cgi/app/#/marketplace/product/i/bluesky"
							utmContent="bluesky_link"
							isLink
							isPrimary
						>
							{ __('Get Started', 'bluehost-wordpress-plugin') }
						</Button>
					</div>
				</div>
			</div>
			<div className="section-pricing">
				<div className="section-title">
					{ __('Live WordPress Support from $29/month.', 'bluehost-wordpress-plugin') }
				</div>
				<div className="products">
					<div className="product-card">
						<div className="product-card__title">
							{ __('Blue Sky Basic', 'bluehost-wordpress-plugin') }
						</div>
						<div className="product-card__description">
							{ __('Get unstuck with fast answers and recommendations.', 'bluehost-wordpress-plugin') }
						</div>
						<div className="product-card__call-to-action">
							<Button
								className="media-block__button"
								href="https://my.bluehost.com/cgi/app/#/marketplace/product/i/bluesky"
								utmContent="bluesky_link"
								isLink
								isPrimary
							>
								{ __('Get Started', 'bluehost-wordpress-plugin') }
							</Button>
						</div>
						<div className="product-card__feature-list">
							<div className="product-card__feature">
								{ __('On-Demand Ticket Support', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Account Access Assistance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Website Backup Assistance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Design Guidance', 'bluehost-wordpress-plugin') }
							</div>
						</div>
					</div>
					<div className="product-card">
						<div className="product-card__title">
							{ __('Blue Sky Plus', 'bluehost-wordpress-plugin') }
						</div>
						<div className="product-card__description">
							{ __('Learn more WordPress skills and solve problems faster.', 'bluehost-wordpress-plugin') }
						</div>
						<div className="product-card__call-to-action">
							<Button
								className="media-block__button"
								href="https://my.bluehost.com/cgi/app/#/marketplace/product/i/bluesky"
								utmContent="bluesky_link"
								isLink
								isPrimary
							>
								{ __('Get Started', 'bluehost-wordpress-plugin') }
							</Button>
						</div>
						<div className="product-card__feature-list">
							<div className="product-card__feature">
								{ __('On-Demand Ticket Support', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Account Access Assistance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Website Backup Assistance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Design Guidance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('On-Demand Chat Support', 'bluehost-wordpress-plugin') }
							</div>
						</div>
					</div>
					<div className="product-card">
						<div className="product-highlight">
							{ __('Recommended', 'bluehost-wordpress-plugin') }
						</div>
						<div className="product-card__title">
							{ __('Blue Sky Pro', 'bluehost-wordpress-plugin') }
						</div>
						<div className="product-card__description">
							{ __('Build and Maintain with advanced features and improve as you go.', 'bluehost-wordpress-plugin') }
						</div>
						<div className="product-card__call-to-action">
							<Button
								className="media-block__button"
								href="https://my.bluehost.com/cgi/app/#/marketplace/product/i/bluesky"
								utmContent="bluesky_link"
								isLink
								isPrimary
							>
								{ __('Get Started', 'bluehost-wordpress-plugin') }
							</Button>
						</div>
						<div className="product-card__feature-list">
							<div className="product-card__feature">
								{ __('On-Demand Ticket Support', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Account Access Assistance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Website Backup Assistance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Design Guidance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('On-Demand Chat Support', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Bluehost SEO Tools', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Content Optimization Assistance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Landing Page Optimization Assistance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Mobile Optimization Assistance', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('1 Keyword Optimization', 'bluehost-wordpress-plugin') }
							</div>
							<div className="product-card__feature">
								{ __('Constant Contact (500 contacts free)', 'bluehost-wordpress-plugin') }
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section-whats-new">
				<div className="section-title">
					{ __('What\'s new in Blue Sky Pro', 'bluehost-wordpress-plugin') }
				</div>
				<div className="new-feature">
					<div className="new-feature__image">
						<PaperPlane />
					</div>
					<div className="new-feature__content">
						<div className="new-feature__title">
							{ __('Email that gets results with Constant Contact', 'bluehost-wordpress-plugin') }
						</div>
						<div className="new-feature-description">
							<ul>
								<li>
									{ __('Free email marketing for up to 500 contacts', 'bluehost-wordpress-plugin') }*
								</li>
								<li>
									{ __('100+ responsive email templates', 'bluehost-wordpress-plugin') }
								</li>
								<li>
									{ __('List-building tools and expert advice', 'bluehost-wordpress-plugin') }
								</li>
							</ul>
							<p>
								*{ __('Exceeding 500 contacts will trigger a plan upgrade that allows for up to 2,500 contacts at $35/mo.', 'bluehost-wordpress-plugin') }
							</p>
						</div>
					</div>
				</div>
				<div className="new-feature">
					<div className="new-feature__image">
						<MagnifyingGlass />
					</div>
					<div className="new-feature__content">
						<div className="new-feature__title">
							{ __('Boost your rank with Bluehost SEO Tools', 'bluehost-wordpress-plugin') }
						</div>
						<div className="new-feature-description">
							<ul>
								<li>{ __('All-in-one SEO toolkit', 'bluehost-wordpress-plugin') }</li>
								<li>{ __('Analytic Marketing Reports to improve traffic', 'bluehost-wordpress-plugin') }</li>
								<li>{ __('Competitive intelligence to see how you compare', 'bluehost-wordpress-plugin') }</li>
								<li>{ __('Suggested keywords to boost rankings', 'bluehost-wordpress-plugin') }</li>
								<li>{ __('Integrated dashboard to track rankings', 'bluehost-wordpress-plugin') }</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="new-feature">
					<div className="new-feature__image">
						<Key />
					</div>
					<div className="new-feature__content">
						<div className="new-feature__title">
							{ __('Strategies to drive traffic from One Keyword Search', 'bluehost-wordpress-plugin') }
						</div>
						<div className="new-feature-description">
							<ul>
								<li>{ __('Strategic single keyword recommendation', 'bluehost-wordpress-plugin') }</li>
								<li>{ __('Dedicated Marketing Program Manager to help you grow', 'bluehost-wordpress-plugin') }</li>
								<li>{ __('Unique content backlinking to boost rankings', 'bluehost-wordpress-plugin') }</li>
								<li>{ __('Access to weekly search engine rankings', 'bluehost-wordpress-plugin') }</li>
								<li>{ __('Full-visibility analytics', 'bluehost-wordpress-plugin') }</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="section-features">
				<div className="section-title">
					{ __('Feature Overview', 'bluehost-wordpress-plugin') }
				</div>
				<div className="feature-list">
					<div className="feature-card">
						<div className="feature-card__image"><Shop /></div>
						<div className="feature-card__title">
							{ __('Create an Online Store', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('We\'ll help you set up your store from start to finish.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><SocialShare /></div>
						<div className="feature-card__title">
							{ __('Tie in Social Media', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Get more traffic by integrating your social media accounts with your website.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><Analytics /></div>
						<div className="feature-card__title">
							{ __('Increase traffic', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Get expert advice on how to grow your audience.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><Responsive /></div>
						<div className="feature-card__title">
							{ __('Build for Any Device', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Build a responsive website that looks great on phones, tablets, and desktops.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><Multimedia /></div>
						<div className="feature-card__title">
							{ __('Optimize Videos & Images', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Help your website load and respond fast with optimized videos and images.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><Rocket /></div>
						<div className="feature-card__title">
							{ __('Pre-launch Review', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Our experts will test and review your site to catch issues before you launch.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><Telescope /></div>
						<div className="feature-card__title">
							{ __('Long Term Value', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Use our experts as a resource to maintain and advance your site into the future.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><Headset /></div>
						<div className="feature-card__title">
							{ __('Expert Advice', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Ask questions as they pop up, and get quick answers via live chat, email, and over the phone.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="feature-card">
						<div className="feature-card__image"><Screenshare /></div>
						<div className="feature-card__title">
							{ __('Screen Sharing', 'bluehost-wordpress-plugin') }
						</div>
						<div className="feature-card__description">
							{ __('Get step-by-step guidance on your actual site with live screen sharing.', 'bluehost-wordpress-plugin') }
						</div>
					</div>
				</div>
			</div>
			<div className="section-testimonials">
				<div className="section-title">
					{ __('What Do Our Customers Say?', 'bluehost-wordpress-plugin') }
				</div>
				<div className="testimonials">
					<div className="testimonial-card">
						<div className="testimonial-card__image">
							<Bathtub />
						</div>
						<div className="testimonial-card__title">
							{ __('Friendly Tech Support', 'bluehost-wordpress-plugin') }
						</div>
						<div className="testimonial-card__quote">
							{ __('I\'m so glad that I found you and feel so grateful for knowing what I now know! With the help of WP Live, I was able to call anytime, with any question, which has been incredibly helpful.', 'bluehost-wordpress-plugin') }
						</div>
						<div className="testimonial-card__author">
							{ __('Alana McInnis', 'bluehost-wordpress-plugin') }
						</div>
						<div className="testimonial-card__website">
							{ __('IslandBeautyHabits.com', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="testimonial-card">
						<div className="testimonial-card__image">
							<Tractor />
						</div>
						<div className="testimonial-card__title">
							{ __('Blue Sky is for Everyone', 'bluehost-wordpress-plugin') }
						</div>
						<div className="testimonial-card__quote">
							{ __('Blue Sky had a solution for every problem we ran into, every step of the way. Whether we needed to change the size of a slider or learn how to back-up our site, they had answers within minutes.', 'bluehost-wordpress-plugin') }
						</div>
						<div className="testimonial-card__author">
							{ __('David Bixler', 'bluehost-wordpress-plugin') }
						</div>
						<div className="testimonial-card__website">
							{ __('DuranteRentals.com', 'bluehost-wordpress-plugin') }
						</div>
					</div>
					<div className="testimonial-card">
						<div className="testimonial-card__image">
							<Paint />
						</div>
						<div className="testimonial-card__title">
							{ __('Exceeded All Expectations', 'bluehost-wordpress-plugin') }
						</div>
						<div className="testimonial-card__quote">
							{ __('Blue Sky was a refreshing change from other customer tech support companies I\'ve dealt with. They were not only incredibly knowledgeable but also sincerely committed to finding answers to all of the various issues I faced.', 'bluehost-wordpress-plugin') }
						</div>
						<div className="testimonial-card__author">
							{ __('Sue Pappas', 'bluehost-wordpress-plugin') }
						</div>
						<div className="testimonial-card__website">
							{ __('OutdoorArtCanvas.com', 'bluehost-wordpress-plugin') }
						</div>
					</div>
				</div>
			</div>
			<div className="section-call-to-action">
				<div className="section-title">
					{ __('Win with Blue Sky today.', 'bluehost-wordpress-plugin') }
				</div>
				<div className="call-to-action">
					<div
						className="call-to-action__title"
						dangerouslySetInnerHTML={
							{
								__html: sprintf(
									__('Give us a call at %s844-211-8705%s', 'bluehost-wordpress-plugin'),
									'<a href="tel:8442118705"><strong>',
									'</strong></a>'
								)
							}
						}
					/>
				</div>
			</div>
		</Page>
	);
};

export default BlueSky;
