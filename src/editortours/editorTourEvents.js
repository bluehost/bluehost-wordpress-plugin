import { select, dispatch } from '@wordpress/data';
import { capitalize, replace } from 'lodash';
import { __ } from '@wordpress/i18n';

const TOUR_NOTICE_ID = 'newfold-tour-notice';

export const editorTourEvents = (tourName, tour) => {

    const initNoticeRelauncher = () => {
        jQuery('a.newfold-tour-relauncher').on('click', (evt) => {
            evt.preventDefault();
            tour.start();
        });
    }

    const initHighlightEraser = () => {
        let placeholders = document.querySelectorAll('.nf-placeholder');
        const scrubber = (event) => {
            let currentTarget = event.target;
            currentTarget.removeAttribute('data-rich-text-format-boundary');
            const currentBlock = select('core/block-editor').getSelectedBlock();
            dispatch('core/block-editor').updateBlock(
                currentBlock.clientId, 
                { 
                    attributes: { 
                        content: replace(
                            currentBlock.attributes.content, 
                            currentTarget.outerHTML, 
                            currentTarget.innerText
                        ) 
                    } 
                } 
            );
        };
        if (placeholders.length) {
            placeholders = Array.from(placeholders);
        }
        if ( Array.isArray(placeholders) ) {
            placeholders.forEach((el) => {
                el.addEventListener('click', scrubber);
            })
        }
    }
    initHighlightEraser();

    const noticeConfig = {
        id: TOUR_NOTICE_ID,
        actions: [{
            url: '#',
            label: 'Reopen Tour',
            className: 'newfold-tour-relauncher'
        }]
    };

    const noticeLabel = capitalize(tour.options.type);

    tour.once('start', () => {
        console.log('on start'); 
    });

    tour.on('active', () => { 
        dispatch('core/notices').removeNotice(TOUR_NOTICE_ID);
    });

    tour.on('show', (context) => { 
        console.log('on show')
        console.dir(context.step);
    });

    tour.on('hide', () => { 
        console.log('on hide') 
        dispatch('core/notices').createInfoNotice(
            noticeLabel + ' ' + __('Page guide closed.', 'bluehost-wordpress-plugin'), 
            noticeConfig
        ).then(() => {
            initNoticeRelauncher();
        });
    });

    tour.on('complete', () => { 
        console.log('on complete')
        dispatch('core/notices').createSuccessNotice(
            noticeLabel + ' ' + __('Page guide is complete!', 'bluehost-wordpress-plugin'), 
            noticeConfig
        ).then(() => {
            initNoticeRelauncher();
        });
    });

    tour.on('cancel', () => { 
        console.log('on cancel');
        dispatch('core/notices').createInfoNotice(
            noticeLabel + ' ' + __('Page guide closed. You can restart it below.', 'bluehost-wordpress-plugin'), 
            noticeConfig
        ).then(() => {
            initNoticeRelauncher();
        });
    });

    tour.on('inactive', () => { 
        console.log('on inactive')
    });

}

export default editorTourEvents;