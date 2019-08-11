/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
/**
 * Internal dependencies
 */
import { AppNavLink as NavLink } from '@/components';
import { ReactComponent as BluehostLogo } from '@/assets/bluehost.svg';
import './style.scss';

const MainMenu = () => (
    <ul>
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

/**
 * TODO:
 * * Close menu on item click
 * * Escape keycode to close menu
 * * Focus to menu on open
 * * Focus to page on close
 * * Dark blur background by body class
 * * Lift close icon above dark blur
 * 
 * Nice to have
 *  * Tap outside menu to close menu
 */
class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.toggleUserMenu = this.toggleUserMenu.bind( this );
        this.state = {
            isUserMenu: 0
        };
    }
    
    toggleUserMenu() {
        if ( this.state.isUserMenu ) {
            this.setState((state) => {
                return {isUserMenu: 0}
            })
        } else {
            this.setState((state) => {
                return {isUserMenu: 1}
            })
        }
    }

    menuItems() {
        if ( 1 === this.state.isUserMenu ) {
            return <MainMenu />;
        } else {
            return <UserMenu />
        }
    }

    render () {
        return (
            <div id="bluehost-mobile-menu">
                <div class="logo-wrap">
                    <BluehostLogo />
                </div>
                <div class="mobile-nav">
                    
                </div>
            </div>
        );
    }
}

export default MobileMenu;
