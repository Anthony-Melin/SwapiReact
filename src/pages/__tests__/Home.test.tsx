import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRoutesStub } from 'react-router'
import Home from '@pages/Home.tsx'

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
        render(<Stub initialEntries={['/']} />)
        expect(await screen.findByTestId('home-page')).toBeVisible()
        expect(await screen.findByTestId('to-explorer')).toHaveAttribute(
            'href',
            '/people'
        )
    })
})
