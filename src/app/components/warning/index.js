import { ReactComponent as Icon } from '@/assets/warning.svg';
import './style.scss';

export default function Warning( { children } ) {
	return (
		<span className="bluehost-warning"><Icon /> { children }</span>
	);
}
