import React from 'react'
import ReactDOM from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'
import { SectionContext } from '@hooks/useSections.tsx'
import getFetch from '@api/getFetch.ts'
import Root from '@api/root.types.ts'

const enableMocking = async () => {
    if (import.meta.env.DEV) {
        const { worker } = await import('./mocks/browser')
        return worker.start()
    }
    return
}

enableMocking().then(async () => {
    const root = await getFetch<Root>()
    ReactDOM.hydrateRoot(
        document,
        <React.StrictMode>
            <SectionContext value={root}>
                <HydratedRouter />
            </SectionContext>
        </React.StrictMode>
    )
})
