import { select, dispatch } from '@wordpress/data';
import { capitalize } from 'lodash';
import { __ } from '@wordpress/i18n';
import { apiFetch } from '@wordpress/api-fetch';
import { initHighlightEraser } from './highlighting'

const NOTICES_STORE = 'core/notices';
const TOUR_NOTICE_ID = 'newfold-tour-notice';
const TOUR_RELAUNCHER_ELEMENT = 'newfold-tour-relauncher';

export const initEvents = (tourName, tour) => {

    initHighlightEraser();

    const initNoticeRelauncher = () => {
        jQuery('a.' + TOUR_RELAUNCHER_ELEMENT).on('click', evt => {
            evt.preventDefault();
            tour.start();
        });
    }

    const disableLoader = () => {
        const loader = document.getElementById('newfold-editortours-loading');
        if ( loader ) {
            loader.classList.add('loaded');
        }
    }
    disableLoader();

    const eventTracking = (context, category)  => {
        let event = {
            action: 'tour-' + context.tour.options.type,
            category: category,
            data: {
                step: context.id
            }
        };
    }

    const noticeConfig = {
        id: TOUR_NOTICE_ID,
        actions: [{
            url: '#',
            label: __('Reopen Tour', 'bluehost-wordpress-plugin'),
            className: TOUR_RELAUNCHER_ELEMENT
        }]
    };

    const noticeLabel = capitalize(tour.options.type);

    // tour.once('start', () => {
    // });

    tour.on('active', () => { 
        dispatch(NOTICES_STORE).removeNotice(TOUR_NOTICE_ID);
    });

    tour.on('show', context => {
        eventTracking(context, 'show');
    });

    tour.on('hide', () => { 
        dispatch(NOTICES_STORE).createInfoNotice(
            noticeLabel + ' ' + __('Page tour closed.', 'bluehost-wordpress-plugin'), 
            noticeConfig
        ).then(() => {
            initNoticeRelauncher();
        });
    });

    tour.on('complete', context => {
        eventTracking(context, 'complete'); 
        dispatch(NOTICES_STORE).createSuccessNotice(
            noticeLabel + ' ' + __('Page tour is complete!', 'bluehost-wordpress-plugin'), 
            noticeConfig
        ).then(() => {
            initNoticeRelauncher();
        });
    });

    tour.on('cancel', context => {
        eventTracking(context, 'cancel'); 
        dispatch(NOTICES_STORE).createInfoNotice(
            noticeLabel + ' ' + __('Page tour closed. You can restart it below.', 'bluehost-wordpress-plugin'), 
            noticeConfig
        ).then(() => {
            initNoticeRelauncher();
        });
    });

    // tour.on('inactive', () => { 
    // });

}

export default { initEvents };