import { Button, Radio, Select } from '@yoast/ui-library';
import { Page } from '../../components/page';
import { SectionContainer, SectionHeader, SectionContent, SectionSettings } from '../../components/section';
import { useState } from '@wordpress/element';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const productionDomain = 'https://pkp.rjp.mybluehost.me';
const stagingDomain = 'https://pkp.rjp.mybluehost.me/staging/2134';

const ProductionSite = ({ hasStaging, inStaging, setInStaging }) => {
    return (
        <SectionSettings
            title={__('Production site', 'wp-plugin-blueprint')}
            description={
                <Radio
                    defaultChecked={inStaging ? false : true}
                    label={inStaging ? __('Not currently editing', 'wp-plugin-blueprint') : __('Currently editing', 'wp-plugin-blueprint')}
                    id="wppb-production-toggle"
                    name="wppb-staging-selector"
                    value="1"
                    onChange={() => {
                        setInStaging(false);
                        console.log('Production active')
                    }}
                />
            }
        >
            <div className="yst-flex yst-justify-between yst-items-center yst-flex-wrap yst-gap-3">
                <div>{productionDomain}</div>
                {hasStaging &&
                    <Button
                        variant="secondary"
                        disabled={inStaging ? true : false}
                        onClick={() => { console.log('Open confirm modal: Clone production to staging') }}>
                        {__('Clone to staging', 'wp-plugin-blueprint')}
                    </Button>
                }
            </div>
        </SectionSettings>
    );
}

const StagingSite = ({ hasStaging, setHasStaging, inStaging, setInStaging }) => {
    const [deployOption, setDeployOption] = useState("1");

    return (
        <SectionSettings
            title={__('Staging site', 'wp-plugin-blueprint')}
            description={!hasStaging ? __("You don't have a staging site yet.", 'wp-plugin-blueprint') :
                <Radio
                    defaultChecked={inStaging ? true : false}
                    label={inStaging ? __('Currently editing', 'wp-plugin-blueprint') : __('Not currently editing', 'wp-plugin-blueprint')}
                    id="wppb-staging-toggle"
                    name="wppb-staging-selector"
                    value="2"
                    onChange={() => {
                        setInStaging(true);
                        console.log('Staging active')
                    }}
                />
            }
        >
            <div className="yst-flex yst-justify-between yst-items-center yst-flex-wrap yst-gap-3">
                {!hasStaging &&
                    <div className="yst-flex yst-justify-end yst-w-full">
                        <Button variant="secondary" onClick={() => { setHasStaging(true) }}>
                            {__('Create staging site', 'wp-plugin-blueprint')}
                        </Button>
                    </div>
                }
                {hasStaging &&
                    <>
                        <div>{stagingDomain}</div>
                        <div className="yst-flex yst-gap-1.5 yst-relative">
                            <Select
                                disabled={inStaging ? false : true}
                                id="wppb-staging-select"
                                name="wppb-staging"
                                className="yst-w-48"
                                value={deployOption}
                                onChange={(value) => { setDeployOption(value) }}
                                options={[
                                    {
                                        label: 'Deploy all changes',
                                        value: '1'
                                    },
                                    {
                                        label: 'Deploy files only',
                                        value: '2'
                                    },
                                    {
                                        label: 'Deploy database only',
                                        value: '3'
                                    }
                                ]}
                            />
                            <Button
                                disabled={inStaging ? false : true}
                                title={__('Deploy', 'wp-plugin-blueprint')}
                                onClick={() => { console.log('Open confirm modal: Deploy stagin option to production') }}
                            >
                                <ArrowPathIcon />
                            </Button>
                        </div>
                    </>
                }

            </div>
        </SectionSettings>
    );
}

const Staging = () => {
    const [hasStaging, setHasStaging] = useState(false);
    const [inStaging, setInStaging] = useState(false);

    return (
        <Page title={__('Staging', 'wp-plugin-blueprint')} className={"wppb-app-staging-page"}>
            <SectionContainer className={'wppb-app-staging-container'}>
                <SectionHeader
                    title={__('Staging', 'wp-plugin-blueprint')}
                    subTitle={__('A staging site is a duplicate of your live site, offering a secure environment to experiment, test updates, and deploy when ready.',
                        'wp-plugin-blueprint')}
                    className={'wppb-app-staging-header'}
                />

                <SectionContent separator={true} className={'wppb-app-staging-prod'}>
                    <ProductionSite
                        inStaging={inStaging}
                        setInStaging={setInStaging}
                        hasStaging={hasStaging}
                    />
                </SectionContent>
                <SectionContent className={'wppb-app-staging-staging'}>
                    <StagingSite
                        inStaging={inStaging}
                        setInStaging={setInStaging}
                        hasStaging={hasStaging}
                        setHasStaging={setHasStaging}
                    />
                </SectionContent>
            </SectionContainer>
        </Page>
    );
}

export default Staging;