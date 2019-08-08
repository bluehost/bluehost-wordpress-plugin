/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';

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
        buttonPrimary = {children: __('Buy Now', 'bluehost-wordpress-plugin')},
        buttonSecondary = {children: __('View Details', 'bluehost-wordpress-plugin')},
        imageUrl,
        isFavorite = false,
        price,
        title
    }
) {
    return (
        <div className="product-card">
            <div className="product-card__image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="product-card__details">
                <div className="product-card__title">{title}</div>
                <div className="product-card__price">{price}</div>
            </div>
            <div className="product-card__action-group">
                <div className={classNames({
                    'product-card__favorite': true,
                    'dashicons': true,
                    'dashicons-star-empty': !isFavorite,
                    'dashicons-star-filled': isFavorite,
                    '--is-favorite': isFavorite
                })}/>
                <div className="product-card__button-group">
                    <Button {...buttonSecondary} className="product-card__button-secondary" isDefault/>
                    <Button {...buttonPrimary} className="product-card__button-primary" isPrimary/>
                </div>
            </div>
        </div>
    );
}
