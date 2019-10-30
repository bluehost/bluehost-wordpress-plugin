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

const PostsCard = () => (
	<HomeSectionRow
		icon="admin-post"
		title={ __( 'Blog Posts', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Add blog posts or organize existing pages.', 'bluehost-wordpress-plugin' ) }>
		<Button href={ baseUrl + 'post-new.php' } isDefault>{ __('New Post', 'bluehost-wordpress-plugin') }</Button>
		<Button href={ baseUrl + 'edit-tags.php?taxonomy=category' } isLink>{ __('Manage Categories', 'bluehost-wordpress-plugin') }</Button>
	</HomeSectionRow>
);

const PagesCard = () => (
	<HomeSectionRow
		icon="admin-page"
		title={ __( 'Pages', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Add fresh pages to your website.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ baseUrl + 'post-new.php?post_type=page' }
			isDefault
		>
			{ __('New Page', 'bluehost-wordpress-plugin')}
		</Button>
	</HomeSectionRow>
);

const MenusCard = () => (
	<HomeSectionRow
		icon="menu"
		title={ __( 'Navigation Menus', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Adjust or edit your site\'s navigation menus.', 'bluehost-wordpress-plugin' ) }>
		<Button
			href={ baseUrl + 'customize.php?autofocus[panel]=nav_menus' }
			isDefault
		>
			{__('Manage Menus', 'bluehost-wordpress-plugin')}
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
			title={ __( 'Sell Products', 'bluehost-wordpress-plugin' ) }
			desc={ __( 'Manage products in your online store.', 'bluehost-wordpress-plugin' ) }>
			<Button
				href={ baseUrl + 'edit.php?post_type=product' }
				isDefault
			>
				{ __('Manage Products', 'bluehost-wordpress-plugin')}
			</Button>
		</HomeSectionRow>
	);
}

const ContentSection = () => (
	<HomeSection title={__('Content', 'bluehost-wordpress-plugin')} className="content">
		<>
			<PostsCard />
			<PagesCard />
			<MenusCard />
			<ProductsCard />
		</>
	</HomeSection>
);

export default ContentSection;
