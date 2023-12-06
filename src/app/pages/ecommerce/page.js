import './styles.scss';
import { useContext } from '@wordpress/element';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Page } from '@newfold/ui-component-library';
import { NewfoldECommerce } from '@newfold-labs/wp-module-ecommerce';
import '@newfold-labs/wp-module-ecommerce/bluehost.css';
import AppStore from 'App/data/store';
import { bluehostSettingsApiFetch } from 'App/util/helpers';
import { useNotification } from 'App/components/notifications';

const ECommerce = () => {
	const { store, setStore } = useContext( AppStore );
	const [ params ] = useSearchParams();
	const location = useLocation();
	const navigate = useNavigate();
	const notify = useNotification();
	const state = {
		wp: { comingSoon: store?.comingSoon },
		params,
		location: location.pathname,
	};
	const wpModules = { navigate, notify };

	const actions = {
		toggleComingSoon: () =>
			bluehostSettingsApiFetch(
				{ comingSoon: ! store.comingSoon },
				// eslint-disable-next-line no-console
				console.error,
				// eslint-disable-next-line no-unused-vars
				( response ) => {
					setStore( {
						...store,
						comingSoon: ! store.comingSoon,
					} );
				}
			),
	};

	return (
		<Page>
			<NewfoldECommerce
				state={ state }
				wpModules={ wpModules }
				actions={ actions }
			/>
		</Page>
	);
};

export default ECommerce;
