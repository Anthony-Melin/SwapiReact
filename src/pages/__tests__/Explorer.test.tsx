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
        it.for([
            '/section1?page=3',
            '/section1?page=-3',
            '/section1?page=foo',
            '/section2?page=foo',
        ])(`url %s`, async (url) => {
            renderExplorer(url)
            expect(await screen.findByTestId('error')).toBeVisible()
        })
    })
})
