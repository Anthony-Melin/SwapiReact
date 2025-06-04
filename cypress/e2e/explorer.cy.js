describe('explorer', () => {

    describe('is available', () => {
        [
            { url: '/films', title: 'film' },
            { url: '/people', title: 'people' },
            { url: '/species', title: 'species' },
            { url: '/starships', title: 'starships' },
            { url: '/vehicles', title: 'vehicles' },
            { url: '/planets', title: 'planets' },
        ].forEach(({ url, title }) => {
            it(`with url ${url}`, () => {
                cy.visit(url)
                cy.get('[data-testid="explorer-page"]')
                cy.get('[data-testid="section-title"]').contains(title)
            })
        })
    })

    describe('page of films', () => {
        ['/films', '/films?page=1'].forEach((url) => {
            describe(`url ${url}`, () => {
                beforeEach(() => {
                    cy.visit(url)
                })
                it('should render title', () => {
                    cy.get('[data-testid="section-title"]').contains('films')
                })
                it('should render count', () => {
                    cy.get('[data-testid="section-count"]').contains('Results: 6')
                })
                it('should not render page-prev', () => {
                    cy.get('[data-testid="page-prev"]').should('not.exist')
                })
                it('should not render page-next', () => {
                    cy.get('[data-testid="page-next"]').should('not.exist')
                })
                it('should render items', () => {
                    cy.get('[data-testid="item-0"]').contains('A New Hope')
                    cy.get('[data-testid="item-1"]').contains('The Empire Strikes Back')
                    cy.get('[data-testid="item-2"]').contains('Return of the Jedi')
                    cy.get('[data-testid="item-3"]').contains('The Phantom Menace')
                    cy.get('[data-testid="item-4"]').contains('Attack of the Clones')
                    cy.get('[data-testid="item-5"]').contains('Revenge of the Sith')
                })
            })
        })
    })

    describe('first page of species', () => {
        ['/species', '/species?page=1'].forEach((url) => {
            describe(`url ${url}`, () => {
                beforeEach(() => {
                    cy.visit(url)
                })
                it('should render title', () => {
                    cy.get('[data-testid="section-title"]').contains('species')
                })
                it('should render count', () => {
                    cy.get('[data-testid="section-count"]').contains('Results: 37')
                })
                it('should not render page-prev', () => {
                    cy.get('[data-testid="page-prev"]').should('not.exist')
                })
                it('should render page-next', () => {
                    cy.get('[data-testid="page-next"]').should('be.visible')
                })
            })
        })
    })

    describe('second page of species', () => {
        ['/species?page=2'].forEach((url) => {
            describe(`url ${url}`, () => {
                beforeEach(() => {
                    cy.visit(url)
                })
                it('should render title', () => {
                    cy.get('[data-testid="section-title"]').contains('species')
                })
                it('should render count', () => {
                    cy.get('[data-testid="section-count"]').contains('Results: 37')
                })
                it('should render page-prev', () => {
                    cy.get('[data-testid="page-prev"]').should('be.visible')
                })
                it('should not render page-next', () => {
                    cy.get('[data-testid="page-next"]').should('not.exist')
                })
            })
        })
    })
})
