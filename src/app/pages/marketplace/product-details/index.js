import { ucFirst } from 'change-case';
import { __, sprintf } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { decodeEntities } from '@wordpress/html-entities';

import { BWABaseTemplate } from '@app/components/templates';

import { BWAButton as Button, BWASpinner } from '@app/components/atoms';
import { get } from '@app/functions';
import { useMojoApi } from '@app/hooks';
import { ReactComponent as ErrorStateImage } from '@app/assets/error-state.svg';

import './style.scss';

export default function ProductDetails( { id } ) {
	const [ item, setItem ] = useState( null );
	const [ type, setType ] = useState( null );
	const [ { done, isError, isLoading, payload } ] = useMojoApi( 'items', { id } );

	/* translators: %s is one of Themes, Plugins, or Services */
	const header = sprintf( __( 'Premium %s', 'bluehost-wordpress-plugin' ), type );
	const breadcrumbText = header;

	useEffect( () => {
		setItem( get( [ 'items', 0 ], payload ) );
	}, [ payload ] );

	useEffect( () => {
		if ( item ) {
			setType( ucFirst( item.type ) );
		}
	}, [ item ] );

	if ( ! done || isLoading ) {
		return (
			<BWASpinner />
		);
	}

	if ( isError ) {
		return (
			<div>
				<ErrorStateImage />
				<p>{ __( 'Oops! Something went wrong.', 'bluehost-wordpress-plugin' ) }</p>;
			</div>
		);
	}

	const {
		buy_url: buyUrl,
		created,
		images: {
			preview_url,
		},
		modified,
		name,
		prices: {
			single_domain_license,
		},
		sales_count,
		description,
	} = item;

	const dateCreated = new Date( created );
	const dateUpdated = new Date( modified );

	const months = [
		__( 'January', 'bluehost-wordpress-plugin' ),
		__( 'February', 'bluehost-wordpress-plugin' ),
		__( 'March', 'bluehost-wordpress-plugin' ),
		__( 'April', 'bluehost-wordpress-plugin' ),
		__( 'May', 'bluehost-wordpress-plugin' ),
		__( 'June', 'bluehost-wordpress-plugin' ),
		__( 'July', 'bluehost-wordpress-plugin' ),
		__( 'August', 'bluehost-wordpress-plugin' ),
		__( 'September', 'bluehost-wordpress-plugin' ),
		__( 'October', 'bluehost-wordpress-plugin' ),
		__( 'November', 'bluehost-wordpress-plugin' ),
		__( 'December', 'bluehost-wordpress-plugin' ),
	];
	const price = parseInt( single_domain_license, 10 );
	const sales = parseInt( sales_count, 10 ).toLocaleString( { useGrouping: true } );

	return (
		<BWABaseTemplate className="page-product">
			<header className="page-product__header">
				<h1>{ header }</h1>
			</header>
			<div className="page-product__breadcrumbs">
				<button
					className="page-product__breadcrumbs-root"
					onClick={ () => window.history.back() }
				>
					{ breadcrumbText }
				</button>
				<span> / </span>
				<span>{ decodeEntities( name ) }</span>
			</div>
			<div className="page-product__main">
				<div className="page-product__main">
					<div className="page-product__content">
						<h2 className="page-product__title">{ decodeEntities( name ) }</h2>
						<div className="page-product__image">
							<img src={ preview_url } alt={ name } />
						</div>
						<div className="page-product__description"
							dangerouslySetInnerHTML={ { __html: description } } />
					</div>
					<div className="page-product__sidebar">
						<div className="page-product__pricing-panel">
							<div className="page-product__pricing-panel-price">${ price }</div>
							<div className="page-product__pricing-panel-currency">USD</div>
							<Button className="page-product__pricing-panel-call-to-action"
								href={ buyUrl }
								target="_blank"
								isPrimary>
								{ __( 'Buy Now', 'bluehost-wordpress-plugin' ) }
							</Button>
							<div className="page-product__pricing-panel-terms">
								{ __( 'One Time Fee', 'bluehost-wordpress-plugin' ) }
							</div>
						</div>
						<div className="page-product__info-panel">
							<h3 className="page-product__info-panel-title">
								{ __( 'Item Information', 'bluehost-wordpress-plugin' ) }
							</h3>
							<div className="page-product__info-panel-created">
								<strong>{ __( 'Created: ', 'bluehost-wordpress-plugin' ) }</strong>
								{ `${ months[ dateCreated.getMonth() ] } ${ dateCreated.getDate() }, ${ dateCreated.getFullYear() }` }
							</div>
							<div className="page-product__info-panel-updated">
								<strong>{ __( 'Updated: ', 'bluehost-wordpress-plugin' ) }</strong>
								{ `${ months[ dateUpdated.getMonth() ] } ${ dateUpdated.getDate() }, ${ dateUpdated.getFullYear() }` }
							</div>
							<div className="page-product__info-panel-sales">
								<strong>{ __( 'Sales: ', 'bluehost-wordpress-plugin' ) }</strong>
								{ sales }
							</div>
						</div>
					</div>
				</div>
			</div>
		</BWABaseTemplate>
	);
}
