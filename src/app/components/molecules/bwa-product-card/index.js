import './style.scss';

import { BWAHeading, BWAButton as Button } from '@app/components/atoms';

import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import { decodeEntities } from '@wordpress/html-entities';

export default function BWAProductCard(
	{
		buttonPrimary = { children: __( 'Buy Now', 'bluehost-wordpress-plugin' ) },
		buttonSecondary = { children: __( 'View Details', 'bluehost-wordpress-plugin' ) },
		className = '',
		imageUrl,
		isFavorite = false,
		price,
		title,
		toggleFavorite,
		overrideUrl = '',
		...props
	}
) {
	const style = imageUrl ? { backgroundImage: `url(${ imageUrl })` } : {};
	const detailsUrl = '' !== overrideUrl ? overrideUrl : '#/marketplace/' + props.type + '/' + props.id;
	return (
		<div className={ `product-card ${ className }` }>
			<a href={detailsUrl} aria-label={title}><div className="product-card__image" style={ style } /></a>
			<div className="product-card__content">
				<div className="product-card__details">
					<a href={detailsUrl}>
						<BWAHeading level="h3" size={ 4 } className="product-card__title">
							{ decodeEntities( title ) }
						</BWAHeading>
					</a>
					{'' !== price && (<div className="product-card__price">{ price }</div>)}
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
						{buttonSecondary?.children !== null && (<Button
							children={ __( 'View Details', 'bluehost-wordpress-plugin' ) }
							{ ...buttonSecondary }
							className="product-card__button-secondary"
							isSecondary
						/>)}
						{buttonPrimary?.children !== null && (<Button
							children={ __( 'Buy Now', 'bluehost-wordpress-plugin' ) }
							target="_blank"
							{ ...buttonPrimary }
							className="product-card__button-primary"
							isPrimary
						/>)}
					</div>
				</div>
			</div>
		</div>
	);
}
