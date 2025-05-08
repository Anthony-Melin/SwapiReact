import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import BirthYear from '../BirthYear.tsx'

describe('BirthYear', () => {
    beforeEach(() => {
        render(<BirthYear value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('birthyear')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('birthyear')).toHaveTextContent(
            'Birth year: VALUE'
        )
    })
})
