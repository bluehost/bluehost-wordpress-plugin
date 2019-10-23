// <reference types="Cypress" />

import 'cypress-axe';

describe('Settings Page', function () {

    before(() => {
        cy.visit('/wp-admin/admin.php?page=bluehost#/settings');
        cy.injectAxe();
    });

    const fn = {
        validateCheckbox(selector = 'input[type="checkbox"]') {
            cy.get('input[type="checkbox"]').as('checkbox');
            cy.get('@checkbox').check();
            cy.get('@checkbox').should('have.prop', 'checked');
            cy.get('@checkbox').uncheck();
            cy.get('@checkbox').should('not.have.prop', 'checked');
        },
        validateSelect(selector, values) {
            values.forEach((value) => {
                cy.get(selector).select(value);
                cy.get(selector).should('have.value', value);
            });
        }
    };

    it('Exists', () => {
        cy.get('.settings-section').should('have.length', 5);
    });

    it('Is Accessible', () => {
        cy.checkA11y('.app-page');
    });

    it('Has an "Automatic Updates" section', () => {
        cy.get('.settings-section.automatic-updates').within(() => {
            cy.contains('h2', 'Automatic Updates');
        });
    });

    it('Automatic Updates: WordPress Core', () => {
        cy.get('.settings-section.automatic-updates .settings-control').first().within(() => {
            cy.contains('.label', 'WordPress Core');
            fn.validateCheckbox();
        });
    });

    it('Automatic Updates: Themes', () => {
        cy.get('.settings-section.automatic-updates .settings-control').eq(1).within(() => {
            cy.contains('.label', 'Themes');
            fn.validateCheckbox();
        });
    });

    it('Automatic Updates: Plugins', () => {
        cy.get('.settings-section.automatic-updates .settings-control').eq(2).within(() => {
            cy.contains('.label', 'Plugins');
            fn.validateCheckbox();
        });
    });

    it('Has a "Site Controls" section', () => {
        cy.get('.settings-section.site-controls').within(() => {
            cy.contains('h2', 'Site Controls');
        });
    });

    it('Site Controls: Coming Soon', () => {
        cy.get('.settings-section.site-controls .settings-control').first().within(() => {
            cy.contains('.label', 'Coming soon page active');
            fn.validateCheckbox();
        });
    });

    it('Site Controls: Single Sign-On', () => {
        cy.get('.settings-section.site-controls .settings-control').eq(1).within(() => {
            cy.contains('.label', 'Single Sign-on with Bluehost');
            fn.validateCheckbox();
        });
    });

    it('Has a "Comments" section', () => {
        cy.get('.settings-section.comments').within(() => {
            cy.contains('h2', 'Comments');
        });
    });

    it('Comments: Disable for old posts', () => {
        cy.get('.settings-section.comments .settings-control').first().within(() => {
            cy.contains('.label', 'Disable comments for old posts');
            fn.validateCheckbox();
        });
    });

    it('Comments: Close After x Days', () => {
        cy.get('.settings-section.comments .settings-control').eq(1).within(() => {
            cy.contains('.label', 'Close comments after');
            fn.validateSelect('select', ['10', '28']);
        });
    });

    it('Comments: Show x Per Page', () => {
        cy.get('.settings-section.comments .settings-control').eq(2).within(() => {
            cy.contains('.label', 'comments per page');
            fn.validateSelect('select', ['10', '30']);
        });
    });

    it('Has a "Content" section', () => {
        cy.get('.settings-section.content').within(() => {
            cy.contains('h2', 'Content');
        });
    });

    it('Content: Content Revisions', () => {
        cy.get('.settings-section.content .settings-control').eq(0).within(() => {
            cy.contains('.label', 'Content revisions');
            fn.validateSelect('select', ['10', '5']);
        });
    });

    it('Content: Empty Trash', () => {
        cy.get('.settings-section.content .settings-control').eq(1).within(() => {
            cy.contains('.label', 'Empty my trash every');
            fn.validateSelect('select', ['2', '4']);
        });
    });

    it('Has a "Performance" section', () => {
        cy.get('.settings-section.performance').within(() => {
            cy.contains('h2', 'Performance');
            cy.contains('h3', 'Caching');
        });
    });

    it('Performance: Caching Toggle', () => {
        cy.get('.settings-section.performance .onoffswitch').within(() => {
            fn.validateCheckbox();
        });
    });

    it('Performance: Caching Level', () => {
        cy.get('.settings-section.performance').within(() => {
            cy.contains('h4', 'Caching Level');
            cy.get('.cache-level .row').eq(0).within(() => {
                cy.contains('label', 'Assets Only');
            });
            cy.get('.cache-level .row').eq(1).within(() => {
                cy.contains('label', 'Assets & Web Pages');
            });
            cy.get('.cache-level .row').eq(2).within(() => {
                cy.contains('label', 'Assets & Web Pages - Extended');
            });
            cy.get('input[name="cache-level"]').first().check();
            cy.get('input[name="cache-level"]').first().should('be.checked');
            cy.get('input[name="cache-level"]').eq(1).check();
            cy.get('input[name="cache-level"]').eq(1).should('be.checked');
            cy.get('input[name="cache-level"]').eq(2).check();
            cy.get('input[name="cache-level"]').eq(2).should('be.checked');
        });
    });

    it('Performance: Clear Specific URLs', () => {
        cy.get('.settings-section.performance button').first().within(() => {
            cy.contains('Clear specific URLs');
        });
    });

    it('Performance: Clear Everything', () => {
        cy.get('.settings-section.performance button').eq(1).within(() => {
            cy.contains('Clear Everything');
        });
    });

});