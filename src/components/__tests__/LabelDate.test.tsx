import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import LabelDate from '../LabelDate.tsx'

describe('LabelDate', () => {
    beforeEach(() => {
        render(
            <LabelDate
                label="LABEL"
                value="2014-12-09T23:50:51.644000Z"
                testid="testid"
            />
        )
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('testid')).toMatchSnapshot()
    })

    it('should render text', () => {
        expect(screen.getByTestId('testid')).toHaveTextContent(
            'LABEL: 10/12/2014 00:50:51'
        )
    })
})
