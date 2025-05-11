import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Vehicles from '../Vehicles.tsx'

describe('Vehicles', () => {
    describe('with empty list', () => {
        beforeEach(() => {
            render(<Vehicles values={[]} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('vehicles')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('vehicles')).toHaveTextContent('Vehicles')
        })

        it('should have empty list label', () => {
            expect(screen.getByTestId('vehicles-empty')).toHaveTextContent('No vehicles linked')
        })
    })

    describe('with filled list', () => {
        beforeEach(() => {
            render(<Vehicles values={['VALUE_1', 'VALUE_2']} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('vehicles')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('vehicles')).toHaveTextContent('Vehicles')
        })

        it('should contains elements', () => {
            expect(screen.getByTestId('vehicles-0')).toHaveTextContent('VALUE_1')
            expect(screen.getByTestId('vehicles-1')).toHaveTextContent('VALUE_2')
        })
    })
})
