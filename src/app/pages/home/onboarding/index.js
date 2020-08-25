/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { BWAButton as Button } from '@app/components/atoms';
import comment from '@app/assets/comment.png';
import computer from '@app/assets/computer.png';
import rocket from '@app/assets/rocket.png';
import './style.scss';

export default function Onboarding() {

	const baseUrl = useSelect((select) => {
		return select('bluehost/plugin').getAdminUrl();
	}, []);

	const comingSoon = useSelect((select) => {
		return select('bluehost/plugin').getSetting('comingSoon');
	}, []);

	const {toggleSetting} = useDispatch('bluehost/plugin');

	const launchHandler = () => {
		toggleSetting('comingSoon');
	}

	return (
		<div className="bluehost-onboarding">

			<header className="bluehost-onboarding-page-header">
				<h2 className="bluehost-onboarding-page-header__title">
					{ __('Welcome to your WordPress site', 'bluehost-wordpress-plugin') }
				</h2>
				<p className="bluehost-onboarding-page-header__description">
					{ __('Not sure how to get started? Here are a few options we recommend.', 'bluehost-wordpress-plugin') }
				</p>
			</header>

			<div className="bluehost-onboarding-page-content">

				<div className="bluehost-onboarding-steps">

					<div className="bluehost-onboarding-step">
						<div className="bluehost-onboarding-step__image">
							<img src={ comment } alt="" />
						</div>
						<div className="bluehost-onboarding-step__title">
							{ __('Start with a page or post', 'bluehost-wordpress-plugin') }
						</div>
						<p className="bluehost-onboarding-step__description">
							{ __("Use a page for content that won't change too often (your homepage, portfolio), and use posts for information that's timely (blog posts, updates).", 'bluehost-wordpress-plugin') }
						</p>
						<div className="bluehost-onboarding-step__actions">
							<Button href={ `${ baseUrl }post-new.php` } isLink>
								{ __('Add a blog post', 'bluehost-wordpress-plugin') }
							</Button>
							<Button href={ `${ baseUrl }post-new.php?post_type=page` } isSecondary>
								{ __('Add a page', 'bluehost-wordpress-plugin') }
							</Button>
						</div>
					</div>

					<div className="bluehost-onboarding-step">
						<div className="bluehost-onboarding-step__image">
							<img src={ computer } alt="" />
						</div>
						<div className="bluehost-onboarding-step__title">
							{ __('Make it look just right', 'bluehost-wordpress-plugin') }
						</div>
						<p className="bluehost-onboarding-step__description">
							{ __("Use the customizer to go simple, bold—whatever's you.", 'bluehost-wordpress-plugin') }<br />
							{ __("Or browse themes and try 'em out.", 'bluehost-wordpress-plugin') }
						</p>
						<div className="bluehost-onboarding-step__actions">
							<Button href={ `${ baseUrl }admin.php?page=bluehost#/marketplace/themes` } isLink>
								{ __('Browse themes', 'bluehost-wordpress-plugin') }
							</Button>
							<Button href={ `${ baseUrl }customize.php` } isSecondary>
								{ __('Customize your site', 'bluehost-wordpress-plugin') }
							</Button>
						</div>
					</div>

					{
						comingSoon ? (
							<div className="bluehost-onboarding-step --launch">
								<div className="bluehost-onboarding-step__image">
									<img src={ rocket } alt="" />
								</div>
								<div className="bluehost-onboarding-step__title">
									{ __('Get ready to launch', 'bluehost-wordpress-plugin') }
								</div>
								<p className="bluehost-onboarding-step__description">
									{ __('Your site has a \"coming soon\" message, which lets people know you\'re working on it. ', 'bluehost-wordpress-plugin') }
									<span
										dangerouslySetInnerHTML={
											{
												__html: sprintf(
													__('Check out our %swebsite pre-publishing%s checklist to help get ready for launch.', 'bluehost-wordpress-plugin'),
													'<a href="https://www.bluehost.com/help/article/website-publish-checklist">',
													'</a>'
												)
											}
										}
									/>

								</p>
								<div className="bluehost-onboarding-step__actions">
									<Button onClick={ launchHandler } isPrimary>
										{ __('Launch your site', 'bluehost-wordpress-plugin') }
									</Button>
								</div>
							</div>
						) : (
							<div className="bluehost-onboarding-step --launched">
								<div className="bluehost-onboarding-step__image">
									<img src={ rocket } alt="" />
								</div>
								<div className="bluehost-onboarding-step__title">
									{ __('Awesome! Your site is live.', 'bluehost-wordpress-plugin') }
								</div>
								<p className="bluehost-onboarding-step__description">
									{ __('We removed the "coming soon" banner. Your website is now available for public visitors. This can be always be changed on the Settings tab above.', 'bluehost-wordpress-plugin') }
								</p>
								<div className="bluehost-onboarding-step__actions">
									<Button onClick={ launchHandler } isSecondary>
										{ __('Restore Coming Soon', 'bluehost-wordpress-plugin') }
									</Button>
								</div>
							</div>
						)
					}

				</div>

			</div>

			<footer className="bluehost-onboarding-page-footer">

				<h3 className="bluehost-onboarding-page-footer__title">
					{ __("How-to's & next steps", 'bluehost-wordpress-plugin') }
				</h3>

				<div className="bluehost-onboarding-page-footer__content">
					<p>
						{ __('Learn how to add functionality to your site with plugins:', 'bluehost-wordpress-plugin') }
						<br />
						<a href="https://www.bluehost.com/blog/how-to-use-wordpress-plugins/">
							{ __('How to use WordPress plugins', 'bluehost-wordpress-plugin') }
						</a>
						<br />
						<a href="https://www.bluehost.com/blog/the-two-essential-plugins-you-need-for-your-wordpress-site/">
							{ __('The two essential plugins you need', 'bluehost-wordpress-plugin') }
						</a>
					</p>
					<p>
						{ __('Check out ecommerce tips:', 'bluehost-wordpress-plugin') }
						<br />
						<a href="https://www.bluehost.com/blog/how-to-use-woocommerce/">
							{ __('Steps for adding a store to your site with WooCommerce', 'bluehost-wordpress-plugin') }
						</a>
						<br />
						<a href="https://www.bluehost.com/blog/the-five-best-woocommerce-wordpress-themes/">
							{ __('The five best WooCommerce WordPress themes', 'bluehost-wordpress-plugin') }
						</a>
					</p>
					<p>
						{ __('Get help from WordPress experts:', 'bluehost-wordpress-plugin') }
						<br />
						<a href="https://www.bluehost.com/blue-sky">
							{ __('Our BlueSky experts are here to help you every step of the way', 'bluehost-wordpress-plugin') }
						</a>
					</p>
				</div>

			</footer>

		</div>
	);
}
