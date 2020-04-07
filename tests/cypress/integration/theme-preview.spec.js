// <reference types="Cypress" />

describe('Theme Preview Page', function () {

	before(() => {
		cy.server();
		cy.visit({
			url: 'wp-admin/admin.php?page=mojo-theme-preview&id=5377b431-d8a8-431b-a711-50c10a141528',
			onBeforeLoad(win) {
				// See https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing-spying__window-fetch#readme
				delete win.fetch;
			}
		});
	});

	it('Exists', () => {
		cy.contains('.theme-name', 'Highend Ultimate Multi-Purpose WordPress Theme');
		cy.get('iframe')
			.should('have.attr', 'src')
			.and(
				'equal',
				'https://hb-themes.com/themes/highend/?utm_source=mojo_wp_plugin&utm_campaign=mojo_wp_plugin&utm_medium=plugin_admin&utm_content=preview_view_demo'
			);
	});

});
