import graphicUrl from '../../../../assets/svg/website-content.svg';
import { Heading } from '../../components';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Dashicon,
} from '@wordpress/components';

const WebContentSection = () => {
	return (
		<section className="wppb-section wppb-section-home-content">
			<img
				src={ graphicUrl }
				className="section-graphic"
				alt={ __( 'Website illustration', 'wp-plugin-blueprint' ) }
			/>
			<Card size="large" className="wppb-section-card">
				<CardHeader>
					<Heading level="3">
						{ __( 'Website Content', 'wp-plugin-blueprint' ) }
					</Heading>
					<p>
						{ __(
							'Create, manage & sort your story.',
							'wp-plugin-blueprint'
						) }
					</p>
				</CardHeader>
				<CardFooter>
					<div className="wppb-cardlist-content">
						<Heading level="4">
							<Dashicon icon="admin-post" />{ ' ' }
							{ __( 'Blog', 'wp-plugin-blueprint' ) }
						</Heading>
						<p>
							{ __(
								'Update your site with news as your story unfolds.',
								'wp-plugin-blueprint'
							) }
						</p>
					</div>
					<Button
						variant="primary"
						href={ WPPB.admin + 'post-new.php' }
						icon="admin-post"
					>
						{ ' ' }
						{ __( 'New Post', 'wp-plugin-blueprint' ) }{ ' ' }
					</Button>
				</CardFooter>
				<CardFooter>
					<div className="wppb-cardlist-content">
						<Heading level="4">
							<Dashicon icon="welcome-add-page" />{ ' ' }
							{ __( 'Pages', 'wp-plugin-blueprint' ) }
						</Heading>
						<p>
							{ __(
								"Share who you are, what you're about and how to get in touch.",
								'wp-plugin-blueprint'
							) }
						</p>
					</div>
					<Button
						variant="primary"
						href={ WPPB.admin + 'post-new.php?post_type=page' }
						icon="welcome-add-page"
					>
						{ __( 'New Page', 'wp-plugin-blueprint' ) }
					</Button>
				</CardFooter>
				<CardFooter>
					<div className="wppb-cardlist-content">
						<Heading level="4">
							<Dashicon icon="category" />{ ' ' }
							{ __( 'Categories', 'wp-plugin-blueprint' ) }
						</Heading>
						<p>
							{ __(
								'Sort your story so visitors can focus on their interests.',
								'wp-plugin-blueprint'
							) }
						</p>
					</div>
					<Button
						variant="secondary"
						href={ WPPB.admin + 'edit-tags.php?taxonomy=category' }
						icon="category"
					>
						{ __( 'Manage Categories', 'wp-plugin-blueprint' ) }
					</Button>
				</CardFooter>
			</Card>
		</section>
	);
};

export default WebContentSection;
