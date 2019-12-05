import { text } from '@storybook/addon-knobs';

import AppHeading from '..';

export default { title: 'Atoms|Heading', component: AppHeading };

export const _default = () => {
    const label = text( 'Label', 'Headings' );

    return (
        <AppHeading level='h1'>{ label }</AppHeading>
    );
}

export const size1 = () => {
    const label = text( 'Label', 'Heading Size 1' );

    return (
        <AppHeading level='h1'>{ label }</AppHeading>
    );
}

export const size2 = () => {
    const label = text( 'Label', 'Heading Size 2' );

    return (
        <AppHeading level='h1' size={2}>{ label }</AppHeading>
    );
}

export const size3 = () => {
    const label = text( 'Label', 'Heading Size 3' );

    return (
        <AppHeading level='h1' size={3}>{ label }</AppHeading>
    );
}

export const size4 = () => {
    const label = text( 'Label', 'Heading Size 4' );

    return (
        <AppHeading level='h1' size={4}>{ label }</AppHeading>
    );
}

export const sizeWelcome = () => {
    const label = text( 'Label', 'Heading Size Welcome' );

    return (
        <AppHeading level='h1' size='welcome'>{ label }</AppHeading>
    );
}

export const sizeProduct = () => {
    const label = text( 'Label', 'Heading Size Product' );

    return (
        <AppHeading level='h1' size='product'>{ label }</AppHeading>
    );
}