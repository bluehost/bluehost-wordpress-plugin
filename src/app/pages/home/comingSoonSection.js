import graphicUrl from '../../../../assets/svg/coming-soon.svg';
import { Heading, ErrorCard } from '../../components';
import AppStore from '../../data/store';
import {
	blueprintSettingsApiFetch,
	dispatchUpdateSnackbar,
	comingSoonAdminbarToggle,
} from '../../util/helpers';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useUpdateEffect } from 'react-use';

const ComingSoonSection = () => {
	const { store, setStore } = useContext( AppStore );
	const [ isError, setError ] = useState( false );
	const [ comingSoon, setComingSoon ] = useState( store.comingSoon );
	const [ wasComingSoon, setWasComingSoon ] = useState( false );

	const getComingSoonHeadline = () => {
		return comingSoon
			? __( 'Coming Soon', 'wp-plugin-blueprint' )
			: __( 'Site Launched', 'wp-plugin-blueprint' );
	};
	const getComingSoonSubhead = () => {
		return comingSoon
			? __( 'Site visitors see "Coming Soon"', 'wp-plugin-blueprint' )
			: __( 'Your site is live!', 'wp-plugin-blueprint' );
	};
	const getComingSoonBody = () => {
		return comingSoon
			? __(
					"Once you've finished setting up your site, launch it so your visitors can reach it.",
					'wp-plugin-blueprint'
			  )
			: __(
					'Congratulations! Visitors will now see the site. You can always turn Coming Soon on from the Settings tab above.',
					'wp-plugin-blueprint'
			  );
	};
	const getComingSoonGraphicClass = () => {
		return comingSoon ? 'section-graphic' : 'section-graphic reverse';
	};
	const getComingSoonButton = () => {
		return comingSoon ? (
			<Button
				variant="primary"
				icon="yes-alt"
				onClick={ () => {
					setComingSoon( () => false );
					setWasComingSoon( () => true );
				} }
			>
				{ __( 'Launch Site', 'wp-plugin-blueprint' ) }
			</Button>
		) : (
			<>
				<Button
					variant="secondary"
					icon="no-alt"
					onClick={ () => {
						setComingSoon( () => true );
						setWasComingSoon( () => true );
					} }
				>
					{ __( 'Restore Coming Soon', 'wp-plugin-blueprint' ) }
				</Button>
				<Button
					variant="link"
					onClick={ () => {
						setComingSoon( () => false );
						setWasComingSoon( () => false );
					} }
				>
					{ __( 'Dismiss', 'wp-plugin-blueprint' ) }
				</Button>
			</>
		);
	};
	const getComingSoonNoticeText = () => {
		return comingSoon
			? __( 'Coming soon activated.', 'wp-plugin-blueprint' )
			: __( 'Coming soon deactivated.', 'wp-plugin-blueprint' );
	};

	useUpdateEffect( () => {
		blueprintSettingsApiFetch( { comingSoon }, setError, ( response ) => {
			setStore( {
				...store,
				comingSoon,
			} );
			dispatchUpdateSnackbar( getComingSoonNoticeText() );
			comingSoonAdminbarToggle( comingSoon );
		} );
	}, [ comingSoon ] );

	if ( isError ) {
		return (
			<section className="wppb-section coming-soon">
				<ErrorCard error={ isError } className="wppb-section-card" />
			</section>
		);
	}
	// render nothing if coming soon is not active or not just launched
	if ( ! ( comingSoon || ( ! comingSoon && wasComingSoon ) ) ) {
		return <></>;
	}
	return (
		<section className="wppb-section wppb-section-coming-soon">
			<img
				src={ graphicUrl }
				className={ getComingSoonGraphicClass() }
				style={ { top: 0, width: '280px', height: 'auto' } }
				alt={ __( 'Launch site', 'wp-plugin-blueprint' ) }
			/>
			<Card size="large" className="wppb-section-card">
				<CardHeader>
					<Heading level="3">{ getComingSoonHeadline() }</Heading>
					<p>{ getComingSoonSubhead() }</p>
				</CardHeader>
				<CardBody>{ getComingSoonBody() }</CardBody>
				<CardFooter>{ getComingSoonButton() }</CardFooter>
			</Card>
		</section>
	);
};

export default ComingSoonSection;
