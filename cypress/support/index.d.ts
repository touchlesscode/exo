/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Assert the current URL
     * @param route
     * @example cy.assertRoute('/page-2')
     */
    assertRoute(route: string): Chainable<unknown>
  }
}
