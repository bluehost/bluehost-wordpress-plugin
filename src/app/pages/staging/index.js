import './stylesheet.scss';

import { Button, Radio, Select } from '@yoast/ui-library';
import { Page } from '../../components/page';
import { SectionContainer, SectionHeader, SectionContent, SectionSettings } from '../../components/section';
import { useState } from '@wordpress/element';
import { ArrowPathIcon, TrashIcon } from '@heroicons/react/24/outline';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from 'react';
import { useNotification } from '../../components/notifications/feed';

const productionDomain = 'https://pkp.rjp.mybluehost.me';
const stagingDomain = 'https://pkp.rjp.mybluehost.me/staging/2134';

const ProductionSite = ({ 
    hasStaging, 
    isProduction, 
    setIsProduction, 
    productionUrl,
    switchToMe,
    cloneMe,
}) => {
    return (
        <SectionSettings
            title={__('Production site', 'wp-plugin-blueprint')}
            description={
                <Radio
                    defaultChecked={isProduction ? true : false}
                    label={isProduction ? __('Currently editing', 'wp-plugin-blueprint') : __('Not currently editing', 'wp-plugin-blueprint') }
                    id="wppb-production-toggle"
                    name="wppb-staging-selector"
                    value="1"
                    onChange={() => {
                        setIsProduction(true);
                        console.log('Production active');
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
                        disabled={isProduction ? false : true}
                        onClick={() => { 
                            console.log('Open confirm modal: Clone production to staging');
                            cloneMe();
                        }}>
                        {__('Clone to staging', 'wp-plugin-blueprint')}
                    </Button>
                }
            </div>
        </SectionSettings>
    );
}

const StagingSite = ({ 
    hasStaging, 
    setHasStaging, 
    isProduction, 
    setIsProduction, 
    createMe,
    deployMe,
    deleteMe,
    switchToMe,
    stagingUrl
}) => {
    const [deployOption, setDeployOption] = useState( 'all' );

    return (
        <SectionSettings
            title={__('Staging site', 'wp-plugin-blueprint')}
            description={!hasStaging ? __("You don't have a staging site yet.", 'wp-plugin-blueprint') :
                <Radio
                    defaultChecked={isProduction ? false : true}
                    label={isProduction ? __('Not currently editing', 'wp-plugin-blueprint') : __('Currently editing', 'wp-plugin-blueprint') }
                    id="wppb-staging-toggle"
                    name="wppb-staging-selector"
                    value="2"
                    onChange={() => {
                        setIsProduction(false);
                        console.log('Staging active');
                        switchToMe();
                    }}
                />
            }
        >
            <div className="yst-flex yst-justify-between yst-items-center yst-flex-wrap yst-gap-3">
                {!hasStaging &&
                    <div className="yst-flex yst-justify-end yst-w-full">
                        <Button variant="secondary" onClick={() => { 
                            create()
                        }}>
                            {__('Create staging site', 'wp-plugin-blueprint')}
                        </Button>
                    </div>
                }
                {hasStaging &&
                    <>
                        <div>{stagingUrl}</div>
                        <div className="yst-flex yst-gap-1.5 yst-relative">
                            <Select
                                disabled={ isProduction ? true : false }
                                id="wppb-staging-select"
                                name="wppb-staging"
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
                                title={__('Deploy', 'wp-plugin-blueprint')}
                                onClick={() => { 
                                    console.log('Open confirm modal: Deploy stagin option to production');
                                    deployMe(deployOption);
                                }}
                            >
                                <ArrowPathIcon />
                            </Button>

                            <Button
                                disabled={isProduction ? false : true }
                                variant="error"
                                title={__('Delete', 'wp-plugin-blueprint')}
                                onClick={() => { 
                                    console.log('Open confirm modal: Delete stagin option to production');
                                    deleteMe();
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
}

const Staging = () => {
    const apiNamespace = '/newfold-staging/v1/';
	const unknownErrorMsg = 'An unknown error has occurred.';
    const resturl = window.WPPB.resturl;
    // const restnonce = ;
	const [ isLoading, setIsLoading ] = useState( true );
	const [ isThinking, setIsThinking ] = useState( false );
	const [ isError, setIsError ] = useState( false );
	const [ notice, setNotice ] = useState( '' );
	const [ showManageStaging, setShowManageStaging ] = useState( false );
	const [ errorMessage, setErrorMessage ] = useState( null );
	const [ isCreatingStaging, setIsCreatingStaging ] = useState( false );
	const [ hasStaging, setHasStaging ] = useState( null );
	const [ isProduction, setIsProduction ] = useState( true );
	const [ creationDate, setCreationDate ] = useState( null );
	const [ productionDir, setProductionDir ] = useState( null );
	const [ productionUrl, setProductionUrl ] = useState( null );
	const [ stagingDir, setStagingDir ] = useState( null );
	const [ stagingUrl, setStagingUrl ] = useState( null );
	const [ switchingTo, setSwitchingTo ] = useState( '' );

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
		console.log('setError', error);
		setIsLoading( false );
        setIsThinking( false );
		setIsError(true);
		setErrorMessage(error);
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

    const makeNotice = (id, title, description, variant="success", duration=5000) => {
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
		console.log('Init - Loading Staging Data');
		setIsError(false);
		setIsLoading(true);
		stagingApiFetch(
			'staging/', 
			'GET', 
			(response) => {
				console.log('Init callback', response);
				// validate response data
				if ( response.hasOwnProperty('currentEnvironment') ) {
					//setup with fresh data
					setup( response );
				} else if ( response.hasOwnProperty('code') && response.code === 'error_response' ) {
					// report error received
					setError( response.message );
				} else {
					// report unknown error
					setError( unknownErrorMsg );
				}
				setIsThinking( false );
                setIsLoading( false );
			}
		);
	}

	const createStaging = () => {
		console.log('create staging');
		setIsCreatingStaging(true);
		stagingApiFetch(
			'staging/', 
			'POST', 
			(response) => {
				console.log('Create Staging Callback', response);
				// validate response data
				if ( response.hasOwnProperty('currentEnvironment') ) {
					//setup with fresh data
					setup( response );
				} else if ( response.hasOwnProperty('status') ) {
					//setup with fresh data
					if ( response.status === 'success' ){
						setup( response );
						setNotice( response.message );
                        makeNotice( 'created', 'Staging Created', notice );
					} else {
						setError( response.message );
					}
				} else {
					// report unknown error
					setError( unknownErrorMsg );
				}
				setIsThinking( false );
				setIsCreatingStaging(false);
			}
		);
	};

	const deleteStaging = () => {
		console.log('delete staging');
		stagingApiFetch(
			'staging/', 
			'DELETE', 
			(response) => {
				console.log('Delete staging callback', response);
				// validate response data
				if ( response.hasOwnProperty('status') ) {
					// setup with fresh data
					if ( response.status === 'success' ){
						setHasStaging( false );
						setNotice( response.message );
                        makeNotice( 'deleted', 'Deleted', notice, 'warning' );
					} else {
						setError( response.message );
					}
				} else {
					// report unknown error
					setError( unknownErrorMsg );
				}
				setIsThinking( false );
			}
		);
	};

	const clone = () => {
		console.log('clone production to staging');
		stagingApiFetch(
			'staging/clone/', 
			'POST', 
			(response) => {
				console.log('Clone Callback', response);
				// validate response data
				if ( response.hasOwnProperty('status') ) {
					// setup with fresh data
					if ( response.status === 'success' ){
						setHasStaging( true );
						setNotice( response.message );
                        makeNotice( 'cloned', 'Cloned to Staging', notice );
					} else {
						setError( response.message );
					}
				} else {
					// report unknown error
					setError( unknownErrorMsg );
				}
				setIsThinking( false );
			}
		);
	};

    const switchToStaging = () => {
        if ( !isProduction ) {
            console.log('Already on staging.');
        } else {
            switchToEnv( 'staging');
        }
    };

    const switchToProduction = () => {
        if ( isProduction ) {
            console.log('Already on production.');
        } else {
            switchToEnv( 'production' );
        }
    };

	/**
	 * 
	 * @param {string} env One of 'staging' or 'production'
	 */
	const switchToEnv = ( env ) => {
		console.log('switching to', env, `/switch-to?env=${ env }`);
		setSwitchingTo( env );
        setIsThinking( true );
		setNotice('Switching to '+env);
        makeNotice( 'switch-to', 'Switching Environments', notice, 'info' );
		stagingApiFetch(
			`staging/switch-to&env=${env}`, 
			'GET', 
			(response) => {
				console.log('Switch Callback', response);
				// validate response data
				if ( response.hasOwnProperty( 'load_page' ) ) {
					window.location.href = response.load_page;
					// navigate(response.load_page);
				} else if ( response.hasOwnProperty('status') && response.status === 'error' ) {
					setError(response.message);
				} else {
					// report unknown error
					setError( unknownErrorMsg );
				}
			}
		);
	};

	/**
	 * 
	 * @param {string} type One of 'all', 'files', or 'db'
	 */
	const deployStaging = ( type ) => {
		console.log('Deploy', type);
		stagingApiFetch(
			`staging/deploy&type=${type}`, 
			'POST', 
			(response) => {
				console.log('Deploy Callback', response);
				// validate response data
				if ( response.hasOwnProperty('status') ) {
					// setup with fresh data
					if ( response.status === 'success' ){
						setNotice( response.message );
                        makeNotice( 'deployed', 'Deployed', notice );
					} else {
						setError( response.message );
					}
				} else {
					// report unknown error
					setError( unknownErrorMsg );
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

    return (
        <Page title={__('Staging', 'wp-plugin-blueprint')} className={`wppb-app-staging-page ${isThinking ? 'is-thinking' : ''}`}>
            <SectionContainer className={'wppb-app-staging-container'}>
                <SectionHeader
                    title={__('Staging', 'wp-plugin-blueprint')}
                    subTitle={__('A staging site is a duplicate of your live site, offering a secure environment to experiment, test updates, and deploy when ready.',
                        'wp-plugin-blueprint')}
                    className={'wppb-app-staging-header'}
                />

                <SectionContent separator={true} className={'wppb-app-staging-prod'}>
                    <ProductionSite
                        isProduction={isProduction}
                        setIsProduction={setIsProduction}
                        hasStaging={hasStaging}
                        productionUrl={productionUrl}
                        cloneMe={clone}
                        switchToMe={switchToProduction}
                    />
                </SectionContent>
                <SectionContent className={'wppb-app-staging-staging'}>
                    <StagingSite
                        isProduction={isProduction}
                        setIsProduction={setIsProduction}
                        hasStaging={hasStaging}
                        setHasStaging={setHasStaging}
                        createMe={createStaging}
                        deleteMe={deleteStaging}
                        deployMe={deployStaging}
                        switchToMe={switchToStaging}
                        stagingUrl={stagingUrl}
                    />
                </SectionContent>
                <SectionContent>
                    <dl>
                        <dt>Status</dt>
                        <dd><code>{ notice }</code></dd>
                        <dt>Current Environment</dt>
                        <dd><code>{ isProduction ? 'production' : 'staging' }</code></dd>
                        <dt>Production Url</dt>
                        <dd><code>{ productionUrl }</code></dd>
                        <dt>Production Directory</dt>
                        <dd><code>{ productionDir }</code></dd>
                        <dt>Staging Exists</dt>
                        <dd><code>{ hasStaging ? 'true' : 'false' }</code></dd>
                        <dt>Creation Date</dt>
                        <dd><code>{ creationDate }</code></dd>
                        <dt>Staging Url</dt>
                        <dd><code>{ stagingUrl }</code></dd>
                        <dt>Staging Directory</dt>
                        <dd><code>{ stagingDir }</code></dd>
                    </dl>
                </SectionContent>
            </SectionContainer>
        </Page>
    );
}

export default Staging;