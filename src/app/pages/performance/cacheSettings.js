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
	RadioControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';

const CacheSettings = () => {
	const { store, setStore } = useContext( AppStore );
	const [ cacheLevel, setCacheLevel ] = useState( store.cacheLevel );
	const [ isError, setError ] = useState( false );

	const cacheOptions = [
		{
			label: (
				<span>
					<strong>{ __( 'Disabled', 'wp-plugin-blueprint' ) }</strong>
					<span>
						{ __(
							'No cache enabled. Every page load is fresh.',
							'wp-plugin-blueprint'
						) }
					</span>
					<em>{ __( 'Not recommended.', 'wp-plugin-blueprint' ) }</em>
				</span>
			),
			value: 0,
			notice: 'Caching disabled.',
		},
		{
			label: (
				<span>
					<strong>{ __( 'Assets Only', 'wp-plugin-blueprint' ) }</strong>
					<span>
						{ __(
							'Cache static assets like images and the appearance of your site for 1 hour.',
							'wp-plugin-blueprint'
						) }
					</span>
					<em>
						{ __(
							'Tuned for online stores and member sites that need to be fresh.',
							'wp-plugin-blueprint'
						) }
					</em>
				</span>
			),
			value: 1,
			notice: 'Cache enabled for assets only.',
		},
		{
			label: (
				<span>
					<strong>
						{ __( 'Assets & Web Pages', 'wp-plugin-blueprint' ) }
					</strong>
					<span>
						{ __(
							'Cache static assets for 24 hours and web pages for 2 hours.',
							'wp-plugin-blueprint'
						) }
					</span>
					<em>
						{ __(
							'Tuned for sites that change at least weekly.',
							'wp-plugin-blueprint'
						) }
					</em>
				</span>
			),
			value: 2,
			notice: 'Cache enabled for assets and pages.',
		},
		{
			label: (
				<span>
					<strong>
						{ __(
							'Assets & Web Pages - Extended',
							'wp-plugin-blueprint'
						) }
					</strong>
					<span>
						{ __(
							'Cache static assets for 1 week and web pages for 8 hours.',
							'wp-plugin-blueprint'
						) }
					</span>
					<em>
						{ __(
							'Tuned for sites that update a few times a month or less.',
							'wp-plugin-blueprint'
						) }
					</em>
				</span>
			),
			value: 3,
			notice: 'Cache enabled for assets and pages (extended).',
		},
	];

	const getCacheLevelNoticeText = () => {
		return cacheOptions[ cacheLevel ].notice;
	};

	useUpdateEffect( () => {
		blueprintSettingsApiFetch( { cacheLevel }, setError, ( response ) => {
			setStore( {
				...store,
				cacheLevel,
			} );
			dispatchUpdateSnackbar( getCacheLevelNoticeText() );
		} );
	}, [ cacheLevel ] );

	if ( isError ) {
		return <ErrorCard error={ isError } />;
	}
	return (
		<Card className="card-cache-settings">
			<CardHeader>
				<Heading level="3">
					{ __( 'Cache Level', 'wp-plugin-blueprint' ) }
				</Heading>
			</CardHeader>
			<CardBody>
				{ __(
					'Improve delivery speed for this site by storing a static cached copy that gets regenerated regularly. This can help attract and retain visitors!',
					'wp-plugin-blueprint'
				) }
			</CardBody>
			<CardBody>
				<RadioControl
					className="input-cache-settings"
					selected={ cacheLevel }
					options={ cacheOptions }
					onChange={ ( value ) => setCacheLevel( parseInt( value ) ) }
				/>
			</CardBody>
		</Card>
	);
};

export default CacheSettings;
