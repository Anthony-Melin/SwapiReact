describe('home page', () => {
    it('render', () => {
        cy.visit('http://localhost:4173')
        cy.get('[id="home-page"]')
    })
})
