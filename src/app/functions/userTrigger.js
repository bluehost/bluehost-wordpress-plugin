import { ENTER } from '@wordpress/keycodes';

export const userTrigger = (event, callback) => {
    event.preventDefault();
    if ( event.keycode && ENTER !== event.keycode ) {
        return;
    }

    callback();
}

export default userTrigger;