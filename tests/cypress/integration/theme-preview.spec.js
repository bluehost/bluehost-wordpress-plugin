// <reference types="Cypress" />

describe('Theme Preview Page', function () {

	before(() => {
		cy.server();
		cy.visit('wp-admin/admin.php?page=mojo-theme-preview&id=5377b431-d8a8-431b-a711-50c10a141528');
	});

	it('Exists', () => {

		cy.on('uncaught:exception', () => false);

		cy.wait(1000);

		cy.contains('.theme-name', 'Highend Ultimate Multipurpose WordPress Theme');
		cy.get('iframe')
			.should('have.attr', 'src')
			.and(
				'equal',
				'https://hb-themes.com/themes/highend/?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_admin&utm_content=preview_view_demo'
			);
	});

});
