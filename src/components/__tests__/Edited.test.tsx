import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Edited from '../Edited.tsx'

describe('Edited', () => {
    beforeEach(() => {
        render(<Edited value="2014-12-09T23:50:51.644000Z" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('edited')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('edited')).toHaveTextContent(
            'Edited: 10/12/2014 00:50:51'
        )
    })
})
