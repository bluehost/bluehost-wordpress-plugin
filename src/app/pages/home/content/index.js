/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { AppButton as Button, AppCard } from '@/components';
import { ButtonGroup } from '@wordpress/components';

const baseUrl = location.origin + '/wp-admin/';

const i18nSpace = 'endurance-wp-module-admin-app';

const PostsCard = () => (
	<AppCard
		icon="admin-post"
		title={ __( 'Blog Posts', i18nSpace ) }
		desc={ __( 'Add blog posts to your site. You can also organize them into categories.', i18nSpace ) }>
		<ButtonGroup>
			<Button href={ baseUrl + 'edit-tags.php?taxonomy=category' } isDefault>Manage Categories</Button>
			<Button href={ baseUrl + 'post-new.php' } isPrimary>New Post</Button>
		</ButtonGroup>
	</AppCard>
);

const PagesCard = () => (
	<AppCard
		icon="admin-page"
		title={ __( 'Pages', i18nSpace ) }
		desc={ __( 'If you are looking to adjust or control your navigation of your website simply click manage below and rearrange your menus.', i18nSpace ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'post-new.php?post_type=page' }
				isPrimary
			>
                New Page
			</Button>
		</ButtonGroup>
	</AppCard>
);

const MenusCard = () => (
	<AppCard
		icon="menu"
		title={ __( 'Navigation Menus', i18nSpace ) }
		desc={ __( 'Add pages to your website easily by clicking add new page.', i18nSpace ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'customize.php?autofocus[panel]=nav_menus' }
				isDefault
			>
                Manage Menus
			</Button>
		</ButtonGroup>
	</AppCard>
);

const ProductsCard = () => (
	<AppCard
		icon="cart"
		title={ __( 'Sell Products', 'endurance-wp-module-admin-app' ) }
		desc={ __( 'Are you are looking to sell products on your WordPress website? If so, we recommend that you install and setup WooCommerce.', i18nSpace ) }>
		<ButtonGroup>
			<Button
				href={ baseUrl + 'customize.php?autofocus[panel]=nav_menus' }
				isDefault
			>
                Install WooCommerce
			</Button>
		</ButtonGroup>
	</AppCard>
);

const ContentSection = () => (
	<section id="content" className={ 'pure-g' }>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<PostsCard />
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<PagesCard />
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<MenusCard />
		</div>
		<div className={ 'pure-u-1 pure-u-sm-1-2' }>
			<ProductsCard />
		</div>
	</section>
);

export default ContentSection;
