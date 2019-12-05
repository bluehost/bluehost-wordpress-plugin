/**
 * WordPress dependencies
 */
import { AppSpinner } from '@/components/atoms';
/**
 * Internal dependencies
 */
import './style.scss';

const AppPageSpinner = () => (
	<div className="app-page-spinner__wrap">
		<AppSpinner />
	</div>
);

export default AppPageSpinner;
