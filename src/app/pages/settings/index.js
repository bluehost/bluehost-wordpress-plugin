import AutomaticUpdates from './automaticUpdates';
import ComingSoon from './comingSoon';
import CommentSettings from './commentSettings';
import ContentSettings from './contentSettings';
import { Page } from '../../components/page';
import { SectionContainer, SectionHeader, SectionContent } from '../../components/section';

const Settings = () => {
	return (
		<Page title="Settings" className={"wppbh-app-settings-page"}>
			<SectionContainer className={'wppbh-app-settings-container'}>
                <SectionHeader
                    title={__('Settings', 'wp-plugin-bluehost')}
                    subTitle={__('This is where you can manage common settings for your website.', 'wp-plugin-bluehost')}
                    className={'wppbh-app-settings-header'}
                />

                <SectionContent separator={true} className={'wppbh-app-settings-coming-soon'}>
                    <ComingSoon />
                </SectionContent>

				<SectionContent separator={true} className={'wppbh-app-settings-update'}>
                    <AutomaticUpdates />
                </SectionContent>

                <SectionContent separator={true} className={'wppbh-app-settings-content'}>
                    <ContentSettings />
                </SectionContent>

				<SectionContent className={'wppbh-app-settings-comments'}>
                    <CommentSettings />
                </SectionContent>

            </SectionContainer>
		</Page>
	);
};

export default Settings;
