import AppStore from '../../data/store';
import { Heading, ErrorCard } from '../../components';
import {
	blueprintSettingsApiFetch,
	dispatchUpdateSnackbar,
} from '../../util/helpers';
import {
	Card,
	CardBody,
	CardHeader,
	CardDivider,
	ToggleControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useEffect } from 'react';
import { useUpdateEffect } from 'react-use';
import classNames from 'classnames';

const AutomaticUpdates = () => {
	const { store, setStore } = useContext( AppStore );
	const [ autoUpdatesAll, setAutoUpdatesAll ] = useState(
		store.autoUpdatesMajorCore &&
			store.autoUpdatesPlugins &&
			store.autoUpdatesThemes
			? true
			: false
	);
	const [ autoUpdatesMajorCore, setAutoUpdatesCore ] = useState(
		store.autoUpdatesMajorCore
	);
	const [ autoUpdatesPlugins, setAutoUpdatesPlugins ] = useState(
		store.autoUpdatesPlugins
	);
	const [ autoUpdatesThemes, setAutoUpdatesThemes ] = useState(
		store.autoUpdatesThemes
	);
	const [ isError, setError ] = useState( false );

	const getAllNoticeText = () => {
		return autoUpdatesAll
			? __( 'Everything will auto-update.', 'wp-plugin-blueprint' )
			: __( 'Custom auto-update settings.', 'wp-plugin-blueprint' );
	};
	const getAllHelpText = () => {
		return autoUpdatesAll
			? __( "We're on top of all your updates.", 'wp-plugin-blueprint' )
			: __( 'Turn on for the safest, best experience.', 'wp-plugin-blueprint' );
	};
	const getCoreNoticeText = () => {
		return autoUpdatesMajorCore
			? __( 'WordPress Core will auto-update.', 'wp-plugin-blueprint' )
			: __( 'WordPress Core will not auto-update.', 'wp-plugin-blueprint' );
	};
	const getCoreHelpText = () => {
		return autoUpdatesMajorCore
			? __( 'WordPress will automatically update.', 'wp-plugin-blueprint' )
			: __( 'WordPress must be manually updated.', 'wp-plugin-blueprint' );
	};
	const getPluginsNoticeText = () => {
		return autoUpdatesPlugins
			? __( 'Plugins will auto-update.', 'wp-plugin-blueprint' )
			: __( 'Plugins will not auto-update.', 'wp-plugin-blueprint' );
	};
	const getPluginsHelpText = () => {
		return autoUpdatesPlugins
			? __( 'All plugins will automatically update.', 'wp-plugin-blueprint' )
			: __( 'Each plugin must be manually updated.', 'wp-plugin-blueprint' );
	};
	const getThemesNoticeText = () => {
		return autoUpdatesThemes
			? __( 'Themes will auto-update.', 'wp-plugin-blueprint' )
			: __( 'Theme will not auto-update.', 'wp-plugin-blueprint' );
	};
	const getThemesHelpText = () => {
		return autoUpdatesThemes
			? __( 'All themes will automatically update.', 'wp-plugin-blueprint' )
			: __( 'Each theme must be manually updated.', 'wp-plugin-blueprint' );
	};

	useEffect( () => {
		if ( autoUpdatesMajorCore && autoUpdatesPlugins && autoUpdatesThemes ) {
			setAutoUpdatesAll( true );
		} else {
			setAutoUpdatesAll( false );
		}
	}, [ autoUpdatesMajorCore, autoUpdatesPlugins, autoUpdatesThemes ] );

	useUpdateEffect( () => {
		if ( autoUpdatesAll ) {
			setAutoUpdatesCore( autoUpdatesAll );
			setAutoUpdatesPlugins( autoUpdatesAll );
			setAutoUpdatesThemes( autoUpdatesAll );
			dispatchUpdateSnackbar( getAllNoticeText() );
		} else {
			// don't set anything, just enable them
		}
	}, [ autoUpdatesAll ] );

	useUpdateEffect( () => {
		blueprintSettingsApiFetch(
			{ autoUpdatesMajorCore },
			setError,
			( response ) => {
				setStore( {
					...store,
					autoUpdatesMajorCore,
				} );
				if ( ! autoUpdatesAll ) {
					dispatchUpdateSnackbar( getCoreNoticeText() );
				}
			}
		);
	}, [ autoUpdatesMajorCore ] );

	useUpdateEffect( () => {
		blueprintSettingsApiFetch( { autoUpdatesPlugins }, setError, ( response ) => {
			setStore( {
				...store,
				autoUpdatesPlugins,
			} );
			if ( ! autoUpdatesAll ) {
				dispatchUpdateSnackbar( getPluginsNoticeText() );
			}
		} );
	}, [ autoUpdatesPlugins ] );

	useUpdateEffect( () => {
		blueprintSettingsApiFetch( { autoUpdatesThemes }, setError, ( response ) => {
			setStore( {
				...store,
				autoUpdatesThemes,
			} );
			if ( ! autoUpdatesAll ) {
				dispatchUpdateSnackbar( getThemesNoticeText() );
			}
		} );
	}, [ autoUpdatesThemes ] );

	if ( isError ) {
		return <ErrorCard error={ isError } />;
	}
	return (
		<Card
			className={ classNames(
				'card-auto-updates',
				`everything-${ autoUpdatesAll ? 'on' : 'off' }`
			) }
		>
			<CardHeader>
				<Heading level="3">
					{ __( 'Automatic Updates', 'wp-plugin-blueprint' ) }
				</Heading>
			</CardHeader>
			<CardBody>
				{ __(
					'We strongly recommend letting us manage updates to automatically receive critical security patches, bug fixes and new features as they become available.',
					'wp-plugin-blueprint'
				) }
			</CardBody>
			<CardDivider />
			<CardBody className="autoupdate-all-setting">
				<ToggleControl
					label={ __( 'Managed', 'wp-plugin-blueprint' ) }
					className="autoupdate-all-toggle"
					checked={ autoUpdatesAll }
					help={ getAllHelpText() }
					onChange={ () => {
						setAutoUpdatesAll( ( value ) => ! value );
					} }
				/>
			</CardBody>
			{ ! autoUpdatesAll && (
				<Fragment>
					<CardDivider />
					<CardBody
						className={ `autoupdate-core-setting  ${
							autoUpdatesAll ? 'disabled' : ''
						}` }
					>
						<ToggleControl
							label={ __( 'WordPress Core', 'wp-plugin-blueprint' ) }
							className="autoupdate-core-toggle"
							checked={ autoUpdatesMajorCore }
							disabled={ autoUpdatesAll }
							help={ getCoreHelpText() }
							onChange={ () => {
								setAutoUpdatesCore( ( value ) => ! value );
							} }
						/>
					</CardBody>
					<CardDivider />
					<CardBody
						className={ `autoupdate-plugin-setting  ${
							autoUpdatesAll ? 'disabled' : ''
						}` }
					>
						<ToggleControl
							label={ __( 'Plugins', 'wp-plugin-blueprint' ) }
							className="autoupdate-plugin-toggle"
							checked={ autoUpdatesPlugins }
							disabled={ autoUpdatesAll }
							help={ getPluginsHelpText() }
							onChange={ () => {
								setAutoUpdatesPlugins( ( value ) => ! value );
							} }
						/>
					</CardBody>
					<CardDivider />
					<CardBody
						className={ `autoupdate-theme-setting  ${
							autoUpdatesAll ? 'disabled' : ''
						}` }
					>
						<ToggleControl
							label={ __( 'Themes', 'wp-plugin-blueprint' ) }
							className="autoupdate-theme-toggle"
							checked={ autoUpdatesThemes }
							disabled={ autoUpdatesAll }
							help={ getThemesHelpText() }
							onChange={ () => {
								setAutoUpdatesThemes( ( value ) => ! value );
							} }
						/>
					</CardBody>
				</Fragment>
			) }
		</Card>
	);
};

export default AutomaticUpdates;
