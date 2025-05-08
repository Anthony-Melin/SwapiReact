import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Mass from '../Mass.tsx'

describe('Mass', () => {
    beforeEach(() => {
        render(<Mass value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('mass')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('mass')).toHaveTextContent(
            'Mass: VALUE'
        )
    })
})
