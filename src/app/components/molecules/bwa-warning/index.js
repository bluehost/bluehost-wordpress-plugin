import './style.scss';

import { WarningIcon } from '@app/assets';

export default function BWAWarning( { children } ) {
	return (
		<span className="bluehost-warning"><WarningIcon /> { children }</span>
	);
}
