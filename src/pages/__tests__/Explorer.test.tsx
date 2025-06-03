import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import Explorer, { clientLoader } from '@pages/Explorer.tsx'

describe('Explorer', () => {
    const Stub = createRoutesStub([
        {
            path: '/:section',
            Component: Explorer,
            loader: clientLoader,
            HydrateFallback: () => <div data-testid="fallback" />,
            ErrorBoundary: () => <div data-testid="error" />,
        },
    ])

    const renderExplorer = (sufixUrl: string) => {
        render(<Stub initialEntries={[sufixUrl]} />)
    }

    const expectLink = async (testid: string, href: string, label: string) => {
        const element = await screen.findByTestId(testid)
        expect(element).toHaveAttribute('href', href)
        expect(element).toHaveTextContent(label)
    }

    describe('people section - page 1', () => {
        it.skip.for(['/people', '/people?page=1'])(`url %s`, async (url) => {
            renderExplorer(url)

            expect(
                await screen.findByTestId('section-title')
            ).toHaveTextContent('people')
            expect(
                await screen.findByTestId('section-count')
            ).toHaveTextContent('Results: 30')
            expect(screen.queryByTestId('page-prev')).toBeNull()
            expect(await screen.findByTestId('page-next')).toHaveAttribute(
                'href',
                '/people/?page=2'
            )

            expect(await screen.findAllByTestId(/item-\d/)).toHaveLength(10)
            await expectLink('item-0', '/people/1', 'Luke Skywalker')
            await expectLink('item-1', '/people/2', 'C-3PO')
            await expectLink('item-2', '/people/3', 'R2-D2')
            await expectLink('item-3', '/people/4', 'Darth Vader')
            await expectLink('item-4', '/people/5', 'Leia Organa')
            await expectLink('item-5', '/people/6', 'Owen Lars')
            await expectLink('item-6', '/people/7', 'Beru Whitesun lars')
            await expectLink('item-7', '/people/8', 'R5-D4')
            await expectLink('item-8', '/people/9', 'Biggs Darklighter')
            await expectLink('item-9', '/people/10', 'Obi-Wan Kenobi')

            expect(await screen.findByTestId('explorer-page')).toMatchSnapshot()
        })
    })

    it.skip('people section - page 2', async () => {
        renderExplorer('/people?page=2')

        expect(await screen.findByTestId('section-title')).toHaveTextContent(
            'people'
        )
        expect(await screen.findByTestId('section-count')).toHaveTextContent(
            'Results: 30'
        )
        expect(await screen.findByTestId('page-prev')).toHaveAttribute(
            'href',
            '/people/?page=1'
        )
        expect(await screen.findByTestId('page-next')).toHaveAttribute(
            'href',
            '/people/?page=3'
        )

        expect(await screen.findAllByTestId(/item-\d/)).toHaveLength(10)
        await expectLink('item-0', '/people/11', 'Anakin Skywalker')
        await expectLink('item-1', '/people/12', 'Wilhuff Tarkin')
        await expectLink('item-2', '/people/13', 'Chewbacca')
        await expectLink('item-3', '/people/14', 'Han Solo')
        await expectLink('item-4', '/people/15', 'Greedo')
        await expectLink('item-5', '/people/16', 'Jabba Desilijic Tiure')
        await expectLink('item-6', '/people/18', 'Wedge Antilles')
        await expectLink('item-7', '/people/19', 'Jek Tono Porkins')
        await expectLink('item-8', '/people/20', 'Yoda')
        await expectLink('item-9', '/people/21', 'Palpatine')

        expect(await screen.findByTestId('explorer-page')).toMatchSnapshot()
    })

    it.skip('people section - page 3', async () => {
        renderExplorer('/people?page=3')

        expect(await screen.findByTestId('section-title')).toHaveTextContent(
            'people'
        )
        expect(await screen.findByTestId('section-count')).toHaveTextContent(
            'Results: 30'
        )
        expect(await screen.findByTestId('page-prev')).toHaveAttribute(
            'href',
            '/people/?page=2'
        )
        expect(screen.queryByTestId('page-next')).toBeNull()

        expect(await screen.findAllByTestId(/item-\d/)).toHaveLength(10)
        await expectLink('item-0', '/people/22', 'Boba Fett')
        await expectLink('item-1', '/people/23', 'IG-88')
        await expectLink('item-2', '/people/24', 'Bossk')
        await expectLink('item-3', '/people/25', 'Lando Calrissian')
        await expectLink('item-4', '/people/26', 'Lobot')
        await expectLink('item-5', '/people/27', 'Ackbar')
        await expectLink('item-6', '/people/28', 'Mon Mothma')
        await expectLink('item-7', '/people/29', 'Arvel Crynyd')
        await expectLink('item-8', '/people/30', 'Wicket Systri Warrick')
        await expectLink('item-9', '/people/31', 'Nien Nunb')

        expect(await screen.findByTestId('explorer-page')).toMatchSnapshot()
    })

    describe('people section - unknown page', async () => {
        it.skip.for(['/people?page=4', '/people?page=-4', '/people?page=foo'])(
            `url %s`,
            async (url) => {
                renderExplorer(url)
                expect(await screen.findByTestId('error')).toBeVisible()
            }
        )
    })

    it.skip('films section - page 1', async () => {
        renderExplorer('/films')

        expect(await screen.findByTestId('section-title')).toHaveTextContent(
            'films'
        )
        expect(await screen.findByTestId('section-count')).toHaveTextContent(
            'Results: 6'
        )
        expect(screen.queryByTestId('page-prev')).toBeNull()
        expect(screen.queryByTestId('page-next')).toBeNull()

        expect(await screen.findAllByTestId(/item-\d/)).toHaveLength(6)
        await expectLink('item-0', '/films/1', 'A New Hope')
        await expectLink('item-1', '/films/2', 'The Empire Strikes Back')
        await expectLink('item-2', '/films/3', 'Return of the Jedi')
        await expectLink('item-3', '/films/4', 'The Phantom Menace')
        await expectLink('item-4', '/films/5', 'Attack of the Clones')
        await expectLink('item-5', '/films/6', 'Revenge of the Sith')

        expect(await screen.findByTestId('explorer-page')).toMatchSnapshot()
    })

    describe('section 1 - page 1', () => {
        it.for(['/section1', '/section1?page=1'])(`url %s`, async (url) => {
            renderExplorer(url)

            expect(
                await screen.findByTestId('section-title')
            ).toHaveTextContent('section1')
            expect(
                await screen.findByTestId('section-count')
            ).toHaveTextContent('Results: 4')
            expect(screen.queryByTestId('page-prev')).toBeNull()
            expect(await screen.findByTestId('page-next')).toHaveAttribute(
                'href',
                '/section1/?page=2'
            )

            expect(await screen.findAllByTestId(/item-\d/)).toHaveLength(2)
            await expectLink('item-0', '/section1/1', 'Item 1 of section 1')
            await expectLink('item-1', '/section1/2', 'Item 2 of section 1')

            expect(await screen.findByTestId('explorer-page')).toMatchSnapshot()
        })
    })

    it('section 1 - page 2', async () => {
        renderExplorer('/section1?page=2')

        expect(await screen.findByTestId('section-title')).toHaveTextContent(
            'section1'
        )
        expect(await screen.findByTestId('section-count')).toHaveTextContent(
            'Results: 4'
        )
        expect(await screen.findByTestId('page-prev')).toHaveAttribute(
            'href',
            '/section1/?page=1'
        )
        expect(screen.queryByTestId('page-next')).toBeNull()

        expect(await screen.findAllByTestId(/item-\d/)).toHaveLength(2)
        await expectLink('item-0', '/section1/3', 'Item 3 of section 1')
        await expectLink('item-1', '/section1/4', 'Item 4 of section 1')

        expect(await screen.findByTestId('explorer-page')).toMatchSnapshot()
    })

    describe('section - unknown page', async () => {
        it.for(['/section1?page=3', '/section1?page=-3', '/section1?page=foo', '/section2?page=foo'])(
            `url %s`,
            async (url) => {
                renderExplorer(url)
                expect(await screen.findByTestId('error')).toBeVisible()
            }
        )
    })
})
