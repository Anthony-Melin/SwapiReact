import { beforeEach, describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from './App'

describe('App', () => {
    beforeEach(async () => {
        await act(async () => {
            render(<App />)
        })
    })

    it('should match snapshot', () => {
        expect(document.body).toMatchSnapshot()
    })

    it('has a counter button', async () => {
        const button = await screen.findByText('count is 0')
        expect(button).toBeInTheDocument()

        await act(() => userEvent.click(button))
        expect(button).toHaveTextContent('count is 1')

        await act(() => userEvent.click(button))
        expect(button).toHaveTextContent('count is 2')
    })

    it('load user', async () => {
        const textElement = await screen.findByText('You are John Maverick')
        expect(textElement).toBeInTheDocument()
    })
})
