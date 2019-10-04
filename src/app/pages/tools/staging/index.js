/**
 * WordPress dependencies
 */
import {useEffect, useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
    AppButton as Button,
    AppPage as Page,
    AppSpinner as Spinner,
    DropdownButton,
    EnvironmentCard,
    OptionsMenu,
    Overlay,
    AppSnackbar as Snackbar,
} from '@/components';
import {useStaging} from '@/hooks';
import {ReactComponent as LoadingEnvSvg} from '@/assets/change-env.svg';
import CloneModal from './clone-modal';
import CloneOverlay from './clone-overlay';
import DeleteModal from './delete-modal';
import DeletOverlay from './delete-overlay';
import DeploymentModal from './deploy-modal';
import DeploymentOverlay from './deploy-overlay';
import './style.scss';

export default function StagingPage() {

    const [deployType, setDeployType] = useState('all');
    const [showCloneModal, setShowCloneModal] = useState(false);
    const [showCloneOverlay, setShowCloneOverlay] = useState(false);
    const [showDeployModal, setShowDeployModal] = useState(false);
    const [showDeployOverlay, setShowDeployOverlay] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);

    const [
        {
            hasStaging,
            isCreatingStaging,
            isError,
            isProduction,
            notice,
            productionThumbnailUrl,
            productionUrl,
            stagingThumbnailUrl,
            stagingUrl,
            switchingTo
        }, {
            createEnv,
            cloneEnv,
            deleteEnv,
            deployChanges,
            setNotice,
            switchToEnv
        }
    ] = useStaging({});

    const handleClick = e => {
        if (notice) {
            const snackbar = document.querySelector('.bluehost-snackbar');
            if (snackbar && !snackbar.contains(e.target)) {
                setNotice(null);
            }
        }
    };

    useEffect(() => {
        if (notice) {
            document.addEventListener('mousedown', handleClick);
        } else {
            document.removeEventListener('mousedown', handleClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [notice]);

    useEffect(() => {
        setNotice('TESTING!');
    }, []);

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
                        hasStaging && (
                            <Button
                                disabled={!isProduction}
                                isDefault
                                onClick={() => setShowCloneModal(true)}
                            >
                                {__('Clone to Staging', 'bluehost-wordpress-plugin')}
                            </Button>
                        )
                    }
                    environmentName={__('Live Site', 'bluehost-wordpress-plugin')}
                    radioButtonComponent={
                        hasStaging && (
                            <label>
                                <input
                                    type="radio"
                                    checked={isProduction}
                                    onChange={() => switchToEnv('production')}
                                />
                            </label>
                        )
                    }
                    screenshotUrl={productionThumbnailUrl}
                    title={productionUrl}
                />
            </div>

            <div className="bluehost-staging__staging-env">
                <h2>{__('Staging site', 'bluehost-wordpress-plugin')}</h2>
                {(() => {

                    if (isCreatingStaging) {
                        return (
                            <div className={`bluehost-staging__step --creation`}>
                                <Spinner/>
                                <div>{__('Creating your staging site. This usually takes a few minutes...', 'bluehost-wordpress-plugin')}</div>
                                <p>
                                    {__('You can wait or close this window and access your staging site from the staging menu after setup is complete.', 'bluehost-wordpress-plugin')}
                                </p>
                            </div>
                        );
                    }

                    if (!hasStaging) {
                        return (
                            <div className="bluehost-staging__step --default">
                                <p>{__('You don\'t have a staging site yet.', 'bluehost-wordpress-plugin')}</p>
                                <Button isPrimary onClick={createEnv}>
                                    {__('Create Staging Site', 'bluehost-wordpress-plugin')}
                                </Button>
                            </div>
                        );
                    }

                    return (
                        <div className={`bluehost-staging__step --ready`}>
                            <p>
                                {__('This is an unpublished copy of your website.', 'bluehost-wordpress-plugin')}
                            </p>
                            <EnvironmentCard
                                color="red"
                                deploymentActionsComponent={(
                                    <DropdownButton
                                        disabled={isProduction}
                                        options={[
                                            {
                                                title: __('Deploy All Changes', 'bluehost-wordpress-plugin'),
                                                description: __('Deploy all changes you\'ve made to the filesystem and database of your website.', 'bluehost-wordpress-plugin'),
                                                callback: () => {
                                                    setDeployType('all');
                                                    setShowDeployModal(true);
                                                }
                                            },
                                            {
                                                title: __('Deploy Files Only', 'bluehost-wordpress-plugin'),
                                                description: __('This will only upload the files you\'ve changed (i.e. html or css files).', 'bluehost-wordpress-plugin'),
                                                callback: () => {
                                                    setDeployType('files');
                                                    setShowDeployModal(true);
                                                }
                                            },
                                            {
                                                title: __('Deploy Database', 'bluehost-wordpress-plugin'),
                                                description: __('Only upload changes you\'ve made to the database on your staging server.', 'bluehost-wordpress-plugin'),
                                                callback: () => {
                                                    setDeployType('db');
                                                    setShowDeployModal(true);
                                                }
                                            },
                                        ]}
                                        width={215}
                                    />
                                )}
                                environmentActionsComponent={
                                    isProduction &&
                                    (
                                        <OptionsMenu
                                            label={__('Staging Options', 'bluehost-wordpress-plugin')}
                                            options={[
                                                {
                                                    label: __('Delete', 'bluehost-wordpress-plugin'),
                                                    callback: () => setShowDeleteModal(true)
                                                }
                                            ]}
                                        />
                                    )
                                }
                                environmentName={__('Staging Site', 'bluehost-wordpress-plugin')}
                                radioButtonComponent={(
                                    <label>
                                        <input
                                            type="radio"
                                            checked={!isProduction}
                                            onChange={() => switchToEnv('staging')}
                                        />
                                    </label>
                                )}
                                screenshotUrl={stagingThumbnailUrl}
                                title={stagingUrl}
                            />
                        </div>
                    );
                })()}
            </div>

            {notice && (
                <Snackbar
                    status={isError ? 'error' : 'success'}
                    title={isError ? __('Error', 'bluehost-wordpress-plugin') : __('Success', 'bluehost-wordpress-plugin')}
                    isDismissible={true}
                    onRemove={() => setNotice(null)}
                >
                    <p>{notice}</p>
                </Snackbar>
            )}

            {showCloneModal && (
                <CloneModal
                    onClick={() => {
                        setShowCloneModal(false);
                        setShowCloneOverlay(true);
                        cloneEnv().then(() => setShowCloneOverlay(false));
                    }}
                    onClose={() => setShowCloneModal(false)}
                />
            )}

            {showCloneOverlay && <CloneOverlay/>}

            {showDeleteModal && (
                <DeleteModal
                    onClick={() => {
                        setShowDeleteModal(false);
                        setShowDeleteOverlay(true);
                        deleteEnv().then(() => setShowDeleteOverlay(false));
                    }}
                    onClose={() => setShowDeleteModal(false)}
                />
            )}

            {showDeleteOverlay && <DeletOverlay/>}

            {showDeployModal && (
                <DeploymentModal
                    onClick={() => {
                        setShowDeployModal(false);
                        setShowDeployOverlay(true);
                        deployChanges(deployType).then(() => setShowDeployOverlay(false));
                    }}
                    onClose={() => setShowDeployModal(false)}
                    type={deployType}
                />
            )}

            {showDeployOverlay && <DeploymentOverlay type={deployType}/>}

            {switchingTo && (
                <Overlay className={`bluehost-staging__overlay`}>
                    <h1>
                        {sprintf(
                            __('Loading %s Site', 'bluehost-wordpress-plugin'),
                            switchingTo === 'production' ? __('Production', 'bluehost-wordpress-plugin') : __('Staging', 'bluehost-wordpress-plugin')
                        )}
                    </h1>
                    <p>{__('This should only take a minute', 'bluehost-wordpress-plugin')}</p>
                    <div style={{width: '555px'}}>
                        <LoadingEnvSvg/>
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