describe('home page', () => {
    it('navigate to explorer', () => {
        cy.visit('/')
        cy.get('[data-testid="home-page"]').should('be.visible')
        cy.get('[data-testid="crawl-content"]').scrollTo('bottom')
        cy.get('[data-testid="to-explorer"]').should('be.visible')
    })
})
