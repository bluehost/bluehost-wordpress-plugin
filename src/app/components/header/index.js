import './stylesheet.scss';

import Logo from './logo';
import NavLarge from './nav-large';
import NavMobile from './nav-mobile';
import NavUtility from './nav-utility';
import { useViewportMatch } from '@wordpress/compose';

const Header = () => {
	const isLargeViewport = useViewportMatch( 'medium' );
	return (
		<Fragment>
			<header className="wppb-header">
				<div className="wppb-header-inner">
					<Logo />
					{ ( isLargeViewport && <NavUtility /> ) || <NavMobile /> }
				</div>
			</header>
			{ isLargeViewport && (
				<nav className="wppb-nav">
					<NavLarge />
				</nav>
			) }
		</Fragment>
	);
};

export default Header;
