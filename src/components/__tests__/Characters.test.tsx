import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Characters from '../Characters.tsx'

describe('Characters', () => {
    describe('with empty list', () => {
        beforeEach(() => {
            render(<Characters values={[]} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('characters')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('characters')).toHaveTextContent('Characters')
        })

        it('should have empty list label', () => {
            expect(screen.getByTestId('characters-empty')).toHaveTextContent('No characters linked')
        })
    })

    describe('with filled list', () => {
        beforeEach(() => {
            render(<Characters values={['VALUE_1', 'VALUE_2']} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('characters')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('characters')).toHaveTextContent('Characters')
        })

        it('should contains elements', () => {
            expect(screen.getByTestId('characters-0')).toHaveTextContent('VALUE_1')
            expect(screen.getByTestId('characters-1')).toHaveTextContent('VALUE_2')
        })
    })
})
