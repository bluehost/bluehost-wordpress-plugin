import { useContext } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';
import { OnboardingScreen } from '@newfold-labs/wp-module-ecommerce';
import AppStore from 'App/data/store';
import { bluehostSettingsApiFetch } from 'App/util/helpers';
import { useNotification } from 'App/components/notifications';
import { comingSoonAdminbarToggle } from '../../util/helpers';

const WelcomeSection = ( {} ) => {
	const { store, setStore } = useContext( AppStore );
	const notify = useNotification();

	const toggleComingSoon = () =>
		bluehostSettingsApiFetch(
			{ comingSoon: ! store.comingSoon },
			// eslint-disable-next-line no-console
			console.error,
			() => setStore( { ...store, comingSoon: ! store.comingSoon } )
		);

		useUpdateEffect(() => {
			comingSoonAdminbarToggle(store.comingSoon)
		}, [store.comingSoon])

	return (
		<OnboardingScreen
			comingSoon={ store.comingSoon }
			toggleComingSoon={ toggleComingSoon }
			notify={ notify }
		/>
	);
};

export default WelcomeSection;
