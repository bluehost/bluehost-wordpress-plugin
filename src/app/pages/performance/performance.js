import AppStore from '../../data/store';
import { bluehostSettingsApiFetch, bluehostPurgeCacheApiFetch } from '../../util/helpers';
import { useUpdateEffect } from 'react-use';
import { useState } from '@wordpress/element';
import { useNotification } from '../../components/notifications/feed';
import { Alert, Button, Label, RadioGroup } from "@yoast/ui-library";
import { SectionSettings } from "../../components/section";

const CacheSettings = ({ setError, notify }) => {
    const { store, setStore } = useContext(AppStore);
    const [cacheLevel, setCacheLevel] = useState(store.cacheLevel);

    const cacheOptions = [
        {
            label: __('Disabled', 'wp-plugin-bluehost'),
            description: __('No cache enabled. Every page load is fresh.', 'wp-plugin-bluehost') +
                ' ' +
                __('Not recommended.', 'wp-plugin-bluehost'),
            value: 0,
            notice: __('Caching disabled.', 'wp-plugin-bluehost'),
        },
        {
            label: __('Assets Only', 'wp-plugin-bluehost'),
            description: __('Cache static assets like images and the appearance of your site for 1 hour.', 'wp-plugin-bluehost') +
                ' ' +
                __('Tuned for online stores and member sites that need to be fresh.', 'wp-plugin-bluehost'),
            value: 1,
            notice: __('Cache enabled for assets only.', 'wp-plugin-bluehost'),
        },
        {
            label: __('Assets & Web Pages', 'wp-plugin-bluehost'),
            description: __('Cache static assets for 24 hours and web pages for 2 hours.', 'wp-plugin-bluehost') +
                ' ' +
                __('Tuned for sites that change at least weekly.', 'wp-plugin-bluehost'),
            value: 2,
            notice: __('Cache enabled for assets and pages.', 'wp-plugin-bluehost'),
        },
        {
            label: __('Assets & Web Pages - Extended', 'wp-plugin-bluehost'),
            description: __('Assets & Web Pages - Extended', 'wp-plugin-bluehost') +
                ' ' +
                __('Tuned for sites that update a few times a month or less.', 'wp-plugin-bluehost'),
            value: 3,
            notice: __('Cache enabled for assets and pages (extended).', 'wp-plugin-bluehost'),
        },
    ];

    const getCacheLevelNoticeTitle = () => {
        return __('Cache setting saved', 'wp-plugin-bluehost');
    };

    const getCacheLevelNoticeText = () => {
        return cacheOptions[cacheLevel].notice;
    };

    const handleCacheLevelChange = (e) => {
        bluehostSettingsApiFetch({ cacheLevel: parseInt(e.target.value) }, setError, (response) => {
            setCacheLevel(parseInt(e.target.value));
        });
    };

    const notifySuccess = () => {
        notify.push("cache-level-change-notice", {
            title: getCacheLevelNoticeTitle(),
            description: (
                <span>
                    {getCacheLevelNoticeText()}
                </span>
            ),
            variant: "success",
            autoDismiss: 5000,
        });
    };

    useUpdateEffect(() => {
        setStore({
            ...store,
            cacheLevel,
        });

        notifySuccess();
    }, [cacheLevel]);

    return (
        <RadioGroup
            className="cache-options"
            id="cache-type"
            name="cache-level"
            value=""
        >
            {cacheOptions.map((option) => {
                return (
                    <>
                        <RadioGroup.Radio
                            defaultChecked={option.value === store.cacheLevel}
                            id={'cache-level-' + option.value}
                            label={option.label}
                            value={option.value}
                            name="cache-level"
                            onChange={handleCacheLevelChange}
                        />
                        <div className="yst-radio__description">
                            {option.description}
                        </div>
                    </>
                );
            })}
        </RadioGroup>
    );
}

const ClearCache = ({ setError, notify }) => {
    const { store, setStore } = useContext(AppStore);

    const getCacheClearNoticeTitle = () => {
        return __('Cache cleared', 'wp-plugin-bluehost');
    };

    const notifySuccess = () => {
        notify.push("disable-old-posts-comments-notice", {
            title: getCacheClearNoticeTitle(),
            variant: "success",
            autoDismiss: 5000,
        });
    };

    const clearCache = () => {
        bluehostPurgeCacheApiFetch({}, setError, (response) => {
            notifySuccess();
        });
    };

    return (
        <div className="yst-flex yst-flex-col yst-gap-4 clear-cache">
            <div className="yst-flex yst-justify-between yst-items-center">
                <Label>{__('Clear Cache', 'wp-plugin-bluehost')}</Label>
                <Button
                    variant="secondary"
                    className="clear-cache-button"
                    disabled={store.cacheLevel > 0 ? false : true}
                    onClick={clearCache}
                >
                    {__('Clear All Cache Now', 'wp-plugin-bluehost')}
                </Button>
            </div>
            <p className="lg:yst-mr-[10.5rem]">
                {
                    __('We automatically clear your cache', 'wp-plugin-bluehost') +
                    ', ' +
                    __("as you work (creating content, changing settings, installing plugins and more). But you can manually clear it here to be confident it's fresh.", 'wp-plugin-bluehost')
                }
            </p>

        </div>
    );
}

const Performance = () => {
    const [isError, setError] = useState(false);

    let notify = useNotification();

    return (
        <SectionSettings
            title={__('Performance', 'wp-plugin-bluehost')}
            description={__('Boost speed and performance by storing a copy of your website content, files, and images online so the pages of your website load faster for your visitors.',
                'wp-plugin-bluehost')}
        >
            <div className="yst-flex yst-flex-col yst-gap-4">
                <Label>{__('Caching', 'wp-plugin-bluehost')}</Label>

                <div className="yst-flex yst-flex-col yst-gap-6">
                    <CacheSettings setError={setError} notify={notify} />
                    <ClearCache setError={setError} notify={notify} />

                    {isError &&
                        <Alert variant="error">
                            {__('Oops! Something went wrong. Please try again.', 'wp-plugin-bluehost')}
                        </Alert>
                    }
                </div>
            </div>
        </SectionSettings >
    );
}

export default Performance;
