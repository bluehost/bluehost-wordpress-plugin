// <reference types="Cypress" />

describe('Dashboard Widget', function () {

	before(() => {
		cy.visit('/wp-admin/index.php');
		cy.injectAxe();
	});

	it('Exists', () => {
		cy
			.get('#bluehost-widget-container')
			.scrollIntoView()
			.should('be.visible');
	});

	it('Is Accessible', () => {
		cy.wait(1500);
		cy.checkA11y('#bluehost-widget-container .inside');
	});

    it('Has Widget Title', () => {
		cy.get('#bluehost-widget-container .inside h3')
            .scrollIntoView()
            .should('be.visible')
            .should('have.text', 'Latest from the Bluehost Blog');
	});

    // TODO: fix the endpoint here and then turn the test back on
    it.skip('Has Bluehost Blog Posts', () => {
        // show six line items
        cy.get('#bluehost-widget-container .blog-posts ul > li')
            .should('have.length', 6)
            .should('be.visible')

        // last line item should say "See More"
        cy.get('#bluehost-widget-container .blog-posts ul > li').last()
            .should('have.text', 'See More');

        // check each anchor isn't undefined, points to bluehost.com and has utm params
        cy.get('#bluehost-widget-container .blog-posts ul > li > a').each( $a => {
            const message = $a.text();
            expect($a, message).to.have.attr('href')
                .and.to.include('bluehost.com/blog')
                .and.to.include('utm_medium=bluehost_plugin').and.to.not.eq('undefined');
        })   
    });

    it('Has Footer Links', () => {
        // check each footer link isn't undefined
        cy.get('#bluehost-widget-container .footer a').should('be.visible').each(($a, i) => {
            const message = $a.text();
            expect($a, message)
                .and.to.have.attr('href')
                .and.to.not.eq('undefined');
            if(i > 0) { // if not help link, make sure
                expect($a, message).to.have.attr('href').and.to.include('utm_medium=bluehost_plugin');
            }
        })
    });

});
