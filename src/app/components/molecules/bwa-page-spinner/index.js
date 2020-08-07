/**
 * WordPress dependencies
 */
import { BWASpinner } from '@app/components/atoms';
/**
 * Internal dependencies
 */
import './style.scss';

const BWAPageSpinner = () => (
	<div className="app-page-spinner__wrap">
		<BWASpinner />
	</div>
);

export default BWAPageSpinner;
