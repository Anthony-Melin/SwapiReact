import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import EyeColor from '../EyeColor.tsx'

describe('EyeColor', () => {
    beforeEach(() => {
        render(<EyeColor value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('eyecolor')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('eyecolor')).toHaveTextContent(
            'Eye color: VALUE'
        )
    })
})
