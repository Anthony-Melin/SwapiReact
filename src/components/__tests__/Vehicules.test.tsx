import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Vehicules from '../Vehicules.tsx'

describe('Vehicules', () => {
    describe('with empty list', () => {
        beforeEach(() => {
            render(<Vehicules values={[]} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('vehicules')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('vehicules')).toHaveTextContent('Vehicules')
        })

        it('should have empty list label', () => {
            expect(screen.getByTestId('vehicules-empty')).toHaveTextContent('No vehicules linked')
        })
    })

    describe('with filled list', () => {
        beforeEach(() => {
            render(<Vehicules values={['VALUE_1', 'VALUE_2']} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('vehicules')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('vehicules')).toHaveTextContent('Vehicules')
        })

        it('should contains elements', () => {
            expect(screen.getByTestId('vehicules-0')).toHaveTextContent('VALUE_1')
            expect(screen.getByTestId('vehicules-1')).toHaveTextContent('VALUE_2')
        })
    })
})
