import { ReactComponent as Icon } from '@app/assets/warning.svg';
import './style.scss';

export default function BWAWarning( { children } ) {
	return (
		<span className="bluehost-warning"><Icon /> { children }</span>
	);
}
