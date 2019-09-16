import {ucFirst} from 'change-case';
import {__, sprintf} from '@wordpress/i18n';
import {useState, useEffect} from '@wordpress/element';
import {decodeEntities} from "@wordpress/html-entities";
import {AppButton as Button, AppPage, AppSpinner} from '@/components';
import {get} from '@/functions';
import {useMojoApi} from '@/hooks';
import {ReactComponent as ErrorStateImage} from '@/assets/error-state.svg';

import './style.scss';

export default function ProductDetails({id = '5377b431-d8a8-431b-a711-50c10a141528'}) {
    const [item, setItem] = useState(null);
    const [state, setState] = useState('loading');
    const [type, setType] = useState(null);
    const [{done, isError, isLoading, payload}] = useMojoApi('items', {id});

    const header = __(sprintf('Premium %s', type), 'bluehost-wordpress-plugin');
    const breadcrumbText = __('Premium Services', 'bluehost-wordpress-plugin');

    useEffect(() => {
        setItem(get(['items', 0], payload));
    }, [payload]);

    useEffect(() => {
        if (item) {
            setType(ucFirst(item.type));
        }
    }, [item]);

    if (!done || isLoading) {
        return (
            <AppSpinner/>
        );
    }

    if (isError) {
        return (
            <div>
                <ErrorStateImage/>
                <p>Oops! Something went wrong.</p>;
            </div>
        );
    }

    const {
        buy_url: buyUrl,
        created,
        images: {
            preview_url
        },
        modified,
        name,
        prices: {
            single_domain_license
        },
        sales_count,
        description,
    } = item;

    let dateCreated = new Date(created);
    let dateUpdated = new Date(modified);
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
        <AppPage className="product-details">
            <header className="product-details__header">
                <h1>{header}</h1>
            </header>
            <div className="product-details__breadcrumbs">
                <button
                    className="product-details__breadcrumbs-root"
                    onClick={() => window.history.back()}
                >
                    {breadcrumbText}
                </button>
                <span> / </span>
                <span>{decodeEntities(name)}</span>
            </div>
            <div className="product-details__main">
                <div className="product-details__main">
                    <div className="product-details__content">
                        <h2 className="product-details__title">{decodeEntities(name)}</h2>
                        <div className="product-details__image">
                            <img src={preview_url} alt={name}/>
                        </div>
                        <div className="product-details__description"
                             dangerouslySetInnerHTML={{__html: description}}/>
                    </div>
                    <div className="product-details__sidebar">
                        <div className="product-details__pricing-panel">
                            <div className="product-details__pricing-panel-price">${price}</div>
                            <div className="product-details__pricing-panel-currency">USD</div>
                            <Button className="product-details__pricing-panel-call-to-action"
                                    href={buyUrl}
                                    target="_blank"
                                    isPrimary>
                                {__('Buy Now', 'bluehost-wordpress-plugin')}
                            </Button>
                            <div className="product-details__pricing-panel-terms">
                                {__('One Time Fee', 'bluehost-wordpress-plugin')}
                            </div>
                        </div>
                        <div className="product-details__info-panel">
                            <h3 className="product-details__info-panel-title">
                                {__('Item Information', 'bluehost-wordpress-plugin')}
                            </h3>
                            <div className="product-details__info-panel-created">
                                <strong>{__('Created: ', 'bluehost-wordpress-plugin')}</strong>
                                {`${months[dateCreated.getMonth()]} ${dateCreated.getDate()}, ${dateCreated.getFullYear()}`}
                            </div>
                            <div className="product-details__info-panel-updated">
                                <strong>{__('Updated: ', 'bluehost-wordpress-plugin')}</strong>
                                {`${months[dateUpdated.getMonth()]} ${dateUpdated.getDate()}, ${dateUpdated.getFullYear()}`}
                            </div>
                            <div className="product-details__info-panel-sales">
                                <strong>{__('Sales: ', 'bluehost-wordpress-plugin')}</strong>
                                {sales}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppPage>
    );
}