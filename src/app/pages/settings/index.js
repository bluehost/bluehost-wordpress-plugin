import AutomaticUpdates from './automaticUpdates';
import ComingSoon from './comingSoon';
import CommentSettings from './commentSettings';
import Performance from './performance';
import { Page } from '../../components/page';
import { SectionContainer, SectionHeader, SectionContent } from '../../components/section';

const Settings = () => {
	return (
		<Page title="Settings" className={"wppb-app-settings-page"}>
			<SectionContainer className={'wppb-app-settings-container'}>
                <SectionHeader
                    title={'Settings'}
                    subTitle={'This is where you can manage common settings for your website.'}
                    className={'wppb-app-settings-header'}
                />

                <SectionContent separator={true} className={'wppb-app-settings-coming-soon'}>
                    <ComingSoon />
                </SectionContent>

				<SectionContent separator={true} className={'wppb-app-settings-update'}>
                    <AutomaticUpdates />
                </SectionContent>

				<SectionContent separator={true} className={'wppb-app-settings-comments'}>
                    <CommentSettings />
                </SectionContent>

				<SectionContent className={'wppb-app-settings-update'}>
                    <Performance />
                </SectionContent>
            </SectionContainer>
		</Page>
	);
};

export default Settings;
