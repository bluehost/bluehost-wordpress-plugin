import { SectionContainer, SectionHeader, SectionContent } from "../../components/section";

const Example = () => {
    return (
        <SectionContainer className={'wppb-app-example-page'}>
            <SectionHeader
                title={'Example Section'}
                subTitle={'Ut ultricies sem lacus, at ullamcorper erat maximus vel. Nunc libero nunc, auctor ac tempor id, vestibulum eu sem.'}
                className={'wppb-app-example-header'}
                primaryAction={{ title: 'Primary Action', onClick: () => { console.log('Primary Action Clicked') } }}
                secondaryAction={{ title: 'Secondary Action', onClick: () => { console.log('Secondary Action Clicked') } }}
            />

            <SectionContent separator={true} className={'wppb-app-example-section1'}>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
            </SectionContent>

            <SectionContent separator={true} className={'wppb-app-example-section2'}>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
            </SectionContent>

            <SectionContent className={'wppb-app-example-section3'}>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
            </SectionContent>
        </SectionContainer>
    );
}

export default Example;