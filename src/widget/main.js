import './main.scss';

import { useEffect, useState } from '@wordpress/element';

import apiFetch from '@wordpress/api-fetch';

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
            } else {
                console.log( 'the else');
            }
        }).catch( error => {
            console.log( error );
        })
    }, []);
    if (isLoading) {
        return <div>Loading blog posts...</div>
    }
    return (
        <div className="blog-posts">
            <ul>
                {blogPosts.map( post => {
                    return (
                        <li key={post.node.id} id={post.node.id}>
                            <a href={'https://bluehost.com/blog' + post.node.uri } target="_blank">
                                {post.node.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const WidgetMain = () => {
    return(
        <div className="bluehost-widget">  
            <BlogPosts />
        </div>
    )
}

export default WidgetMain;