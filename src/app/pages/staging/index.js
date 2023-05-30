import './stylesheet.scss';

import { Button, Radio, Select, Modal } from '@yoast/ui-library';
import { Page } from '../../components/page';
import { SectionContainer, SectionHeader, SectionContent, SectionSettings } from '../../components/section';
import { useState } from '@wordpress/element';
import { ArrowPathIcon, TrashIcon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from 'react';
import { useNotification } from '../../components/notifications/feed';

const ProductionSite = ({ 
    hasStaging, 
    isProduction, 
    productionUrl,
    switchToMe,
    cloneMe,
    setModal,
}) => {
    return (
        <SectionSettings
            title={__('Production site', 'wp-plugin-bluehost')}
            description={
                <Radio
                    defaultChecked={isProduction === true ? true : false}
                    checked={isProduction === true ? true : false}
                    label={isProduction ? __('Currently editing', 'wp-plugin-bluehost') : __('Not currently editing', 'wp-plugin-bluehost') }
                    id="wppbh-production-toggle"
                    name="wppbh-staging-selector"
                    value="production"
                    onChange={() => {
                        switchToMe();
                    }}
                />
            }
        >
            <div className="yst-flex yst-justify-between yst-items-center yst-flex-wrap yst-gap-3">
                <div>{productionUrl}</div>
                {hasStaging &&
                    <Button
                        variant="secondary"
                        id="staging-clone-button"
                        disabled={isProduction ? false : true}
                        onClick={() => { 
                            setModal(
                                'Confirm Clone Action',
                                'This will overwrite anything in staging and update it to an exact clone of the current production site. Are you sure you want to proceed?',
                                cloneMe,
                                null,
                                'Clone'
                            )
                        }}>
                        {__('Clone to staging', 'wp-plugin-bluehost')}
                    </Button>
                }
            </div>
        </SectionSettings>
    );
}

const StagingSite = ({ 
    hasStaging, 
    isProduction, 
    createMe,
    deployMe,
    deleteMe,
    switchToMe,
    stagingUrl,
    setModal,
    creationDate,
}) => {
    const [deployOption, setDeployOption] = useState( 'all' );

    return (
        <SectionSettings
            title={__('Staging site', 'wp-plugin-bluehost')}
            description={!hasStaging ? __("You don't have a staging site yet.", 'wp-plugin-bluehost') :
                <Radio
                    defaultChecked={isProduction ? false : true}
                    checked={isProduction ? false : true}
                    label={isProduction ? __('Not currently editing', 'wp-plugin-bluehost') : __('Currently editing', 'wp-plugin-bluehost') }
                    id="wppbh-staging-toggle"
                    name="wppbh-staging-selector"
                    value="staging"
                    onChange={() => {
                        switchToMe();
                    }}
                />
            }
        >
            <div className="yst-flex yst-justify-between yst-items-center yst-flex-wrap yst-gap-3">
                {!hasStaging &&
                    <div className="yst-flex yst-justify-end yst-w-full">
                        <Button 
                            variant="secondary"
                            id="staging-create-button"
                            onClick={() => { 
                            createMe()
                        }}>
                            {__('Create staging site', 'wp-plugin-bluehost')}
                        </Button>
                    </div>
                }
                {hasStaging &&
                    <>
                        <div>
                            {stagingUrl}
                            <dl className="yst-flex yst-justify-between yst-items-center yst-flex-wrap yst-gap-3">
                                <dt>Created:</dt>
                                <dd>{creationDate}</dd>
                            </dl>
                        </div>
                        <div className="yst-flex yst-gap-1.5 yst-relative">
                            <Select
                                disabled={ isProduction ? true : false }
                                id="wppbh-staging-select"
                                name="wppbh-staging"
                                className="yst-w-48"
                                value={deployOption}
                                onChange={(value) => { setDeployOption(value) }}
                                options={[
                                    {
                                        label: 'Deploy all changes',
                                        value: 'all'
                                    },
                                    {
                                        label: 'Deploy files only',
                                        value: 'files'
                                    },
                                    {
                                        label: 'Deploy database only',
                                        value: 'db'
                                    }
                                ]}
                            />
                            <Button
                                disabled={isProduction ? true : false }
                                id="staging-deploy-button"
                                title={__('Deploy', 'wp-plugin-bluehost')}
                                onClick={() => { 
                                    // console.log('Open confirm modal: Deploy stagin option to production');
                                    // deployMe(deployOption);
                                    setModal(
                                        'Confirm Deployment',
                                        'This will deploy staging to production and overwrite current production site. Are you sure you want to proceed?',
                                        deployMe,
                                        deployOption,
                                        'Deploy'
                                    )
                                }}
                            >
                                <ArrowPathIcon />
                            </Button>

                            <Button
                                disabled={isProduction ? false : true }
                                variant="error"
                                id="staging-delete-button"
                                title={__('Delete Staging Site', 'wp-plugin-bluehost')}
                                onClick={() => { 
                                    // console.log('Open confirm modal: Delete stagin option to production');
                                    // deleteMe();
                                    setModal(
                                        'Confirm Delete',
                                        'This will permanently delete staging site. Are you sure you want to proceed? You can recreate another staging site at any time, but any specific changes you\'ve made to this staging site will be lost.',
                                        deleteMe,
                                        null,
                                        'Delete'
                                    )
                                }}
                            >
                                <TrashIcon />
                            </Button>
                        </div>
                    </>
                }

            </div>
        </SectionSettings>
    );
};

const Staging = () => {
    const apiNamespace = '/newfold-staging/v1/';
	const unknownErrorMsg = 'An unknown error has occurred.';
    const resturl = window.WPPBH.resturl;
    // const restnonce = ;
	const [ isLoading, setIsLoading ] = useState( true );
	const [ isThinking, setIsThinking ] = useState( false );
	const [ isError, setIsError ] = useState( false );
	// const [ isCreatingStaging, setIsCreatingStaging ] = useState( false );
	const [ hasStaging, setHasStaging ] = useState( null );
	const [ isProduction, setIsProduction ] = useState( true );
	const [ creationDate, setCreationDate ] = useState( null );
	const [ productionDir, setProductionDir ] = useState( null );
	const [ productionUrl, setProductionUrl ] = useState( null );
	const [ stagingDir, setStagingDir ] = useState( null );
	const [ stagingUrl, setStagingUrl ] = useState( null );
	// const [ switchingTo, setSwitchingTo ] = useState( '' );
    const [ modalChildren, setModalChildren ] = useState( <div /> );
    const [ modalOpen, setModalOpen ] = useState( false );

	let notify = useNotification();

    // Setup values from response
	const setup = ( response ) => {

		if ( response.hasOwnProperty( 'stagingExists' ) ) {
			setHasStaging( response.stagingExists );
		}
		if ( response.hasOwnProperty( 'currentEnvironment' ) ) {
			setIsProduction( response.currentEnvironment === 'production' );
		}
		if ( response.hasOwnProperty( 'productionDir' ) ) {
			setProductionDir( response.productionDir );
		}
		if ( response.hasOwnProperty( 'productionUrl' ) ) {
			setProductionUrl( response.productionUrl );
		}
		if ( response.hasOwnProperty( 'stagingDir' ) ) {
			setStagingDir( response.stagingDir );
		}
		if ( response.hasOwnProperty( 'stagingUrl' ) ) {
			setStagingUrl( response.stagingUrl );
		}
		if ( response.hasOwnProperty( 'creationDate' ) ) {
			setCreationDate( response.creationDate );
		}

	};

	const setError = ( error ) => {
		// console.log('setError', error);
		setIsLoading( false );
        setIsThinking( false );
		setIsError(true);
        makeNotice( 'error', 'Error', error, 'error' );
	};

	const catchError = (error) => {
		if ( error.hasOwnProperty( 'message' ) ) {
			setError(error.message);
		} else if ( error.hasOwnProperty( 'code' ) ) {
			setError(error.code);
		} else if ( error.hasOwnProperty( 'status' ) ) {
			setError(error.status);
		} else if ( error.hasOwnProperty( 'data' ) && error.data.hasOwnProperty('status') ) {
			setError(error.data.status);
		} else {
			setError(unknownErrorMsg);
		}

	};

    const makeNotice = (id, title, description, variant="success", duration=false) => {
        notify.push(`staging-notice-${id}`, {
            title,
            description: (
                <span>
                    {description}
                </span>
            ),
            variant,
            autoDismiss: duration,
        });
    };

	/**
	 * on mount load staging data from module api
	 */
	useEffect(() => {
		init();
	}, [] );

	const init = () => {
		// console.log('Init - Loading Staging Data');
		setIsError(false);
		setIsLoading(true);
		stagingApiFetch(
			'staging/', 
			'GET', 
			(response) => {
				// console.log('Init Staging Data:', response);
				// validate response data
				if ( response.hasOwnProperty('currentEnvironment') ) {
					//setup with fresh data
					setup( response );
				} else if ( response.hasOwnProperty('code') && response.code === 'error_response' ) {
					setError( response.message ); // report known error
				} else {
					setError( unknownErrorMsg ); // report unknown error
				}
				setIsThinking( false );
                setIsLoading( false );
			}
		);
	}

	const createStaging = () => {
		// console.log('create staging');
        makeNotice( 'creating', 'Working...', 'Creating a staging site, this should take about a minute.', 'info', 8000 );
		// setIsCreatingStaging(true);
		stagingApiFetch(
			'staging/', 
			'POST', 
			(response) => {
				// console.log('Create Staging Callback', response);
				if ( response.hasOwnProperty('status') ) {
                    if ( response.status === 'success' ){
                        //setup with fresh data
                        setup( response );
                        makeNotice( 'created', 'Staging Created', response.message );
				    } else {
                        setError( response.message ); // report known error
                    }
				} else {
					setError( unknownErrorMsg ); // report unknown error
				}
				setIsThinking( false );
				// setIsCreatingStaging(false);
			}
		);
	};

	const deleteStaging = () => {
		// console.log('delete staging');
        makeNotice( 'deleting', 'Working...', 'Deleting the staging site, this should take about a minute.', 'info', 8000 );
		stagingApiFetch(
			'staging/', 
			'DELETE', 
			(response) => {
				// console.log('Delete staging callback', response);
				// validate response data
				if ( response.hasOwnProperty('status') ) {
                    if ( response.status === 'success' ){
                        // setup with fresh data
						setHasStaging( false );
                        makeNotice( 'deleted', 'Deleted Staging', response.message );
					} else {
						setError( response.message );
					}
				} else {
					setError( unknownErrorMsg ); // report unknown error
				}
				setIsThinking( false );
			}
		);
	};

	const clone = () => {
		// console.log('clone production to staging');
        makeNotice( 'cloning', 'Working...', 'Cloning production to staging, this should take about a minute.', 'info', 8000 );
		stagingApiFetch(
			'staging/clone/', 
			'POST', 
			(response) => {
				// console.log('Clone Callback', response);
				// validate response data
				if ( response.hasOwnProperty('status') ) {
					// setup with fresh data
					if ( response.status === 'success' ){
						setHasStaging( true );
                        makeNotice( 'cloned', 'Cloned to Staging', response.message );
					} else {
						setError( response.message );
					}
				} else {
					setError( unknownErrorMsg ); // report unknown error
				}
				setIsThinking( false );
			}
		);
	};

    const switchToStaging = () => {
        if ( !isProduction ) {
            // console.log('Already on staging.');
        } else {
            setModal(
                'Switch to Staging',
                'This will navigate you to the staging environment',
                switchToEnv,
                'staging',
                'Switch'
            );
        }
    };

    const switchToProduction = () => {
        if ( isProduction ) {
            // console.log('Already on production.');
        } else {
            setModal(
                'Switch to Production',
                'This will navigate you to the production environment',
                switchToEnv,
                'production',
                'Switch'
            );
        }
    };

	/**
	 * 
	 * @param {string} env One of 'staging' or 'production'
	 */
	const switchToEnv = ( env ) => {
		// console.log('switching to', env, `/switch-to?env=${ env }`);
		// setSwitchingTo( env );
        setIsThinking( true );
        makeNotice( 'switching', 'Working...', `Switching to the ${env} environment, this should take about a minute.`, 'info', 8000 );

		stagingApiFetch(
			`staging/switch-to&env=${env}`, 
			'GET', 
			(response) => {
				// console.log('Switch Callback', response);
				// validate response data
				if ( response.hasOwnProperty( 'load_page' ) ) {
					window.location.href = response.load_page;
					// navigate(response.load_page);
                    makeNotice( 'redirecting', 'Reloading', `Loading the ${env} environment now.`, 'success', 8000 );
				} else if ( response.hasOwnProperty('status') && response.status === 'error' ) {
					setError(response.message);
				} else {
					setError( unknownErrorMsg ); // report unknown error
				}
			}
		);
	};

	/**
	 * 
	 * @param {string} type One of 'all', 'files', or 'db'
	 */
	const deployStaging = ( type ) => {
		// console.log('Deploy', type);
        makeNotice( 'deploying', 'Working...', 'Deploying from staging to production, this should take about a minute.', 'info', 8000 );
		stagingApiFetch(
			`staging/deploy&type=${type}`, 
			'POST', 
			(response) => {
				// console.log('Deploy Callback', response);
				// validate response data
				if ( response.hasOwnProperty('status') ) {
					// setup with fresh data
					if ( response.status === 'success' ){
                        makeNotice( 'deployed', 'Deployed', response.message );
					} else {
						setError( response.message );
					}
				} else {
					setError( unknownErrorMsg ); // report unknown error
				}
				setIsThinking( false );
			}
		);
	};

	/**
	 * Wrapper method to interface with staging endpoints
	 *
	 * @param path append to the end of the apiNamespace
	 * @param method GET or POST, default GET
	 * @param thenCallback method to call in promise then
	 * @param passError setter for the error in component
	 * @return apiFetch promise
	 */
	const stagingApiFetch = (path = '', method = 'GET', thenCallback, errorCallback = catchError) => {
		// setIsError( false );
		// setIsLoading( true );
        setIsThinking( true );
		return apiFetch({
			url: resturl + apiNamespace + path,
			method,
			// beforeSend: (xhr) => {
			// 	xhr.setRequestHeader( 'X-WP-Nonce', restnonce );
			// },
		}).then( (response) => {
			thenCallback( response );
		}).catch( (error) => {
			errorCallback( error );
		})
	};
    const modalClose = () => {
        setModalOpen(false);
    }
    const setModal = (title, description, callback, callbackParams=null, ctaText="Proceed") => {
        setModalChildren(
            <Modal.Panel>
                <Modal.Title className="yst-text-2xl yst-font-medium yst-text-title">{title}</Modal.Title>
                <Modal.Description className="yst-mt-8 yst-mb-8">{description}</Modal.Description>
                <div className="yst-flex yst-justify-between yst-items-center yst-flex-wrap yst-gap-3">
                    <Button
                        variant="error"
                        onClick={ () => { setModalOpen(false); }}
                        >
                        <XMarkIcon /> Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={ () => { 
                            setModalOpen(false);
                            callback(callbackParams);
                        }}
                        >
                        <CheckIcon /> {ctaText}
                    </Button>
                </div>
            </Modal.Panel>
        );
        setModalOpen(true);
    };

    const getClasses = () => {
        if ( isLoading ) {
            return 'wppbh-app-staging-page is-loading';
        } else if ( isThinking ) {
            return 'wppbh-app-staging-page is-thinking';
        }
    };

    return (
        <Page title={__('Staging', 'wp-plugin-bluehost')} className={getClasses()}>
            <SectionContainer className={'wppbh-app-staging-container'}>
                <SectionHeader
                    title={__('Staging', 'wp-plugin-bluehost')}
                    subTitle={__('A staging site is a duplicate of your live site, offering a secure environment to experiment, test updates, and deploy when ready.',
                        'wp-plugin-bluehost')}
                    className={'wppbh-app-staging-header'}
                />

                <SectionContent separator={true} className={'wppbh-app-staging-prod'}>
                    <ProductionSite
                        isProduction={isProduction}
                        hasStaging={hasStaging}
                        productionUrl={productionUrl}
                        cloneMe={clone}
                        switchToMe={switchToProduction}
                        setModal={setModal}
                    />
                </SectionContent>
                <SectionContent className={'wppbh-app-staging-staging'}>
                    <StagingSite
                        isProduction={isProduction}
                        hasStaging={hasStaging}
                        setHasStaging={setHasStaging}
                        createMe={createStaging}
                        deleteMe={deleteStaging}
                        deployMe={deployStaging}
                        switchToMe={switchToStaging}
                        stagingUrl={stagingUrl}
                        creationDate={creationDate}
                        setModal={setModal}
                    />
                </SectionContent>
                <Modal 
                    isOpen={ modalOpen }
                    onClose={ modalClose }
                    children={ modalChildren }
                />
            </SectionContainer>
        </Page>
    );
}

export default Staging;