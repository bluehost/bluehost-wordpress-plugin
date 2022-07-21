{
	const purchase = (e) => {
		let modalWindow = e.target.closest('.ctb-modal-content');
		let ctbId = e.target.getAttribute('data-ctb-id');
		e.target.closest('.ctb-actions').innerHTML = '<div class="ctb-loader"></div>';
		window.fetch(
			`${ window.nfdNotifications.restApiUrl }bluehost/v1/ctb/${ ctbId }`,
			{
				credentials: 'same-origin',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'X-WP-Nonce': window.nfdNotifications.restApiNonce,
				},
			}
		)
		.then( response => {
			purchaseStatus = (response.status === 200);
			return response.json();
		}).then( data => {
			if (data.content) {
				modalWindow.innerHTML = data.content;
				if (purchaseStatus){
					dismissNotice(ctbId);
				}
			} else {
				displayError(modalWindow, "purchase");
			}
		});
	}

	const loadCtb = (e) => {
		let modal = openModal(e);
		let modalWindow = modal.querySelector('.ctb-modal-content')
		window.fetch(
			`${ window.nfdNotifications.restApiUrl }bluehost/v1/ctb/${ e.target.getAttribute('data-ctb-id') }`,
			{
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json',
					'X-WP-Nonce': window.nfdNotifications.restApiNonce,
				},
			}
		)
		.then( response => {
			return response.json();
		}).then( data => {
			if (data.content) {
				modalWindow.innerHTML = data.content;
			} else {
				displayError(modalWindow, 'load');
			}
		});
	}

	const openModal = (e) => {
		let modalContent = `
		<div class="ctb-modal">
			<div class="ctb-modal-overlay" data-a11y-dialog-destroy></div>
			<div role="document" class="ctb-modal-content">
				<div class="ctb-loader"></div>
			</div>
		</div>
		`;
		let ctbContainer = document.getElementById('nfd-ctb-container');
		if (ctbContainer) {
			ctbContainer.innerHTML = modalContent
		} else {
			ctbContainer = document.createElement('div');
			ctbContainer.setAttribute('id', 'nfd-ctb-container');
			ctbContainer.innerHTML = modalContent;
			ctbContainer.target.insertAdjacentElement('afterend', nfd-ctb-container);
		}

		ctbmodal = new A11yDialog(ctbContainer);
		ctbmodal.show();

		purchaseStatus = false;

		document.querySelector('body').classList.toggle('noscroll');

		ctbContainer.addEventListener('click', function(event) {
			if (event.target.dataset.action === 'purchase-ctb') {
				purchase(event);
			}
			if (event.target.hasAttribute('data-a11y-dialog-destroy')) {
				document.querySelector('body').classList.toggle('noscroll');
				closeModal(event.target);
			}
		});

		return ctbContainer;
	}

	const closeModal = (e) => {
		ctbmodal.destroy();
	}

	const displayError = (modalWindow, error) => {
		let message = (error === 'purchase') ? 'complete the transaction' : 'load the product information';
		modalWindow.innerHTML = `<div style="text-align:center;">
			<p>Sorry, we are unable to ${message} at this time.</p>
			<button class="components-button bluehost is-primary" data-a11y-dialog-destroy>Cancel</button>
		</div>`;
	}

	const dismissNotice = (ctbId) => {
		const selector = '[data-ctb-id="' + ctbId + '"]';
		const ctbTrigger = document.querySelector(selector)
		const notice = ctbTrigger.closest('.bluehost-notice');
		if (notice) {
			notice.parentNode.removeChild(notice);
			window.fetch(
				`${ window.nfdNotifications.restApiUrl }bluehost/v1/notifications/${ notice.dataset.id }`,
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

	window.addEventListener(
		'load',
		() => {
			document.getElementById('wpbody').addEventListener('click', function(event) {
				if (event.target.dataset.action === 'load-nfd-ctb') {
					loadCtb(event);
				}
			});
		}
	);
}
