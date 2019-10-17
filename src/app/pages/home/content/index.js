/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
/**
 * External dependencies
 */
import { AppButton as Button } from '@/components';

/**
 * Internal dependencies
 */
import HomeSection from '../home-section';
import HomeSectionRow from '../home-section-row';

const baseUrl = location.origin + '/wp-admin/';
const i18nSpace = 'bluehost-wordpress-plugin';

const PostsCard = () => (
	<HomeSectionRow
		icon="admin-post"
		title={ __( 'Blog Posts', i18nSpace ) }
		desc={ __( 'Add blog posts or organize existing pages.', i18nSpace ) }>
		<Button href={ baseUrl + 'post-new.php' } isDefault>{ __('New Post', i18nSpace) }</Button>
		<Button href={ baseUrl + 'edit-tags.php?taxonomy=category' } isLink>{ __('Manage Categories', i18nSpace) }</Button>
	</HomeSectionRow>
);

const PagesCard = () => (
	<HomeSectionRow
		icon="admin-page"
		title={ __( 'Pages', i18nSpace ) }
		desc={ __( 'Add fresh pages to your website.', i18nSpace ) }>
		<Button
			href={ baseUrl + 'post-new.php?post_type=page' }
			isDefault
		>
			{ __('New Page', i18nSpace)}
		</Button>
	</HomeSectionRow>
);

const MenusCard = () => (
	<HomeSectionRow
		icon="menu"
		title={ __( 'Navigation Menus', i18nSpace ) }
		desc={ __( 'Adjust or edit your site\'s navigation menus.', i18nSpace ) }>
		<Button
			href={ baseUrl + 'customize.php?autofocus[panel]=nav_menus' }
			isDefault
		>
			{__('Manage Menus', i18nSpace)}
		</Button>
	</HomeSectionRow>
);

const ProductsCard = () => {
	if ( ! select('bluehost/plugin').isWooActive() ) {
		return null;
	}
	return (
		<HomeSectionRow
			icon="cart"
			title={ __( 'Sell Products', 'endurance-wp-module-admin-app' ) }
			desc={ __( 'Manage products in your online store.', i18nSpace ) }>
			<Button
				href={ baseUrl + 'customize.php?autofocus[panel]=nav_menus' }
				isDefault
			>
				{ __('Manage Products', i18nSpace)}
			</Button>
		</HomeSectionRow>
	);
}

const ContentSection = () => (
	<HomeSection title={__('Content', i18nSpace)} className="content">
		<>
			<PostsCard />
			<PagesCard />
			<MenusCard />
			<ProductsCard />
		</>
	</HomeSection>
);

export default ContentSection;
