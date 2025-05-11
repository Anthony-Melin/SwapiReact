import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Gender from '../Gender.tsx'

describe('Gender', () => {
    beforeEach(() => {
        render(<Gender value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('gender')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('gender')).toHaveTextContent('Gender: VALUE')
    })
})
