import { Button, Card, Title } from '@newfold/ui-component-library';
import SupportIllustration from 'App/images/section-home-help-me.svg';

const HelpCard = ( {} ) => {
	return (
		<Card className="wppbh-help-card">
			<Card.Content>
				<Title size={ 2 }>Need some help?</Title>
				<div className="nfd-flex nfd-flex-col nfd-gap-4 nfd-items-center nfd-text-center nfd-mt-4">
					<img
						className="nfd-max-w-xs"
						src={ SupportIllustration }
						alt="Help Agent Illustration"
					/>
					<p>
						{ __(
							'From DIY to full-service help.',
							'wp-plugin-bluehost'
						) }
					</p>
					<p>
						{ __(
							'Call or chat 24/7 for support or let our experts build your site for you.',
							'wp-plugin-bluehost'
						) }
					</p>
					<Button
						variant="secondary"
						as="a"
						href="#/help"
						className="wppbh-help-link"
					>
						{ __( 'Get Help', 'wp-plugin-bluehost' ) }
					</Button>
				</div>
			</Card.Content>
		</Card>
	);
};

export default HelpCard;
