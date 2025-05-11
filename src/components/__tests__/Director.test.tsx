import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Director from '../Director.tsx'

describe('Director', () => {
    beforeEach(() => {
        render(<Director value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('director')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('director')).toHaveTextContent(
            'Director: VALUE'
        )
    })
})
