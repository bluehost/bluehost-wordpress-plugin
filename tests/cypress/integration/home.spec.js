// <reference types="Cypress" />

import 'cypress-axe';

describe('Home Page', function () {

    before(() => {
        cy.visit('/wp-admin/admin.php?page=bluehost#/home');
        cy.injectAxe();
    });

    it('Exists', () => {
        cy.contains('.welcome-section', 'Welcome to your WordPress site!');
    });

    it('Is Accessible', () => {
        cy.checkA11y('.app-page');
    });

    it('Has section "Content"', () => {
        cy.get('.home-section.content').contains('h2', 'Content');
    });

    it('Validate "Block Posts" in "Content" section', () => {

        cy.get('.home-section.content').within(() => {

            cy.contains('h3', 'Blog Posts')
                .closest('.bluehost-home-section-row')
                .within(() => {
                    cy.contains('p', 'Add blog posts or organize existing pages.');

                    cy.contains('a.is-link', 'Manage Categories');
                    cy.get('a.is-link')
                        .should('have.attr', 'href')
                        .and('include', '/wp-admin/edit-tags.php?taxonomy=category');

                    cy.contains('a.is-default', 'New Post');
                    cy.get('a.is-default')
                        .should('have.attr', 'href')
                        .and('include', '/wp-admin/post-new.php');
                });

        });

    });

    it('Validate "Pages" in "Content" section', () => {

        cy.get('.home-section.content').within(() => {

            cy.contains('h3', 'Pages')
                .closest('.bluehost-home-section-row')
                .within(() => {
                    cy.contains('p', 'Add fresh pages to your website.');

                    cy.contains('a.is-default', 'New Page');
                    cy.get('a.is-default')
                        .should('have.attr', 'href')
                        .and('include', '/wp-admin/post-new.php?post_type=page');
                });

        });

    });

    it('Validate "Navigation Menus" in "Content" section', () => {

        cy.get('.home-section.content').within(() => {

            cy.contains('h3', 'Navigation Menus')
                .closest('.bluehost-home-section-row')
                .within(() => {
                    cy.contains('p', 'Adjust or edit your site\'s navigation menus.');

                    cy.contains('a.is-default', 'Manage Menus');
                    cy.get('a.is-default')
                        .should('have.attr', 'href')
                        .and('include', '/wp-admin/customize.php?autofocus[panel]=nav_menus');
                });

        });

    });

    it('Has section "Design & Build"', () => {
        cy.get('.home-section.design').contains('h2', 'Design & Build');
    });

    it('Validate "Customizer" in "Design & Build" section', () => {

        cy.get('.home-section.design').within(() => {

            cy.contains('h3', 'Customizer')
                .closest('.bluehost-home-section-row')
                .within(() => {
                    cy.contains('p', 'Make edits and see changes before you update.');

                    cy.contains('a.is-default', 'Customize Theme');
                    cy.get('a.is-default')
                        .should('have.attr', 'href')
                        .and('include', '/wp-admin/customize.php');
                });

        });

    });

    it('Validate "WordPress Themes" in "Design & Build" section', () => {

        cy.get('.home-section.design').within(() => {

            cy.contains('h3', 'WordPress Themes')
                .closest('.bluehost-home-section-row')
                .within(() => {
                    cy.contains('p', 'Browse themes to find one that inspires you!');

                    cy.contains('a.is-link', 'Free Themes');
                    cy.get('a.is-link')
                        .should('have.attr', 'href')
                        .and('include', '/wp-admin/themes.php');

                    cy.contains('a.is-default', 'Premium Themes');
                    cy.get('a.is-default')
                        .should('have.attr', 'href')
                        .and('include', '/wp-admin/admin.php?page=bluehost#/marketplace/themes');
                });

        });

    });

    it('Has section "Performance"', () => {
        cy.get('.home-section.performance').contains('h2', 'Performance');
    });

    it('Validate "Page Cache" in "Performance" section', () => {

        cy.get('.home-section.performance').within(() => {

            cy.contains('h3', 'Page Cache')
                .closest('.bluehost-home-section-row')
                .within(() => {
                    cy.contains('p', "Configure your caching to give you the best performance for your site’s needs");

                    cy.contains('a.is-default', 'Configure Caching');
                    cy.get('a.is-default')
                        .should('have.attr', 'href')
                        .and('include', '/wp-admin/admin.php?page=bluehost#/settings');
                });

        });

    });

    it('Has section "Hosting"', () => {
        cy.get('.home-section.hosting').contains('h2', 'Hosting');
    });

    it('Validate "Manage My Sites" in "Hosting" section', () => {

        cy.get('.home-section.hosting').within(() => {

            cy.contains('h3', 'Manage My Sites')
                .closest('.bluehost-home-section-row')
                .within(() => {
                    cy.contains('p', 'Manage your site from Bluehost\'s control panel. You can create backups, set security, and improve performance.');

                    cy.contains('a.is-default', 'Manage');
                    cy.get('a.is-default')
                        .should('have.attr', 'href')
                        .and('include', 'https://my.bluehost.com/hosting/app?lil=1#/sites');
                });

        });

    });

    it('Validate "Email" in "Hosting" section', () => {

        cy.get('.home-section.hosting').within(() => {

            cy.contains('h3', 'Email')
                .closest('.bluehost-home-section-row')
                .within(() => {
                    cy.contains('p', 'Create email accounts, compose, send, and receive your email from your Bluehost control panel.');

                    cy.contains('a.is-default', 'Manage');
                    cy.get('a.is-default')
                        .should('have.attr', 'href')
                        .and('include', 'https://my.bluehost.com/hosting/app?lil=1#/email-office');
                });

        });

    });

    it('Validate "Domains" in "Hosting" section', () => {

        cy.get('.home-section.hosting').within(() => {

            cy.contains('h3', 'Domains')
                .closest('.bluehost-home-section-row')
                .within(() => {
                    cy.contains('p', 'Find a new domain and assign it to your site or start a new site with a fresh domain.');

                    cy.contains('a.is-default', 'Find a Domain');
                    cy.get('a.is-default')
                        .should('have.attr', 'href')
                        .and('include', 'https://my.bluehost.com/hosting/app?lil=1#/domains');
                });

        });

    });

    it('Validate "Help" in "Hosting" section', () => {

        cy.get('.home-section.hosting').within(() => {

            cy.contains('h3', 'Help')
                .closest('.bluehost-home-section-row')
                .within(() => {
                    cy.contains('p', "Get help from Bluehost’s U.S.-based award-winning support team. It’s available 24/7 through phone and chat.");

                    cy.contains('a.is-default', 'Help Me');
                    cy.get('a.is-default')
                        .should('have.attr', 'href')
                        .and('include', 'https://my.bluehost.com/hosting/help');
                });

        });

    });

});