import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import ReleaseDate from '../ReleaseDate.tsx'

describe('ReleaseDate', () => {
    beforeEach(() => {
        render(<ReleaseDate value="VALUE" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('releasedate')).toMatchSnapshot()
    })

    it('should have text', () => {
        expect(screen.getByTestId('releasedate')).toHaveTextContent(
            'Release date: VALUE'
        )
    })
})
