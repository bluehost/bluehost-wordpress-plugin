import { __ } from '@wordpress/i18n';
import { AppButton as Button, AppNavLink as NavLink } from '@/components';
import { Popover } from '@wordpress/components';
import { withState } from '@wordpress/compose';

import { ReactComponent as BluehostLogo } from '@/assets/bluehost.svg';
import { ReactComponent as HamburgerIcon } from '@/assets/hamburger.svg'
import { ReactComponent as CloseIcon } from '@/assets/close.svg'
import { ReactComponent as HelpIcon } from '@/assets/question-circle-regular.svg';
import { ReactComponent as AstronautIcon } from '@/assets/user-astronaut-light.svg';

import './style.scss';

const MainMenu = () => (
    <ul class="main">
        <li>
            <NavLink to="/home" activeClassName="is-active">
                {__('Home', 'bluehost-wordpress-plugin')}
            </NavLink>
        </li>
        <li>
            <NavLink to="/marketplace/themes" activeClassName="is-active">
                {__('Themes', 'bluehost-wordpress-plugin')}
            </NavLink>
        </li>
        <li>
            <NavLink to="/marketplace/plugins" activeClassName="is-active">
                {__('Plugins', 'bluehost-wordpress-plugin')}
            </NavLink>
        </li>
        <li>
            <NavLink to="/marketplace/services" activeClassName="is-active">
                {__('Services', 'bluehost-wordpress-plugin')}
            </NavLink>
        </li>
        <li>
            <NavLink to="/tools/staging" activeClassName="is-active">
                {__('Staging', 'bluehost-wordpress-plugin')}
            </NavLink>
        </li>
        <li>
            <NavLink to="/settings" activeClassName="is-active">
                {__('Settings', 'bluehost-wordpress-plugin')}
            </NavLink>
        </li>
    </ul>
);

const MobileMenu = withState( {
    isVisible: false,
    userMenu: false,
} )( ( { isVisible, userMenu, setState } ) => {
    const toggleVisible = () => {
        setState( (state) => ({ isVisible: ! state.isVisible }) );
    };
    const toggleUserMenu = () => {
        setState( (state) => ({ userMenu: ! state.userMenu }) );
    };
    return (
        <>
            <Button className="mobile-toggle" onClick={ toggleVisible }>
                {!isVisible && (
                    <>
                        <HamburgerIcon />
                    </>
                )}
                {isVisible && (
                    <>
                        <CloseIcon />
                    </>
                ) }
            </Button>
            {isVisible && (
                <Popover className="bluehost-mobile-menu" position="middle top" noArrow >
                    <div className="slideout-inner">
                        <div className="slideout-logo-wrap" onClick={ toggleVisible }>
                            <BluehostLogo />
                        </div>
                        <div id="slideout-icons-wrap">
                            <div className="help">
                                <a href="https://my.bluehost.com/hosting/help"><HelpIcon /></a>
                            </div>
                            <div className="user-menu">
                                <AstronautIcon onClick={ toggleUserMenu } />
                            </div>
                        </div>
                        <div className="slideout-menu-wrap" onClick={ toggleVisible }>
                            {userMenu && (
                                <div>User Menu</div>
                            )}
                            {!userMenu && (
                                <MainMenu />
                            )}
                            
                        </div>
                    </div>
                </Popover>
            )}
        </>
    );
} );

export default MobileMenu;


















