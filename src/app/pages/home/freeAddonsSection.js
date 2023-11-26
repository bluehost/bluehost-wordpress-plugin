import { FreePlugins } from '@newfold-labs/wp-module-ecommerce';
import { useNotification } from 'App/components/notifications';

export const FreeAddonsSection = ( { props } ) => {
	const notify = useNotification();
	return <FreePlugins { ...props } notify={ notify } />;
};
