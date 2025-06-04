import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import LabelValue from '../LabelValue.tsx'

describe('LabelValue', () => {
    it('should match snapshot', () => {
        render(<LabelValue label="LABEL" value="VALUE" testid="testid" />)
        expect(screen.getByTestId('testid')).toMatchSnapshot()
    })

    it('should render text', () => {
        render(<LabelValue label="LABEL" value="VALUE" testid="testid" />)
        expect(screen.getByTestId('testid')).toHaveTextContent('LABEL: VALUE')
    })

    it('should render remaped value', () => {
        render(
            <LabelValue
                label="LABEL"
                value="VALUE"
                remap={{ VALUE: 'REMAP_VALUE' }}
                testid="testid"
            />
        )
        expect(screen.getByTestId('testid')).toHaveTextContent(
            'LABEL: REMAP_VALUE'
        )
    })
})
