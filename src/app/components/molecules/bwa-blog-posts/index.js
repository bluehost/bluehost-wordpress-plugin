import './style.scss';

import { useEffect, useState } from '@wordpress/element';

import { __ } from '@wordpress/i18n';
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';

export const buildUtmUrl = ( url ) => {
    return addQueryArgs(url, {
        'utm_source': 'wp-admin/index.php',
        'utm_medium': 'bluehost_plugin',
        'utm_content': 'bluehost_' + location,
        'utm_term': 'Bluehost Widget WordPress Dashboard',
    });
}

export const BWABlogPosts = ({ location = 'plugin' }) => {
    const [status, setStatus] = useState('loading');
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
                setStatus( 'loaded' );
            }
        }).catch( error => {})
    }, []);
    
    if ('loading' === status) {
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

    if ( 'error' === status ) {
        return <div>Error</div>
    }
    return (
        <div className="component-blog-posts">
            <ul className="list">
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

export default { BWABlogPosts, buildUtmUrl };