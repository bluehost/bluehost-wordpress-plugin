import classNames from 'classnames';
import { Container, Page } from '@newfold/ui-component-library';
import useContainerBlockIsTarget from 'App/util/hooks/useContainerBlockTarget';
import AutomaticUpdates from './automaticUpdates';
import CommentSettings from './commentSettings';
import ComingSoon from './comingSoon';
import ContentSettings from './contentSettings';

const Settings = () => {
	return (
		<Page title="Settings" className={ 'wppbh-app-settings-page' }>
			<Container className={ 'wppbh-app-settings-container' }>
				<Container.Header
					title={ __( 'Settings', 'wp-plugin-bluehost' ) }
					description={ __(
						'This is where you can manage common settings for your website.',
						'wp-plugin-bluehost'
					) }
					className={ 'wppbh-app-settings-header' }
				/>

				<Container.Block
					separator={ true }
					id={ 'coming-soon-section' }
					className={ classNames(
						'wppbh-app-settings-coming-soon',
						useContainerBlockIsTarget( 'coming-soon-section' ) &&
							'wppbh-animation-blink'
					) }
				>
					<ComingSoon />
				</Container.Block>

				<Container.Block
					separator={ true }
					className={ 'wppbh-app-settings-update' }
				>
					<AutomaticUpdates />
				</Container.Block>

				<Container.Block
					separator={ true }
					className={ 'wppbh-app-settings-content' }
				>
					<ContentSettings />
				</Container.Block>

				<Container.Block className={ 'wppbh-app-settings-comments' }>
					<CommentSettings />
				</Container.Block>
			</Container>
		</Page>
	);
};

export default Settings;
