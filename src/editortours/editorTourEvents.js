import { render } from '@wordpress/element';
import { suppressCoreTour } from './suppress-core-tour';
export const editorTourEvents = (tourName, tour) => {
    tour.once('start', () => {
        console.log('on start'); 
        console.dir(tour); 
        suppressCoreTour();
    });
    tour.on('active', () => { 
        console.log('on active') 
    });
    tour.on('show', () => { console.log('on show') });
    tour.on('hide', () => { console.log('on hide') });
    
    tour.on('complete', () => { console.log('on complete') });
    tour.on('cancel', () => { console.log('on cancel') });
    tour.on('inactive', () => { 
        console.log('on inactive') 
        window.wp.data.dispatch('core/notices').createSuccessNotice('About Page Created! Press "Need help?" above if you need anything.', {
            actions: [{
                url: '#',
                label: 'Reopen Tour',
                className: 'bluehost-tour-reopen'
            }]
        }).then(() => {
            window.jQuery('a.bluehost-tour-reopen').on('click', (evt) => {
                evt.preventDefault();
                tour.start();
            });
        })
    });
   
}

export default editorTourEvents;