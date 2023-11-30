import { useContext } from '@wordpress/element';
import { OnboardingScreen } from '@newfold-labs/wp-module-ecommerce';
import AppStore from 'App/data/store';
import { bluehostSettingsApiFetch } from 'App/util/helpers';
import { useNotification } from 'App/components/notifications';

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

	return (
		<OnboardingScreen
			comingSoon={ store.comingSoon }
			toggleComingSoon={ toggleComingSoon }
			notify={ notify }
		/>
	);
};

export default WelcomeSection;
