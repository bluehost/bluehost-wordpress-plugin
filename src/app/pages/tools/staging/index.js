/**
 * WordPress dependencies
 */
import {useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';
import {Modal} from '@wordpress/components';

/**
 * Internal dependencies
 */
import {
    AppPage as Page,
    AppButton as Button,
    AppSpinner as Spinner,
    EnvironmentCard,
    OptionsMenu,
    Overlay,
    Warning
} from '@/components';
import {useStaging} from '@/hooks';
import {ReactComponent as LoadingProdSvg} from '@/assets/error-state.svg';
import './style.scss';

export default function StagingPage() {

    const [showDeployModal, setShowDeployModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [{environment, status}, {createEnv, cloneEnv, deleteEnv, deployChanges, switchToEnv}] = useStaging({initialStatus: 'ready'});

    return (
        <Page className="bluehost-staging">

            <h1>{__('Staging', 'bluehost-wordpress-plugin')}</h1>
            <p>{__('A staging site is a copy of your site where you can safely test changes before publishing them to your production site. It gives you a way to try new things, test updates, and then deploy them when you\'re ready.', 'bluehost-wordpress-plugin')}</p>

            <div className="bluehost-staging__production-env">
                <h2>{__('Production site', 'bluehost-wordpress-plugin')}</h2>
                <p>{__('This is your live website.', 'bluehost-wordpress-plugin')}</p>
                <EnvironmentCard
                    color="green"
                    deploymentActionsComponent={
                        status === 'ready' && (
                            <Button
                                isDefault
                                onClick={() => cloneEnv()}
                            >
                                {__('Clone to Staging', 'bluehost-wordpress-plugin')}
                            </Button>
                        )
                    }
                    environmentName={__('Live Site', 'bluehost-wordpress-plugin')}
                    radioButtonComponent={
                        status === 'ready' && (
                            <label>
                                <input
                                    type="radio"
                                    checked={environment === 'production'}
                                    onChange={() => {
                                        setShowOverlay(true);
                                        setTimeout(() => {
                                            setShowOverlay(false);
                                            switchToEnv('production');
                                        }, 5000)
                                    }}
                                />
                            </label>
                        )
                    }
                    title={window.location.hostname}
                />
            </div>

            <div className="bluehost-staging__staging-env">
                <h2>{__('Staging site', 'bluehost-wordpress-plugin')}</h2>
                {(() => {
                    switch (status) {
                        case 'creation':
                            return (
                                <div className={`bluehost-staging__step --${status}`}>
                                    <Spinner/>
                                    <div>{__('Creating your staging site. This usually takes a few minutes...', 'bluehost-wordpress-plugin')}</div>
                                    <p>
                                        {__('You can wait or close this window and access your staging site from the staging menu after setup is complete.', 'bluehost-wordpress-plugin')}
                                    </p>
                                </div>
                            );
                        case 'ready':
                            return (
                                <div className={`bluehost-staging__step --${status}`}>
                                    <p>
                                        {__('This is an unpublished copy of your website.', 'bluehost-wordpress-plugin')}
                                    </p>
                                    <EnvironmentCard
                                        color="red"
                                        deploymentActionsComponent={(
                                            <Button
                                                isDefault
                                                onClick={() => setShowDeployModal(true)}
                                            >{/* TODO: Change this to a dropdown */}
                                                {__('Deploy All Changes', 'bluehost-wordpress-plugin')}
                                            </Button>
                                        )}
                                        environmentActionsComponent={(
                                            <OptionsMenu
                                                label={__('Staging Options', 'bluehost-wordpress-plugin')}
                                                options={[
                                                    {
                                                        label: __('Delete', 'bluehost-wordpress-plugin'),
                                                        callback: () => setShowDeleteModal(true)
                                                    }
                                                ]}
                                            />
                                        )}
                                        environmentName={__('Staging Site', 'bluehost-wordpress-plugin')}
                                        radioButtonComponent={(
                                            <label>
                                                <input
                                                    type="radio"
                                                    checked={environment === 'staging'}
                                                    onChange={() => {
                                                        setShowOverlay(true);
                                                        setTimeout(() => {
                                                            setShowOverlay(false);
                                                            switchToEnv('staging');
                                                        }, 5000)
                                                    }}
                                                />
                                            </label>
                                        )}
                                        title={`${window.location.hostname}/1234/staging`}
                                    />
                                </div>
                            );
                        default:
                            return (
                                <div className="bluehost-staging__step --default">
                                    <p>{__('You don\'t have a staging site yet.', 'bluehost-wordpress-plugin')}</p>
                                    <Button isPrimary onClick={createEnv}>
                                        {__('Create Staging Site', 'bluehost-wordpress-plugin')}
                                    </Button>
                                </div>
                            );
                    }
                })()}
            </div>

            {showDeployModal && (
                <Modal
                    className="bluehost-staging__modal --deploy"
                    isDismissable={false}
                    title={__('Deploy Files to Production?', 'bluehost-wordpress-plugin')}
                >
                    <p>
                        {__('This will override your production site. Are you sure you want to deploy all staging files to production?', 'bluehost-wordpress-plugin')}
                    </p>
                    <div className="bluehost-staging__modal-actions">
                        <Warning>{__('This action cannot be undone', 'bluehost-wordpress-plugin')}</Warning>
                        <Button onClick={() => setShowDeployModal(false)}>
                            {__('Cancel', 'bluehost-wordpress-plugin')}
                        </Button>
                        <Button isPrimary onClick={() => {
                            deployChanges('staging', 'production', 'all');
                            setShowDeployModal(false);
                        }}>
                            {__('Deploy', 'bluehost-wordpress-plugin')}
                        </Button>
                    </div>
                </Modal>
            )}

            {showDeleteModal && (
                <Modal
                    className="bluehost-staging__modal --delete"
                    isDismissable={false}
                    title={__('Delete staging site?', 'bluehost-wordpress-plugin')}
                >
                    <p>
                        {__('Are you sure you want to delete this staging site? This will permanently delete the staging instance from your site.', 'bluehost-wordpress-plugin')}
                    </p>
                    <div className="bluehost-staging__modal-actions">
                        <Warning>{__('This action cannot be undone', 'bluehost-wordpress-plugin')}</Warning>
                        <Button onClick={() => setShowDeleteModal(false)}>
                            {__('Cancel', 'bluehost-wordpress-plugin')}
                        </Button>
                        <Button isPrimary onClick={() => {
                            deleteEnv();
                            setShowDeleteModal(false);
                        }}>
                            {__('Delete', 'bluehost-wordpress-plugin')}
                        </Button>
                    </div>
                </Modal>
            )}

            {showOverlay && (
                <Overlay className={`bluehost-staging__overlay`}>
                    <h1>
                        {sprintf(__('Loading %s Site', 'bluehost-wordpress-plugin'), environment === 'production' ? __('Staging', 'bluehost-wordpress-plugin') : __('Production', 'bluehost-wordpress-plugin'))}
                    </h1>
                    <p>{__('This should only take a minute', 'bluehost-wordpress-plugin')}</p>
                    <div style={{width: '555px'}}>
                        <LoadingProdSvg/>
                    </div>
                    <p>
                        <span>{__('Tip: ', 'bluehost-wordpress-plugin')}</span>
                        {__('Making changes in staging doesn\'t affect your live site.', 'bluehost-wordpress-plugin')}
                    </p>
                </Overlay>
            )}

        </Page>
    );
};