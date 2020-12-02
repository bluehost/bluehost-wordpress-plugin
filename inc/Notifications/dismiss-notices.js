{

	const dismissNotice = (e) => {
		e.preventDefault();
		const notice = e.target.closest('.bluehost-notice');
		if (notice) {
			const id = notice.getAttribute('data-id');
			notice.parentNode.removeChild(notice);
			window.fetch(
				`${ window.bluehostNotices.restApiUrl }bluehost/v1/notifications/${ id }`,
				{
					credentials: 'same-origin',
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'X-WP-Nonce': window.bluehostNotices.restApiNonce,
					},
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

	const addEventListener = (el) => {
		const closeButton = el.querySelector('[data-action="close"]');
		if (closeButton) {
			closeButton.addEventListener('click', dismissNotice);
		}
	}

	window.addEventListener(
		'load',
		() => {
			findNotices().forEach(addEventListener);
		}
	);

}
