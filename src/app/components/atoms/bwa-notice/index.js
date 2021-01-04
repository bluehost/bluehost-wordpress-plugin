import { ENTER } from '@wordpress/keycodes';
import classnames from 'classnames';
import { dispatch } from '@wordpress/data';
import { sendEvent } from '@app/functions';
import { useEffect } from '@wordpress/element';

const BWANotice = ({ id, content, ...props }) => {

    const onClose = ( event ) => {
        event.preventDefault();
        if ( event.keycode && ENTER !== event.keycode ) {
			return;
		}

        const noticeContainer   = document.querySelector('[data-id="' + id +'"]');
        if ( noticeContainer ) {
            noticeContainer.remove();
            dispatch('bluehost/plugin').dismissNotification( id );
        }
    }

    const onButtonNavigate = ( event ) => {
        if ( event.keycode && ENTER !== event.keycode ) {
			return;
		}
        sendEvent({
            action: 'bluehost-notification-click',
            data: {
                element: 'button',
                label: event.target.innerText,
                notificationId: id,
            }
        })
    }

    const onAnchorNavigate = ( event ) => {
        if ( event.keycode && ENTER !== event.keycode ) {
			return;
		}
        sendEvent({
            action: 'bluehost-notification-click',
            data: {
                element: 'a',
                href: event.target.getAttribute('href'),
                label: event.target.innerText,
                notificationId: id,
            }
        })
    }

    useEffect(() => {
        const noticeContainer   = document.querySelector('[data-id="' + id +'"]');
        const noticeCloser      = noticeContainer.querySelector('[data-action="close"]');
        const noticeButtons     = Array.from(noticeContainer.querySelectorAll('button'));
        const noticeAnchors     = Array.from(noticeContainer.querySelectorAll('a'));

        if (noticeButtons.length) {
            noticeButtons.forEach(
                button => {
                    if (button.getAttribute('data-action') !== 'close') {
                        button.addEventListener('click', onButtonNavigate);
                        button.addEventListener('onkeydown', onButtonNavigate);
                    }
                }
            )
        }

        if (noticeAnchors.length) {
            noticeAnchors.forEach(
                link => {
                    if (link.getAttribute('data-action') !== 'close') {
                        link.addEventListener('click', onAnchorNavigate);
                        link.addEventListener('onkeydown', onAnchorNavigate);
                    }
                }
            )
        }

        if (noticeCloser) {
            noticeCloser.addEventListener('click', onClose);
            noticeCloser.addEventListener('onkeydown', onClose);
        }
        
        return () => {
            if (noticeButtons.length) {
                noticeButtons.forEach(
					button => {
						if (button.getAttribute('data-action') !== 'close') {
                            button.removeEventListener('click', onButtonNavigate);
                            button.removeEventListener('onkeydown', onButtonNavigate);
						}
					}
				)
            }
            if (noticeAnchors.length) {
				noticeAnchors.forEach(
					link => {
						if (link.getAttribute('data-action') !== 'close') {
                            link.removeEventListener('click', onAnchorNavigate);
                            link.removeEventListener('onkeydown', onAnchorNavigate);
						}
					}
				)
            }
            if (noticeCloser) {
                noticeCloser.removeEventListener('click', onClose);
                noticeCloser.removeEventListener('onkeydown', onClose);
            }
        }
    }, [id]);
    return (
        <div
            id={'notice-' + id }
            className={classnames([
                'bwa-notice',
                'bluehost-notice',
                props.className
            ])}
            data-id={id}
            dangerouslySetInnerHTML={ {__html: content} }
        />
    )
}

export default BWANotice;