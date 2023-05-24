import { Button } from "@yoast/ui-library";
import { SectionContainer, SectionHeader, SectionContent } from "../../components/section";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { Page } from "../../components/page";

const Example = () => {
    return (
        <Page className={"wppbh-app-example-page"}>
            <SectionContainer className={'wppbh-app-example-container'}>
                <SectionHeader
                    title={'Example Section'}
                    subTitle={'Ut ultricies sem lacus, at ullamcorper erat maximus vel. Nunc libero nunc, auctor ac tempor id, vestibulum eu sem.'}
                    className={'wppbh-app-example-header'}
                    primaryAction={{ title: 'Primary Action', onClick: () => { console.log('Primary Action Clicked') } }}
                    secondaryAction={{ title: 'Secondary Action', onClick: () => { console.log('Secondary Action Clicked') } }}
                />

                <SectionContent separator={true} className={'wppbh-app-example-section1'}>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </SectionContent>

                <SectionContent separator={true} className={'wppbh-app-example-section2'}>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </SectionContent>

                <SectionContent className={'wppbh-app-example-section3'}>
                    <div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Button className="yst-button--standout yst-mt-4">
                            <RocketLaunchIcon />
                            Launch your Site
                        </Button>
                    </div>
                </SectionContent>
            </SectionContainer>
        </Page>
    );
}

export default Example;