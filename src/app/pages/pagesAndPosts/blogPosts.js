import { Button, Card, Title } from '@newfold/ui-component-library';

const BlogPosts = () => {
  return <Card style={{
    borderRadius: 0,
    borderTop: 0
  }}>
    <Card.Content>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#F9F5FE" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 15H31C32.6569 15 34 16.3431 34 18V26C34 27.6569 32.6569 29 31 29H26.414L21.7071 33.7071C21.1045 34.3097 20.0928 33.9277 20.006 33.1136L20 33V29H17C15.4023 29 14.0963 27.7511 14.0051 26.1763L14 26V18C14 16.3431 15.3431 15 17 15ZM31 17H17C16.4477 17 16 17.4477 16 18V26C16 26.5523 16.4477 27 17 27H21C21.5523 27 22 27.4477 22 28V30.584L25.2929 27.2929C25.4492 27.1366 25.6519 27.0374 25.8686 27.0087L26 27H31C31.5523 27 32 26.5523 32 26V18C32 17.4477 31.5523 17 31 17Z" fill="#7D3CCA" />
      </svg>
      <Title size="4" className="nfd-leading-normal nfd-my-4">
        {__('Blog Posts', 'wp-plugin-bluehost')}
      </Title>
      <p>{__('Add a new blog post or edit your existing posts.', 'wp-plugin-bluehost')}</p>
    </Card.Content>
    <div className="nfd-flex nfd-justify-end nfd-gap-6 nfd-items-center">
      <a href='edit.php'>{__('view all', 'wp-plugin-bluehost')}</a>
      <a href='post-new.php'>
        <Button>{__('Add New', 'wp-plugin-bluehost')}</Button>
      </a>
    </div>
  </Card >;
};

export default BlogPosts;
