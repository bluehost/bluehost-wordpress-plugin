import './style.scss';
import { default as NewfoldStaging } from '../../../../../vendor/newfold-labs/wp-module-staging/components/staging/';

import {
	BWADropdownButton,
	BWAEnvironmentCard,
	BWAOptionsMenu,
	BWAOverlay,
	BWASnackbar as Snackbar,
} from '@app/components/molecules';
import {
	BWAHeading,
	BWAButton,
	BWASpinner,
} from '@app/components/atoms';
import {
	RadioButtonDisabledIcon,
	RadioButtonSelectedIcon,
	WorkingImageUrl,
} from '@app/assets';
import { __, sprintf } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

import { BWACommonTemplate } from '@app/components/templates';
import CloneBWAOverlay from './clone-overlay';
import CloneModal from './clone-modal';
import DeletBWAOverlay from './delete-overlay';
import DeleteModal from './delete-modal';
import DeploymentBWAOverlay from './deploy-overlay';
import DeploymentModal from './deploy-modal';
import Tips from './tips';
import { useStaging } from '@app/hooks';

import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	CardMedia,
	Icon,
	TabPanel,
	Spinner,
} from '@wordpress/components';

export default function StagingPage() {
	const [ deployType, setDeployType ] = useState( 'all' );
	const [ showCloneModal, setShowCloneModal ] = useState( false );
	const [ showCloneBWAOverlay, setShowCloneBWAOverlay ] = useState( false );
	const [ showDeployModal, setShowDeployModal ] = useState( false );
	const [ showDeployBWAOverlay, setShowDeployBWAOverlay ] = useState( false );
	const [ showDeleteModal, setShowDeleteModal ] = useState( false );
	const [ showDeleteBWAOverlay, setShowDeleteBWAOverlay ] = useState( false );

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
			switchingTo,
		}, {
			createEnv,
			cloneEnv,
			deleteEnv,
			deployChanges,
			setNotice,
			switchToEnv,
		},
	] = useStaging( {} );

	const handleClick = ( e ) => {
		if ( notice ) {
			const snackbar = document.querySelector( '.bluehost-snackbar' );
			if ( snackbar && ! snackbar.contains( e.target ) ) {
				setNotice( null );
			}
		}
	};

	useEffect( () => {
		if ( notice ) {
			document.addEventListener( 'mousedown', handleClick );
		} else {
			document.removeEventListener( 'mousedown', handleClick );
		}
		return () => {
			document.removeEventListener( 'mousedown', handleClick );
		};
	}, [ notice ] );

	// Components to pass to module
	const moduleComponents = {
		Button,
		Card,
		CardBody,
		CardFooter,
		CardHeader,
		CardMedia,
		Icon,
		TabPanel,
		Spinner
	};
	// methods to pass to module
	const moduleMethods = {
		apiFetch,
		classnames,
		useState,
		useEffect,
		useNavigate,
		useLocation
	};
	// constants to pass to module
	const moduleConstants = {
		'resturl': window.nfdplugin.restApiUrl,
		'restnonce': window.nfdplugin.restApiNonce,
		'eventendpoint': '/newfold-data/v1/events/',
		'stagingLongDescription': __( 'A staging site is a copy of your site where you can safely test changes before publishing them to your production site. It gives you a way to try new things, test updates, and then deploy them when you\'re ready.', 'bluehost-wordpress-plugin' ),
		'stagingDescription': __( 'This is an unpublished copy of your website.', 'bluehost-wordpress-plugin' ),
		'productionDescription': __( 'This is your live website.', 'bluehost-wordpress-plugin' ),
		'cloneButtonText': __( 'Clone to Staging', 'bluehost-wordpress-plugin' ),
	}

	return (
		<BWACommonTemplate className="bluehost-staging">
			<BWAHeading level="h2" size={ 1 } className="is-page-title">{ __( 'Staging', 'bluehost-wordpress-plugin' ) }</BWAHeading>

			<NewfoldStaging 
				Components={ moduleComponents }
				methods={ moduleMethods }
				constants={ moduleConstants }
			/>

			<div className="bluehost-staging__production-env">
				<BWAHeading level="h3" size={2}>{ __( 'Production site', 'bluehost-wordpress-plugin' ) }</BWAHeading>
				<p>{ moduleConstants.productionDescription }</p>
				<BWAEnvironmentCard
					color="green"
					deploymentActionsComponent={
						hasStaging && (
							<BWAButton
								disabled={ ! isProduction }
								isSecondary
								onClick={ () => setShowCloneModal( true ) }
							>
								{ moduleConstants.cloneButtonText }
							</BWAButton>
						)
					}
					environmentName={ __( 'Live Site', 'bluehost-wordpress-plugin' ) }
					radioButtonComponent={
						hasStaging && (
							<label>
								{ !! isProduction ? <RadioButtonSelectedIcon /> : <RadioButtonDisabledIcon /> }
								<span className="sr-only">{ __( 'Production', 'bluehost-wordpress-plugin' ) }</span>
								<input
									type="radio"
									checked={ !! isProduction }
									onChange={ () => switchToEnv( 'production' ) }
								/>
							</label>
						)
					}
					//screenshotUrl={productionThumbnailUrl}
					title={ productionUrl }
				/>
			</div>

			<div className="bluehost-staging__staging-env">
				<BWAHeading level="h3" size={2}>{ __( 'Staging site', 'bluehost-wordpress-plugin' ) }</BWAHeading>
				{ ( () => {
					if ( isCreatingStaging ) {
						return (
							<div className={ `bluehost-staging__step --creation` }>
								<BWASpinner />
								<div>{ __( 'Creating your staging site. This usually takes a few minutes...', 'bluehost-wordpress-plugin' ) }</div>
								<p>
									{ __( 'You can wait or close this window and access your staging site from the staging menu after setup is complete.', 'bluehost-wordpress-plugin' ) }
								</p>
							</div>
						);
					}

					if ( ! hasStaging ) {
						return (
							<div className="bluehost-staging__step --default">
								<p>{ __( 'You don\'t have a staging site yet.', 'bluehost-wordpress-plugin' ) }</p>
								<BWAButton isPrimary onClick={ createEnv }>
									{ __( 'Create Staging Site', 'bluehost-wordpress-plugin' ) }
								</BWAButton>
							</div>
						);
					}

					return (
						<div className={ `bluehost-staging__step --ready` }>
							<p>
								{ moduleConstants.stagingDescription }
							</p>
							<BWAEnvironmentCard
								color="black"
								deploymentActionsComponent={ (
									<BWADropdownButton
										disabled={ isProduction }
										options={ [
											{
												title: __( 'Deploy All Changes', 'bluehost-wordpress-plugin' ),
												description: __( 'Deploy all changes you\'ve made to the filesystem and database of your website.', 'bluehost-wordpress-plugin' ),
												callback: () => {
													setDeployType( 'all' );
													setShowDeployModal( true );
												},
											},
											{
												title: __( 'Deploy Files Only', 'bluehost-wordpress-plugin' ),
												description: __( 'This will only upload the files you\'ve changed (i.e. html or css files).', 'bluehost-wordpress-plugin' ),
												callback: () => {
													setDeployType( 'files' );
													setShowDeployModal( true );
												},
											},
											{
												title: __( 'Deploy Database', 'bluehost-wordpress-plugin' ),
												description: __( 'Only upload changes you\'ve made to the database on your staging server.', 'bluehost-wordpress-plugin' ),
												callback: () => {
													setDeployType( 'db' );
													setShowDeployModal( true );
												},
											},
										] }
										width={ 215 }
									/>
								) }
								environmentActionsComponent={
									isProduction &&
                                    (
                                    	<BWAOptionsMenu
											label={ __( 'Staging Options', 'bluehost-wordpress-plugin' ) }
											options={ [
                                    			{
                                    				label: __( 'Delete', 'bluehost-wordpress-plugin' ),
                                    				callback: () => setShowDeleteModal( true ),
                                    			},
                                    		] }
                                    	/>
                                    )
								}
								environmentName={ __( 'Staging Site', 'bluehost-wordpress-plugin' ) }
								radioButtonComponent={ (
									<label>
										{ ! isProduction ? <RadioButtonSelectedIcon /> : <RadioButtonDisabledIcon /> }
										<span className="sr-only">{ __( 'Staging', 'bluehost-wordpress-plugin' ) }</span>
										<input
											type="radio"
											checked={ ! isProduction }
											onChange={ () => switchToEnv( 'staging' ) }
										/>
									</label>
								) }
								//screenshotUrl={stagingThumbnailUrl}
								title={ stagingUrl }
							/>
						</div>
					);
				} )() }
			</div>

			{ notice && (
				<Snackbar
					status={ isError ? 'error' : 'success' }
					title={ isError ? __( 'Error', 'bluehost-wordpress-plugin' ) : __( 'Success', 'bluehost-wordpress-plugin' ) }
					isDismissible={ true }
					onRemove={ () => setNotice( null ) }
				>
					<p>{ notice }</p>
				</Snackbar>
			) }

			{ showCloneModal && (
				<CloneModal
					onClick={ () => {
						setShowCloneModal( false );
						setShowCloneBWAOverlay( true );
						cloneEnv().then( () => setShowCloneBWAOverlay( false ) );
					} }
					onClose={ () => setShowCloneModal( false ) }
				/>
			) }

			{ showCloneBWAOverlay && <CloneBWAOverlay /> }

			{ showDeleteModal && (
				<DeleteModal
					onClick={ () => {
						setShowDeleteModal( false );
						setShowDeleteBWAOverlay( true );
						deleteEnv().then( () => setShowDeleteBWAOverlay( false ) );
					} }
					onClose={ () => setShowDeleteModal( false ) }
				/>
			) }

			{ showDeleteBWAOverlay && <DeletBWAOverlay /> }

			{ showDeployModal && (
				<DeploymentModal
					onClick={ () => {
						setShowDeployModal( false );
						setShowDeployBWAOverlay( true );
						deployChanges( deployType ).then( () => setShowDeployBWAOverlay( false ) );
					} }
					onClose={ () => setShowDeployModal( false ) }
					type={ deployType }
				/>
			) }

			{ showDeployBWAOverlay && <DeploymentBWAOverlay type={ deployType } /> }

			{ switchingTo && (
				<BWAOverlay className={ `bluehost-staging__overlay` }>
					<h1>
						{ sprintf(
							/* translators: %s is replaced with the environment name (i.e. Production or Staging) */
							__( 'Loading %s Site', 'bluehost-wordpress-plugin' ),
							switchingTo === 'production' ? __( 'Production', 'bluehost-wordpress-plugin' ) : __( 'Staging', 'bluehost-wordpress-plugin' )
						) }
					</h1>
					<p>{ __( 'This should only take a minute', 'bluehost-wordpress-plugin' ) }</p>
					<img
						className={ `bluehost-staging__overlay-image` }
						src={ WorkingImageUrl }
						width="555"
						height="421"
						alt=""
					/>
					<Tips />
				</BWAOverlay>
			) }
		</BWACommonTemplate>
	);
}
