import { __ } from '@wordpress/i18n';
import userMenu from '@app/menus/user';
import { BWABox, BWAHeading } from '@app/components/atoms';
import classnames from 'classnames';

import './style.scss';

const BWAAccountCard = ({ headingSize = 4 }) => {
    const userMenuItems = userMenu('account_card');
    if ( __('Bluehost Account', 'bluehost-wordpress-plugin') === userMenuItems[0].label ) {
        userMenuItems[0].label = __('Control Panel', 'bluehost-wordpress-plugin');
    }
    return (
        <BWABox className="account-box component-account-card">
            <BWAHeading level="h3" size={headingSize}>{__("Bluehost Account", 'bluehost-wordpress-plugin')}</BWAHeading>
            <div className="services-grid">
                <ul className="services-list">
                    { userMenuItems.map((item) => (
                        <li className={ classnames('tab', item.id)} key={ item.href }>
                            <a href={ item.href }>
                                <span className={ ['account-icon is-svg-' + item.color] }><item.icon /></span>
                                <p>{ item.label }</p>
                            </a>
                        </li>
                    )) }
                </ul>
            </div>
        </BWABox>
    )
}

export default BWAAccountCard;