import AppStore from '../../data/store';
import { Heading, ErrorCard, Accordion } from '../../components';
import {
	blueprintSettingsApiFetch,
	dispatchUpdateSnackbar,
	comingSoonAdminbarToggle,
} from '../../util/helpers';
import {
	Card,
	CardBody,
	CardHeader,
	CardDivider,
	ToggleControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';

const ComingSoon = () => {
	const { store, setStore } = useContext( AppStore );
	const [ comingSoon, setComingSoon ] = useState( store.comingSoon );
	const [ isError, setError ] = useState( false );

	const getComingSoonNoticeText = () => {
		return comingSoon
			? __( 'Coming soon activated.', 'wp-plugin-blueprint' )
			: __( 'Coming soon deactivated.', 'wp-plugin-blueprint' );
	};
	const getComingSoonHelpText = () => {
		return comingSoon
			? __(
					'Coming soon page is active. Site requires login.',
					'wp-plugin-blueprint'
			  )
			: __(
					'Coming soon page is not active. Site is live to visitors.',
					'wp-plugin-blueprint'
			  );
	};

	useUpdateEffect( () => {
		blueprintSettingsApiFetch( { comingSoon }, setError, ( response ) => {
			setStore( {
				...store,
				comingSoon,
			} );
			dispatchUpdateSnackbar( getComingSoonNoticeText() );
			comingSoonAdminbarToggle();
		} );
	}, [ comingSoon ] );

	if ( isError ) {
		return <ErrorCard error={ isError } />;
	}
	return (
		<Card className="card-coming-soon">
			<CardHeader>
				<Heading level="3">
					{ __( 'Coming Soon', 'wp-plugin-blueprint' ) }
				</Heading>
			</CardHeader>
			<CardBody>
				<p>
					{ __(
						'Still building your site? Need to make a big change?',
						'wp-plugin-blueprint'
					) }
				</p>
				<p>
					{ __(
						'Your Blueprint Coming Soon page lets you hide your site from visitors while you make the magic happen.',
						'wp-plugin-blueprint'
					) }
				</p>
				<p>
					{ __(
						'Come back here anytime to turn it on or off as you want to drop a curtain over your site.',
						'wp-plugin-blueprint'
					) }
				</p>
			</CardBody>
			<CardDivider />
			<CardBody className="coming-soon-setting">
				<ToggleControl
					label={ __( 'Coming Soon', 'wp-plugin-blueprint' ) }
					className="coming-soon-toggle"
					checked={ comingSoon }
					help={ getComingSoonHelpText() }
					onChange={ () => {
						setComingSoon( ( value ) => ! value );
					} }
				/>
				{ comingSoon && (
					<Accordion
						className="coming-soon-protip"
						summary={ __(
							'Pro Tip: Begin collecting subscribers',
							'wp-plugin-blueprint'
						) }
					>
						<p>
							{ __(
								'Activate the "Jetpack" plugin, connect your site, and enable the "Subscriptions" module to build your following. Subscribers are notified when you publish new posts.',
								'wp-plugin-blueprint'
							) }
						</p>
					</Accordion>
				) }
			</CardBody>
		</Card>
	);
};

export default ComingSoon;
