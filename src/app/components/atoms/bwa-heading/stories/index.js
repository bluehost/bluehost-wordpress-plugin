import { text } from '@storybook/addon-knobs';

import BWAHeading from '..';

export default { title: 'Atoms|Heading', component: BWAHeading };

export const _default = () => {
    const label = text( 'Label', 'Headings' );

    return (
        <BWAHeading level='h1'>{ label }</BWAHeading>
    );
}

export const size1 = () => {
    const label = text( 'Label', 'Heading Size 1' );

    return (
        <BWAHeading level='h1'>{ label }</BWAHeading>
    );
}

export const size2 = () => {
    const label = text( 'Label', 'Heading Size 2' );

    return (
        <BWAHeading level='h1' size={2}>{ label }</BWAHeading>
    );
}

export const size3 = () => {
    const label = text( 'Label', 'Heading Size 3' );

    return (
        <BWAHeading level='h1' size={3}>{ label }</BWAHeading>
    );
}

export const size4 = () => {
    const label = text( 'Label', 'Heading Size 4' );

    return (
        <BWAHeading level='h1' size={4}>{ label }</BWAHeading>
    );
}

export const sizeWelcome = () => {
    const label = text( 'Label', 'Heading Size Welcome' );

    return (
        <BWAHeading level='h1' size='welcome'>{ label }</BWAHeading>
    );
}

export const sizeProduct = () => {
    const label = text( 'Label', 'Heading Size Product' );

    return (
        <BWAHeading level='h1' size='product'>{ label }</BWAHeading>
    );
}