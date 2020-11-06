import { WarningIcon } from '@app/assets';
import './style.scss';

export default function BWAWarning( { children } ) {
	return (
		<span className="bluehost-warning"><WarningIcon /> { children }</span>
	);
}
