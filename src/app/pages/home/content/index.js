/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { AppButton as Button } from '@/components';

/**
 * Internal dependencies
 */
import HomeSection from '../home-section';
import HomeSectionRow from '../home-section-row';

const baseUrl = location.origin + '/wp-admin/';

const i18nSpace = 'endurance-wp-module-admin-app';

const PostsCard = () => (
	<HomeSectionRow
		icon="admin-post"
		title={ __( 'Blog Posts', i18nSpace ) }
		desc={ __( 'Add blog posts or organize existing pages.', i18nSpace ) }>
		<Button href={ baseUrl + 'post-new.php' } isDefault>New Post</Button>
		<Button href={ baseUrl + 'edit-tags.php?taxonomy=category' } isLink>Manage Categories</Button>
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
			New Page
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
			Manage Menus
		</Button>
	</HomeSectionRow>
);

function ProductsCard() {
	if ( ! window.bluehost.wordpress.isWooActive ) {
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
				Manage Products
			</Button>
		</HomeSectionRow>
	);
}

const ContentSection = () => (
	<HomeSection title="Content" className="content">
		<PostsCard />
		<PagesCard />
		<MenusCard />
		<ProductsCard />
	</HomeSection>
);

export default ContentSection;
