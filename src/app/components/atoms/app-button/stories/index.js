import { text } from '@storybook/addon-knobs';

import AppButton from '..';

export default { title: 'Atoms|Button', component: AppButton };

export const _default = () => {
    const label = text( 'Label', 'Default Button' );

    return (
        <AppButton>{ label }</AppButton>
    );
}

export const primary = () => {
	const label = text( 'Label', 'Primary Button' );

	return (
		<AppButton isPrimary>{ label }</AppButton>
	);
};

export const large = () => {
	const label = text( 'Label', 'Large Button' );

	return (
		<AppButton isLarge>{ label }</AppButton>
	);
};

export const largePrimary = () => {
	const label = text( 'Label', 'Large Primary Button' );

	return (
		<AppButton isPrimary isLarge>{ label }</AppButton>
	);
};

export const small = () => {
	const label = text( 'Label', 'Small Button' );

	return (
		<AppButton isSmall>{ label }</AppButton>
	);
};

export const toggled = () => {
	const label = text( 'Label', 'Toggled Button' );

	return (
		<AppButton isToggled>{ label }</AppButton>
	);
};

export const disabled = () => {
	const label = text( 'Label', 'Disabled Button' );

	return (
		<AppButton disabled>{ label }</AppButton>
	);
};

export const link = () => {
	const label = text( 'Label', 'Link Button' );

	return (
		<AppButton href="https://wordpress.org/" target="_blank">
			{ label }
		</AppButton>
	);
};

export const disabledLink = () => {
	const label = text( 'Label', 'Disabled Link Button' );

	return (
		<AppButton href="https://wordpress.org/" target="_blank" disabled>
			{ label }
		</AppButton>
	);
};