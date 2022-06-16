{

	const dismissNotice = (e) => {
		e.preventDefault();
		const notice = e.target.closest('.bluehost-notice');
		if (notice) {
			const id = notice.getAttribute('data-id');
			notice.parentNode.removeChild(notice);
			window.fetch(
				`${ window.nfdNotifications.restApiUrl }bluehost/v1/notifications/${ id }`,
				{
					credentials: 'same-origin',
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'X-WP-Nonce': window.nfdNotifications.restApiNonce,
					},
				}
			);
		}
	}

	const trackClick = (e) => {
		const notice = e.target.closest('.bluehost-notice');
		if (notice) {
			const data = {
				action: 'bluehost-notification-click',
				data: {
					element: e.target.nodeName.toLowerCase(),
					label: e.target.innerText,
					notificationId: notice.getAttribute('data-id'),
					page: window.location.href,
				}
			}
			if (data.element === 'a') {
				data.href = e.target.getAttribute('href');
			}
			window.fetch(
				`${ window.nfdNotifications.restApiUrl }newfold-data/v1/events/`,
				{
					credentials: 'same-origin',
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'X-WP-Nonce': window.nfdNotifications.restApiNonce,
					},
					body: JSON.stringify(data),
				}
			);
		}
	}

	const findNotices = () => {
		const notices = document.querySelectorAll('.bluehost-notice');
		if (notices.length) {
			return Array.from(notices);
		}
		return [];
	}

	const addEventListeners = (el) => {

		// Handle notification close/dismiss events
		const closeButton = el.querySelector('[data-action="close"]');
		if (closeButton) {
			closeButton.addEventListener('click', dismissNotice);
		}

		// Handle notification button click event tracking
		const buttons = Array.from(el.querySelectorAll('button'));
		if (buttons.length) {
			buttons.forEach(
				button => {
					if (button.getAttribute('data-action') !== 'close') {
						button.addEventListener('click', trackClick);
					}
				}
			)
		}

		// Handle notification link click event tracking
		const links = Array.from(el.querySelectorAll('a'));
		if (links.length) {
			links.forEach(
				link => {
					if (link.getAttribute('data-action') !== 'close') {
						link.addEventListener('click', trackClick);
					}
				}
			)
		}

	}

	window.addEventListener(
		'load',
		() => {
			findNotices().forEach(addEventListeners);
		}
	);

}
