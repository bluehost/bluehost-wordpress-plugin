import { text } from '@storybook/addon-knobs';

import { BWAButton } from '@/components/atoms';

export default { title: 'Atoms|Button', component: BWAButton };

export const _default = () => {
    const label = text( 'Label', 'Button Text' );

    return (
        <BWAButton isPrimary>{ label }</BWAButton>
    );
}
