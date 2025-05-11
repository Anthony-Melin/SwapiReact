import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import LabelValue from '../LabelValue.tsx'

describe('LabelValue', () => {
    beforeEach(() => {
        render(<LabelValue label="LABEL" value="VALUE" testid="testid" />)
    })

    it('should match snapshot', () => {
        expect(screen.getByTestId('testid')).toMatchSnapshot()
    })

    it('should render text', () => {
        expect(screen.getByTestId('testid')).toHaveTextContent('LABEL: VALUE')
    })
})
