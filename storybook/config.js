import { addParameters, addDecorator, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import bluehostTheme from './bluehostTheme';

import './style.scss';

addParameters({
    options: {
        isFullscreen: false,
        theme: bluehostTheme
    }
})

addDecorator( withA11y );
addDecorator( withKnobs );

configure([
    require.context('./docs/', true, /\/.+\.(js|mdx)$/ ),
    require.context('./standards/', true, /\/.+\.(js|mdx)$/ ),
    require.context( './stories/', true, /\/.+\.(js)$/),
    ].filter(Boolean),
    module
);