const help = [
	{
		name: 'ticket',
		title: __( 'Email Us', 'wp-plugin-blueprint' ),
		description: __(
			"Log in to your Account Manager to submit a support ticket. Once you open a ticket, we'll respond promptly to get it resolved.",
			'wp-plugin-blueprint'
		),
		icon: 'email',
		cta: __( 'Email Us', 'wp-plugin-blueprint' ),
		url: 'https://www.blueprint.com/contact/?utm_campaign=&utm_content=help_email_link&utm_term=email_us&utm_medium=brand_plugin&utm_source=wp-admin/admin.php?page=blueprint#/help',
	},
	{
		name: 'phone',
		title: __( 'Phone', 'wp-plugin-blueprint' ),
		description: __(
			'Contact one of our friendly Customer Care Specialists, as we are waiting to help at 213 559 2459. Open 24 hours - 7 days.',
			'wp-plugin-blueprint'
		),
		icon: 'phone',
		cta: __( 'Call Us', 'wp-plugin-blueprint' ),
		url: 'tel:2135592459',
	},
	{
		name: 'chat',
		title: __( 'Chat', 'wp-plugin-blueprint' ),
		description: __(
			'Chat with one of our friendly Customer Care Specialists, as we are waiting to help. Open 24 hours - 7 days.',
			'wp-plugin-blueprint'
		),
		icon: 'format-chat',
		cta: __( 'Live Chat', 'wp-plugin-blueprint' ),
		url: 'https://www.blueprint.com.au/contact/#allday?utm_campaign=&utm_content=help_chat_link&utm_term=live_chat&utm_medium=brand_plugin&utm_source=wp-admin/admin.php?page=blueprint#/help',
	},
	{
		name: 'twitter',
		title: __( 'Tweet', 'wp-plugin-blueprint' ),
		description: __(
			'Find our team at @blueprint for updates on our products and support from our team.',
			'wp-plugin-blueprint'
		),
		icon: 'twitter',
		cta: __( 'Tweet Us', 'wp-plugin-blueprint' ),
		url: 'https://twitter.com/blueprint',
	},
	{
		name: 'help',
		title: __( 'Online Support', 'wp-plugin-blueprint' ),
		description: __(
			"Find tutorials, answers and guides in our online support knowledge base.",
			'wp-plugin-blueprint'
		),
		icon: 'book',
		cta: __( 'We can help', 'wp-plugin-blueprint' ),
		url: 'https://www.blueprint.com/help/?utm_campaign=&utm_content=help_help_link&utm_term=we_can_help&utm_medium=brand_plugin&utm_source=wp-admin/admin.php?page=blueprint#/help',
	},
	{
		name: 'academy',
		title: __( 'Online Academy', 'wp-plugin-blueprint' ),
		description: __(
			'Boost your online knowledge and get ahead of the competition.',
			'wp-plugin-blueprint'
		),
		icon: 'book',
		cta: __( 'View Courses', 'wp-plugin-blueprint' ),
		url: 'https://www.blueprint.com/learn/online-academy/?utm_campaign=&utm_content=help_kb_link&utm_term=find_answers&utm_medium=brand_plugin&utm_source=wp-admin/admin.php?page=blueprint#/help',
	},
	{
		name: 'blog',
		title: __( 'Blog', 'wp-plugin-blueprint' ),
		description: __(
			'Learn best practices, get insider tips and find the latest news about Blueprint.',
			'wp-plugin-blueprint'
		),
		icon: 'text-page',
		cta: __( 'Learn Stuff', 'wp-plugin-blueprint' ),
		url: 'https://www.blueprint.com/learn/?utm_campaign=&utm_content=help_blog_link&utm_term=learn_stuff&utm_medium=brand_plugin&utm_source=wp-admin/admin.php?page=blueprint#/help',
	},
	{
		name: 'video',
		title: __( 'Video Tutorials', 'wp-plugin-blueprint' ),
		description: __(
			'Check out our video library of step-by-step tutorials.',
			'wp-plugin-blueprint'
		),
		icon: 'format-video',
		cta: __( 'Watch Now', 'wp-plugin-blueprint' ),
		url: 'https://www.youtube.com/user/Blueprint',
	},
];

export default help;
