/**
 * WordPress dependencies
 */
import {useState} from '@wordpress/element';
import {__} from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
    AppButton as Button,
    AppPage as Page,
    AppSpinner as Spinner,
    EnvironmentCard,
    OptionsMenu,
    Overlay,
    AppSnackbar as Snackbar,
} from '@/components';
import {useStaging} from '@/hooks';
import {ReactComponent as LoadingEnvSvg} from '@/assets/change-env.svg';
import CloneModal from './clone-modal';
import DeleteModal from './delete-modal';
import DeploymentModal from './deploy-modal';
import './style.scss';

export default function StagingPage() {

    const [deployType, setDeployType] = useState('all');
    const [showCloneModal, setShowCloneModal] = useState(false);
    const [showDeployModal, setShowDeployModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

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
                                    <Button
                                        isDefault
                                        disabled={isProduction}
                                        onClick={() => setShowDeployModal(true)}
                                    >
                                        {__('Deploy All Changes', 'bluehost-wordpress-plugin')}
                                    </Button>
                                )}
                                environmentActionsComponent={(
                                    <OptionsMenu
                                        disabled={isProduction}
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
                        cloneEnv();
                    }}
                    onClose={() => setShowCloneModal(false)}
                />
            )}

            {showDeleteModal && (
                <DeleteModal
                    onClick={() => {
                        setShowDeleteModal(false);
                        deleteEnv();
                    }}
                    onClose={() => setShowDeleteModal(false)}
                />
            )}

            {showDeployModal && (
                <DeploymentModal
                    onClick={() => {
                        setShowDeployModal(false);
                        deployChanges(deployType);
                    }}
                    onClose={() => setShowDeployModal(false)}
                    type={deployType}
                />
            )}

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