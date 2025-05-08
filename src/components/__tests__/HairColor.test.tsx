import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import HairColor from '../HairColor.tsx'

describe('HairColor', () => {
    beforeEach(() => {
        render(<HairColor value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('haircolor')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('haircolor')).toHaveTextContent(
            'Hair color: VALUE'
        )
    })
})
