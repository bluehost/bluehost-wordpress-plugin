/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {AppButton as Button, AppNavLink as NavLink} from '@/components';
import {Dropdown} from '@wordpress/components';
import {ReactComponent as BlueHostLogo} from '@/assets/bluehost.svg';
import {ReactComponent as AstronautLogo} from '@/assets/user-astronaut-light.svg';
import {ReactComponent as HelpLogo} from '@/assets/question-circle-regular.svg';
import {ReactComponent as BillingLogo} from '@/assets/credit-card-regular.svg';
import {ReactComponent as ProductsLogo} from '@/assets/box-full-regular.svg';
import {ReactComponent as SecurityLogo} from '@/assets/shield-check-regular.svg';
import {ReactComponent as ValidationLogo} from '@/assets/id-card-alt-regular.svg';
import {ReactComponent as LogoutLogo} from '@/assets/sign-out-regular.svg';

/**
 * Internal dependencies
 */
import './style.scss';

const NavDropdown = () => (
    <Dropdown
        className="bluehost-nav-wrap-element user-menu"
        contentClassName="bluehost-nav-popup"
        position="120px 24px"
        renderToggle={({isOpen, onToggle}) => (
            <AstronautLogo onClick={onToggle} aria-expanded={isOpen}/>
        )}
        renderContent={() => (
            <div id="bluehost-nav-popup-wrap">
                <div id="bluehost-nav-popup-inner">
                    <ul>
                        <li>
                            <a href="https://my.bluehost.com/hosting/app">
                                <span className="bluehost-nav-popup-nav-icon gray"><AstronautLogo/></span>
                                <span className="bluehost-nav-popup-nav-text">
                                    {__('Bluehost Account', 'bluehost-wordpress-plugin')}
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://my.bluehost.com/hosting/account_center#billing">
                                <span className="bluehost-nav-popup-nav-icon blue"><BillingLogo/></span>
                                <span className="bluehost-nav-popup-nav-text">
                                    {__('Billing', 'bluehost-wordpress-plugin')}
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://my.bluehost.com/hosting/account_center#products">
                                <span className="bluehost-nav-popup-nav-icon dark-blue"><ProductsLogo/></span>
                                <span className="bluehost-nav-popup-nav-text">
                                    {__('Products', 'bluehost-wordpress-plugin')}
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://my.bluehost.com/hosting/account_center#security">
                                <span className="bluehost-nav-popup-nav-icon green"><SecurityLogo/></span>
                                <span className="bluehost-nav-popup-nav-text">
                                    {__('Security', 'bluehost-wordpress-plugin')}
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="bluehost-nav-popup-nav-icon orange"><ValidationLogo/></span>
                                <span className="bluehost-nav-popup-nav-text">
                                    {__('Validation Token', 'bluehost-wordpress-plugin')}
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )}
    />
);

const AppHeader = () => (
    <header id="bluehost-header">
        <div className="col">
            <div id="bluehost-logo-wrap">
                <NavLink to="/home" activeClassName="is-home">
                    <BlueHostLogo/>
                    <span className="sr-only">{__('Bluehost', 'bluehost-wordpress-plugin')}</span>
                </NavLink>
            </div>
            <div id="bluehost-nav-wrap">
                <div className="bluehost-nav-wrap-element">
                    <a href="https://my.bluehost.com/hosting/help">
                        <HelpLogo/>
                        <span className="sr-only">{__('Help', 'bluehost-wordpress-plugin')}</span>
                    </a>
                </div>
                <NavDropdown/>
            </div>
        </div>
    </header>
);

export default AppHeader;
