import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Producer from '../Producer.tsx'

describe('Producer', () => {
    beforeEach(() => {
        render(<Producer value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('producer')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('producer')).toHaveTextContent(
            'Producer: VALUE'
        )
    })
})
