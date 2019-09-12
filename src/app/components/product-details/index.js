import {decodeEntities} from '@wordpress/html-entities';
import {__} from '@wordpress/i18n';
import {AppButton as Button} from '@/components';

import './style.scss';

export default function ProductDetails(
    {
        item: {
            buy_url: buyUrl,
            created,
            images: {
                preview_url
            },
            name,
            prices: {
                single_domain_license
            },
            sales_count,
            short_description: description,
        },
        onClose,
        rootBreadcrumbText
    }
) {
    let dateCreated = new Date(created);
    let months = [
        '',
        __('January', 'bluehost-wordpress-plugin'),
        __('February', 'bluehost-wordpress-plugin'),
        __('March', 'bluehost-wordpress-plugin'),
        __('April', 'bluehost-wordpress-plugin'),
        __('May', 'bluehost-wordpress-plugin'),
        __('June', 'bluehost-wordpress-plugin'),
        __('July', 'bluehost-wordpress-plugin'),
        __('August', 'bluehost-wordpress-plugin'),
        __('September', 'bluehost-wordpress-plugin'),
        __('October', 'bluehost-wordpress-plugin'),
        __('November', 'bluehost-wordpress-plugin'),
        __('December', 'bluehost-wordpress-plugin')
    ];
    let price = parseInt(single_domain_license, 10);
    let sales = parseInt(sales_count, 10).toLocaleString({useGrouping: true});
    return (
        <div className="product-details">
            <div className="product-details__breadcrumbs">
                <button className="product-details__breadcrumbs-root" onClick={onClose}>{rootBreadcrumbText}</button>
                <span> / </span>
                <span>{decodeEntities(name)}</span>
            </div>
            <div className="product-details__page">
                <div className="product-details__content">
                    <h2 className="product-details__title">{decodeEntities(name)}</h2>
                    <div className="product-details__image">
                        {preview_url && (
                            <img src={preview_url} alt={name}/>
                        )}
                    </div>
                    <div className="product-details__description" dangerouslySetInnerHTML={{__html: description}}/>
                </div>
                <div className="product-details__sidebar">
                    <div className="product-details__pricing-panel">
                        <div className="product-details__pricing-panel-price">${price}</div>
                        <div className="product-details__pricing-panel-currency">USD</div>
                        <Button className="product-details__pricing-panel-call-to-action" href={buyUrl} isPrimary>
                            {__('Buy Now', 'bluehost-wordpress-plugin')}
                        </Button>
                        <div className="product-details__pricing-panel-terms">One Time Fee</div>
                    </div>
                    <div className="product-details__info-panel">
                        <h3 className="product-details__info-panel-title">
                            {__('Item Information', 'bluehost-wordpress-plugin')}
                        </h3>
                        <div className="product-details__info-panel-created">
                            <strong>{__('Created: ', 'bluehost-wordpress-plugin')}</strong>
                            {months[dateCreated.getMonth()]} {dateCreated.getDate()}, {dateCreated.getFullYear()}
                        </div>
                        <div className="product-details__info-panel-updated">
                            <strong>{__('Updated: ', 'bluehost-wordpress-plugin')}</strong>
                            ?
                        </div>
                        <div className="product-details__info-panel-sales">
                            <strong>{__('Sales: ', 'bluehost-wordpress-plugin')}</strong>
                            {sales}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}