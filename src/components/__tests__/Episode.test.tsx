import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Episode from '../Episode.tsx'

describe('Episode', () => {
    beforeEach(() => {
        render(<Episode value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('episode')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('episode')).toHaveTextContent(
            'Episode: VALUE'
        )
    })
})
