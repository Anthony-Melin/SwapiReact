import { describe, expect, it } from 'vitest'
import { createRoutesStub } from 'react-router'
import { render, screen } from '@testing-library/react'
import Navigation from '../Navigation.tsx'
import { SectionContext } from '@hooks/useSections.tsx'

describe('Description', () => {
    const Stub = createRoutesStub([
        {
            index: true,
            Component: Navigation,
            HydrateFallback: () => <div data-testid="fallback" />,
            ErrorBoundary: () => <div data-testid="error" />,
        },
    ])

    it.skip('should render navigation buttons', async () => {
        render(<Stub />)

        let element
        element = await screen.findByTestId('section-0')
        expect(element).toHaveTextContent('people')
        expect(element).toHaveAttribute('href', '/people')

        element = await screen.findByTestId('section-1')
        expect(element).toHaveTextContent('films')
        expect(element).toHaveAttribute('href', '/films')

        element = await screen.findByTestId('section-2')
        expect(element).toHaveTextContent('planets')
        expect(element).toHaveAttribute('href', '/planets')

        element = await screen.findByTestId('section-3')
        expect(element).toHaveTextContent('species')
        expect(element).toHaveAttribute('href', '/species')

        element = await screen.findByTestId('section-4')
        expect(element).toHaveTextContent('starships')
        expect(element).toHaveAttribute('href', '/starships')

        element = await screen.findByTestId('section-5')
        expect(element).toHaveTextContent('vehicles')
        expect(element).toHaveAttribute('href', '/vehicles')
    })

    it('should render navigation buttons', async () => {
        render(
            <SectionContext
                value={{
                    'section 1': '/api/section1',
                    'section 2': '/api/section2',
                }}
            >
                <Stub />
            </SectionContext>
        )

        let element
        element = await screen.findByTestId('section-0')
        expect(element).toHaveTextContent('section 1')
        expect(element).toHaveAttribute('href', '/section1')

        element = await screen.findByTestId('section-1')
        expect(element).toHaveTextContent('section 2')
        expect(element).toHaveAttribute('href', '/section2')
    })
})
