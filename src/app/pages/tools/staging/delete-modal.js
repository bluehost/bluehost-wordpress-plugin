import {Fragment} from '@wordpress/element';
import {__} from '@wordpress/i18n';

import {
    AppButton as Button,
    AppModal as Modal,
    Warning
} from '@/components';

export default function ({onClick, onClose}) {
    return (
        <Modal
            actionsComponent={(
                <Fragment>
                    <Warning>{__('This action cannot be undone', 'bluehost-wordpress-plugin')}</Warning>
                    <Button onClick={onClose}>
                        {__('Cancel', 'bluehost-wordpress-plugin')}
                    </Button>
                    <Button isPrimary onClick={onClick}>
                        {__('Delete', 'bluehost-wordpress-plugin')}
                    </Button>
                </Fragment>
            )}
            onRequestClose={onClose}
            title={__('Delete staging site?', 'bluehost-wordpress-plugin')}
        >
            <p>
                {__('Are you sure you want to delete this staging site? This will permanently delete the staging instance from your site.', 'bluehost-wordpress-plugin')}
            </p>
        </Modal>
    );
}
