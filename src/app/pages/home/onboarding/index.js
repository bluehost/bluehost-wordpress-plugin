/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { BWAButton as Button } from '@app/components/atoms';

export default function Onboarding() {

	const baseUrl = useSelect((select) => {
		return select('bluehost/plugin').getAdminUrl();
	}, []);

	const launchHandler = () => {
		console.log('launch');
		// TODO: See src/app/pages/home/coming-soon-notice/index.js
	}

	return (
		<div className="bluehost-onboarding">

			<header className="bluehost-onboarding-page-header">
				<h2 className="bluehost-onboarding-page-header__title">
					Welcome to your WordPress site
				</h2>
				<p className="bluehost-onboarding-page-header__description">
					Not sure how to get started? Here are a few options we recommend.
				</p>
			</header>

			<div className="bluehost-onboarding-page-content">

				<div className="bluhost-onboarding-steps">

					<div className="bluhost-onboarding-step">
						<div>Start with a page or post</div>
						<p>
							Use a page for content that won&apos;t change too often (your homepage, portfolio), and use posts for
							information that&apos;s timely (blog posts, updates).
						</p>
						<Button href={ `${ baseUrl }post-new.php` } isLink>Add a blog post</Button>
						<Button href={ `${ baseUrl }post-new.php?post_type=page` } isPrimary>Add a page</Button>
					</div>

					<div className="bluhost-onboarding-step">
						<div>Make it look just right</div>
						<p>
							Use the customizer to go simple, bold&emdash;whatever&apos;s you.<br />
							Or browse themes and try &apos;em out.
						</p>
						<Button href={ `${ baseUrl }admin.php?page=bluehost#/marketplace/themes` } isLink>Browse themes</Button>
						<Button href={ `${ baseUrl }customize.php` } isPrimary>Customize your site</Button>
					</div>

					<div className="bluhost-onboarding-step">
						<div>Get ready to launch</div>
						<p>
							Your site has a &ldquo;coming soon&rdquo; message, which lets people know you&apos;re working on it.
							Check out our&nbsp;
							<a href="https://www.bluehost.com/help/article/website-publish-checklist">
								website pre-publishing checklist
							</a>&nbsp;
							to help get ready for launch.
						</p>
						<Button onClick={ launchHandler } isPrimary>Launch your site</Button>
					</div>

				</div>

			</div>

			<footer className="bluehost-onboarding-page-footer">

				<h3 className="bluehost-onboarding-page-footer__title">
					How-to&apos;s & next steps
				</h3>

				<div className="bluehost-onboarding-page-footer__content">
					<p>
						Learn how to add functionality to your site with plugins:<br />
						<a href="#">How to use WordPress plugins</a>
						<a href="#">The two essential plugins you need</a>
					</p>
					<p>
						Check out ecommerce tips:<br />
						<a href="#">Steps for adding a store to your site with WooCommerce</a>
						<a href="#">The five best WooCommerce WordPress themes</a>
					</p>
					<p>
						Get help from WordPress experts:<br />
						<a href="#">Our BlueSky experts are here to help you every step of the way</a>
					</p>
				</div>

			</footer>

		</div>
	);
}
