import React from 'react'
import ReactDOM from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'
import './index.css'

const enableMocking = async () => {
    if (import.meta.env.DEV) {
        const { worker } = await import('./mocks/browser')
        return worker.start()
    }
    return
}

enableMocking().then(() => {
    ReactDOM.hydrateRoot(
        document,
        <React.StrictMode>
            <HydratedRouter />
        </React.StrictMode>
    )
})
