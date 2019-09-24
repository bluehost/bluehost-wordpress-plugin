/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import {Notice} from '@wordpress/components';
/**
 * Internal dependencies
 */
import './style.scss';

const AppNotice = ({className = '', ...props}) => {
    return (
        <Notice {...props} className={classNames({
            'bluehost': true,
            'bordered-box': true,
            [className]: className.length
        })}/>
    );
};

export default AppNotice;
