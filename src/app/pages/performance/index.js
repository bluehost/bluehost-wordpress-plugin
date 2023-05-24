import Performance from './performance';
import { Page } from '../../components/page';
import { SectionContainer, SectionHeader, SectionContent } from '../../components/section';

const PerformancePage = () => {
	return (
		<Page title="Performance" className={"wppbh-app-settings-page"}>
			<SectionContainer className={'wppbh-app-settings-container'}>
                <SectionHeader
                    title={__('Performance', 'wp-plugin-bluehost')}
                    subTitle={__('This is where you can manage cache settings for your website.', 'wp-plugin-bluehost')}
                    className={'wppbh-app-settings-header'}
                />

				<SectionContent className={'wppbh-app-settings-performance'}>
                    <Performance />
                </SectionContent>

            </SectionContainer>
		</Page>
	);
};

export default PerformancePage;
