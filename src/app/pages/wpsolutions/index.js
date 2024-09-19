import './styles.scss';
import { Page } from '@newfold/ui-component-library';
import { NewfoldSolutions } from '@newfold-labs/wp-module-solutions';
import '@newfold-labs/wp-module-ecommerce/bluehost.css';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../components/notifications';

const WPSolutions = () => {
	
	const navigate = useNavigate();
	const notify = useNotification();
	const wpModules = { navigate, notify };
	
	return (
		<Page>
			<NewfoldSolutions wpModules={ wpModules } />
		</Page>
	);
};

export default WPSolutions;
