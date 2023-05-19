import { useState } from '@wordpress/element';
import { Button, Label, RadioGroup } from "@yoast/ui-library";
import { SectionSettings } from "../../components/section";

export const CacheSettings = () => {
    const cacheOptions = [
        {
            label: __( 'Disabled', 'wp-plugin-blueprint' ),
            description:  __( 'No cache enabled. Every page load is fresh.','wp-plugin-blueprint' ) + 
            ' ' + 
            __( 'Not recommended.', 'wp-plugin-blueprint' ),
            value: 0,
			notice: 'Caching disabled.',
        },
        {
            label: __( 'Assets Only', 'wp-plugin-blueprint' ),
            description: __( 'Cache static assets like images and the appearance of your site for 1 hour.', 'wp-plugin-blueprint' ) +
            ' ' +
            __( 'Tuned for online stores and member sites that need to be fresh.', 'wp-plugin-blueprint' ),
            value: 1,
            notice: 'Cache enabled for assets only.',
        },
        {
            label: __( 'Assets & Web Pages', 'wp-plugin-blueprint' ),
            description: __( 'Cache static assets for 24 hours and web pages for 2 hours.', 'wp-plugin-blueprint' ) +
            ' ' +
            __( 'Tuned for sites that change at least weekly.', 'wp-plugin-blueprint' ),
            value: 2,
			notice: 'Cache enabled for assets and pages.',
        },
        {
            label: __( 'Assets & Web Pages - Extended', 'wp-plugin-blueprint' ),
            description: __( 'Assets & Web Pages - Extended', 'wp-plugin-blueprint' ) +
            ' ' +
            __( 'Tuned for sites that update a few times a month or less.', 'wp-plugin-blueprint' ),
            value: 3,
			notice: 'Cache enabled for assets and pages (extended).',
        },
    ];

    const handleCacheTypeChange = (e) => {
        console.log('Cache type: ' + e.target.value);
    };

    return (
        <RadioGroup
            id="cache-type"
            name="cache-type"
        >
            {cacheOptions.map((option) => {
                return (
                    <>
                        <RadioGroup.Radio
                            id={'cache-level' + option.value}
                            label={option.label}
                            name="cache-level"
                            value={option.value}
                            onChange={handleCacheTypeChange}
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

export const ClearCache = () => {
    const clearCache = () => {
        console.log('Clear cache');
    };

    return (
        <div className="yst-flex yst-flex-col yst-gap-4">
            <div className="yst-flex yst-justify-between yst-items-center">
                <Label>{ __( 'Clear Cache', 'wp-plugin-blueprint' ) }</Label>
                <Button 
                    variant="secondary"
                    onClick={clearCache}    
                >
                    { __( 'Clear All Cache Now', 'wp-plugin-blueprint' ) }
                </Button>
            </div>
            <p className="yst-mr-[10.5rem]">
                { 
                    __( 'We automatically clear your cache', 'wp-plugin-blueprint' ) + 
                    ', ' +
                    __( "as you work (creating content, changing settings, installing plugins and more). But you can manually clear it here to be confident it's fresh.", 'wp-plugin-blueprint' )
                    }
            </p>
            
        </div>
    );
}

const Performance = () => {
    return (
        <SectionSettings
            title="Performance"
            description="Boost speed and performance by storing a copy of your website content, files, and images online so the pages of your website load faster for your visitors."
        >
            <div className="yst-flex yst-flex-col yst-gap-4">
                <Label>Caching</Label>

                <div className="yst-flex yst-flex-col yst-gap-6">
                    <CacheSettings />
                    <ClearCache />
                </div>
            </div>
        </SectionSettings >
    );
}

export default Performance;