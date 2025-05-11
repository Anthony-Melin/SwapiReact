import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Starships from '../Starships.tsx'

describe('Starships', () => {
    describe('with empty list', () => {
        beforeEach(() => {
            render(<Starships values={[]} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('starships')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('starships')).toHaveTextContent(
                'Starships'
            )
        })

        it('should have empty list label', () => {
            expect(screen.getByTestId('starships-empty')).toHaveTextContent(
                'No starships linked'
            )
        })
    })

    describe('with filled list', () => {
        beforeEach(() => {
            render(<Starships values={['VALUE_1', 'VALUE_2']} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('starships')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('starships')).toHaveTextContent(
                'Starships'
            )
        })

        it('should contains elements', () => {
            expect(screen.getByTestId('starships-0')).toHaveTextContent(
                'VALUE_1'
            )
            expect(screen.getByTestId('starships-1')).toHaveTextContent(
                'VALUE_2'
            )
        })
    })
})
