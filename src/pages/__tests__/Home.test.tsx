import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import Home from '@pages/Home.tsx'
import { SectionContext } from '@hooks/useSections.tsx'

describe('Home', () => {
    const Stub = createRoutesStub([
        {
            path: '/',
            Component: Home,
            HydrateFallback: () => <div data-testid="fallback" />,
            ErrorBoundary: () => <div data-testid="error" />,
        },
    ])

    it('should render', async () => {
        render(
            <SectionContext
                value={{
                    'section 1': '/api/section1',
                    'section 2': '/api/section2',
                }}
            >
                <Stub initialEntries={['/']} />
            </SectionContext>
        )
        expect(await screen.findByTestId('home-page')).toBeVisible()
        expect(await screen.findByTestId('to-explorer')).toHaveAttribute(
            'href',
            '/section1'
        )
    })
})
