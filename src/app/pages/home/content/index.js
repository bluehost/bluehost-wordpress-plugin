/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
import { BWAButton as Button } from '@/components/atoms';

import {
	BWAContentList,
	BWAContentListRow
} from '@/components/molecules';


const baseUrl = location.origin + '/wp-admin/';

const PostsCard = () => (
	<BWAContentListRow
		icon="admin-post"
		title={ __( 'Blog Posts', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Add blog posts or organize existing pages.', 'bluehost-wordpress-plugin' ) }
	>
		<Button href={ baseUrl + 'post-new.php' } isDefault>{ __( 'New Post', 'bluehost-wordpress-plugin' ) }</Button>
		<Button href={ baseUrl + 'edit-tags.php?taxonomy=category' } isLink>{ __( 'Manage Categories', 'bluehost-wordpress-plugin' ) }</Button>
	</BWAContentListRow>
);

const PagesCard = () => (
	<BWAContentListRow
		icon="admin-page"
		title={ __( 'Pages', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Add fresh pages to your website.', 'bluehost-wordpress-plugin' ) }
	>
		<Button
			href={ baseUrl + 'post-new.php?post_type=page' }
			isDefault
		>
			{ __( 'New Page', 'bluehost-wordpress-plugin' ) }
		</Button>
	</BWAContentListRow>
);

const MenusCard = () => (
	<BWAContentListRow
		icon="menu"
		title={ __( 'Navigation Menus', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Adjust or edit your site\'s navigation menus.', 'bluehost-wordpress-plugin' ) }
	>
		<Button
			href={ baseUrl + 'customize.php?autofocus[panel]=nav_menus' }
			isDefault
		>
			{ __( 'Manage Menus', 'bluehost-wordpress-plugin' ) }
		</Button>
	</BWAContentListRow>
);

const ProductsCard = () => {
	if ( ! select( 'bluehost/plugin' ).isWooActive() ) {
		return null;
	}
	return (
		<BWAContentListRow
			icon="cart"
			title={ __( 'Sell Products', 'bluehost-wordpress-plugin' ) }
			desc={ __( 'Manage products in your online store.', 'bluehost-wordpress-plugin' ) }
		>
			<Button
				href={ baseUrl + 'edit.php?post_type=product' }
				isDefault
			>
				{ __( 'Manage Products', 'bluehost-wordpress-plugin' ) }
			</Button>
		</BWAContentListRow>
	);
};

const ContentSection = () => (
	<BWAContentList title={ __( 'Content', 'bluehost-wordpress-plugin' ) } className="content">
		<>
			<PostsCard />
			<PagesCard />
			<MenusCard />
			<ProductsCard />
		</>
	</BWAContentList>
);

export default ContentSection;
