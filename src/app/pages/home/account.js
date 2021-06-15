import { __ } from '@wordpress/i18n';
import userMenuItems from '@app/menus/user';
import { BWABox, BWAHeading } from '@app/components/atoms';

const AccountCard = () => {
    return (
        <BWABox>
            <BWAHeading level="h3" size="product">{__("Your Account", 'bluehost-wordpress-plugin')}</BWAHeading>
            <ul id="nf-account">
                { userMenuItems.map((item) => (
                    <li className={ ['tab'] } key={ item.href }>
                        <a href={ item.href }>
                            <span className={ ['account-icon is-svg-' + item.color] }><item.icon /></span>
                            <p>{ item.label }</p>
                        </a>
                    </li>
                )) }
            </ul>
        </BWABox>
    )
}

export default AccountCard;