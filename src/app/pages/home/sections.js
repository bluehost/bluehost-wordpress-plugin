import { select, useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element'
import { BWAHeading, BWAButton } from '@app/components/atoms';
import { BWAContentList, BWAContentListRow } from '@app/components/molecules';
import { __ } from '@wordpress/i18n';
import { JetpackLogo } from '@app/assets';
import { getPlatformBaseUrl, getPlatformPathUrl } from '@app/functions';

const baseUrl = select('bluehost/plugin').getAdminUrl();

export const WelcomeSection = () => (
	<div className="welcome-section">
		<BWAHeading level="h2" size="welcome">
			{ __( 'Welcome to your WordPress site!', 'bluehost-wordpress-plugin' ) }
		</BWAHeading>
		<p>{ __( 'From here, you can quickly add content to your site, manage for-sale products, work on your site\’s design and performance, manage hosting, and access tools to increase your traffic.', 'bluehost-wordpress-plugin' ) }</p>
	</div>
);

export const TrafficEngagementSection = () => {
    const isJetpackActive = useSelect( select => {
        return select('bluehost/plugin').isJetpackActive();
    }, []);
    if ( ! isJetpackActive ) {
        return false;
    }
    const SocialCard = () => {
        return (
            <BWAContentListRow
                icon="share"
                title={ __( 'Social', 'bluehost-wordpress-plugin' ) }
                desc={ __( 'Add social sharing buttons so site visitors can share your content and help grow your traffic.', 'bluehost-wordpress-plugin' ) }>
                <BWAButton
                    href={ baseUrl + 'admin.php?page=jetpack#/sharing' }
                    isSecondary
                >
                    { __( 'Manage Social', 'bluehost-wordpress-plugin' ) }
                </BWAButton>
            </BWAContentListRow>
        );
    }
    
    const PublicizeCard = () => {
        return (
            <BWAContentListRow
                icon="megaphone"
                title={ __( 'Publicize', 'bluehost-wordpress-plugin' ) }
                desc={ __( 'Set your site to automatically share new content with your social networks.', 'bluehost-wordpress-plugin' ) }>
                <BWAButton
                    href={ baseUrl + 'admin.php?page=jetpack#/sharing' }
                    isSecondary
                >
                    { __( 'Set Sharing', 'bluehost-wordpress-plugin' ) }
                </BWAButton>
            </BWAContentListRow>
        );
    }
    
    const StatsCard = () => {
        return (
            <BWAContentListRow
                isCentered
                icon="chart-bar"
                title={ __( 'Stats', 'bluehost-wordpress-plugin' ) }
                desc={ __( 'Learn which posts are the most popular and stay informed when your traffic surges.', 'bluehost-wordpress-plugin' ) }>
                <BWAButton
                    href={ baseUrl + 'admin.php?page=stats' }
                    isSecondary
                >
                    { __( 'View Stats', 'bluehost-wordpress-plugin' ) }
                </BWAButton>
            </BWAContentListRow>
        );
    }
	return (
		<BWAContentList title={ __( 'Traffic & Engagement', 'bluehost-wordpress-plugin' ) } className="traffic">
			<SocialCard />
			<PublicizeCard />
			<StatsCard />
		</BWAContentList>
	);
};

export const PerformanceSection = () => {
    const CacheCard = () => (
        <BWAContentListRow
            isCentered
            icon="performance"
            title={ __( 'Page Cache', 'bluehost-wordpress-plugin' ) }
            desc={ __( 'Configure your caching to give you the best performance for your site’s needs.', 'bluehost-wordpress-plugin' ) }>
            <BWAButton
                href={ baseUrl + 'admin.php?page=bluehost#/settings' }
                isSecondary
            >
                { __( 'Configure Caching', 'bluehost-wordpress-plugin' ) }
            </BWAButton>
        </BWAContentListRow>
    );
    
    const SiteAcceleratorCard = () => {
        const isJetpackActive = useSelect( select => {
            return select('bluehost/plugin').isJetpackActive();
        }, []);
        if ( ! isJetpackActive ) {
            return false;
        }
        return (
            <BWAContentListRow
                isCentered
                icon={ ( <JetpackLogo /> ) }
                title={ __( 'Site Accelerator', 'bluehost-wordpress-plugin' ) }
                desc={ __( 'Site acceleration service will resize your images and serve them from Jetpack\'s CDN.', 'bluehost-wordpress-plugin' ) }>
                <BWAButton
                    href={ baseUrl + 'admin.php?page=jetpack#/performance' }
                    isSecondary
                >
                    { __( 'Configure Site Accelerator', 'bluehost-wordpress-plugin' ) }
                </BWAButton>
            </BWAContentListRow>
        );
    };
    return (
        <BWAContentList title="Performance" className="performance">
            <>
                <CacheCard />
                <SiteAcceleratorCard />
            </>
        </BWAContentList>
    )
};

export const HostingSection = () => { 
    const isJarvis = 'undefined' !== typeof window.nfdplugin.isJarvis ? window.nfdplugin.isJarvis : false;

    const ManageMySitesCard = () => (
        <BWAContentListRow
            icon="desktop"
            title={ __('Manage My Sites', 'bluehost-wordpress-plugin') }
            desc={ __('Manage your site from Bluehost\'s control panel. You can create backups, set security, and improve performance.', 'bluehost-wordpress-plugin') }>
            <BWAButton
                href={ getPlatformPathUrl('details', 'app#/sites') }
                isSecondary
                utmContent="home_hosting_mysites_link"
            >
                { __('Manage', 'bluehost-wordpress-plugin') }
            </BWAButton>
        </BWAContentListRow>
    );
    
    const EmailCard = () => (
        <BWAContentListRow
            icon="email"
            title={ __('Email', 'bluehost-wordpress-plugin') }
            desc={ __('Create email accounts, compose, send, and receive your email from your Bluehost control panel.', 'bluehost-wordpress-plugin') }>
            <BWAButton
                href={ getPlatformPathUrl('home', 'app#/email-office') }
                isSecondary
                utmContent="home_hosting_email_link"
            >
                { __('Manage', 'bluehost-wordpress-plugin') }
            </BWAButton>
        </BWAContentListRow>
    );
    
    const DomainsCard = () => (
        <BWAContentListRow
            icon="admin-site"
            title={ __('Domains', 'bluehost-wordpress-plugin') }
            desc={ __('Find a new domain and assign it to your site or start a new site with a fresh domain.', 'bluehost-wordpress-plugin') }>
            <BWAButton
                href={ getPlatformPathUrl('domain-center/domain-list', 'app#/domains') }
                isSecondary
                utmContent="home_hosting_find_domain_link"
            >
                { __('Find a Domain', 'bluehost-wordpress-plugin') }
            </BWAButton>
        </BWAContentListRow>
    );
    
    const HelpCard = () => (
        <BWAContentListRow
            icon="editor-help"
            title={ __('Help', 'bluehost-wordpress-plugin') }
            desc={ __('Get help from Bluehost’s U.S.-based award-winning support team. It’s available 24/7 through phone and chat.', 'bluehost-wordpress-plugin') }>
            <BWAButton
                href={getPlatformBaseUrl('/hosting/help')}
                isSecondary
                utmContent="home_hosting_help_link"
            >
                { __('Help Me', 'bluehost-wordpress-plugin') }
            </BWAButton>
        </BWAContentListRow>
    );

    return ( 
        <BWAContentList title={ __('Hosting', 'bluehost-wordpress-plugin') } className="hosting">
            <ManageMySitesCard />
            <EmailCard />
            <DomainsCard />
            <HelpCard />
        </BWAContentList>
    );
}

export const DesignBuildSection = ( props ) => {
    const CustomizerCard = () => (
        <BWAContentListRow
            icon="admin-customizer"
            title={ __( 'Customizer', 'bluehost-wordpress-plugin' ) }
            desc={ __( 'Make edits and see changes before you update.', 'bluehost-wordpress-plugin' ) }>
            <BWAButton
                href={ window.nfdplugin.restApiUrl + '/bluehost/v1/customize-site' }
                isSecondary
            >
                { __( 'Customize Theme', 'bluehost-wordpress-plugin' ) }
            </BWAButton>
        </BWAContentListRow>
    );
    
    const ThemesCard = () => (
        <BWAContentListRow
            icon="admin-appearance"
            title={ __( 'WordPress Themes', 'bluehost-wordpress-plugin' ) }
            desc={ __( 'Browse themes to find one that inspires you!', 'bluehost-wordpress-plugin' ) }>
            <BWAButton
                href={ baseUrl + 'themes.php' }
                isSecondary
            >
                { __( 'Free Themes', 'bluehost-wordpress-plugin' ) }
            </BWAButton>
        </BWAContentListRow>
    );
    return(
        <BWAContentList title={ __( 'Design & Build', 'bluehost-wordpress-plugin' ) } className="design">
            <CustomizerCard />
            <ThemesCard />
        </BWAContentList>
    );
}

export const ContentSection = () => { 
    const PostsCard = () => (
        <BWAContentListRow
            icon="admin-post"
            title={ __( 'Blog Posts', 'bluehost-wordpress-plugin' ) }
            desc={ __( 'Add blog posts or organize existing pages.', 'bluehost-wordpress-plugin' ) }
        >
            <BWAButton href={ baseUrl + 'post-new.php' } isSecondary>{ __( 'New Post', 'bluehost-wordpress-plugin' ) }</BWAButton>
            <BWAButton href={ baseUrl + 'edit-tags.php?taxonomy=category' } isLink>{ __( 'Manage Categories', 'bluehost-wordpress-plugin' ) }</BWAButton>
        </BWAContentListRow>
    );
    
    const PagesCard = () => (
        <BWAContentListRow
            icon="admin-page"
            title={ __( 'Pages', 'bluehost-wordpress-plugin' ) }
            desc={ __( 'Add fresh pages to your website.', 'bluehost-wordpress-plugin' ) }
        >
            <BWAButton
                href={ baseUrl + 'post-new.php?post_type=page' }
                isSecondary
            >
                { __( 'New Page', 'bluehost-wordpress-plugin' ) }
            </BWAButton>
        </BWAContentListRow>
    );
    
    const MenusCard = () => (
        <BWAContentListRow
            icon="menu"
            title={ __( 'Navigation Menus', 'bluehost-wordpress-plugin' ) }
            desc={ __( 'Adjust or edit your site\'s navigation menus.', 'bluehost-wordpress-plugin' ) }
        >
            <BWAButton
                href={ baseUrl + 'customize.php?autofocus[panel]=nav_menus' }
                isSecondary
            >
                { __( 'Manage Menus', 'bluehost-wordpress-plugin' ) }
            </BWAButton>
        </BWAContentListRow>
    );
    
    const ProductsCard = () => {
        const isWooActive = useSelect( select => {
            return select('bluehost/plugin').isWooActive();
        }, []);
        if ( ! isWooActive ) {
            return null;
        }
        return (
            <BWAContentListRow
                icon="cart"
                title={ __( 'Products', 'bluehost-wordpress-plugin' ) }
                desc={ __( 'Manage products in your online store.', 'bluehost-wordpress-plugin' ) }
            >
                <BWAButton
                    href={ baseUrl + 'edit.php?post_type=product' }
                    isSecondary
                >
                    { __( 'Manage Products', 'bluehost-wordpress-plugin' ) }
                </BWAButton>
            </BWAContentListRow>
        );
    };
    
    const ReusableBlockCard = () => {

        const wp = useSelect( select => {
            return select('bluehost/plugin').getWP();
        }, []);

        if ( 'undefined' !== typeof wp && wp.hasReusableBlocks ) {
            return (
                <BWAContentListRow
                    icon="schedule"
                    title={ __( 'Reusable Blocks', 'bluehost-wordpress-plugin' ) }
                    desc={ __( 'Reuse and manage the same content in multiple pages.', 'bluehost-wordpress-plugin' ) }
                >
                    <BWAButton
                        href={ baseUrl + 'edit.php?post_type=wp_block' }
                        isSecondary
                    >
                        { __( 'Reusable Blocks', 'bluehost-wordpress-plugin' ) }
                    </BWAButton>
                </BWAContentListRow>
            );
        }
        
        return null;
    };
    return(
        <BWAContentList title={ __( 'Content', 'bluehost-wordpress-plugin' ) } className="content">
            <Fragment>
                <PostsCard />
                <PagesCard />
                <ProductsCard />
                <ReusableBlockCard />
                <MenusCard />
            </Fragment>
        </BWAContentList>
    )
};

export default {
    WelcomeSection,
    TrafficEngagementSection,
    PerformanceSection,
    HostingSection,
    DesignBuildSection,
    ContentSection
}
