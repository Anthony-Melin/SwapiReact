import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Films from '../Films.tsx'

describe('Films', () => {
    describe('with empty list', () => {
        beforeEach(() => {
            render(<Films values={[]} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('films')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('films')).toHaveTextContent('Films')
        })

        it('should have empty list label', () => {
            expect(screen.getByTestId('films-empty')).toHaveTextContent('No films linked')
        })
    })

    describe('with filled list', () => {
        beforeEach(() => {
            render(<Films values={['VALUE_1', 'VALUE_2']} />)
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('films')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('films')).toHaveTextContent('Films')
        })

        it('should contains elements', () => {
            expect(screen.getByTestId('films-0')).toHaveTextContent('VALUE_1')
            expect(screen.getByTestId('films-1')).toHaveTextContent('VALUE_2')
        })
    })
})
