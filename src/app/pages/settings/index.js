import './stylesheet.scss';
import graphicUrl from '../../../../assets/svg/website-content.svg';
import AutomaticUpdates from './automaticUpdates';
import ComingSoon from './comingSoon';
import CommentSettings from './commentSettings';
import ContentSettings from './contentSettings';
import PerformanceCallout from './performanceCallout';
import { useViewportMatch } from '@wordpress/compose';
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

                <SectionContent separator={true} className={'wppb-app-settings-section1'}>
                    <ComingSoon />
                </SectionContent>
            </SectionContainer>
		</Page>
	);
};

export default Settings;
