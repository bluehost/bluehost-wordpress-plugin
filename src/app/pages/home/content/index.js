import {
	BWAContentList,
	BWAContentListRow
} from '@app/components/molecules';

import { BWAButton as Button } from '@app/components/atoms';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';

const baseUrl = select('bluehost/plugin').getAdminUrl();

const PostsCard = () => (
	<BWAContentListRow
		icon="admin-post"
		title={ __( 'Blog Posts', 'bluehost-wordpress-plugin' ) }
		desc={ __( 'Add blog posts or organize existing pages.', 'bluehost-wordpress-plugin' ) }
	>
		<Button href={ baseUrl + 'post-new.php' } isSecondary>{ __( 'New Post', 'bluehost-wordpress-plugin' ) }</Button>
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
			isSecondary
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
			isSecondary
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
			title={ __( 'Products', 'bluehost-wordpress-plugin' ) }
			desc={ __( 'Manage products in your online store.', 'bluehost-wordpress-plugin' ) }
		>
			<Button
				href={ baseUrl + 'edit.php?post_type=product' }
				isSecondary
			>
				{ __( 'Manage Products', 'bluehost-wordpress-plugin' ) }
			</Button>
		</BWAContentListRow>
	);
};

const ReusableBlockCard = () => {
	const wp = select( 'bluehost/plugin' ).getWP();
	if ( wp.hasReusableBlocks ) {
		return (
			<BWAContentListRow
				icon="schedule"
				title={ __( 'Reusable Blocks', 'bluehost-wordpress-plugin' ) }
				desc={ __( 'Reuse and manage the same content in multiple pages.', 'bluehost-wordpress-plugin' ) }
			>
				<Button
					href={ baseUrl + 'edit.php?post_type=wp_block' }
					isSecondary
				>
					{ __( 'Reusable Blocks', 'bluehost-wordpress-plugin' ) }
				</Button>
			</BWAContentListRow>
		);
	}
	
	return null;
};

const ContentSection = () => (
	<BWAContentList title={ __( 'Content', 'bluehost-wordpress-plugin' ) } className="content">
		<>
			<PostsCard />
			<PagesCard />
			<ProductsCard />
			<ReusableBlockCard />
			<MenusCard />
		</>
	</BWAContentList>
);

export default ContentSection;
