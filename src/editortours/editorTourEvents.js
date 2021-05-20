import { dispatch } from '@wordpress/data';
import { capitalize } from 'lodash';
import { __ } from '@wordpress/i18n';

const TOUR_NOTICE_ID = 'newfold-tour-notice';

export const editorTourEvents = (tourName, tour) => {

    const initiNoticeRelauncher = () => {
        jQuery('a.newfold-tour-relauncher').on('click', (evt) => {
            evt.preventDefault();
            tour.start();
        });
    }

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
        // let currentStep = tour.getCurrentStep();
        // console.log('the start step:');
        // console.dir(currentStep);
    });

    tour.on('active', () => { 
        dispatch('core/notices').removeNotice(TOUR_NOTICE_ID);
        // let currentStep = tour.getCurrentStep();
        // console.log('the active step:');
        // console.dir(currentStep);
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
            initiNoticeRelauncher();
        });
    });

    tour.on('complete', () => { 
        console.log('on complete')
        dispatch('core/notices').createSuccessNotice(
            noticeLabel + ' ' + __('Page guide is complete!', 'bluehost-wordpress-plugin'), 
            noticeConfig
        ).then(() => {
            initiNoticeRelauncher();
        });
    });

    tour.on('cancel', () => { 
        console.log('on cancel');
        dispatch('core/notices').createInfoNotice(
            noticeLabel + ' ' + __('Page guide closed. You can restart it below.', 'bluehost-wordpress-plugin'), 
            noticeConfig
        ).then(() => {
            initiNoticeRelauncher();
        });
    });

    tour.on('inactive', () => { 
        console.log('on inactive')
        console.dir(tour);
    });

}

export default editorTourEvents;