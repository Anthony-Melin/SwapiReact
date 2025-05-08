import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Height from '../Height.tsx'

describe('Height', () => {
    beforeEach(() => {
        render(<Height value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('height')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('height')).toHaveTextContent(
            'Height: VALUE'
        )
    })
})
