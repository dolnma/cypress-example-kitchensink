/// <reference types="cypress" />

context('Navigation', () => {
    beforeEach(() => {
        cy.visit('https://interface-pro-ustrednu-217-sysapi-log-rebased.vader.synetech.cz/')
        // cy.visit('http://localhost:8000/')
    })

    it('test stránky', () => {
        cy.get('.menu__label').contains('Home').click()
        cy.wait(1000)
        cy.get('.layout__inner-h1').should('contain', 'Home')
        cy.screenshot()
    })
    it('test stránky', () => {
        cy.get('.menu__label').contains('Sections').click()
        cy.wait(1000)
        cy.get('.layout__inner-h1').should('contain', 'Sections')
        cy.screenshot()
    })
    it('test stránky', () => {
        cy.get('.menu__label').contains('Users').click()
        cy.wait(1000)
        cy.get('.layout__inner-h1').should('contain', 'Users')
        cy.screenshot()
    })
    it('test stránky', () => {
        cy.get('.menu__label').contains('Devices').click()
        cy.wait(1000)
        cy.get('.layout__inner-h1').should('contain', 'Devices')
        cy.screenshot()
    })
    it('test stránky', () => {
        cy.get('.menu__label').contains('Events').click()
        cy.wait(1000)
        cy.get('.layout__inner-h1').should('contain', 'Events')
        cy.screenshot()
    })
    it('test stránky', () => {
        cy.get('.menu__label').contains('Sysapi Log').click()
        cy.wait(1000)
        cy.get('.layout__inner-h1').should('contain', 'Sysapi Log')
        cy.screenshot()
    })

})
