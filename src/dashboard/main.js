import './main.scss';

import { useEffect, useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';

const buildUtmUrl = ( url ) => {
    return addQueryArgs(url, {
        'utm_source': 'wp-admin/index.php',
        'utm_medium': 'bluehost_plugin',
        'utm_content': 'bluehost_dashboard_widget',
        'utm_term': 'Bluehost Widget WordPress Dashboard',
    });
}

const BlogPosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [blogPosts, setBlogPosts] = useState(null);
    
    useEffect(() => {
        apiFetch({
            path: '/bluehost/v1/blog'
        }).then( raw => {
            const response = JSON.parse( raw );
            if ( 'undefined' !== typeof response.result ) {
                let data = response.result.data;
                let posts = [
                    { ...data.news.edges[0] },
                    { ...data.news.edges[1] },
                    { ...data.news.edges[2] },
                    { ...data.spotlight.edges[0] },
                    { ...data.updates.edges[0] },
                ];
                setBlogPosts( posts );
                setIsLoading( false );
            }
        }).catch( error => {})
    }, []);
    
    if (isLoading) {
        return (
            <div style={{ minHeight: '138px', paddingTop: '6px' }}>
                <div className="slick-loading loading-link" style={{ width: '70%' }} />
                <div className="slick-loading loading-link" style={{ width: '55%' }} />
                <div className="slick-loading loading-link" style={{ width: '80%' }} />
                <div className="slick-loading loading-link" style={{ width: '60%' }} />
                <div className="slick-loading loading-link" style={{ width: '70%' }} />
                <div className="slick-loading loading-link" style={{ width: '10%' }} />
            </div>
        )
    }
    return (
        <div className="blog-posts">
            <ul>
                {blogPosts.map( post => {
                    return (
                        <li key={post.node.id} id={post.node.id}>
                            <a href={buildUtmUrl('https://bluehost.com/blog' + post.node.uri)}>
                                {post.node.title}
                            </a>
                        </li>
                    )
                })}
                <li><a href={buildUtmUrl('https://bluehost.com/blog')}>{__('See More', 'bluehost-wordpress-plugin')}</a></li>
            </ul>
        </div>
    )
}

const WidgetMain = () => {
    return(
        <div className="bluehost-widget-main">
            <h3>{__('Latest from the Bluehost Blog', 'bluehost-wordpress-plugin')}</h3>
            <BlogPosts />
            <div style={{borderTop: '1px solid #f0f0f1', padding: '0 12px'}}>
                <ul style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0' }}>
                    <li><a href={buildUtmUrl('https://bluehost.com/resources')} target="_blank">Resource Center</a></li>
                    <li><a href="admin.php?page=bluehost#/help">Get Help</a></li>
                    <li><a href={buildUtmUrl('https://my.bluehost.com')} target="_blank">Manage Account</a></li>
                </ul>
            </div>
        </div>
    )
}

export default WidgetMain;