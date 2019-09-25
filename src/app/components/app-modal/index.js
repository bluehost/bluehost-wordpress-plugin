/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import {Modal} from '@wordpress/components';
/**
 * Internal dependencies
 */
import './style.scss';

export default function AppModal(
    {
        actionsComponent,
        children,
        className = '',
        ...props
    }
) {
    return (
        <Modal
            className={classNames({
                'bluehost-modal': true,
                [className]: className.length,
            })}
            shouldCloseOnClickOutside={false}
            {...props}
        >
            <div className="bluehost-modal__content">
                {children}
            </div>
            {actionsComponent && (
                <div className="bluehost-modal__actions">
                    {actionsComponent}
                </div>
            )}
        </Modal>
    );
};