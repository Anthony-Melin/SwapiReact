describe('user navigate', () => {
    it('from home page to films', () => {
        cy.visit('/')
        cy.get('[data-testid="home-page"]').should('be.visible')
        cy.get('[data-testid="crawl-content"]').scrollTo('bottom')
        cy.get('[data-testid="to-explorer"]').click()
        cy.get('[data-testid="explorer-page"]').should('be.visible')
        cy.get('[data-testid="section-title"]').contains("films")
    })

    it('explore planets', () => {
        cy.visit('/planets')
        cy.get('[data-testid="explorer-page"]').should('be.visible')
        cy.get('[data-testid="section-title"]').contains("planets")
        cy.get('[data-testid="item-0"]').contains("Tatooine")
        cy.get('[data-testid="page-prev"]').should('not.exist')
        cy.get('[data-testid="page-next"]').click()

        cy.get('[data-testid="section-title"]').contains("planets")
        cy.get('[data-testid="item-0"]').contains("Mon Cala")
        cy.get('[data-testid="page-next"]').should('not.exist')
        cy.get('[data-testid="page-prev"]').click()

        cy.get('[data-testid="section-title"]').contains("planets")
        cy.get('[data-testid="item-0"]').contains("Tatooine")
    })

    it('explore films', () => {
        cy.visit('/films')
        cy.get('[data-testid="explorer-page"]').should('be.visible')
        cy.get('[data-testid="section-title"]').contains("films")
        cy.get('[data-testid="page-prev"]').should('not.exist')
        cy.get('[data-testid="page-next"]').should('not.exist')
    })

    it('get first people', () => {
        cy.visit('/people')
        cy.get('[data-testid="explorer-page"]').should('be.visible')
        cy.get('[data-testid="section-title"]').contains("people")
        cy.get('[data-testid="item-0"]').click()
        cy.get('[data-testid="description-title"]').contains("Luke Skywalker")
        cy.go('back')
        cy.get('[data-testid="section-title"]').contains("people")
    })
})
