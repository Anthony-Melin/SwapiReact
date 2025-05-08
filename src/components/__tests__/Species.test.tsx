import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Species from '../Species.tsx'

describe('Species', () => {
    describe('with empty list', () => {
        beforeEach(() => {
            render(<Species values={[]} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('species')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('species')).toHaveTextContent('Species')
        })

        it('should have empty list label', () => {
            expect(screen.getByTestId('species-empty')).toHaveTextContent('No species linked')
        })
    })

    describe('with filled list', () => {
        beforeEach(() => {
            render(<Species values={['VALUE_1', 'VALUE_2']} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('species')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('species')).toHaveTextContent('Species')
        })

        it('should contains elements', () => {
            expect(screen.getByTestId('species-0')).toHaveTextContent('VALUE_1')
            expect(screen.getByTestId('species-1')).toHaveTextContent('VALUE_2')
        })
    })
})
