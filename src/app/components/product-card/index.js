/**
 * WordPress dependencies
 */
import { decodeEntities } from '@wordpress/html-entities';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import Button from '@/components/app-button';
import './style.scss';

export default function ProductCard(
	{
		buttonPrimary = { children: __( 'Buy Now', 'bluehost-wordpress-plugin' ) },
		buttonSecondary = { children: __( 'View Details', 'bluehost-wordpress-plugin' ) },
		className = '',
		imageUrl,
		isFavorite = false,
		price,
		title,
		toggleFavorite,
	}
) {
	const style = imageUrl ? { backgroundImage: `url(${ imageUrl })` } : {};
	return (
		<div className={ `product-card ${ className }` }>
			<div className="product-card__image" style={ style } />
			<div className="product-card__content">
				<div className="product-card__details">
					<div className="product-card__title">{ decodeEntities( title ) }</div>
					<div className="product-card__price">{ price }</div>
				</div>
				<div className="product-card__action-group">
					<div className={ classNames( {
						'product-card__favorite': true,
						dashicons: true,
						'dashicons-star-empty': ! isFavorite,
						'dashicons-star-filled': isFavorite,
						'--is-favorite': isFavorite,
					} ) } onClick={ toggleFavorite } />
					<div className="product-card__button-group">
						<Button
							children={ __( 'View Details', 'bluehost-wordpress-plugin' ) }
							{ ...buttonSecondary }
							className="product-card__button-secondary"
							isDefault
						/>
						<Button
							children={ __( 'Buy Now', 'bluehost-wordpress-plugin' ) }
							target="_blank"
							{ ...buttonPrimary }
							className="product-card__button-primary"
							isPrimary
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
