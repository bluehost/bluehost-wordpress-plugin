import { addParameters, configure } from '@storybook/react';
import bluehostTheme from './bluehostTheme';

addParameters({
    options: {
        isFullscreen: false,
        theme: bluehostTheme
    }
})

configure([
    require.context('./stories/', true, /\/.+\.(js|mdx)$/ ),
    require.context( '../src/app/components', true, /\/stories\/.+\.js$/),
    ].filter(Boolean),
    module
);