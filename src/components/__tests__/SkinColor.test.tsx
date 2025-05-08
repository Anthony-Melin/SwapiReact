import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import SkinColor from '../SkinColor.tsx'

describe('SkinColor', () => {
    beforeEach(() => {
        render(<SkinColor value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('skincolor')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('skincolor')).toHaveTextContent(
            'Skin color: VALUE'
        )
    })
})
