import {__} from '@wordpress/i18n';

import {Overlay} from '@/components';

import {ReactComponent as OverlaySvg} from '@/assets/change-env.svg';

export default function DeployOverlay({type = 'all'}) {
    return (
        <Overlay className={`bluehost-staging__overlay`}>
            <h1>
                {(() => {
                    switch (type) {
                        case 'db':
                            return __('Deploying Database to Production Site', 'bluehost-wordpress-plugin');
                        case 'files':
                            return __('Deploying Files to Production Site', 'bluehost-wordpress-plugin');
                        default:
                            return __('Deploying to Production Site', 'bluehost-wordpress-plugin');
                    }
                })()}
            </h1>
            <p>
                {__('This should only take a minute', 'bluehost-wordpress-plugin')}
            </p>
            <div style={{width: '555px'}}>
                <OverlaySvg/>
            </div>
            <p>
                <span>{__('Tip: ', 'bluehost-wordpress-plugin')}</span>
                {__('Making changes in staging doesn\'t affect your live site.', 'bluehost-wordpress-plugin')}
            </p>
        </Overlay>
    );
}