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
				//remove ctb attributes from button so the user can click the link
				removeCtbAttrs(e);
			}
		});
	}

	const removeCtbAttrs = (e) => {
		let ctbButton = e.target;
		ctbButton.removeAttribute('data-action');
		ctbButton.removeAttribute('data-ctb-id');
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
		document.querySelector('body').classList.add('noscroll');

		purchaseStatus = false;
		
		return ctbContainer;
	}
	
	const closeModal = (e) => {
		ctbmodal.destroy();
		document.querySelector('body').classList.remove('noscroll');
	}

	const displayError = (modalWindow, error) => {
		let message = (error === 'purchase') ? 'complete the transaction' : 'load the product information';
		modalWindow.innerHTML = `<div style="text-align:center;">
			<p>Sorry, we are unable to ${message} at this time.</p>
			<button class="components-button bluehost is-primary" data-a11y-dialog-destroy>Cancel</button>
		</div>`;
	}

	const dismissNotice = (ctbId) => {
		const ctbTrigger = document.querySelector('[data-ctb-id="' + ctbId + '"]')
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
			document.getElementById('wpwrap').addEventListener('click', function(event) {
				if (event.target.dataset.action === 'load-nfd-ctb') {
					if ( window.nfdConnected ) { // has token and customer id
						event.preventDefault();
						loadCtb(event);
					} else {
						// do nothing, fallback to href
					}
				}
				if (event.target.dataset.action === 'purchase-ctb') {
					purchase(event);
				}
				if (event.target.hasAttribute('data-a11y-dialog-destroy')) {
					closeModal(event.target);
				}
			});
		}
	);
}
