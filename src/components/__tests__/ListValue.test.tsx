import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import ListValue from '../ListValue.tsx'

describe('ListValue', () => {
    describe('with empty list', () => {
        beforeEach(() => {
            render(
                <ListValue
                    title="TITLE"
                    item="ITEM"
                    values={[]}
                    testid="testid"
                />
            )
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('testid')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('testid-title')).toHaveTextContent(
                'TITLE'
            )
        })

        it('should have empty list label', () => {
            expect(screen.getByTestId('testid-empty')).toHaveTextContent(
                'No ITEM linked'
            )
        })
    })

    describe('with filled list', () => {
        beforeEach(() => {
            render(
                <ListValue
                    title="TITLE"
                    item="ITEM"
                    values={['VALUE_1', 'VALUE_2']}
                    testid="testid"
                />
            )
        })

        it('should match snapshot', () => {
            expect(screen.getByTestId('testid')).toMatchSnapshot()
        })

        it('should have a title', () => {
            expect(screen.getByTestId('testid-title')).toHaveTextContent(
                'TITLE'
            )
        })

        it('should contains elements', () => {
            expect(screen.getByTestId('testid-0')).toHaveTextContent('VALUE_1')
            expect(screen.getByTestId('testid-1')).toHaveTextContent('VALUE_2')
        })
    })
})
