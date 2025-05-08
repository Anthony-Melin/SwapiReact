import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomeWorld from '../HomeWorld.tsx'

describe('HomeWorld', () => {
    beforeEach(() => {
        render(<HomeWorld value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('homeworld')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('homeworld')).toHaveTextContent(
            'Home world: VALUE'
        )
    })
})
