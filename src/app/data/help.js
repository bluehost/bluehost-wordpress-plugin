import { getPlatformBaseUrl } from "../util/helpers";

const getSupportPhoneNumber = () => {
	const brand = window.WPPBH.env.brand;

	if ( brand === 'Bluehost_India' ) {
		return '1800-419-4426';
	}

	return '888-401-4678';
}
const help = [
	{
		name: 'phone',
		title: __( 'Phone', 'wp-plugin-bluehost' ),
		description: __(
			"Contact one of our friendly Customer Care Specialists, as we are waiting to help at " + getSupportPhoneNumber() + ". Open 24 hours - 7 days.",
			'wp-plugin-bluehost'
		),
		icon: false,
		cta: __( 'Call Us', 'wp-plugin-bluehost' ),
		url: 'tel:' + getSupportPhoneNumber(),
	},
	{
		name: 'chat',
		title: __( 'Chat', 'wp-plugin-bluehost' ),
		description: __(
			'Chat with one of our friendly Customer Care Specialists, as we are waiting to help. Open 24 hours - 7 days.',
			'wp-plugin-bluehost'
		),
		icon: false,
		cta: __( 'Live Chat', 'wp-plugin-bluehost' ),
		url: getPlatformBaseUrl() + '/contact/?utm_campaign=&utm_content=help_chat_link&utm_term=live_chat&utm_medium=brand_plugin&utm_source=wp-admin/admin.php?page=bluehost#/help',
	},
	{
		name: 'twitter',
		title: __( 'Tweet', 'wp-plugin-bluehost' ),
		description: __(
			'Find our team at @bluehost for updates on our products and support from our team.',
			'wp-plugin-bluehost'
		),
		icon: false,
		cta: __( 'Tweet Us', 'wp-plugin-bluehost' ),
		url: 'https://twitter.com/bluehost',
	},
	{
		name: 'youtube',
		title: __( 'YouTube', 'wp-plugin-bluehost' ),
		description: __(
			"Find tutorials, answers, interviews and guides on our YouTube channel.",
			'wp-plugin-bluehost'
		),
		icon: false,
		cta: __( 'Watch Now', 'wp-plugin-bluehost' ),
		url: 'http://www.youtube.com/user/bluehost',
	},
	{
		name: 'kb',
		title: __( 'Knowledge Base', 'wp-plugin-bluehost' ),
		description: __(
			"Articles, guides, how-tos, instructions, and answers to our client's most frequently asked questions.",
			'wp-plugin-bluehost'
		),
		icon: false,
		cta: __( 'Visit Knowledge Base', 'wp-plugin-bluehost' ),
		url: getPlatformBaseUrl() + '/help/?utm_campaign=&utm_content=help_help_link&utm_term=we_can_help&utm_medium=brand_plugin&utm_source=wp-admin/admin.php?page=bluehost#/help',
	},
	{
		name: 'resources',
		title: __( 'Resources', 'wp-plugin-bluehost' ),
		description: __(
			'Boost your online knowledge and get ahead of the competition.',
			'wp-plugin-bluehost'
		),
		icon: false,
		cta: __( 'Explore Resources', 'wp-plugin-bluehost' ),
		url: getPlatformBaseUrl() + '/blog/?utm_campaign=&utm_content=help_kb_link&utm_term=find_answers&utm_medium=brand_plugin&utm_source=wp-admin/admin.php?page=bluehost#/help',
	},
	{
		name: 'events',
		title: __( 'Events and Webinars', 'wp-plugin-bluehost' ),
		description: __(
			'Team Bluehost organizes multiple webinars and events throughout the year. We are also sponsors and speak at most WordCamps across the world. Join us at our next event!',
			'wp-plugin-bluehost'
		),
		icon: false,
		cta: __( 'More Info', 'wp-plugin-bluehost' ),
		url: 'https://www.bluehost.com/learn/?utm_campaign=&utm_content=help_blog_link&utm_term=learn_stuff&utm_medium=brand_plugin&utm_source=wp-admin/admin.php?page=bluehost#/help',
	},
	{
		name: 'website',
		title: __( 'Bluehost Website', 'wp-plugin-bluehost' ),
		description: __(
			'Not finding what you need? Visit our website for more information about our products and services.',
			'wp-plugin-bluehost'
		),
		icon: false,
		cta: __( 'Go to Bluehost', 'wp-plugin-bluehost' ),
		url: getPlatformBaseUrl(),
	},
];

export default help;
