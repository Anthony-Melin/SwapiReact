import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Created from '../Created.tsx'

describe('Created', () => {
    beforeEach(() => {
        render(<Created value="2014-12-09T23:50:51.644000Z" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('created')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('created')).toHaveTextContent(
            'Created: 10/12/2014 00:50:51'
        )
    })
})
