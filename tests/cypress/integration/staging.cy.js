// <reference types="Cypress" />

import 'cypress-axe';

const thumbnailUrl = `https://s.wordpress.com/mshots/v1/${ encodeURIComponent('https://www.google.com') }?width=122&height=92`;

const fn = {
	getStagingInfo(overrides = {}) {
		const defaults = {
			creationDate: 'Sep 26, 2019',
			currentEnvironment: 'production',
			productionDir: '/app/public/',
			productionThumbnailUrl: thumbnailUrl,
			productionUrl: 'https://mysite.com',
			stagingDir: '/app/public/staging/1821',
			stagingExists: true,
			stagingThumbnailUrl: thumbnailUrl,
			stagingUrl: 'https://mysite.local/staging/1821'
		};
		return {...defaults, ...overrides};
	},
	visitPage(responseOverrides = {}) {
		cy.intercept({
				method: 'GET',
				url: '**?**/bluehost/v1/staging*',
			},
			this.getStagingInfo(responseOverrides)
		).as('stagingInfo');
		cy.visit('/wp-admin/admin.php?page=bluehost#/tools/staging');
		cy.wait('@stagingInfo');
	}
};

describe('Staging Page', function () {

	before(() => {
		fn.visitPage({stagingExists: false});
		cy.injectAxe();
	});

	it('Exists', () => {
		cy.contains('h2', 'Staging');
		cy.contains('h3', 'Production site');
		cy.contains('h3', 'Staging site');
	});

	it('Only has production', () => {
		cy.get('.environment-card').should('have.length', 1);
		cy.get('input[type="radio"]').should('have.length', 0);
	});

	it('Production card is valid', () => {
		cy.get('.environment-card').within(() => {

			// Disable screenshots for now.
			/*cy.get('.environment-card__screenshot')
				.should('have.css', 'background-image')
				.and('equals', `url("${thumbnailUrl}")`);*/

			cy.contains('.environment-card__title', fn.getStagingInfo().productionUrl).should('be.visible');

			cy.contains('.environment-card__badge.--green', 'Live Site');

			cy.contains('button', 'Clone to Staging').should('not.exist');
		});
	});

	it('Creation failure', () => {
		cy.intercept({
				method: 'POST',
				url: '**?**/bluehost/v1/staging*',
			},
			(req) => {
				req.reply({
					body: fn.getStagingInfo({
						stagingExists: false,
						status: 'error',
						message: 'Git is not available.'
					}),
					delay: 2000
				});
			}
		).as('stagingCreation');
		cy.contains('button', 'Create Staging Site').click();
		cy.get('.bluehost-staging__step.--creation').within(() => {
			cy.get('.app-spinner__wrap').should('be.visible');
			cy.contains('div', 'Creating your staging site. This usually takes a few minutes...');
		});
		cy.wait('@stagingCreation');
		cy.get('.bluehost-snackbar.is-error').should('be.visible');
		cy.contains('.bluehost-snackbar__message', 'Git is not available.');
	});

	it('Can dismiss snackbar', () => {
		cy.get('h2').click();
		cy.get('.bluehost-snackbar').should('not.exist');
	});

	it('Creation success', () => {
		cy.intercept({
				method: 'POST',
				url: '**?**/bluehost/v1/staging*',
			},
			(req) => {
				req.reply({
					body: fn.getStagingInfo(),
				});
			}
		).as('stagingCreation');
		cy.contains('button', 'Create Staging Site').click();
		cy.wait('@stagingCreation');
		cy.get('.bluehost-snackbar').should('not.exist');
		cy.get('.environment-card').should('have.length', 2);
		cy.get('input[type="radio"]').should('have.length', 2);
	});

	it('Is Accessible', () => {
		cy.checkA11y('.bwa-route-contents');
	});

	it('Production site is active', () => {
		cy.get('input[type="radio"]').first().should('be.checked');
	});

	it('Clone to staging button exists', () => {
		cy.contains('button', 'Clone to Staging').scrollIntoView().should('be.visible');
	});

	it('Clone to staging works', () => {

		cy.intercept({
				method: 'POST',
				url: '**?**/bluehost/v1/staging/clone*',
			},
			(req) => {
				req.reply({
					body: fn.getStagingInfo(),
					delay: 1000
				});
			}
		).as('cloneStaging');

		cy.contains('button', 'Clone to Staging').click();
		cy.get('.bluehost-modal').should('be.visible');
		cy.get('.bluehost-modal').within(() => {
			cy.contains('h1', 'Clone production to staging?');
			cy.contains('.bluehost-modal__content', 'Are you sure you want to clone production to staging? This will permanently overwrite your staging site.');
			cy.contains('.bluehost-warning', 'This action cannot be undone');
			cy.contains('button', 'Cancel');
			cy.contains('button.is-primary', 'Clone').click();
		});

		cy.get('.bluehost-overlay').should('be.visible');
		cy.contains('.bluehost-overlay h1', 'Cloning Production Site');
		cy.wait('@cloneStaging');

		// Validate that overlay is gone
		cy.get('.bluehost-overlay').should('not.exist');

		// Validate snackbar
		cy.get('.bluehost-snackbar').should('be.visible').should('have.class', 'is-success');
		cy.contains('.bluehost-snackbar__title', 'Success');
		cy.contains('.bluehost-snackbar__message', 'Website cloned successfully.');

	});

	it('Staging card is valid', () => {
		cy.get('.environment-card').last().scrollIntoView().within(() => {

			// Disable screenshots for now.
			/*cy.get('.environment-card__screenshot')
				.should('have.css', 'background-image')
				.and('equals', `url("${thumbnailUrl}")`);*/

			cy.contains('.environment-card__title', fn.getStagingInfo().stagingUrl).should('be.visible');

			cy.contains('.environment-card__badge.--black', 'Staging Site');

			cy.get('.dropdown-button').scrollIntoView().within((el) => {
				cy.get(el).should('be.visible');
				cy.get('.dropdown-button__button-group button').should('be.disabled');
			});
			cy.get('.options-menu').scrollIntoView().should('be.visible');
		});
	});

	it('Switch to staging works', () => {
		cy.get('.bluehost-overlay').should('not.exist');
		cy.get('input[type="radio"]').last().click();
		cy.get('.bluehost-overlay').should('be.visible').should('have.length', 1);
		cy.get('.bluehost-overlay').within(() => {
			cy.contains('h1', 'Loading Staging Site').should('be.visible');
			cy.contains('p', 'This should only take a minute').should('be.visible');
			cy.get('.bluehost-staging__overlay-image')
				.should('be.visible')
				.should('have.attr', 'src')
				.and('include', 'data:image/svg+xml;base64');
			//cy.get('.slick-slider').should('be.visible');
			cy.get('.slick-dots').children().should('have.length', 3);
			cy.get('.slick-slide').within(() => {
				cy.contains('span', 'Tip:');
				cy.contains('p', 'If you want changes in a staging site to take effect on your live site, deploy them.');
			});
		});
		cy.get('.bluehost-overlay').should('be.visible');
		fn.visitPage({currentEnvironment: 'staging'});
		cy.get('.bluehost-overlay').should('not.exist');
		cy.get('input[type="radio"]').last().should('be.checked');
	});

	it('Clone to staging button is disabled', () => {
		cy.contains('button', 'Clone to Staging').scrollIntoView().should('be.visible').should('be.disabled');
	});

	it('Deploy dropdown button is active', () => {
		cy.get('.dropdown-button').scrollIntoView().within((el) => {
			cy.get(el).should('be.visible');
			cy.get('.dropdown-button__button-group button').should('not.be.disabled');
		});
	});

	it('Deploy dropdown button toggle works', () => {
		cy.get('.dropdown-button').scrollIntoView();
		cy.get('.dropdown-button__list').should('not.be.visible');
		cy.get('.dropdown-button__toggle').click(); // TODO: CLICK BROKEN, TRY FORCE
		cy.get('.dropdown-button__list').scrollIntoView().should('be.visible');
		cy.get('.dropdown-button__toggle').click();
		cy.get('.dropdown-button__list').should('not.be.visible');
	});

	it('Deploy All Changes works', () => {

		cy.intercept({
				method: 'POST',
				url: '**?**/bluehost/v1/staging/deploy?type=all*',
			},
			(req) => {
				req.reply({
					body: fn.getStagingInfo(),
					delay: 1000
				});
			}
		).as('deploy');

		cy.contains('button', 'Deploy All Changes').click(); // TODO: Broke (disabled), force?
		cy.get('.bluehost-modal').should('be.visible');
		cy.get('.bluehost-modal').within(() => {
			cy.contains('h1', 'Deploy to Production?');
			cy.contains('.bluehost-modal__content', 'This will override your production site. Are you sure you want to deploy everything from staging to production?');
			cy.contains('.bluehost-warning', 'This action cannot be undone');
			cy.contains('button', 'Cancel');
			cy.contains('button.is-primary', 'Deploy').click();
		});

		cy.get('.bluehost-overlay').should('be.visible');
		cy.contains('.bluehost-overlay h1', 'Deploying to Production');
		cy.wait('@deploy');

		// Validate that overlay is gone
		cy.get('.bluehost-overlay').should('not.exist');

		// Validate snackbar
		cy.get('.bluehost-snackbar').should('be.visible').should('have.class', 'is-success');
		cy.contains('.bluehost-snackbar__title', 'Success');
		cy.contains('.bluehost-snackbar__message', 'Changes deployed successfully.');

		// Dismiss snackbar
		cy.get('.bluehost-snackbar__close').click();
		cy.get('.bluehost-snackbar').should('not.exist');

	});

	it('Deploy Files works', () => {

		cy.intercept({
				method: 'POST',
				url: '**?**/bluehost/v1/staging/deploy?type=files*',
			},
			(req) => {
				req.reply({
					body: fn.getStagingInfo(),
					delay: 1000
				});
			}
		).as('deploy');

		cy.get('.dropdown-button').scrollIntoView();
		cy.get('.dropdown-button__list').should('not.be.visible');
		cy.get('.dropdown-button__toggle').click();
		cy.get('.dropdown-button__list').scrollIntoView().should('be.visible');
		cy.contains('.dropdown-button__list-item', 'Deploy Files Only').click();
		cy.get('.dropdown-button__list').should('not.be.visible');

		cy.get('.bluehost-modal').should('be.visible');
		cy.get('.bluehost-modal').within(() => {
			cy.contains('h1', 'Deploy Files to Production?');
			cy.contains('.bluehost-modal__content', 'This will override your production site. Are you sure you want to deploy all staging files to production?');
			cy.contains('.bluehost-warning', 'This action cannot be undone');
			cy.contains('button', 'Cancel');
			cy.contains('button.is-primary', 'Deploy').click();
		});

		cy.get('.bluehost-overlay').should('be.visible');
		cy.contains('.bluehost-overlay h1', 'Deploying Files to Production');
		cy.wait('@deploy');

		// Validate that overlay is gone
		cy.get('.bluehost-overlay').should('not.exist');

		// Validate snackbar
		cy.get('.bluehost-snackbar').should('be.visible').should('have.class', 'is-success');
		cy.contains('.bluehost-snackbar__title', 'Success');
		cy.contains('.bluehost-snackbar__message', 'Changes deployed successfully.');

		// Dismiss snackbar
		cy.get('.bluehost-snackbar__close').click();
		cy.get('.bluehost-snackbar').should('not.exist');
	});

	it('Deploy Database works', () => {

		cy.intercept({
				method: 'POST',
				url: '**?**/bluehost/v1/staging/deploy?type=db*',
			},
			(req) => {
				req.reply({
					body: fn.getStagingInfo(),
					delay: 1000
				});
			}
		).as('deploy');

		cy.get('.dropdown-button').scrollIntoView();
		cy.get('.dropdown-button__list').should('not.be.visible');
		cy.get('.dropdown-button__toggle').click();
		cy.get('.dropdown-button__list').scrollIntoView().should('be.visible');
		cy.contains('.dropdown-button__list-item', 'Deploy Database').click({force: true});
		cy.get('.dropdown-button__list').should('not.be.visible');

		cy.get('.bluehost-modal').should('be.visible');
		cy.get('.bluehost-modal').within(() => {
			cy.contains('h1', 'Deploy Database to Production?');
			cy.contains('.bluehost-modal__content', 'This will override your production site. Are you sure you want to deploy the database from staging to production?');
			cy.contains('.bluehost-warning', 'This action cannot be undone');
			cy.contains('button', 'Cancel');
			cy.contains('button.is-primary', 'Deploy').click();
		});

		cy.get('.bluehost-overlay').should('be.visible');
		cy.contains('.bluehost-overlay h1', 'Deploying Database to Production');
		cy.wait('@deploy');

		// Validate that overlay is gone
		cy.get('.bluehost-overlay').should('not.exist');

		// Validate snackbar
		cy.get('.bluehost-snackbar').should('be.visible').should('have.class', 'is-success');
		cy.contains('.bluehost-snackbar__title', 'Success');
		cy.contains('.bluehost-snackbar__message', 'Changes deployed successfully.');

		// Dismiss snackbar
		cy.get('.bluehost-snackbar__close').click();
		cy.get('.bluehost-snackbar').should('not.exist');
	});

	it('Staging options menu should not exist', () => {
		// TODO: Broken
		cy.get('.options-menu').should('not.exist');
	});

	it('Switch to production works', () => {
		cy.get('.bluehost-overlay').should('not.exist');
		cy.get('input[type="radio"]').first().click();
		cy.get('.bluehost-overlay').should('be.visible').should('have.length', 1);
		cy.get('.bluehost-overlay').within(() => {
			cy.contains('h1', 'Loading Production Site').should('be.visible');
			cy.contains('p', 'This should only take a minute').should('be.visible');
			cy.get('.bluehost-staging__overlay-image')
				.should('be.visible')
				.should('have.attr', 'src')
				.and('include', 'data:image/svg+xml;base64');
			//cy.get('.slick-slider').should('be.visible');
			cy.get('.slick-dots').children().should('have.length', 3);
			cy.get('.slick-slide').within(() => {
				cy.contains('span', 'Tip:');
				cy.contains('p', 'If you want changes in a staging site to take effect on your live site, deploy them.');
			});
		});
		cy.get('.bluehost-overlay').should('be.visible');
		fn.visitPage({currentEnvironment: 'production'});
		cy.get('.bluehost-overlay').should('not.exist');
		cy.get('input[type="radio"]').first().should('be.checked');
	});

	it('Delete staging failure', () => {

		cy.intercept({
				method: 'POST',
				url: '**?**/bluehost/v1/staging*',
				headers: {
					'x-http-method-override': 'DELETE',
				},
			},
			(req) => {
				req.reply({
					body: {
						'status': 'error',
						'message': 'Unable to remove staging files.',
					},
					delay: 2000
				});
			}
		).as('stagingDeletion');

		cy.get('.options-menu').within(() => {
			cy.get('.options-menu__toggle').click();
			cy.contains('.options-menu__list-item', 'Delete').scrollIntoView().should('be.visible');
			cy.contains('.options-menu__list-item', 'Delete').click();
		});
		cy.get('.bluehost-modal').should('be.visible');
		cy.get('.bluehost-modal').within(() => {
			cy.contains('h1', 'Delete staging site?');
			cy.contains('.bluehost-modal__content', 'Are you sure you want to delete this staging site? This will permanently delete the staging instance from your site.');
			cy.contains('.bluehost-warning', 'This action cannot be undone');
			cy.contains('button', 'Cancel');
			cy.contains('button.is-primary', 'Delete').click();
		});
		cy.get('.bluehost-overlay').should('be.visible');
		cy.contains('.bluehost-overlay h1', 'Deleting Staging Site');
		cy.wait('@stagingDeletion');

		// Validate that overlay is gone
		cy.get('.bluehost-overlay').should('not.exist');

		// Validate snackbar
		cy.get('.bluehost-snackbar').should('be.visible').should('have.class', 'is-error');
		cy.contains('.bluehost-snackbar__title', 'Error');
		cy.contains('.bluehost-snackbar__message', 'Unable to remove staging files.');

		// Dismiss snackbar
		cy.get('.bluehost-snackbar__close').click();
		cy.get('.bluehost-snackbar').should('not.exist');
	});

	it('Delete staging works', () => {

		cy.intercept({
				method: 'POST',
				url: '**?**/bluehost/v1/staging*',
				headers: {
					'x-http-method-override': 'DELETE',
				},
			},
			(req) => {
				req.reply({
					body: {
						'status': 'success',
						'message': 'Staging website destroyed.',
					},
					delay: 2000
				});
			}
		).as('stagingDeletion');

		cy.get('.options-menu').within(() => {
			cy.get('.options-menu__toggle').click();
			cy.contains('.options-menu__list-item', 'Delete').scrollIntoView().should('be.visible');
			cy.contains('.options-menu__list-item', 'Delete').click();
		});
		cy.get('.bluehost-modal').should('be.visible');
		cy.get('.bluehost-modal').within(() => {
			cy.contains('h1', 'Delete staging site?');
			cy.contains('.bluehost-modal__content', 'Are you sure you want to delete this staging site? This will permanently delete the staging instance from your site.');
			cy.contains('.bluehost-warning', 'This action cannot be undone');
			cy.contains('button', 'Cancel');
			cy.contains('button.is-primary', 'Delete').click();
		});
		cy.get('.bluehost-overlay').should('be.visible');
		cy.contains('.bluehost-overlay h1', 'Deleting Staging Site');
		cy.wait('@stagingDeletion');

		// Validate that overlay is gone
		cy.get('.bluehost-overlay').should('not.exist');

		// Validate snackbar
		cy.get('.bluehost-snackbar').should('be.visible').should('have.class', 'is-success');
		cy.contains('.bluehost-snackbar__title', 'Success');
		cy.contains('.bluehost-snackbar__message', 'Staging website destroyed.');

		// Dismiss snackbar
		cy.get('.bluehost-snackbar__close').click();
		cy.get('.bluehost-snackbar').should('not.exist');
	});

});
